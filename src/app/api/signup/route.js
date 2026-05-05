import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectToDatabase, { mockDb } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req) {
  try {
    const { firstName, lastName, email, graduationYear, password } = await req.json();

    if (!firstName || !lastName || !email || !graduationYear || !password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const { isMock } = await connectToDatabase();

    if (isMock) {
      // Local Demo Mode logic
      const users = mockDb.getUsers();
      if (users.find(u => u.email === email)) {
        return NextResponse.json({ message: "User with this email already exists" }, { status: 409 });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = {
        _id: Date.now().toString(),
        firstName,
        lastName,
        email,
        graduationYear,
        password: hashedPassword,
        createdAt: new Date().toISOString()
      };

      users.push(newUser);
      mockDb.saveUsers(users);

      return NextResponse.json({ message: "User registered successfully (Demo Mode)" }, { status: 201 });
    }

    // Normal MongoDB logic
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "User with this email already exists" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      firstName,
      lastName,
      email,
      graduationYear,
      password: hashedPassword,
    });

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ message: "An error occurred during registration" }, { status: 500 });
  }
}
