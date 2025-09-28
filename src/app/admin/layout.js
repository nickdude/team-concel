'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AdminLayout = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Check if user is already authenticated
        const authStatus = localStorage.getItem('adminAuthenticated');
        if (authStatus === 'true') {
            setIsAuthenticated(true);
        }
        setLoading(false);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple password check (in production, use proper authentication)
        if (password === 'admin123') {
            setIsAuthenticated(true);
            localStorage.setItem('adminAuthenticated', 'true');
        } else {
            alert('Invalid password');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('adminAuthenticated');
        router.push('/');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md w-96">
                    <h1 className="text-2xl font-bold text-left mb-6">Admin Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter admin password"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-brand-blue text-white p-3 rounded-md hover:bg-brand-navy transition-colors"
                        >
                            Login
                        </button>
                    </form>
                    <div className="mt-4 text-sm text-gray-600 text-left">
                        Developer: Manish Sharma <br />
                        Email: sharmamanish70081@gmail.com <br />
                        Phone: +91-7666089912
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <nav className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-4">
                            <h1 className="text-xl font-semibold text-gray-900">Admin Panel</h1>
                            <nav className="flex space-x-4">
                                <a
                                    href="/admin/data-editor"
                                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Data Editor
                                </a>
                            </nav>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a
                                href="/"
                                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                                target="_blank"
                            >
                                View Site
                            </a>
                            <button
                                onClick={handleLogout}
                                className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {children}
        </div>
    );
};

export default AdminLayout;