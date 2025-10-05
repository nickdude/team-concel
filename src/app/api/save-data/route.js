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


import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const data = await request.json();

        // Basic validation
        if (!data || typeof data !== 'object') {
            return NextResponse.json(
                { success: false, message: 'Invalid data format' },
                { status: 400 }
            );
        }

        // Validate required pages
        const requiredPages = ['homePage', 'practicePage', 'legalDesignAndTransformationPage', 'caasPage', 'fractionalGcPage'];
        for (const page of requiredPages) {
            if (!data[page]) {
                return NextResponse.json(
                    { success: false, message: `Missing required page: ${page}` },
                    { status: 400 }
                );
            }
        }

        // Path to the siteData.js file
        const filePath = path.join(process.cwd(), 'src', 'data', 'siteData.js');

        // Create backup of current file
        const backupPath = path.join(process.cwd(), 'src', 'data', `siteData.backup.${Date.now()}.js`);
        try {
            fs.copyFileSync(filePath, backupPath);
        } catch (backupError) {
            console.warn('Could not create backup:', backupError.message);
        }

        // Create the content string with proper formatting
        const fileContent = `const siteData = ${JSON.stringify(data, null, 4)};

export default siteData;`;

        // Write the file
        fs.writeFileSync(filePath, fileContent, 'utf8');

        return NextResponse.json({
            success: true,
            message: 'Data saved successfully',
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error saving data:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to save data', error: error.message },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'src', 'data', 'siteData.js');
        const fileStats = fs.statSync(filePath);

        return NextResponse.json({
            success: true,
            lastModified: fileStats.mtime,
            size: fileStats.size
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: 'Could not get file info', error: error.message },
            { status: 500 }
        );
    }
}