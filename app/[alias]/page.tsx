import { redirect } from 'next/navigation';
import connectDB from '@/db';

export default async function AliasPage({ params }: { params: Promise<{ alias: string }>
}) {
    const { alias } = await params;

    const { db } = await connectDB();
    const collection = db.collection('urls');
    const urlDoc = await collection.findOne<{ originalUrl: string }>({ alias });

    if (!urlDoc) {
        redirect('/')
    }

    redirect(urlDoc.originalUrl);
}