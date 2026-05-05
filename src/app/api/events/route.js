import { NextResponse } from "next/server";
export const dynamic = 'force-dynamic';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectToDatabase, { mockDb } from "@/lib/mongodb";
import Event from "@/models/Event";

export async function GET(req) {
  try {
    const { isMock } = await connectToDatabase();
    let events = [];
    if (isMock) {
      events = mockDb.getEvents();
    } else {
      events = await Event.find().sort({ date: 1 });
    }
    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "Please log in to reserve a seat" }, { status: 401 });
    }

    const { eventId } = await req.json();
    if (!eventId) return NextResponse.json({ message: "Event ID is required" }, { status: 400 });

    const { isMock } = await connectToDatabase();

    if (isMock) {
      const events = mockDb.getEvents();
      // Search by both id and _id in case of mixed data
      const eventIndex = events.findIndex(e => (e.id && e.id === eventId) || (e._id && e._id === eventId));
      
      if (eventIndex === -1) return NextResponse.json({ message: "Event not found" }, { status: 404 });

      const event = events[eventIndex];
      if (event.attendees.includes(session.user.email)) {
        return NextResponse.json({ message: "You have already reserved a seat for this event" }, { status: 400 });
      }

      if (event.attendees.length >= event.capacity) {
        return NextResponse.json({ message: "Event is fully booked" }, { status: 400 });
      }

      event.attendees.push(session.user.email);
      mockDb.saveEvents(events);
    } else {
      // In Atlas mode, try finding by MongoDB _id first, then by the 'id' field
      let event = await Event.findById(eventId).catch(() => null);
      
      if (!event) {
        event = await Event.findOne({ id: eventId });
      }

      if (!event) return NextResponse.json({ message: "Event not found" }, { status: 404 });

      if (event.attendees.includes(session.user.email)) {
        return NextResponse.json({ message: "You have already reserved a seat for this event" }, { status: 400 });
      }

      if (event.attendees.length >= event.capacity) {
        return NextResponse.json({ message: "Event is fully booked" }, { status: 400 });
      }

      await Event.findByIdAndUpdate(event._id, {
        $push: { attendees: session.user.email }
      });
    }

    return NextResponse.json({ message: "Seat reserved successfully!" });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
