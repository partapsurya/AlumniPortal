const mongoose = require('mongoose');

const uri = "mongodb+srv://agupta:hqRPko6pNBuCgx1l@alumniportal.w665j8i.mongodb.net/alumni-portal?retryWrites=true&w=majority&appName=AlumniPortal";

async function test() {
  console.log("Starting verbose connection test...");
  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 20000,
      family: 4, // Force IPv4 if possible, though Atlas supports both
    });
    console.log("CONNECTED TO ATLAS SUCCESSFULLY!");
    
    // Seed dummy data
    const User = mongoose.connection.collection('users');
    await User.insertOne({ firstName: "Connection", lastName: "Test", email: "test@success.com" });
    console.log("INSERTED TEST ROW SUCCESSFULLY!");
    
    await mongoose.disconnect();
  } catch (err) {
    console.error("DETAILED CONNECTION ERROR:");
    console.error("Name:", err.name);
    console.error("Message:", err.message);
    if (err.reason) console.error("Reason:", JSON.stringify(err.reason, null, 2));
  }
}

test();
