const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const MONGODB_URI = process.env.MONGODB_URI;

const users = [
  {
    firstName: "Alexander",
    lastName: "Vogel",
    email: "alex.v@exec.com",
    graduationYear: 2005,
    workDomain: "Finance",
    location: "Zurich, Switzerland",
    interests: ["Private Equity", "Asset Management", "Sailing"],
    bio: "Managing Director at a leading Swiss investment firm. Alumni Board Member.",
    profileImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&h=256&auto=format&fit=crop"
  },
  {
    firstName: "Sofia",
    lastName: "Patel",
    email: "sofia.p@tech.io",
    graduationYear: 2018,
    workDomain: "Technology",
    location: "San Francisco, CA",
    interests: ["Cloud Computing", "Machine Learning", "Yoga"],
    bio: "Lead Architect at a major cloud provider. Passionate about scalable infrastructure.",
    profileImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=256&h=256&auto=format&fit=crop"
  },
  {
    firstName: "Julian",
    lastName: "Brooks",
    email: "j.brooks@design.com",
    graduationYear: 2021,
    workDomain: "Arts & Media",
    location: "Brooklyn, NY",
    interests: ["Digital Storytelling", "UX Research", "Photography"],
    bio: "Creative lead exploring the intersection of digital media and urban anthropology.",
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&h=256&auto=format&fit=crop"
  },
  {
    firstName: "Dr. Li",
    lastName: "Wei",
    email: "li.wei@health.edu",
    graduationYear: 2010,
    workDomain: "Healthcare",
    location: "Singapore",
    interests: ["Telemedicine", "Public Health Policy", "Tennis"],
    bio: "Senior consultant at Singapore General Hospital. Researcher in health informatics.",
    profileImage: "https://images.unsplash.com/photo-1559839734-2b71f153678b?q=80&w=256&h=256&auto=format&fit=crop"
  },
  {
    firstName: "Catherine",
    lastName: "Middleton",
    email: "c.middleton@legal.uk",
    graduationYear: 1998,
    workDomain: "Legal",
    location: "London, UK",
    interests: ["International Law", "Human Rights", "Equestrian"],
    bio: "Partner at a Magic Circle law firm. 25 years of experience in cross-border litigation.",
    profileImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&h=256&auto=format&fit=crop"
  }
];

const events = [
  {
    title: "Global Leaders Summit 2024",
    date: "Nov 14, 2024",
    location: "London • Royal Hall",
    description: "A high-level gathering of alumni leading global institutions and industries.",
    category: "SUMMIT",
    capacity: 200,
    attendees: [],
    image: "/events/summit.png"
  },
  {
    title: "The Winter Gala & Giving Night",
    date: "Dec 02, 2024",
    location: "New York • Met Museum",
    description: "Celebrate the year's achievements and support our scholarship foundation.",
    category: "GALA",
    capacity: 500,
    attendees: [],
    image: "/events/gala.png"
  },
  {
    title: "Venture Pitch: Alumni Edition",
    date: "Jan 15, 2025",
    location: "San Francisco • Hub 71",
    description: "Watch the top 10 alumni-led startups pitch to world-class investors.",
    category: "PITCH",
    capacity: 150,
    attendees: [],
    image: "/events/pitch.png"
  }
];

async function seed() {
  try {
    const hashedPassword = await bcrypt.hash("password123", 10);
    const userDocs = users.map(u => ({ ...u, password: hashedPassword }));

    // Local
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);
    fs.writeFileSync(path.join(dataDir, "users.json"), JSON.stringify(userDocs, null, 2));
    fs.writeFileSync(path.join(dataDir, "events.json"), JSON.stringify(events, null, 2));

    if (MONGODB_URI) {
      await mongoose.connect(MONGODB_URI, {
        serverSelectionTimeoutMS: 15000,
        heartbeatFrequencyMS: 2000,
      });
      
      const User = mongoose.connection.collection('users');
      const Event = mongoose.connection.collection('events');

      await User.deleteMany({});
      await User.insertMany(userDocs);
      await Event.deleteMany({});
      await Event.insertMany(events);
      
      await mongoose.disconnect();
    }
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
