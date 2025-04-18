import { redirect } from 'next/navigation';
import connectDB from '@/db';

export default async function AliasPage({ params }: { params: { alias: string } }) {
    const { alias } = params;
    const { db } = await connectDB();
    const collection = db.collection('urls');
    const urlDoc = await collection.findOne<{ originalUrl: string }>({ alias });

    if (!urlDoc) {
        // Optionally render a 404 page or error message
        return <h1>404 - Alias not found</h1>;
    }

    // Redirect to the original URL
    redirect(urlDoc.originalUrl);
}
