// App
export const APP_NAME = "Devnandan Interiors";
export const APP_TAGLINE = "Transforming Spaces with Precision 3D Design";
export const APP_VERSION = "1.0.0";

// API
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

// Contact
export const CONTACT_EMAIL = "test@devnandaninteriors.com";
export const CONTACT_PHONE = "085116 98769";
export const ADDRESS = "H/ 1402, Orchid Blues Rd, near Applewood, Nandanbag Society, Ullaria, Bopal, Shela, Ahmedabad, Gujarat 380057";
export const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/gbKAkH76AQcjLdw7A";

// Social
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/devnandan_interiors_90/",
  youtube:"https://www.youtube.com/@devnandaninteriors2748",
  facebook: "https://www.facebook.com/devnandaninteriors90/",
  whatsapp: "https://wa.me/919099011688",
  linkedin: "https://www.linkedin.com/in/devnandan-interiors-238927243/",
  indiamart: "https://www.indiamart.com/devnandan-interiors/",
};

// Navigation
export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "/contact" },
];

// Services offered
export const SERVICES = [
  {
    id: "3d-visualization",
    title: "3D Visualization",
    description: "Photorealistic renders of interior spaces before construction begins.",
  },
  {
    id: "interior-design",
    title: "Interior Design",
    description: "End-to-end interior design solutions tailored to your lifestyle and taste.",
  },
  {
    id: "space-planning",
    title: "Space Planning",
    description: "Optimized floor plans and furniture layouts for functional, beautiful spaces.",
  },
  {
    id: "walkthrough",
    title: "3D Walkthrough",
    description: "Immersive animated walkthroughs to experience your space before it's built.",
  },
  {
    id: "modular-design",
    title: "Modular Furniture Design",
    description: "Custom modular kitchen, wardrobe, and furniture design with 3D previews.",
  },
  {
    id: "renovation",
    title: "Renovation Consulting",
    description: "Expert guidance on redesigning and renovating existing spaces.",
  },
];

// Portfolio categories / project types
export const PORTFOLIO_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "kitchen", label: "Kitchen" },
  { id: "bedroom", label: "Bedroom" },
  { id: "living-room", label: "Living Room" },
  { id: "office", label: "Office" },
];

// Stats / highlights shown on homepage
export const STATS = [
  { value: "200+", label: "Projects Completed" },
  { value: "8+", label: "Years of Experience" },
  { value: "150+", label: "Happy Clients" },
  { value: "15+", label: "Design Awards" },
];
