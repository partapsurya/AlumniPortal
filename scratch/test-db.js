const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;

async function testConnection() {
  if (!uri) {
    console.error('ERROR: MONGODB_URI is not set');
    process.exit(1);
  }
  console.log('Attempting to connect to MongoDB Atlas...');
  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log('SUCCESS: Successfully connected to MongoDB Atlas!');
    process.exit(0);
  } catch (err) {
    console.error('ERROR: Failed to connect to MongoDB Atlas:', err.message);
    process.exit(1);
  }
}

testConnection();
