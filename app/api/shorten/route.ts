import { NextResponse } from 'next/server';
import createNewUrl from '@/lib/createNewUrl';

export async function POST(request: Request) {
    const { url, alias } = await request.json();

    // Validate URL structure
    if (!url || !alias) {
        return NextResponse.json(
            { error: 'Missing URL or alias' },
            { status: 400 }
        );
    }

    if (!url.match(/^https?:\/\/[^ "]+$/)) {
        return Response.json(
            { error: 'Invalid URL format - must start with http:// or https://' },
            { status: 400 }
        );
    }

    // Validate URL actually exists
    try {
        const response = await fetch(url, { method: 'HEAD' });
        if (!response.ok) {
            return Response.json(
                { error: 'URL does not exist or is unreachable' },
                { status: 400 }
            );
        }
    } catch (err) {
        console.error('URL verification failed:', err);
        return Response.json(
            { error: 'Could not verify URL - please check it exists' },
            { status: 400 }
        );
    }

    const result = await createNewUrl(url, alias);

    if (result.error) {
        return NextResponse.json(
            { error: result.error },
            { status: 409 }
        );
    }

    return NextResponse.json(result);
}
