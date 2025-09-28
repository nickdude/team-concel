# Site Data Editor

A powerful, user-friendly interface to edit your website's content without touching code.

## Features

- **Visual Data Editor**: Edit all your website content through a clean, intuitive interface
- **Page & Section Navigation**: Easily browse through different pages and sections
- **Real-time Updates**: Changes are saved directly to your `siteData.js` file
- **Data Type Support**: Handles strings, arrays, objects, and nested structures
- **Search Functionality**: Quickly find specific sections
- **Change Tracking**: See unsaved changes and reset functionality
- **Automatic Backups**: Creates backups before saving changes
- **Authentication**: Simple password protection for admin access

## Getting Started

### 1. Access the Admin Panel

Navigate to `/admin` in your browser to access the admin dashboard.

**Default Password**: `admin123`

### 2. Using the Data Editor

1. Go to `/admin/data-editor` or click "Data Editor" from the admin dashboard
2. Select a page from the sidebar (e.g., Home Page, Practice Page, etc.)
3. Choose a section within that page (e.g., Hero, Card Section, FAQ Section)
4. Edit the content using the form fields
5. Click "Save Changes" to update your website

### 3. Content Types

The editor supports various content types:

- **Text Fields**: Simple text inputs for short content
- **Text Areas**: Multi-line inputs for longer descriptions
- **Arrays**: Lists of items (logos, testimonials, FAQs, etc.)
- **Objects**: Structured data with multiple properties
- **Nested Structures**: Complex data with multiple levels

### 4. Making Changes

1. **Simple Text**: Just type in the input field
2. **Arrays**: Use "Add Item" and "Remove" buttons to manage list items
3. **Objects**: Edit individual properties within object structures
4. **Save**: Always click "Save Changes" to apply your edits

## File Structure

```
src/
├── app/
│   ├── admin/
│   │   ├── layout.js          # Admin authentication wrapper
│   │   ├── page.js            # Admin dashboard
│   │   └── data-editor/
│   │       └── page.js        # Main data editor interface
│   └── api/
│       └── save-data/
│           └── route.js       # API endpoint for saving data
├── components/
│   └── admin/
│       └── DataEditorComponents.js  # Reusable editor components
└── data/
    └── siteData.js           # Your website's content data
```

## Security

- Simple password authentication (`admin123` by default)
- Session-based login stored in localStorage
- Automatic file backups before changes
- Input validation and error handling

## Backup & Recovery

The system automatically creates backups of your `siteData.js` file before making changes:
- Backups are stored as `siteData.backup.[timestamp].js`
- You can manually restore from backups if needed

## Customization

### Change the Admin Password

1. Edit `/src/app/admin/layout.js`
2. Find the line: `if (password === 'admin123')`
3. Replace `'admin123'` with your desired password

### Add New Content Types

1. Edit your `siteData.js` structure
2. The editor automatically adapts to new data structures
3. Supported types: strings, arrays, objects, nested combinations

### Style Customization

The editor uses Tailwind CSS classes. You can customize the appearance by editing the component files in `/src/components/admin/` and `/src/app/admin/`.

## Troubleshooting

### Common Issues

1. **Changes not saving**: Check browser console for errors
2. **Authentication issues**: Clear localStorage and try again
3. **Data corruption**: Restore from backup files in `/src/data/`

### Error Recovery

If something goes wrong:
1. Check the backup files in your data folder
2. Restore the most recent backup
3. Clear browser cache and localStorage
4. Contact support if issues persist

## API Endpoints

- `POST /api/save-data`: Saves updated site data
- `GET /api/save-data`: Returns file information and last modified date

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Tips for Best Results

1. **Always save changes** before switching sections
2. **Test your changes** on the live site after saving
3. **Use descriptive content** that matches your brand voice
4. **Keep backups** of important content manually
5. **Preview changes** before making them live

## Need Help?

The data editor is designed to be intuitive, but if you need assistance:
1. Check this documentation
2. Look at the existing content structure for examples
3. Use the reset button to undo changes in a section
4. Contact your developer for advanced customizations