import mongoose from "mongoose";
import fs from "fs";
import path from "path";

const MONGODB_URI = process.env.MONGODB_URI;

// Mock database path
const MOCK_DB_PATH = path.join(process.cwd(), "data", "users.json");

/**
 * Global is used here to maintain a cached connection across hot reloads
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null, isMock: false };
}

async function connectToDatabase() {
  if (cached.conn) {
    return { conn: cached.conn, isMock: cached.isMock };
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000, // Timeout faster if no DB
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts)
      .then((mongoose) => {
        console.log("Connected to MongoDB successfully.");
        return { conn: mongoose, isMock: false };
      })
      .catch((err) => {
        console.warn("MongoDB connection failed. Switching to Local Demo Mode (JSON storage).");
        // Ensure data directory exists
        const dataDir = path.join(process.cwd(), "data");
        if (!fs.existsSync(dataDir)) {
          fs.mkdirSync(dataDir);
        }
        if (!fs.existsSync(MOCK_DB_PATH)) {
          fs.writeFileSync(MOCK_DB_PATH, JSON.stringify([]));
        }
        return { conn: null, isMock: true };
      });
  }
  
  const result = await cached.promise;
  cached.conn = result.conn;
  cached.isMock = result.isMock;

  return result;
}

export default connectToDatabase;

// Helper for Mock DB operations
export const mockDb = {
  getUsers: () => {
    if (!fs.existsSync(MOCK_DB_PATH)) return [];
    return JSON.parse(fs.readFileSync(MOCK_DB_PATH, "utf8"));
  },
  saveUsers: (users) => {
    fs.writeFileSync(MOCK_DB_PATH, JSON.stringify(users, null, 2));
  },
  getEvents: () => {
    const EVENT_DATA_PATH = path.join(process.cwd(), "data", "events.json");
    if (!fs.existsSync(EVENT_DATA_PATH)) return [];
    return JSON.parse(fs.readFileSync(EVENT_DATA_PATH, "utf8"));
  },
  saveEvents: (events) => {
    const EVENT_DATA_PATH = path.join(process.cwd(), "data", "events.json");
    fs.writeFileSync(EVENT_DATA_PATH, JSON.stringify(events, null, 2));
  }
};
