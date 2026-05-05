const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');
// We use the full URI
const uri = "mongodb+srv://agupta:hqRPko6pNBuCgx1l@alumniportal.w665j8i.mongodb.net/alumni-portal?retryWrites=true&w=majority&appName=AlumniPortal";

async function run() {
  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 30000,
    connectTimeoutMS: 30000,
  });

  try {
    console.log("Connecting to Atlas...");
    await client.connect();
    console.log("CONNECTED TO ATLAS!");

    const db = client.db("alumni-portal");

    // Load data from local JSON files
    const usersPath = path.join(__dirname, '..', 'data', 'users.json');
    const eventsPath = path.join(__dirname, '..', 'data', 'events.json');

    const users = JSON.parse(fs.readFileSync(usersPath, 'utf8'));
    const events = JSON.parse(fs.readFileSync(eventsPath, 'utf8'));

    // Strip out the 'id' field to let MongoDB use its own '_id', or keep it for the app logic.
    // The app expects 'id' or '_id'. Let's keep it as is.
    
    // Clean up users (remove any existing _id to avoid collision if they were dumped from mongo)
    const cleanUsers = users.map(u => {
      const { _id, ...rest } = u;
      return rest;
    });

    const cleanEvents = events.map(e => {
      const { _id, ...rest } = e;
      return rest;
    });

    // Users
    console.log(`Seeding ${cleanUsers.length} users...`);
    await db.collection("users").deleteMany({});
    await db.collection("users").insertMany(cleanUsers);
    
    // Events
    console.log(`Seeding ${cleanEvents.length} events...`);
    await db.collection("events").deleteMany({});
    await db.collection("events").insertMany(cleanEvents);

    console.log("DATABASE FULLY SEEDED IN ATLAS!");
  } catch (err) {
    console.error("FATAL ERROR:", err.message);
  } finally {
    await client.close();
  }
}

run();
