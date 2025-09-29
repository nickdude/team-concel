import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

// helper: convert JSON into JS object literal (keys without quotes if valid identifiers)
function toObjectLiteral(obj, indent = 4) {
    return JSON.stringify(obj, null, indent)
        .replace(/"([a-zA-Z_][a-zA-Z0-9_]*)":/g, '$1:');
}

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
        const requiredPages = [
            'homePage',
            'practicePage',
            'legalDesignAndTransformationPage',
            'caasPage',
            'fractionalGcPage'
        ];
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
        const backupPath = path.join(
            process.cwd(),
            'src',
            'data',
            `siteData.backup.${Date.now()}.js`
        );
        try {
            fs.copyFileSync(filePath, backupPath);
        } catch (backupError) {
            console.warn('Could not create backup:', backupError.message);
        }

        // Use our custom serializer
        const fileContent = `const siteData = ${toObjectLiteral(data, 4)};

export default siteData;`;

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