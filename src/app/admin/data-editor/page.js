'use client';

import { useState, useEffect } from 'react';
import siteData from '@/data/siteData';
import { ObjectEditor } from '@/components/admin/DataEditorComponents';

const DataEditor = () => {
    const [data, setData] = useState(siteData);
    const [selectedPage, setSelectedPage] = useState('homePage');
    const [selectedSection, setSelectedSection] = useState(null);
    const [editingData, setEditingData] = useState({});
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

    useEffect(() => {
        const firstSection = Object.keys(data[selectedPage])[0];
        setSelectedSection(firstSection);
        setEditingData(data[selectedPage][firstSection]);
        setHasUnsavedChanges(false);
    }, [selectedPage, data]);

    useEffect(() => {
        if (selectedSection && data[selectedPage] && data[selectedPage][selectedSection]) {
            const hasChanges =
                JSON.stringify(editingData) !==
                JSON.stringify(data[selectedPage][selectedSection]);
            setHasUnsavedChanges(hasChanges);
        }
    }, [editingData, data, selectedPage, selectedSection]);

    const handlePageChange = (pageName) => {
        setSelectedPage(pageName);
        const firstSection = Object.keys(data[pageName])[0];
        setSelectedSection(firstSection);
        setEditingData(data[pageName][firstSection]);
    };

    const handleSectionChange = (sectionName) => {
        if (hasUnsavedChanges) {
            const confirmChange = window.confirm(
                'You have unsaved changes. Are you sure you want to switch sections?'
            );
            if (!confirmChange) return;
        }
        setSelectedSection(sectionName);
        setEditingData(data[selectedPage][sectionName]);
        setHasUnsavedChanges(false);
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            const newData = { ...data };
            newData[selectedPage][selectedSection] = editingData;

            const response = await fetch('/api/save-data', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newData),
            });

            if (response.ok) {
                setData(newData);
                setMessage('✅ Data saved successfully!');
                setTimeout(() => setMessage(''), 3000);
            } else {
                throw new Error('Failed to save data');
            }
        } catch (error) {
            setMessage('❌ Error saving data: ' + error.message);
        }
        setSaving(false);
    };

    const filteredSections = selectedPage
        ? Object.keys(data[selectedPage]).filter((section) =>
            section.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : [];

    return (
        <div className="min-h-screen bg-brand-gray font-onest">
            {/* Header */}
            <div className="bg-brand-navy text-brand-white shadow-around">
                <div className="max-w-7xl mx-auto px-6 py-5">
                    <h1 className="text-3xl font-bold tracking-tight">Site Data Editor</h1>
                    <p className="text-brand-whiteAlpha mt-1">
                        Manage your website content with ease
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-6 grid grid-cols-12 gap-6">
                {/* Alerts */}
                {message && (
                    <div
                        className={`col-span-12 mb-4 p-4 rounded-lg shadow-around text-sm font-medium 
            ${message.includes('Error')
                                ? 'bg-red-50 border border-red-200 text-red-700'
                                : 'bg-green-50 border border-green-200 text-green-700'
                            }`}
                    >
                        {message}
                    </div>
                )}

                {/* Pages Sidebar (Left) */}
                <div className="col-span-2">
                    <div className="bg-white rounded-2xl shadow-around border px-3 py-5">
                        <h2 className="text-lg font-bricolage mb-4 text-brand-deepBlue">
                            Pages
                        </h2>
                        <div className="space-y-2">
                            {Object.keys(data).map((pageName) => (
                                <button
                                    key={pageName}
                                    onClick={() => handlePageChange(pageName)}
                                    className={`w-full text-left p-3 rounded-lg transition-all font-medium 
                    ${selectedPage === pageName
                                            ? 'bg-brand-blue text-white shadow-around'
                                            : 'hover:bg-brand-gray hover:text-brand-navy border border-transparent'
                                        }`}
                                >
                                    {pageName
                                        .replace(/([A-Z])/g, ' $1')
                                        .replace(/^./, (str) => str.toUpperCase())}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sections Sidebar (Middle) */}
                <div className="col-span-3">
                    <div className="bg-white rounded-2xl shadow-around border p-5">
                        <h2 className="text-md font-semibold mb-3 text-brand-deepBlue">
                            Sections
                        </h2>

                        <div className="mb-3">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search sections..."
                                className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-blue"
                            />
                        </div>

                        <div className="space-y-1 max-h-72 overflow-y-auto">
                            {filteredSections.map((sectionName) => (
                                <button
                                    key={sectionName}
                                    onClick={() => handleSectionChange(sectionName)}
                                    className={`w-full text-left p-2 text-sm rounded-md transition-colors 
                    ${selectedSection === sectionName
                                            ? 'bg-brand-gold text-brand-navy font-semibold'
                                            : 'hover:bg-brand-gray hover:text-brand-deepBlue'
                                        }`}
                                >
                                    {sectionName
                                        .replace(/([A-Z])/g, ' $1')
                                        .replace(/^./, (str) => str.toUpperCase())}
                                </button>
                            ))}

                            {filteredSections.length === 0 && searchTerm && (
                                <p className="text-gray-500 text-sm p-2">
                                    No sections match your search.
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Main Editor (Right) */}
                <div className="col-span-7">
                    <div className="bg-white rounded-2xl shadow-around border">
                        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                            <div>
                                <h2 className="text-xl font-semibold text-brand-navy">
                                    {selectedPage && selectedSection && (
                                        <>
                                            {selectedPage
                                                .replace(/([A-Z])/g, ' $1')
                                                .replace(/^./, (str) => str.toUpperCase())}{' '}
                                            →{' '}
                                            {selectedSection
                                                .replace(/([A-Z])/g, ' $1')
                                                .replace(/^./, (str) => str.toUpperCase())}
                                        </>
                                    )}
                                </h2>
                                <p className="text-gray-500 text-sm">
                                    Edit the content for this section
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => {
                                        setEditingData(data[selectedPage][selectedSection]);
                                        setHasUnsavedChanges(false);
                                        setMessage('🔄 Changes reset to original values');
                                        setTimeout(() => setMessage(''), 3000);
                                    }}
                                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-sm"
                                >
                                    Reset
                                </button>
                                <button
                                    onClick={handleSave}
                                    disabled={saving || !hasUnsavedChanges}
                                    className={`px-6 py-2 rounded-lg font-medium text-sm transition-colors w-44
                    ${saving
                                            ? 'bg-brand-navy cursor-not-allowed text-white'
                                            : hasUnsavedChanges
                                                ? 'bg-brand-navy hover:bg-brand-deepBlue text-white'
                                                : 'bg-brand-blue cursor-not-allowed text-white'
                                        }`}
                                >
                                    {saving
                                        ? 'Saving...'
                                        : hasUnsavedChanges
                                            ? 'Save Changes'
                                            : 'No Changes'}
                                </button>
                            </div>
                        </div>

                        <div className="p-6 max-h-96 overflow-y-auto">
                            {editingData && selectedSection ? (
                                <ObjectEditor data={editingData} onChange={setEditingData} />
                            ) : (
                                <div className="text-center py-12">
                                    <div className="text-6xl mb-4">📝</div>
                                    <h3 className="text-lg font-medium text-brand-navy mb-2">
                                        Select a section to edit
                                    </h3>
                                    <p className="text-gray-500">
                                        Choose a page and section from the sidebar to get started.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataEditor;



// 'use client';

// import { useState, useEffect } from 'react';
// import siteData from '@/data/siteData';
// import { ObjectEditor } from '@/components/admin/DataEditorComponents';

// const DataEditor = () => {
//     const [data, setData] = useState(siteData);
//     const [selectedPage, setSelectedPage] = useState('homePage');
//     const [selectedSection, setSelectedSection] = useState(null);
//     const [editingData, setEditingData] = useState({});
//     const [saving, setSaving] = useState(false);
//     const [message, setMessage] = useState('');
//     const [searchTerm, setSearchTerm] = useState('');
//     const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

//     useEffect(() => {
//         // Set the first section of the selected page as default
//         const firstSection = Object.keys(data[selectedPage])[0];
//         setSelectedSection(firstSection);
//         setEditingData(data[selectedPage][firstSection]);
//         setHasUnsavedChanges(false);
//     }, [selectedPage, data]);

//     useEffect(() => {
//         // Check for unsaved changes
//         if (selectedSection && data[selectedPage] && data[selectedPage][selectedSection]) {
//             const hasChanges = JSON.stringify(editingData) !== JSON.stringify(data[selectedPage][selectedSection]);
//             setHasUnsavedChanges(hasChanges);
//         }
//     }, [editingData, data, selectedPage, selectedSection]);

//     const handlePageChange = (pageName) => {
//         setSelectedPage(pageName);
//         const firstSection = Object.keys(data[pageName])[0];
//         setSelectedSection(firstSection);
//         setEditingData(data[pageName][firstSection]);
//     };

//     const handleSectionChange = (sectionName) => {
//         if (hasUnsavedChanges) {
//             const confirmChange = window.confirm('You have unsaved changes. Are you sure you want to switch sections?');
//             if (!confirmChange) return;
//         }

//         setSelectedSection(sectionName);
//         setEditingData(data[selectedPage][sectionName]);
//         setHasUnsavedChanges(false);
//     };

//     const handleSave = async () => {
//         setSaving(true);
//         try {
//             const newData = { ...data };
//             newData[selectedPage][selectedSection] = editingData;

//             const response = await fetch('/api/save-data', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(newData),
//             });

//             if (response.ok) {
//                 setData(newData);
//                 setMessage('Data saved successfully!');
//                 setTimeout(() => setMessage(''), 3000);
//             } else {
//                 throw new Error('Failed to save data');
//             }
//         } catch (error) {
//             setMessage('Error saving data: ' + error.message);
//         }
//         setSaving(false);
//     };

//     const filteredSections = selectedPage ?
//         Object.keys(data[selectedPage]).filter(section =>
//             section.toLowerCase().includes(searchTerm.toLowerCase())
//         ) : [];

//     return (
//         <div className="min-h-screen bg-gray-100">
//             <div className="bg-white shadow-sm border-b">
//                 <div className="max-w-7xl mx-auto px-4 py-4">
//                     <h1 className="text-3xl font-bold text-gray-900">Site Data Editor</h1>
//                     <p className="text-gray-600 mt-1">Manage your website content with ease</p>
//                 </div>
//             </div>

//             <div className="max-w-7xl mx-auto p-4">
//                 {message && (
//                     <div className={`mb-6 p-4 rounded-md ${message.includes('Error')
//                             ? 'bg-red-100 border border-red-300 text-red-700'
//                             : 'bg-green-100 border border-green-300 text-green-700'
//                         }`}>
//                         <div className="flex items-center">
//                             <span className="mr-2">
//                                 {message.includes('Error') ? '❌' : '✅'}
//                             </span>
//                             {message}
//                         </div>
//                     </div>
//                 )}

//                 <div className="grid grid-cols-12 gap-6">
//                     {/* Sidebar */}
//                     <div className="col-span-3">
//                         <div className="bg-white rounded-lg shadow-sm border p-6">
//                             <h2 className="text-lg font-semibold mb-4 text-gray-900">Pages</h2>
//                             <div className="space-y-2 mb-6">
//                                 {Object.keys(data).map((pageName) => (
//                                     <button
//                                         key={pageName}
//                                         onClick={() => handlePageChange(pageName)}
//                                         className={`w-full text-left p-3 rounded-md transition-colors ${selectedPage === pageName
//                                                 ? 'bg-blue-100 text-blue-700 border border-blue-200'
//                                                 : 'hover:bg-gray-50 border border-transparent'
//                                             }`}
//                                     >
//                                         <div className="font-medium">
//                                             {pageName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
//                                         </div>
//                                         <div className="text-xs text-gray-500">
//                                             {Object.keys(data[pageName]).length} sections
//                                         </div>
//                                     </button>
//                                 ))}
//                             </div>

//                             {selectedPage && (
//                                 <>
//                                     <div className="mb-4">
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Search Sections
//                                         </label>
//                                         <input
//                                             type="text"
//                                             value={searchTerm}
//                                             onChange={(e) => setSearchTerm(e.target.value)}
//                                             placeholder="Search sections..."
//                                             className="w-full p-2 border border-gray-300 rounded-md text-sm"
//                                         />
//                                     </div>

//                                     <h3 className="text-md font-semibold mb-3 text-gray-900">Sections</h3>
//                                     <div className="space-y-1 max-h-64 overflow-y-auto">
//                                         {filteredSections.map((sectionName) => (
//                                             <button
//                                                 key={sectionName}
//                                                 onClick={() => handleSectionChange(sectionName)}
//                                                 className={`w-full text-left p-2 text-sm rounded-md transition-colors ${selectedSection === sectionName
//                                                         ? 'bg-green-100 text-green-700 border border-green-200'
//                                                         : 'hover:bg-gray-50 border border-transparent'
//                                                     }`}
//                                             >
//                                                 {sectionName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
//                                             </button>
//                                         ))}
//                                         {filteredSections.length === 0 && searchTerm && (
//                                             <p className="text-gray-500 text-sm p-2">No sections match your search.</p>
//                                         )}
//                                     </div>
//                                 </>
//                             )}
//                         </div>
//                     </div>

//                     {/* Main Editor */}
//                     <div className="col-span-9">
//                         <div className="bg-white rounded-lg shadow-sm border">
//                             <div className="p-6 border-b border-gray-200">
//                                 <div className="flex justify-between items-center">
//                                     <div>
//                                         <h2 className="text-xl font-semibold text-gray-900">
//                                             {selectedPage && selectedSection && (
//                                                 <>
//                                                     {selectedPage.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
//                                                     {' → '}
//                                                     {selectedSection.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
//                                                 </>
//                                             )}
//                                         </h2>
//                                         <p className="text-gray-600 text-sm mt-1">
//                                             Edit the content for this section
//                                         </p>
//                                     </div>
//                                     <div className="flex gap-3">
//                                         <button
//                                             onClick={() => {
//                                                 setEditingData(data[selectedPage][selectedSection]);
//                                                 setHasUnsavedChanges(false);
//                                                 setMessage('Changes reset to original values');
//                                                 setTimeout(() => setMessage(''), 3000);
//                                             }}
//                                             className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-700"
//                                         >
//                                             Reset
//                                         </button>
//                                         <button
//                                             onClick={handleSave}
//                                             disabled={saving || !hasUnsavedChanges}
//                                             className={`px-6 py-2 rounded-md transition-colors ${saving
//                                                     ? 'bg-gray-400 cursor-not-allowed'
//                                                     : hasUnsavedChanges
//                                                         ? 'bg-blue-600 hover:bg-blue-700'
//                                                         : 'bg-gray-400 cursor-not-allowed'
//                                                 } text-white`}
//                                         >
//                                             {saving ? (
//                                                 <span className="flex items-center">
//                                                     <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
//                                                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                                     </svg>
//                                                     Saving...
//                                                 </span>
//                                             ) : hasUnsavedChanges ? 'Save Changes' : 'No Changes'}
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="p-6 max-h-96 overflow-y-auto">
//                                 {editingData && selectedSection && (
//                                     <ObjectEditor
//                                         data={editingData}
//                                         onChange={setEditingData}
//                                     />
//                                 )}

//                                 {!selectedSection && (
//                                     <div className="text-center py-12">
//                                         <div className="text-gray-400 text-6xl mb-4">📝</div>
//                                         <h3 className="text-lg font-medium text-gray-900 mb-2">Select a section to edit</h3>
//                                         <p className="text-gray-600">Choose a page and section from the sidebar to get started.</p>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DataEditor;