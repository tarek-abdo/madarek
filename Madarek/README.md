# Madarak Center for the Study of Civilizational Islam

A modern, responsive blog website built with Next.js and Tailwind CSS, featuring dark/light mode and stunning design for the Madarak Center.

## 🌟 Features

### Design & User Experience
- **Stunning Modern Design** with beautiful gradients and typography
- **Dark/Light Mode** toggle with smooth transitions
- **Fully Responsive** design that works on all devices
- **Smooth Animations** and hover effects throughout
- **Professional Color Scheme** using the center's brand colors

### Home Page
- **Featured Image Slider** showcasing top stories and main articles
- **Latest Content Section** with recent blog posts and studies
- **Most Read Content** highlighting popular articles
- **Post-Deluge Magazine Section** with current and previous issues
- **Scrollable Authors Section** featuring researchers and scholars
- **Event Schedule Section** (placeholder for future events)

### Blog & Content
- **Category Pages** for different study areas (Islamic Studies, Critical Perspectives, etc.)
- **Individual Blog Posts** with featured images and author information
- **Related Articles** sidebar with latest updates
- **Most Read Articles** section below each post
- **Author Profiles** with publication counts and specializations

### Navigation & Structure
- **Multi-level Navigation** with dropdown menus for subcategories
- **Sticky Header** with theme toggle and mobile menu
- **Breadcrumb Navigation** for easy site exploration
- **Footer** with quick links and contact information

### Pages
- **Home Page** - Main landing page with featured content
- **About Page** - Vision, mission, objectives, and team information
- **Contact Page** - Contact information and "Write with Us" section
- **Publications Page** - Post-Deluge Magazine and books
- **Events Page** - Seminars, conferences, and news
- **Category Pages** - Organized content by topic
- **Blog Post Pages** - Individual article pages

## 🎨 Design System

### Colors
- **Primary**: #FF7633 (Orange)
- **Secondary**: #0F534F (Green - official theme color)
- **Magazine Primary**: #294433
- **Magazine Secondary**: #CB7E61
- **Dark Mode**: Custom dark theme with proper contrast

### Typography
- **Font Family**: Inter (sans-serif) for body text
- **Headings**: Bold weights with proper hierarchy
- **Arabic Support**: Ready for Arabic text integration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd madarak
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
madarak/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.js          # Root layout with theme provider
│   │   ├── page.js            # Home page
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   └── post/[slug]/       # Dynamic blog post pages
│   ├── components/            # Reusable components
│   │   ├── Header.js          # Navigation header
│   │   ├── Footer.js          # Site footer
│   │   ├── ThemeProvider.js   # Dark/light mode provider
│   │   ├── FeaturedSlider.js  # Home page slider
│   │   ├── LatestContent.js   # Latest articles component
│   │   ├── MostReadContent.js # Popular articles component
│   │   ├── PostDelugeSection.js # Magazine section
│   │   ├── AuthorsSection.js  # Researchers showcase
│   │   └── EventSchedule.js   # Events section
│   ├── styles/                # Global styles
│   │   └── globals.css        # Tailwind CSS and custom styles
│   └── data/                  # Mock data (future)
├── public/                    # Static assets
├── tailwind.config.js         # Tailwind configuration
├── next.config.js             # Next.js configuration
└── package.json               # Dependencies and scripts
```

## 🎯 Key Components

### ThemeProvider
- Manages dark/light mode state
- Persists theme preference in localStorage
- Provides theme context to all components

### Header
- Responsive navigation with dropdown menus
- Theme toggle button
- Mobile-friendly hamburger menu
- Sticky positioning

### FeaturedSlider
- Auto-rotating image slider
- Navigation arrows and dots
- Progress bar indicator
- Responsive design

### Blog Components
- LatestContent: Grid layout for recent posts
- MostReadContent: Featured layout for popular posts
- PostDelugeSection: Magazine showcase with editorial board

## 🔧 Customization

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.js` file
3. Import and use existing components
4. Add navigation links in `Header.js`

### Modifying Colors
1. Update `tailwind.config.js` color definitions
2. Modify CSS variables in `globals.css`
3. Update component classes as needed

### Adding Content
1. Update mock data in component files
2. Create new data files in `src/data/` for larger datasets
3. Implement dynamic data fetching for production

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

- Toggle button in header
- Smooth transitions between themes
- Proper contrast ratios for accessibility
- Persistent user preference

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js
3. Deploy with one click

### Other Platforms
1. Build the project: `npm run build`
2. Start production server: `npm run start`
3. Deploy the `.next` folder to your hosting platform

## 📄 License

This project is licensed under the ISC License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: info@madarak.org
- Website: [madarak.org](https://madarak.org)

---

**Built with ❤️ for the Madarak Center for the Study of Civilizational Islam** 