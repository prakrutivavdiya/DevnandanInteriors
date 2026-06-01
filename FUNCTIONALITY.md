# Devnandan Interiors — Website Functionality Reference

> Reference based on [Unity Interiors](https://unityinteriors.com/). Use this doc to plan and build equivalent or improved features.

---

## 1. Navigation / Header

| Feature | Details |
|---|---|
| Logo | Top-left, links to home |
| Desktop nav | Horizontal links: Home, Services, About, Portfolio, Contact |
| Services dropdown | Submenu listing individual services on hover |
| Contact info in header | Phone number + opening hours shown in top bar |
| Sticky header | Nav stays fixed on scroll |
| Mobile hamburger menu | Toggles full-screen or slide-in nav on small screens |
| Search icon | Opens a search overlay |

---

## 2. Hero / Banner Section

| Feature | Details |
|---|---|
| Full-width image slider | Auto-advances every ~9s, covers full viewport height |
| Overlay text | Bold heading + short tagline on each slide |
| CTA button | e.g. "View Our Work" or "Get a Quote" — links to portfolio/contact |
| Slide indicators | Circular dot bullets at bottom with animated fill on active slide |
| Transition animation | Smooth fade or slide between images |

**Slides to consider:**
- Living room render (Residential)
- Commercial space render
- Exterior / building visualization

---

## 3. Services Section (Homepage teaser)

| Feature | Details |
|---|---|
| 3-column card grid | Icon or image + title + short description per card |
| Hover effect | Card lifts (box-shadow) or image zooms slightly |
| CTA per card | "Read More" or "Learn More" button linking to service detail |
| "View All Services" link | Below the grid, links to /services page |

**Service cards to include:**
1. 3D Visualization
2. Interior Design
3. Architectural Planning
4. 3D Walkthrough / Animation
5. Modular Furniture Design
6. Space Planning

---

## 4. Portfolio / Projects Section

### 4a. Homepage Teaser
- Show 6–8 best project thumbnails in a grid
- "View All Projects" CTA at bottom

### 4b. Full Portfolio Page (`/portfolio`)

| Feature | Details |
|---|---|
| Category filter tabs | All / Residential / Commercial / Kitchen / Bedroom / Office / Exterior |
| Masonry or uniform grid | Thumbnail images in 3–4 columns |
| Hover overlay | Dark overlay appears with project title + category tag |
| Quick view / Lightbox | Click opens full-resolution image in a modal/overlay |
| Project detail page | Title, category, description, full image gallery |
| Load More button | Loads additional projects instead of pagination |

---

## 5. About Section (Homepage teaser + full page)

| Feature | Details |
|---|---|
| Two-column layout | Left: image, Right: text content |
| Tagline + paragraph | Company story / philosophy |
| Stats row | e.g. 200+ Projects, 8+ Years, 150+ Clients (animated count-up on scroll) |
| CTA button | "Know More About Us" → /about |

---

## 6. Stats / Achievements Bar

Displayed as a full-width dark/colored band:

| Stat | Example Value |
|---|---|
| Projects Completed | 200+ |
| Years of Experience | 8+ |
| Happy Clients | 150+ |

- Numbers animate (count up) when scrolled into view

---

## 7. Testimonials Section

| Feature | Details |
|---|---|
| Carousel / slider | Cycles through client reviews automatically |
| Client photo | Round avatar image |
| Client name + location | Below the review text |
| Star rating | 5-star visual indicator |
| Prev / Next controls | Arrow buttons to manually navigate |

---

## 8. FAQ Section

| Feature | Details |
|---|---|
| Accordion layout | Click question to expand answer |
| Toggle icon | `+` / `−` indicator on right side |
| Smooth animation | Height animates open/close |

**Sample questions:**
- What areas do you serve?
- How long does a typical interior project take?
- Do you provide 3D visualization before work begins?
- What is your pricing model?

---

## 9. Contact / Quote Form

| Feature | Details |
|---|---|
| Form fields | Name, Phone, Email, Service (dropdown), Message |
| Service dropdown | Lists all services for easy selection |
| Submit button | Styled CTA button |
| Validation | Required fields, email format check |
| Success message | Inline confirmation after submission |
| Map embed | Google Maps iframe showing studio location |
| Contact details block | Address, phone, email, working hours |

---

## 10. Floating / Sticky Elements

| Feature | Details |
|---|---|
| WhatsApp button | Fixed bottom-right, opens WhatsApp chat |
| Scroll-to-top button | Appears after scrolling down, smooth scrolls back to top |
| Sticky header | Nav sticks on scroll with slight shadow |

---

## 11. Footer

| Column | Content |
|---|---|
| About | Logo, short brand description, social media icons |
| Services | Quick links to each service |
| Portfolio | Links to portfolio categories |
| Contact | Address, phone, email, Google Maps link |

**Social icons:** Instagram, YouTube, Facebook, WhatsApp, LinkedIn, IndiaMart

**Bottom bar:** Copyright · Privacy Policy · Terms of Use

---

## 12. UI / Visual Design Notes

| Element | Reference / Recommendation |
|---|---|
| Color scheme | Dark primary (black/charcoal) + gold/warm accent, white backgrounds |
| Fonts | Heading: Playfair Display or similar serif; Body: Inter or Karla |
| Spacing | Generous padding (80–100px section padding) |
| Image quality | Use high-res 3D renders; lazy-load for performance |
| Animations | Fade-in on scroll (AOS or Framer Motion), count-up for stats |
| Border radius | Minimal — sharp edges suit the architecture/design aesthetic |
| Buttons | Solid fill with hover invert (filled → outlined or vice versa) |

---

## 13. Pages Required

| Page | Route |
|---|---|
| Home | `/` |
| About | `/about` |
| Services | `/services` |
| Portfolio | `/portfolio` |
| Contact | `/contact` |
| (Optional) Project Detail | `/portfolio/:id` |

---

## 14. Third-Party / Integrations to Consider

| Tool | Purpose |
|---|---|
| EmailJS or Formspree | Contact form submissions without a backend |
| Google Maps Embed API | Map on contact page |
| AOS.js or Framer Motion | Scroll animations |
| Swiper.js | Hero slider + testimonials carousel |
| yet-another-react-lightbox | Portfolio image lightbox / quick view |
| React Router | Client-side routing |
