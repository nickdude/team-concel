import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const images = [];
        const assetsDir = path.join(process.cwd(), 'public', 'assets');

        if (!fs.existsSync(assetsDir)) {
            return NextResponse.json({
                success: true,
                images: [],
                message: 'Assets directory not found'
            });
        }

        // Read all subdirectories in assets
        const folders = fs.readdirSync(assetsDir, { withFileTypes: true });

        for (const folder of folders) {
            if (folder.isDirectory()) {
                const folderPath = path.join(assetsDir, folder.name);

                try {
                    const files = fs.readdirSync(folderPath);

                    for (const file of files) {
                        // Check if it's an image file
                        const ext = path.extname(file).toLowerCase();
                        const imageExts = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];

                        if (imageExts.includes(ext)) {
                            images.push({
                                name: file,
                                folder: folder.name,
                                path: `/assets/${folder.name}/${file}`,
                                extension: ext
                            });
                        }
                    }
                } catch (error) {
                    console.warn(`Could not read folder ${folder.name}:`, error.message);
                }
            }
        }

        // Sort by folder then by name
        images.sort((a, b) => {
            if (a.folder !== b.folder) {
                return a.folder.localeCompare(b.folder);
            }
            return a.name.localeCompare(b.name);
        });

        return NextResponse.json({
            success: true,
            images: images,
            count: images.length
        });

    } catch (error) {
        console.error('Error listing images:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to list images', error: error.message },
            { status: 500 }
        );
    }
}