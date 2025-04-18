import { MongoClient, Db } from 'mongodb';

const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = 'URL-Shortener';

if (!MONGO_URI) {
    throw new Error('MONGO_URI environment variable is undefined.');
}

// Global cache for the client promise
let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export default async function connectDB(): Promise<{ client: MongoClient; db: Db }> {
    // Reuse cached connection if available
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }

    // Create new connection if none exists
    const client = new MongoClient(MONGO_URI!); // Non-null assertion
    await client.connect();

    // Cache for future use
    cachedClient = client;
    cachedDb = client.db(DB_NAME);

    return { client: cachedClient, db: cachedDb };
}
