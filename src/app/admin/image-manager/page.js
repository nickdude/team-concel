'use client';

import { useState } from 'react';
import ImageUploader from '@/components/admin/ImageUploader';
import ImageGallery from '@/components/admin/ImageGallery';

const ImageManager = () => {
    const [selectedImage, setSelectedImage] = useState('');
    const [uploadFolder, setUploadFolder] = useState('uploads');
    const [refreshGallery, setRefreshGallery] = useState(0);

    const handleImageUpload = (newImageUrl) => {
        setSelectedImage(newImageUrl);
        // Trigger gallery refresh
        setRefreshGallery(prev => prev + 1);
    };

    const folders = [
        { value: 'uploads', label: 'General Uploads' },
        { value: 'logos', label: 'Logos' },
        { value: 'icons', label: 'Icons' },
        { value: 'authors', label: 'Author Photos' },
        { value: 'banners', label: 'Banners' },
        { value: 'backgrounds', label: 'Backgrounds' }
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex items-center space-x-4 mb-2">
                        <a
                            href="/admin"
                            className="flex items-center text-gray-600 hover:text-gray-900 text-sm"
                        >
                            <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Dashboard
                        </a>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900">Image Manager</h1>
                    <p className="text-gray-600 mt-1">Upload, manage, and organize your website images</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto p-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Upload Section */}
                    <div className="bg-white rounded-lg border p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload New Image</h2>

                        {/* Folder Selection */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Upload to folder:
                            </label>
                            <select
                                value={uploadFolder}
                                onChange={(e) => setUploadFolder(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                {folders.map(folder => (
                                    <option key={folder.value} value={folder.value}>
                                        {folder.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <ImageUploader
                            label="Upload Image"
                            currentImage=""
                            onImageChange={handleImageUpload}
                            folder={uploadFolder}
                        />

                        {selectedImage && (
                            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
                                <p className="text-green-800 text-sm font-medium">Latest Upload:</p>
                                <p className="text-green-700 text-sm font-mono break-all">{selectedImage}</p>
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(selectedImage);
                                        alert('URL copied to clipboard!');
                                    }}
                                    className="mt-2 text-green-600 hover:text-green-700 text-sm underline"
                                >
                                    Copy URL
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Gallery Section */}
                    <div>
                        <ImageGallery
                            key={refreshGallery}
                            onImageSelect={setSelectedImage}
                            selectedImage={selectedImage}
                        />
                    </div>
                </div>

                {/* Usage Instructions */}
                <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">How to Use Images in Your Content</h3>
                    <div className="text-blue-800 text-sm space-y-2">
                        <p><strong>1. Upload:</strong> Use the uploader above or drag & drop images</p>
                        <p><strong>2. Organize:</strong> Choose appropriate folders (logos, icons, etc.)</p>
                        <p><strong>3. Use in Data Editor:</strong> Image fields will automatically detect and show upload options</p>
                        <p><strong>4. Copy URLs:</strong> Click on any image in the gallery to copy its URL</p>
                        <p><strong>5. Replace:</strong> Simply upload a new image or paste a new URL to replace existing images</p>
                    </div>
                </div>

                {/* Current Image Preview */}
                {selectedImage && (
                    <div className="mt-6 bg-white rounded-lg border p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Selected Image Preview</h3>
                        <div className="flex items-start space-x-4">
                            <img
                                src={selectedImage}
                                alt="Selected"
                                className="max-w-xs max-h-48 rounded border shadow-sm"
                            />
                            <div className="flex-1">
                                <p className="text-sm text-gray-600 mb-2">Image URL:</p>
                                <code className="block p-2 bg-gray-100 rounded text-sm break-all">
                                    {selectedImage}
                                </code>
                                <div className="mt-3 space-x-2">
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText(selectedImage);
                                            alert('URL copied to clipboard!');
                                        }}
                                        className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                                    >
                                        Copy URL
                                    </button>
                                    <a
                                        href="/admin/data-editor"
                                        className="inline-block px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
                                    >
                                        Use in Data Editor
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageManager;