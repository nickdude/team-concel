# Development-Only Data Editor Setup

## ✅ Current Configuration

**Purpose**: Data editor for development use only  
**Storage**: Direct file system writes to `siteData.js`  
**Environment**: Development environment only  

## 🎯 How It Works

### **Development Mode**
- ✅ **Edit Content**: Full data editor functionality
- ✅ **Save Changes**: Direct writes to `src/data/siteData.js`
- ✅ **Automatic Backups**: Creates timestamped backup files
- ✅ **Image Management**: Upload and manage images
- ✅ **Real-time Updates**: Changes appear immediately

### **Production Mode** 
- ❌ **Will NOT Work**: File system is read-only
- 💡 **By Design**: You'll make changes in dev only
- 🚀 **Deployment**: Build with latest content

## 🔄 Workflow

1. **Development**:
   - Use data editor at `/admin/data-editor`
   - Edit content, upload images
   - Save changes (writes to file)

2. **Production Deployment**:
   - Build project with latest content
   - Deploy static build
   - Content is "baked in" to the build

3. **Content Updates**:
   - Make changes in development
   - Test locally
   - Deploy new build

## 📁 Files

- **`/src/data/siteData.js`** - Main content file
- **`/src/data/siteData.backup.*.js`** - Automatic backups
- **`/public/assets/`** - Image files
- **`/admin/data-editor`** - Content editor
- **`/admin/image-manager`** - Image management

## 💡 Benefits

- ✅ **Simple**: No database complexity
- ✅ **Fast**: Direct file operations
- ✅ **Version Control**: Content changes tracked in git
- ✅ **Reliable**: No external dependencies
- ✅ **Backups**: Automatic backup system

## ⚠️ Limitations

- Only works in development
- Production deployments are static
- Content updates require new deployment

This setup is perfect for sites where content doesn't change frequently and you prefer the simplicity of file-based content management!