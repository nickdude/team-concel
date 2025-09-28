import Link from 'next/link';

const AdminDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto p-6">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
                    <p className="text-gray-600">Manage your website content and settings</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Data Editor Card */}
                    <Link href="/admin/data-editor">
                        <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow p-6 cursor-pointer">
                            <div className="flex items-center mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Data Editor</h3>
                                    <p className="text-gray-600 text-sm">Edit website content</p>
                                </div>
                            </div>
                            <p className="text-gray-600">
                                Modify text content, images, and data across all pages of your website with an intuitive interface.
                            </p>
                        </div>
                    </Link>

                    {/* Site Statistics Card */}
                    <div className="bg-white rounded-lg shadow-sm border p-6">
                        <div className="flex items-center mb-4">
                            <div className="bg-green-100 p-3 rounded-lg mr-4">
                                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Site Statistics</h3>
                                <p className="text-gray-600 text-sm">View site metrics</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Total Pages:</span>
                                <span className="font-semibold">5</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Total Sections:</span>
                                <span className="font-semibold">30+</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Last Updated:</span>
                                <span className="font-semibold text-green-600">Today</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions Card */}
                    <div className="bg-white rounded-lg shadow-sm border p-6">
                        <div className="flex items-center mb-4">
                            <div className="bg-purple-100 p-3 rounded-lg mr-4">
                                <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
                                <p className="text-gray-600 text-sm">Common tasks</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <a
                                href="/admin/data-editor"
                                className="block w-full text-left p-2 rounded-md hover:bg-gray-50 text-sm"
                            >
                                📝 Edit Homepage Content
                            </a>
                            <a
                                href="/admin/data-editor"
                                className="block w-full text-left p-2 rounded-md hover:bg-gray-50 text-sm"
                            >
                                🏷️ Update Testimonials
                            </a>
                            <a
                                href="/"
                                target="_blank"
                                className="block w-full text-left p-2 rounded-md hover:bg-gray-50 text-sm"
                            >
                                🔗 View Live Site
                            </a>
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="mt-8 bg-white rounded-lg shadow-sm border p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Getting Started</h2>
                    <div className="prose text-gray-600">
                        <ul className="space-y-2">
                            <li>✅ Admin panel setup complete</li>
                            <li>✅ Data editor ready to use</li>
                            <li>🔧 Click on &quot;Data Editor&quot; to start editing your website content</li>
                            <li>💡 Changes are saved directly to your siteData.js file</li>
                            <li>🚀 View your changes instantly on the live site</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;