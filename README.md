# Dynamic Table with Variant Management
A React-based dynamic table interface for managing product variants. This project allows users to manage product variants with features like drag-and-drop rows, image uploads, and filter management.

## Features
- Dynamic variant column management
- Drag and drop row reordering
- Image upload for variants
- Product filter management
- Add/delete rows and variants
- Interactive UI with modern design

## Prerequisites
Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (version 14.0 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Installation

1. **Clone the repository:**
   ```bash
   git clone [your-repository-url]
   cd [project-directory]
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install required packages:**
   ```bash
   npm install react lucide-react
   ```

## Project Structure
```
src/
├── components/
│   └── DynamicTable.js
├── assets/
│   └── img1.jpg
├── styles/
│   └── main.css
└── App.js
```

## Usage
1. **Start the development server:**
   ```bash
   npm start
   ```
   This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

2. **Build for production:**
   ```bash
   npm run build
   ```
   This creates an optimized production build in the `build` folder.

## Features Guide

### Adding Variants
- Click the '+' button in the last column to add a new variant column
- Each variant can have its own image and name

### Managing Rows
- Click the '+' button at the bottom to add a new row
- Drag rows to reorder them
- Delete rows using the trash icon (except the first row)

### Product Filters
- Click "Add Product Filter" to add filters to each row
- Enter filter text in the prompt
- Filters are displayed as tags in the Product Filter column

### Image Management
- Click the image placeholder to upload an image for each variant
- Supported formats: JPG, PNG, GIF
- Image name is displayed below the uploaded image

### Variant Management
- Click the vertical dots menu to show delete option for variants
- Primary variant cannot be deleted
- Deleting a variant will remove that column from all rows

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

## Support
For support, please open an issue in the GitHub repository or contact [your-contact-info].