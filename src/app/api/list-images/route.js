export const dynamic = 'force-static';
import { NextResponse } from 'next/server';

// API disabled for static export. Returning 404 so static export can complete.
export async function GET() {
    return NextResponse.json({ success: false, message: 'API disabled for static export' }, { status: 404 });
}