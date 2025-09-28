import React from 'react';

const EditableField = ({ label, value, onChange, type = 'text' }) => {
    if (type === 'textarea' || (typeof value === 'string' && value.length > 100)) {
        return (
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
                <textarea
                    value={value || ''}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={4}
                    placeholder={`Enter ${label.toLowerCase()}`}
                />
            </div>
        );
    }

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
            <input
                type={type}
                value={value || ''}
                onChange={(e) => onChange(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder={`Enter ${label.toLowerCase()}`}
            />
        </div>
    );
};

const ArrayEditor = ({ label, items, onChange }) => {
    const addItem = () => {
        const newItems = [...items];
        if (items.length > 0 && typeof items[0] === 'object') {
            // Add an object with same structure as first item
            const template = { ...items[0] };
            Object.keys(template).forEach(key => {
                template[key] = '';
            });
            newItems.push(template);
        } else {
            newItems.push('');
        }
        onChange(newItems);
    };

    const removeItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        onChange(newItems);
    };

    const updateItem = (index, value) => {
        const newItems = [...items];
        newItems[index] = value;
        onChange(newItems);
    };

    return (
        <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
                <label className="block text-sm font-medium text-gray-700">
                    {label} (Array - {items.length} items)
                </label>
                <button
                    onClick={addItem}
                    className="px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-700"
                >
                    Add Item
                </button>
            </div>

            <div className="border border-gray-300 rounded-md p-4 bg-gray-50 max-h-80 overflow-y-auto">
                {items.map((item, index) => (
                    <div key={index} className="mb-4 p-4 bg-white rounded border relative">
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium text-gray-700">Item {index + 1}</h4>
                            <button
                                onClick={() => removeItem(index)}
                                className="px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600"
                            >
                                Remove
                            </button>
                        </div>

                        {typeof item === 'object' ? (
                            <ObjectEditor
                                data={item}
                                onChange={(newItem) => updateItem(index, newItem)}
                            />
                        ) : (
                            <input
                                type="text"
                                value={item}
                                onChange={(e) => updateItem(index, e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder={`Item ${index + 1}`}
                            />
                        )}
                    </div>
                ))}

                {items.length === 0 && (
                    <p className="text-gray-500 text-center py-4">No items yet. Click &quot;Add Item&quot; to get started.</p>
                )}
            </div>
        </div>
    );
};

const ObjectEditor = ({ data, onChange, label }) => {
    const updateField = (key, value) => {
        onChange({ ...data, [key]: value });
    };

    return (
        <div className={label ? "mb-6" : ""}>
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-3">
                    {label} (Object)
                </label>
            )}

            <div className={label ? "border border-gray-300 rounded-md p-4 bg-gray-50" : ""}>
                {Object.entries(data).map(([key, value]) => {
                    if (typeof value === 'string') {
                        return (
                            <EditableField
                                key={key}
                                label={key}
                                value={value}
                                onChange={(newValue) => updateField(key, newValue)}
                            />
                        );
                    } else if (Array.isArray(value)) {
                        return (
                            <ArrayEditor
                                key={key}
                                label={key}
                                items={value}
                                onChange={(newValue) => updateField(key, newValue)}
                            />
                        );
                    } else if (typeof value === 'object' && value !== null) {
                        return (
                            <ObjectEditor
                                key={key}
                                label={key}
                                data={value}
                                onChange={(newValue) => updateField(key, newValue)}
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export { EditableField, ArrayEditor, ObjectEditor };