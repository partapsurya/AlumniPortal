const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://agupta:hqRPko6pNBuCgx1l@alumniportal.w665j8i.mongodb.net/?retryWrites=true&w=majority&appName=AlumniPortal";

async function run() {
  const client = new MongoClient(uri);
  try {
    console.log("Connecting...");
    await client.connect();
    console.log("SUCCESS!");
    const dbs = await client.db().admin().listDatabases();
    console.log("Databases:", dbs.databases.map(d => d.name));
  } catch (err) {
    console.error("FAILED:", err.message);
  } finally {
    await client.close();
  }
}

run();
