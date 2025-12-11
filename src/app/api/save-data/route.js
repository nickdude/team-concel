// import { NextResponse } from 'next/server';

// const API_URL = process.env.RENDER_API_URL || 'https://manage-website-9ijn.onrender.com/api/site-data';
// const AUTH_TOKEN = process.env.RENDER_API_TOKEN || localStorage.getItem('adminToken');

// export async function POST(request) {
//     try {
//         const body = await request.json();
//         const AUTH_TOKEN = process.env.RENDER_API_TOKEN || localStorage.getItem('adminToken');

//         const res = await fetch(API_URL, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': AUTH_TOKEN, // token from env
//             },
//             body: JSON.stringify(body),
//         });

//         const data = await res.json();

//         return NextResponse.json(data, { status: res.status });
//     } catch (error) {
//         console.error('Proxy POST error:', error);
//         return NextResponse.json(
//             { success: false, message: 'Proxy POST failed', error: error.message },
//             { status: 500 }
//         );
//     }
// }

// export async function GET() {
//     try {
//         const res = await fetch(API_URL, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': AUTH_TOKEN, // token from env
//             },
//         });

//         const data = await res.json();

//         return NextResponse.json(data, { status: res.status });
//     } catch (error) {
//         console.error('Proxy GET error:', error);
//         return NextResponse.json(
//             { success: false, message: 'Proxy GET failed', error: error.message },
//             { status: 500 }
//         );
//     }
// }


export const dynamic = 'force-static';
import { NextResponse } from 'next/server';

// API disabled for static export. Returning 404 so static export can complete.
export async function GET() {
    return NextResponse.json({ success: false, message: 'API disabled for static export' }, { status: 404 });
}

export async function POST() {
    return NextResponse.json({ success: false, message: 'API disabled for static export' }, { status: 404 });
}