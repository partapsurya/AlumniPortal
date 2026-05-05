const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

const uri = "mongodb+srv://agupta:hqRPko6pNBuCgx1l@alumniportal.w665j8i.mongodb.net/?retryWrites=true&w=majority&appName=AlumniPortal";

const users = [
  {
    firstName: "Alexander",
    lastName: "Vogel",
    email: "alex.v@exec.com",
    graduationYear: 2005,
    workDomain: "Finance",
    location: "Zurich, Switzerland",
    interests: ["Private Equity", "Asset Management", "Sailing"],
    bio: "Managing Director at a leading Swiss investment firm.",
    profileImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&h=256&auto=format&fit=crop"
  },
  {
    firstName: "Sofia",
    lastName: "Patel",
    email: "sofia.p@tech.io",
    graduationYear: 2018,
    workDomain: "Technology",
    location: "San Francisco, CA",
    interests: ["Cloud Computing", "Machine Learning"],
    bio: "Lead Architect at a major cloud provider.",
    profileImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=256&h=256&auto=format&fit=crop"
  }
];

const events = [
  {
    title: "Global Leaders Summit 2024",
    date: "Nov 14, 2024",
    location: "London • Royal Hall",
    description: "A high-level gathering of alumni.",
    category: "SUMMIT",
    capacity: 200,
    attendees: [],
    image: "/events/summit.png"
  }
];

async function run() {
  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 30000,
    connectTimeoutMS: 30000,
  });

  try {
    console.log("Connecting to Atlas...");
    await client.connect();
    console.log("CONNECTED!");

    const db = client.db("alumni-portal");
    const hashedPassword = await bcrypt.hash("password123", 10);

    // Users
    console.log("Seeding users...");
    await db.collection("users").deleteMany({});
    await db.collection("users").insertMany(users.map(u => ({ ...u, password: hashedPassword })));
    
    // Events
    console.log("Seeding events...");
    await db.collection("events").deleteMany({});
    await db.collection("events").insertMany(events);

    console.log("DATABASE FULLY SEEDED IN ATLAS!");
  } catch (err) {
    console.error("FATAL ERROR:", err.message);
  } finally {
    await client.close();
  }
}

run();
