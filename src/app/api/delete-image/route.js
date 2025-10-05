import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function DELETE(request) {
    try {
        const { path: imagePath } = await request.json();

        if (!imagePath) {
            return NextResponse.json(
                { success: false, message: 'Image path is required' },
                { status: 400 }
            );
        }

        // Security: Only allow deletion of files in assets directory
        if (!imagePath.startsWith('/assets/')) {
            return NextResponse.json(
                { success: false, message: 'Invalid image path' },
                { status: 400 }
            );
        }

        // Convert public URL to file system path
        const filePath = path.join(process.cwd(), 'public', imagePath);

        if (!fs.existsSync(filePath)) {
            return NextResponse.json(
                { success: false, message: 'Image not found' },
                { status: 404 }
            );
        }

        // Delete the file
        fs.unlinkSync(filePath);

        return NextResponse.json({
            success: true,
            message: 'Image deleted successfully',
            deletedPath: imagePath
        });

    } catch (error) {
        console.error('Error deleting image:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to delete image', error: error.message },
            { status: 500 }
        );
    }
}