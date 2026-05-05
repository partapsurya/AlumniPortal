import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectToDatabase, { mockDb } from "@/lib/mongodb";
import User from "@/models/User";

export async function GET(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
    }

    const { isMock } = await connectToDatabase();

    let userData = null;
    if (isMock) {
      const users = mockDb.getUsers();
      userData = users.find(u => u.email === session.user.email);
    } else {
      userData = await User.findOne({ email: session.user.email }).select("-password");
    }

    if (!userData) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(userData);
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
    }

    const { workDomain, interests, location, bio, profileImage } = await req.json();
    const { isMock } = await connectToDatabase();

    if (isMock) {
      const users = mockDb.getUsers();
      const userIndex = users.findIndex(u => u.email === session.user.email);
      if (userIndex === -1) return NextResponse.json({ message: "User not found" }, { status: 404 });

      users[userIndex] = { 
        ...users[userIndex], 
        workDomain: workDomain || "", 
        interests: interests || [], 
        location: location || "",
        bio: bio || "",
        profileImage: profileImage || ""
      };
      mockDb.saveUsers(users);
    } else {
      await User.findOneAndUpdate(
        { email: session.user.email },
        { workDomain, interests, location, bio, profileImage },
        { new: true }
      );
    }

    return NextResponse.json({ message: "Profile updated successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
