import Link from "next/link";

const AdminDashboard = () => {
    return (
        <div className="min-h-screen bg-brand.rose font-onest">
            <div className="max-w-7xl mx-auto p-6">
                {/* Header */}
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-extrabold text-brand.navy mb-2 font-bricolage">
                        Admin Dashboard
                    </h1>
                    <p className="text-brand.navyAlpha font-spacegrotesk">
                        Manage your website content and settings
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-2 gap-8">
                    {/* Data Editor */}
                    <Link href="/admin/data-editor">
                        <div className="bg-white rounded-2xl shadow-around border border-brand.grayish hover:shadow-lg transition-all duration-300 p-6 cursor-pointer hover:-translate-y-1">
                            <div className="flex items-center mb-4">
                                <div className="bg-brand.blue/10 p-3 rounded-xl mr-4">
                                    <svg
                                        className="h-7 w-7 text-brand.blue"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-brand.navy">
                                        Data Editor
                                    </h3>
                                    <p className="text-sm text-brand.navyAlpha">
                                        Edit website content
                                    </p>
                                </div>
                            </div>
                            <p className="text-brand.darkBlueAlpha leading-relaxed">
                                Modify text, images, and data across all pages with an intuitive
                                interface.
                            </p>
                        </div>
                    </Link>

                    {/* Site Statistics */}
                    <div className="bg-white rounded-2xl shadow-around border border-brand.grayish p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center mb-4">
                            <div className="bg-green-100 p-3 rounded-xl mr-4">
                                <svg
                                    className="h-7 w-7 text-green-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-brand.navy">
                                    Site Statistics
                                </h3>
                                <p className="text-sm text-brand.navyAlpha">View metrics</p>
                            </div>
                        </div>
                        <div className="space-y-2 font-spacegrotesk">
                            <div className="flex justify-between">
                                <span className="text-brand.navyAlpha">Total Pages:</span>
                                <span className="font-semibold">5</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-brand.navyAlpha">Total Sections:</span>
                                <span className="font-semibold">30+</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-brand.navyAlpha">Last Updated:</span>
                                <span className="font-semibold text-green-600">Today</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    {/* <div className="bg-gradient-to-br from-brand.beige to-brand.gold rounded-2xl shadow-around p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center mb-4">
                            <div className="bg-white p-3 rounded-xl mr-4 shadow-sm">
                                <svg
                                    className="h-7 w-7 text-brand.navy"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-brand.navy">
                                    Quick Actions
                                </h3>
                                <p className="text-sm text-brand.navyAlpha">Common tasks</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <a
                                href="/admin/data-editor"
                                className="block w-full text-left p-2 rounded-md hover:bg-white/70 text-sm transition"
                            >
                                📝 Edit Homepage Content
                            </a>
                            <a
                                href="/admin/data-editor"
                                className="block w-full text-left p-2 rounded-md hover:bg-white/70 text-sm transition"
                            >
                                🏷️ Update Testimonials
                            </a>
                            <a
                                href="/"
                                target="_blank"
                                className="block w-full text-left p-2 rounded-md hover:bg-white/70 text-sm transition"
                            >
                                🔗 View Live Site
                            </a>
                        </div>
                    </div> */}
                </div>

            </div>
        </div>
    );
};

export default AdminDashboard;