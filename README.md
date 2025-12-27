# Belle Weddings - Wedding Planner Website

A beautiful, elegant wedding planner website with a rustic-chic design matching the exact style from the provided images.

## Features

- **6 Complete Pages:**
  - Home - Hero section with call-to-action
  - About - Two-section layout with decorative elements
  - Services - Service listings with pricing
  - Testimonials - Client testimonials with images
  - Gallery - Image grid showcasing wedding memories
  - Contact - Contact form and information

## Design Elements

- **Color Scheme:**
  - Light beige/cream backgrounds (#F5F1EB)
  - Warm brown/orange accents (#C9A882)
  - Elegant typography with script fonts

- **Typography:**
  - Headings: Dancing Script & Playfair Display (elegant serif)
  - Body: Open Sans (clean sans-serif)

- **Key Features:**
  - Responsive design for all devices
  - Smooth scrolling navigation
  - Decorative beige shape overlays
  - Sticky header navigation
  - Interactive contact form
  - Chat icon functionality

## Getting Started

1. Open `index.html` in your web browser
2. Navigate through all pages using the header menu
3. Customize images by replacing the placeholder URLs in `styles.css`
4. Update contact information in the footer and contact page
5. Modify text content directly in the HTML files

## File Structure

```
├── index.html          # Home page
├── about.html          # About page
├── services.html       # Services page
├── testimonials.html   # Testimonials page
├── gallery.html        # Gallery page
├── contact.html        # Contact page
├── styles.css          # All styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization

### Images
Replace the placeholder image URLs in `styles.css` with your own images. Look for classes like:
- `.hero-image`
- `.about-image-1`, `.about-image-2`
- `.testimonial-image-1`, `.testimonial-image-2`
- `.gallery-item-1` through `.gallery-item-4`

### Colors
Modify the CSS variables in `styles.css`:
```css
:root {
    --color-beige: #F5F1EB;
    --color-brown: #C9A882;
    /* ... */
}
```

### Content
Edit the HTML files directly to update text, contact information, and service details.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- The website uses Google Fonts (Dancing Script, Playfair Display, Open Sans)
- Placeholder images are from Unsplash - replace with your own
- Contact form currently shows an alert - integrate with your backend as needed

