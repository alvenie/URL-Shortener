import { redirect } from 'next/navigation';
import connectDB from '@/db';

export default async function AliasPage({ params }: { params: Promise<{ alias: string }>
}) {
    const { alias } = await params;

    try {
        const { db } = await connectDB();
        const collection = db.collection('urls');
        const urlDoc = await collection.findOne<{ originalUrl: string }>({ alias });

        if (!urlDoc) {
            return <h1>404 - Alias not found</h1>;
        }

        redirect(urlDoc.originalUrl);
    } catch (error) {
        console.error('Database error:', error);
        return <h1>500 - Server Error</h1>;
    }
}