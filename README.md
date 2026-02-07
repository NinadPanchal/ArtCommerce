# ArtCommerce

A production-ready digital marketplace for buying and selling art, commissioning creative services, and booking educational workshops.

## 🎨 Overview

ArtCommerce is a unified platform that allows users to:
- Purchase physical art products (paintings, sculptures, handcrafted items)
- Buy digital art and design resources
- Order art-based merchandise (t-shirts, mugs, tote bags)
- Commission artists for custom work
- Book art workshops and educational programs

Built with Next.js and designed for competition judging, this project demonstrates professional web architecture, clean UI/UX design, and scalability.

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Inter, Playfair Display)
- **Images**: Unsplash API (for demo purposes)

## 📁 Project Structure

```
ArtCommerce/
├── app/                          # Next.js app directory
│   ├── layout.tsx                # Root layout with navigation
│   ├── page.tsx                  # Homepage
│   ├── e-commerce/               # E-commerce section
│   │   ├── physical-art/
│   │   ├── merchandise/
│   │   └── digital-art/
│   ├── creative-services/        # Services section
│   │   ├── commissions/
│   │   ├── limited-edition/
│   │   ├── art-services/
│   │   └── educational/
│   ├── explore/                  # Browse all items
│   ├── artist/[id]/              # Artist profiles
│   ├── cart/                     # Shopping cart
│   ├── auth/                     # Authentication
│   └── become-artist/            # Artist application
├── components/                   # Reusable components
│   ├── layout/                   # Header, Footer
│   ├── ui/                       # Button, Card, Modal, Input
│   ├── product/                  # Product components
│   ├── service/                  # Service components
│   └── home/                     # Homepage components
├── data/                         # Mock JSON data
│   ├── products.json
│   ├── services.json
│   └── artists.json
└── public/                       # Static assets
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ and npm

### Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📄 Available Pages

### E-Commerce
- `/e-commerce/physical-art` - Original artworks, prints, handcrafted items
- `/e-commerce/merchandise` - T-shirts, mugs, bags, home décor
- `/e-commerce/digital-art` - Digital downloads, templates, resources

### Creative Services
- `/creative-services/commissions` - Custom art commissions
- `/creative-services/limited-edition` - Limited edition artworks
- `/creative-services/art-services` - Professional design services
- `/creative-services/educational` - Workshops and courses

### Other
- `/explore` - Browse all products and services
- `/artist/[id]` - Artist profile pages
- `/cart` - Shopping cart
- `/auth/login` - User login
- `/auth/signup` - User registration
- `/become-artist` - Artist application

## 🎯 Key Features

✅ **Clean Minimalist Design** - Gallery-style whitespace, professional aesthetics  
✅ **Component-Based Architecture** - Reusable, modular components  
✅ **Fully Responsive** - Mobile-first design  
✅ **SEO Optimized** - Proper meta tags, semantic HTML  
✅ **Modal System** - Product details, service requests  
✅ **Unified Cart** - Physical, digital, and service items  
✅ **Category Filtering** - Dynamic filtering on all pages  
✅ **Search Functionality** - Global search on Explore page  
✅ **Artist Profiles** - Portfolio galleries, products, services  

## 🎨 Design Language

- **Color Palette**: Neutral (blacks, grays) with gold accents
- **Typography**: Playfair Display (headings), Inter (body)
- **Spacing**: Generous whitespace for gallery feel
- **Interactions**: Subtle hover effects, no excessive animations
- **Philosophy**: Professional, hand-designed, not template-based

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy with default settings (Next.js auto-detected)

### Build for Production

```bash
npm run build
npm start
```

## 📦 Mock Data

The project uses JSON files for demonstration:
- `data/products.json` - 8 sample products (physical, digital, merchandise)
- `data/services.json` - 6 sample services (commissions, workshops, etc.)
- `data/artists.json` - 3 artist profiles

## 🔮 Future Enhancements

- Backend API integration (Node.js/Python)
- Payment gateway (Razorpay/Stripe)
- Real-time chat with artists
- Advanced search and filters
- User dashboard and order history
- Flutter mobile app conversion

## 📝 License

This project is created for academic competition purposes.

## 👤 Author

Created for the ArtCommerce competition project.

---

**Note**: This is a demonstration project with mock data. For production use, integrate with a real backend, authentication system, and payment gateway.
