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
            <div className="bg-brand-navy text-brand-white shadow-md">
                <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col gap-1">
                    <h1 className="text-4xl font-bricolage font-bold tracking-tight">
                        Site Data Editor
                    </h1>
                    <p className="text-brand-whiteAlpha text-sm font-spacegrotesk">
                        Manage your website content with ease
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-8 grid grid-cols-12 gap-6">
                {/* Alerts */}
                {message && (
                    <div
                        className={`col-span-12 mb-4 p-4 rounded-xl shadow-sm text-sm font-medium 
                        ${message.includes('Error')
                                ? 'bg-red-50 border border-red-200 text-red-700'
                                : 'bg-green-50 border border-green-200 text-green-700'
                            }`}
                    >
                        {message}
                    </div>
                )}

                {/* Pages Sidebar */}
                <div className="col-span-2">
                    <div className="bg-white rounded-2xl shadow border px-4 py-6">
                        <h2 className="text-lg font-ptserif font-semibold mb-5 text-brand-deepBlue">
                            Pages
                        </h2>
                        <div className="space-y-2">
                            {Object.keys(data).map((pageName) => (
                                <button
                                    key={pageName}
                                    onClick={() => handlePageChange(pageName)}
                                    className={`w-full text-left px-4 py-2 rounded-lg transition-all font-medium text-sm
                                    ${selectedPage === pageName
                                            ? 'bg-brand-blue text-white shadow-md'
                                            : 'hover:bg-brand-grayish hover:text-brand-navy border border-transparent'
                                        }`}
                                >
                                    {pageName.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sections Sidebar */}
                <div className="col-span-3">
                    <div className="bg-white rounded-2xl shadow border px-5 py-6">
                        <h2 className="text-md font-spacegrotesk font-semibold mb-3 text-brand-deepBlue">
                            Sections
                        </h2>

                        <div className="mb-4">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search sections..."
                                className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-blue"
                            />
                        </div>

                        <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                            {filteredSections.map((sectionName) => (
                                <button
                                    key={sectionName}
                                    onClick={() => handleSectionChange(sectionName)}
                                    className={`w-full text-left px-3 py-2 text-sm rounded-lg transition 
                                    ${selectedSection === sectionName
                                            ? 'bg-brand-gold text-brand-navy font-semibold'
                                            : 'hover:bg-brand-grayish hover:text-brand-deepBlue'
                                        }`}
                                >
                                    {sectionName.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                                </button>
                            ))}
                            {filteredSections.length === 0 && searchTerm && (
                                <p className="text-gray-500 text-sm italic p-2">
                                    No sections found
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Main Editor */}
                <div className="col-span-7">
                    <div className="bg-white rounded-2xl shadow border">
                        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                            <div>
                                <h2 className="text-xl font-bricolage font-semibold text-brand-navy">
                                    {selectedPage && selectedSection && (
                                        <>
                                            {selectedPage.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                                            <span className="text-brand-amber"> → </span>
                                            {selectedSection.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                                        </>
                                    )}
                                </h2>
                                <p className="text-gray-500 text-sm font-spacegrotesk">
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
                                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-brand-gray text-sm transition"
                                >
                                    Reset
                                </button>
                                <button
                                    onClick={handleSave}
                                    disabled={saving || !hasUnsavedChanges}
                                    className={`px-6 py-2 rounded-lg font-medium text-sm transition w-44
                                        ${saving
                                            ? 'bg-brand-navy cursor-not-allowed text-white'
                                            : hasUnsavedChanges
                                                ? 'bg-brand-navy hover:bg-brand-deepBlue text-white'
                                                : 'bg-brand-grayish cursor-not-allowed text-brand-navy'
                                        }`}
                                >
                                    {saving ? 'Saving...' : hasUnsavedChanges ? 'Save Changes' : 'No Changes'}
                                </button>
                            </div>
                        </div>

                        <div className="p-6 max-h-[28rem] overflow-y-auto">
                            {editingData && selectedSection ? (
                                <ObjectEditor data={editingData} onChange={setEditingData} />
                            ) : (
                                <div className="text-center py-12">
                                    <div className="text-6xl mb-4">📝</div>
                                    <h3 className="text-lg font-bricolage font-medium text-brand-navy mb-2">
                                        Select a section to edit
                                    </h3>
                                    <p className="text-gray-500 font-spacegrotesk">
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
//         const firstSection = Object.keys(data[selectedPage])[0];
//         setSelectedSection(firstSection);
//         setEditingData(data[selectedPage][firstSection]);
//         setHasUnsavedChanges(false);
//     }, [selectedPage, data]);

//     useEffect(() => {
//         if (selectedSection && data[selectedPage] && data[selectedPage][selectedSection]) {
//             const hasChanges =
//                 JSON.stringify(editingData) !==
//                 JSON.stringify(data[selectedPage][selectedSection]);
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
//             const confirmChange = window.confirm(
//                 'You have unsaved changes. Are you sure you want to switch sections?'
//             );
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
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(newData),
//             });

//             if (response.ok) {
//                 setData(newData);
//                 setMessage('✅ Data saved successfully!');
//                 setTimeout(() => setMessage(''), 3000);
//             } else {
//                 throw new Error('Failed to save data');
//             }
//         } catch (error) {
//             setMessage('❌ Error saving data: ' + error.message);
//         }
//         setSaving(false);
//     };

//     const filteredSections = selectedPage
//         ? Object.keys(data[selectedPage]).filter((section) =>
//             section.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//         : [];

//     return (
//         <div className="min-h-screen bg-brand-gray font-onest">
//             {/* Header */}
//             <div className="bg-brand-navy text-brand-white shadow-around">
//                 <div className="max-w-7xl mx-auto px-6 py-5">
//                     <h1 className="text-3xl font-bold tracking-tight">Site Data Editor</h1>
//                     <p className="text-brand-whiteAlpha mt-1">
//                         Manage your website content with ease
//                     </p>
//                 </div>
//             </div>

//             <div className="max-w-7xl mx-auto py-6 grid grid-cols-12 gap-6">
//                 {/* Alerts */}
//                 {message && (
//                     <div
//                         className={`col-span-12 mb-4 p-4 rounded-lg shadow-around text-sm font-medium 
//             ${message.includes('Error')
//                                 ? 'bg-red-50 border border-red-200 text-red-700'
//                                 : 'bg-green-50 border border-green-200 text-green-700'
//                             }`}
//                     >
//                         {message}
//                     </div>
//                 )}

//                 {/* Pages Sidebar (Left) */}
//                 <div className="col-span-2">
//                     <div className="bg-white rounded-2xl shadow-around border px-3 py-5">
//                         <h2 className="text-lg font-bricolage mb-4 text-brand-deepBlue">
//                             Pages
//                         </h2>
//                         <div className="space-y-2">
//                             {Object.keys(data).map((pageName) => (
//                                 <button
//                                     key={pageName}
//                                     onClick={() => handlePageChange(pageName)}
//                                     className={`w-full text-left p-3 rounded-lg transition-all font-medium 
//                     ${selectedPage === pageName
//                                             ? 'bg-brand-blue text-white shadow-around'
//                                             : 'hover:bg-brand-gray hover:text-brand-navy border border-transparent'
//                                         }`}
//                                 >
//                                     {pageName
//                                         .replace(/([A-Z])/g, ' $1')
//                                         .replace(/^./, (str) => str.toUpperCase())}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Sections Sidebar (Middle) */}
//                 <div className="col-span-3">
//                     <div className="bg-white rounded-2xl shadow-around border p-5">
//                         <h2 className="text-md font-semibold mb-3 text-brand-deepBlue">
//                             Sections
//                         </h2>

//                         <div className="mb-3">
//                             <input
//                                 type="text"
//                                 value={searchTerm}
//                                 onChange={(e) => setSearchTerm(e.target.value)}
//                                 placeholder="Search sections..."
//                                 className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-blue"
//                             />
//                         </div>

//                         <div className="space-y-1 max-h-72 overflow-y-auto">
//                             {filteredSections.map((sectionName) => (
//                                 <button
//                                     key={sectionName}
//                                     onClick={() => handleSectionChange(sectionName)}
//                                     className={`w-full text-left p-2 text-sm rounded-md transition-colors 
//                     ${selectedSection === sectionName
//                                             ? 'bg-brand-gold text-brand-navy font-semibold'
//                                             : 'hover:bg-brand-gray hover:text-brand-deepBlue'
//                                         }`}
//                                 >
//                                     {sectionName
//                                         .replace(/([A-Z])/g, ' $1')
//                                         .replace(/^./, (str) => str.toUpperCase())}
//                                 </button>
//                             ))}

//                             {filteredSections.length === 0 && searchTerm && (
//                                 <p className="text-gray-500 text-sm p-2">
//                                     No sections match your search.
//                                 </p>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Main Editor (Right) */}
//                 <div className="col-span-7">
//                     <div className="bg-white rounded-2xl shadow-around border">
//                         <div className="p-6 border-b border-gray-200 flex justify-between items-center">
//                             <div>
//                                 <h2 className="text-xl font-semibold text-brand-navy">
//                                     {selectedPage && selectedSection && (
//                                         <>
//                                             {selectedPage
//                                                 .replace(/([A-Z])/g, ' $1')
//                                                 .replace(/^./, (str) => str.toUpperCase())}{' '}
//                                             →{' '}
//                                             {selectedSection
//                                                 .replace(/([A-Z])/g, ' $1')
//                                                 .replace(/^./, (str) => str.toUpperCase())}
//                                         </>
//                                     )}
//                                 </h2>
//                                 <p className="text-gray-500 text-sm">
//                                     Edit the content for this section
//                                 </p>
//                             </div>
//                             <div className="flex gap-3">
//                                 <button
//                                     onClick={() => {
//                                         setEditingData(data[selectedPage][selectedSection]);
//                                         setHasUnsavedChanges(false);
//                                         setMessage('🔄 Changes reset to original values');
//                                         setTimeout(() => setMessage(''), 3000);
//                                     }}
//                                     className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-sm"
//                                 >
//                                     Reset
//                                 </button>
//                                 <button
//                                     onClick={handleSave}
//                                     disabled={saving || !hasUnsavedChanges}
//                                     className={`px-6 py-2 rounded-lg font-medium text-sm transition-colors w-44
//                     ${saving
//                                             ? 'bg-brand-navy cursor-not-allowed text-white'
//                                             : hasUnsavedChanges
//                                                 ? 'bg-brand-navy hover:bg-brand-deepBlue text-white'
//                                                 : 'bg-brand-blue cursor-not-allowed text-white'
//                                         }`}
//                                 >
//                                     {saving
//                                         ? 'Saving...'
//                                         : hasUnsavedChanges
//                                             ? 'Save Changes'
//                                             : 'No Changes'}
//                                 </button>
//                             </div>
//                         </div>

//                         <div className="p-6 max-h-96 overflow-y-auto">
//                             {editingData && selectedSection ? (
//                                 <ObjectEditor data={editingData} onChange={setEditingData} />
//                             ) : (
//                                 <div className="text-center py-12">
//                                     <div className="text-6xl mb-4">📝</div>
//                                     <h3 className="text-lg font-medium text-brand-navy mb-2">
//                                         Select a section to edit
//                                     </h3>
//                                     <p className="text-gray-500">
//                                         Choose a page and section from the sidebar to get started.
//                                     </p>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DataEditor;