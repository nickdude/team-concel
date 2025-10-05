import React, { useState } from 'react';

const ImageUploader = ({ currentImage, onImageChange, label, folder = 'uploads', uniqueId }) => {
    const [uploading, setUploading] = useState(false);
    const [dragOver, setDragOver] = useState(false);
    const [previewUrl, setPreviewUrl] = useState(currentImage);

    // Create a unique identifier for this component instance
    const componentId = uniqueId || `${label}-${Math.random().toString(36).substr(2, 9)}`;

    const handleFileUpload = async (file) => {
        if (!file) return;

        setUploading(true);
        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('folder', folder);

            const response = await fetch('/api/upload-image', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                setPreviewUrl(result.url);
                onImageChange(result.url);
            } else {
                alert(result.message || 'Upload failed');
            }
        } catch (error) {
            console.error('Upload error:', error);
            alert('Upload failed: ' + error.message);
        } finally {
            setUploading(false);
        }
    };

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            handleFileUpload(file);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragOver(false);
        const file = e.dataTransfer.files[0];
        if (file) {
            handleFileUpload(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDragOver(false);
    };

    const removeImage = () => {
        setPreviewUrl('');
        onImageChange('');
    };

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {label}
            </label>

            {/* Current Image Preview */}
            {previewUrl && (
                <div className="mb-3 relative inline-block">
                    <img
                        src={previewUrl}
                        alt="Preview"
                        className="max-w-xs max-h-32 rounded border shadow-sm"
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                    />
                    <button
                        type="button"
                        onClick={removeImage}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                    >
                        ×
                    </button>
                    <div className="mt-1 text-xs text-gray-500">
                        Current: {previewUrl}
                    </div>
                </div>
            )}

            {/* Upload Area */}
            <div
                className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${dragOver
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 hover:border-gray-400'
                    }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
            >
                {uploading ? (
                    <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="text-blue-500">Uploading...</span>
                    </div>
                ) : (
                    <>
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="mt-2">
                            <label htmlFor={`file-upload-${componentId}`} className="cursor-pointer">
                                <span className="text-blue-600 hover:text-blue-500">Upload a file</span>
                                <span className="text-gray-500"> or drag and drop</span>
                            </label>
                            <input
                                id={`file-upload-${componentId}`}
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={handleFileSelect}
                            />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                            PNG, JPG, GIF, WebP, SVG up to 5MB
                        </p>
                    </>
                )}
            </div>

            {/* Manual URL Input */}
            <div className="mt-3">
                <label className="block text-xs font-medium text-gray-600 mb-1">
                    Or enter image URL manually:
                </label>
                <input
                    type="url"
                    value={previewUrl || ''}
                    onChange={(e) => {
                        setPreviewUrl(e.target.value);
                        onImageChange(e.target.value);
                    }}
                    placeholder="https://example.com/image.jpg or /assets/image.png"
                    className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
        </div>
    );
};

export default ImageUploader;