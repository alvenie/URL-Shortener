"use server";

import connectDB from '@/db';

interface UrlDocument {
    originalUrl: string;
    alias: string;
}

export default async function createNewUrl(url: string, alias: string) {
    try {
        const { db } = await connectDB();
        const collection = db.collection<UrlDocument>('urls');

        // Check if alias already exists
        const existing = await collection.findOne({ alias });
        if (existing) {
            return { error: 'Invalid alias: This alias already exists' };
        }

        // Insert new entry
        const result = await collection.insertOne({
            originalUrl: url,
            alias
        });

        if (result.insertedId) {
            return {
                success: true,
                shortUrl: `${process.env.BASE_URL}${alias}`
            };
        }

        return { error: 'Failed to create URL' };

    } catch (error) {
        console.error('Error creating URL:', error);
        return { error: 'Database error' };
    }
}