import { NextResponse } from "next/server";
import connectToDatabase, { mockDb } from "@/lib/mongodb";
import User from "@/models/User";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const domain = searchParams.get("domain");
    const year = searchParams.get("year");
    const search = searchParams.get("search");

    const { isMock } = await connectToDatabase();

    let users = [];
    if (isMock) {
      users = mockDb.getUsers();
      // Simple filtering for mock mode
      if (domain) users = users.filter(u => u.workDomain === domain);
      if (year) users = users.filter(u => u.graduationYear.toString() === year);
      if (search) {
        const query = search.toLowerCase();
        users = users.filter(u => 
          u.firstName.toLowerCase().includes(query) || 
          u.lastName.toLowerCase().includes(query) ||
          u.email.toLowerCase().includes(query)
        );
      }
    } else {
      let query = {};
      if (domain) query.workDomain = domain;
      if (year) query.graduationYear = year;
      if (search) {
        query.$or = [
          { firstName: { $regex: search, $options: "i" } },
          { lastName: { $regex: search, $options: "i" } },
        ];
      }
      users = await User.find(query).select("-password").sort({ createdAt: -1 });
    }

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
