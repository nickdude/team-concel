# Image Management System

A complete image upload, management, and integration system for your website admin panel.

## 🎯 Features

### ✅ **Upload Images**
- Drag & drop interface
- File picker with validation
- Support for JPG, PNG, GIF, WebP, SVG
- 5MB file size limit
- Automatic folder organization

### ✅ **Organize Images**
- Predefined folders: logos, icons, authors, banners, backgrounds
- Custom upload folders
- Automatic timestamped filenames to prevent conflicts

### ✅ **Image Gallery**
- Visual browser for all uploaded images
- Filter by folder
- Click to select images
- Copy URLs to clipboard
- Delete images with confirmation

### ✅ **Data Editor Integration**
- Automatic detection of image fields
- Inline image upload in data editor
- Preview existing images
- Replace images with new uploads

### ✅ **Manual URL Input**
- Support for external image URLs
- Manual path input for existing images
- Real-time preview

## 📂 File Structure

```
src/
├── app/
│   ├── admin/
│   │   └── image-manager/
│   │       └── page.js                 # Image Manager main page
│   └── api/
│       ├── upload-image/
│       │   └── route.js                # Image upload endpoint
│       ├── list-images/
│       │   └── route.js                # List all images
│       └── delete-image/
│           └── route.js                # Delete images
└── components/
    └── admin/
        ├── ImageUploader.js            # Upload component
        ├── ImageGallery.js             # Gallery browser
        └── DataEditorComponents.js     # Updated with image support
```

## 🚀 How to Use

### 1. **Access Image Manager**
- Go to `/admin/image-manager`
- Or click "Image Manager" from admin dashboard
- Or click "Images" in admin navigation

### 2. **Upload New Images**
- Select folder (logos, icons, etc.)
- Drag & drop images or click to browse
- Images are automatically saved and organized

### 3. **Manage Existing Images**
- Browse images in the gallery
- Filter by folder
- Click to select and copy URLs
- Hover to see delete and copy options

### 4. **Use in Data Editor**
- Image fields are automatically detected
- Look for fields containing:
  - `src`, `image`, `logo`, `icon`, `photo`, `avatar`
  - Paths like `/assets/...`
- Upload new images directly in the editor
- Replace existing images easily

### 5. **Manual Image Paths**
- Enter URLs directly in any image field
- Supports both external URLs and local paths
- Real-time preview shows current image

## 🔧 Technical Details

### **Upload Process**
1. File validation (type, size)
2. Secure filename generation (timestamp + sanitized name)
3. Folder organization
4. Save to `/public/assets/{folder}/`
5. Return public URL path

### **Image Detection**
The system automatically detects image fields based on:
- Field names containing: `src`, `image`, `logo`, `icon`, `photo`, `avatar`
- Values containing image paths or extensions
- Context within the data structure

### **Folder Structure**
```
public/
└── assets/
    ├── logos/          # Company/brand logos
    ├── icons/          # UI icons and small graphics
    ├── authors/        # Author photos and avatars
    ├── banners/        # Hero banners and large images
    ├── backgrounds/    # Background images
    └── uploads/        # General uploads
```

### **Security Features**
- File type validation
- Size limits (5MB max)
- Secure filename sanitization
- Path traversal prevention
- Delete confirmation

## 🎨 Image Field Detection Examples

The system will automatically show upload interface for:

```javascript
// These fields will show image uploaders:
{
  "src": "/assets/logos/logo1.svg",           // ✅ Contains 'src'
  "authorImage": "/assets/author1.jpg",       // ✅ Contains 'image'
  "logo": "/assets/company-logo.png",         // ✅ Contains 'logo'
  "heroBackground": "/assets/hero-bg.jpg",    // ✅ Image file extension
  "companyIcon": "/assets/icon.svg"           // ✅ Contains 'icon'
}

// These will remain as text fields:
{
  "title": "Company Name",                    // ❌ Regular text
  "description": "About our company...",      // ❌ Regular text
  "url": "https://example.com"               // ❌ Regular URL
}
```

## 🔄 Workflow Examples

### **Replace Logo in Header**
1. Go to Data Editor → Home Page → Hero Section
2. Find the "logos" array or "logo" field
3. Image uploader appears automatically
4. Upload new logo or paste new URL
5. Save changes

### **Update Author Photos**
1. Go to Data Editor → Any Page → Blog Section
2. Find testimonials or author data
3. Look for "authorImage" fields
4. Upload new photos to "authors" folder
5. Images automatically replace old ones

### **Add New Icons**
1. Go to Image Manager
2. Select "icons" folder
3. Upload new icon files
4. Use in Data Editor by copying URLs
5. Paste URLs into icon fields

## 📱 UI Components

### **ImageUploader Component**
- Drag & drop zone
- File picker button
- Image preview with remove option
- Manual URL input
- Upload progress indicator
- Folder selection

### **ImageGallery Component**
- Grid layout with hover effects
- Folder filtering
- Click to select
- Delete and copy actions
- Responsive design

### **Data Editor Integration**
- Seamless field detection
- Inline upload without leaving editor
- Preview current images
- Replace functionality

## 🚨 Production Considerations

### **File Storage**
- Current: Local file system (works in development)
- Production: Consider cloud storage (AWS S3, Cloudinary, etc.)

### **CDN Integration**
- Add CDN support for better performance
- Optimize images automatically
- Generate multiple sizes

### **Database Storage**
- Optional: Store image metadata in database
- Track usage and references
- Enable advanced search

## 💡 Best Practices

1. **Use appropriate folders** for organization
2. **Optimize images** before uploading (use tools like TinyPNG)
3. **Use descriptive filenames** for better organization
4. **Keep backups** of important images
5. **Test images** on different screen sizes
6. **Use WebP format** for better compression when possible

## 🔧 Customization

### **Add New Folders**
Edit the folders array in `ImageManager` component:
```javascript
const folders = [
    { value: 'uploads', label: 'General Uploads' },
    { value: 'logos', label: 'Logos' },
    { value: 'your-folder', label: 'Your Custom Folder' }
];
```

### **Change File Size Limits**
Modify in `/api/upload-image/route.js`:
```javascript
const maxSize = 10 * 1024 * 1024; // 10MB
```

### **Add New File Types**
Update allowed types in upload API:
```javascript
const allowedTypes = [
    'image/jpeg', 'image/jpg', 'image/png', 
    'image/gif', 'image/webp', 'image/svg+xml',
    'image/bmp' // Add new types
];
```

The image management system is now fully integrated and ready to use! 🎉