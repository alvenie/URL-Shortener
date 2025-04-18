import { NextResponse } from 'next/server';
import createNewUrl from '@/lib/createNewUrl';

export async function POST(request: Request) {
    const { url, alias } = await request.json();

    if (!url || !alias) {
        return NextResponse.json(
            { error: 'Missing URL or alias' },
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
