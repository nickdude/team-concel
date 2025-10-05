import React, { useState, useEffect } from 'react';

const ImageGallery = ({ onImageSelect, selectedImage }) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedFolder, setSelectedFolder] = useState('all');

    useEffect(() => {
        loadImages();
    }, []);

    const loadImages = async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/list-images');
            const data = await response.json();

            if (data.success) {
                setImages(data.images);
            }
        } catch (error) {
            console.error('Error loading images:', error);
        } finally {
            setLoading(false);
        }
    };

    const folders = ['all', ...new Set(images.map(img => img.folder))];
    const filteredImages = selectedFolder === 'all'
        ? images
        : images.filter(img => img.folder === selectedFolder);

    const deleteImage = async (imagePath) => {
        if (!confirm('Are you sure you want to delete this image?')) return;

        try {
            const response = await fetch('/api/delete-image', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ path: imagePath })
            });

            const result = await response.json();
            if (result.success) {
                loadImages(); // Reload the gallery
            } else {
                alert('Failed to delete image: ' + result.message);
            }
        } catch (error) {
            alert('Error deleting image: ' + error.message);
        }
    };

    return (
        <div className="bg-white rounded-lg border p-4">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Image Gallery</h3>
                <button
                    onClick={loadImages}
                    className="text-blue-600 hover:text-blue-700 text-sm"
                >
                    Refresh
                </button>
            </div>

            {/* Folder Filter */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Filter by folder:
                </label>
                <select
                    value={selectedFolder}
                    onChange={(e) => setSelectedFolder(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md text-sm"
                >
                    {folders.map(folder => (
                        <option key={folder} value={folder}>
                            {folder === 'all' ? 'All Images' : folder}
                        </option>
                    ))}
                </select>
            </div>

            {loading ? (
                <div className="flex items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-96 overflow-y-auto">
                    {filteredImages.map((image, index) => (
                        <div
                            key={index}
                            className={`relative group border-2 rounded-lg overflow-hidden cursor-pointer transition-all ${selectedImage === image.path
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                            onClick={() => onImageSelect && onImageSelect(image.path)}
                        >
                            <div className="aspect-square">
                                <img
                                    src={image.path}
                                    alt={image.name}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            deleteImage(image.path);
                                        }}
                                        className="bg-red-500 text-white p-1 rounded text-xs hover:bg-red-600 mr-2"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigator.clipboard.writeText(image.path);
                                            alert('Image URL copied to clipboard!');
                                        }}
                                        className="bg-blue-500 text-white p-1 rounded text-xs hover:bg-blue-600"
                                    >
                                        Copy URL
                                    </button>
                                </div>
                            </div>

                            {/* Image info */}
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white text-xs p-2">
                                <div className="truncate">{image.name}</div>
                                <div className="text-gray-300">{image.folder}</div>
                            </div>
                        </div>
                    ))}

                    {filteredImages.length === 0 && (
                        <div className="col-span-full text-center py-8 text-gray-500">
                            No images found in this folder
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ImageGallery;