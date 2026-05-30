# Image Contracting - Site Specification

## Business Details
- **Business Name:** Image Contracting
- **Trade:** General Contracting / Home Remodeling
- **Service Area:** Bedford, Manchester, Amherst, Nashua, Concord, and Seacoast region of Southern New Hampshire
- **Phone:** 603-716-1522
- **Email:** info@imagecontracting.com (general), projects@imagecontracting.com (contact page)
- **Address:** Bedford, NH 03110
- **License:** NH License #123456
- **Insurance:** Fully Insured & Bonded ($2M)
- **BBB:** A+ Accredited
- **Hours:** Mon-Fri 8:00 AM - 6:00 PM, Sat 9:00 AM - 1:00 PM
- **Stats:** 15+ years, 500+ projects, 5-star rated, 100% satisfaction guarantee
- **Tagline:** Built right. Finished clean.

## Navigation Order
1. Services
2. Projects
3. About
4. Reviews
5. Contact

Header CTA: "Get a Free Estimate" button + phone number (click-to-call)

## Pages / Routes

### 1. Home (`/`)
**Stitch Screen:** "Home - Image Contracting"
**Sections (in order):**
1. **Navigation** - Fixed top nav with logo, links, phone, CTA button
2. **Hero** - Asymmetric split: headline "Built right. Finished clean." + hero image (luxury kitchen) + 100% satisfaction badge
3. **Trust Strip** - Licensed, Insured, 15+ Years, 500+ Projects, 5-Star Rated
4. **Services Bento Grid** - "Our Expertise" / "Comprehensive Contracting Services" - Whole Home Remodeling (large), Kitchens, Bathrooms, Additions (small tiles), + "Ready to start?" CTA tile
5. **The Image Standard** - Dark section with 4 values: On-Time, Transparent Pricing, Clean Job Sites, Warrantied Work
6. **Featured Projects Gallery** - 4 project cards (Minimalist Master Bath/Bedford, Great Room Expansion/Manchester, Culinary Suite/Amherst, Modern Facade Reveal/Nashua)
7. **Our Process** - 4 steps: Consult, Estimate, Build, Walkthrough
8. **Testimonials** - Rotating slider (3 testimonials)
9. **Closing CTA Band** - "Ready to transform your home?" with two buttons
10. **Footer** - Logo, description, social links, Services nav, Company nav, Location info, hours, phone, copyright

### 2. Services (`/services`)
**Stitch Screen:** "Services - Image Contracting"
**Sections:**
1. Navigation
2. Hero Header - "Our Services" with description
3. Services Bento Grid - 6 services:
   - Kitchen Remodeling (large, col-7)
   - Bathroom Remodeling (col-5)
   - Home Additions (col-4)
   - Roofing & Exteriors (col-8, horizontal layout)
   - Decks & Outdoor (col-6)
   - Commercial Build-Outs (col-6)
4. CTA Band - "Ready to Build Your Vision?"
5. Footer

### 3. About (`/about`)
**Stitch Screen:** "About - Image Contracting"
**Sections:**
1. Navigation
2. Hero - "Built on Trust" with founder image + "15+ Years of Excellence" badge
3. Company Story - "The Image Standard" - founding story, philosophy
4. Core Values Grid - Quality, Communication, Cleanliness, Warranty
5. Credentials (dark section) - NH License, Fully Insured & Bonded ($2M), A+ BBB, Service Area map
6. CTA Band - "Ready to build something permanent?"
7. Footer

### 4. Projects (`/projects`)
**Stitch Screen:** "Projects - Image Contracting"
**Sections:**
1. Navigation
2. Hero - "Portfolio" / "OUR WORK"
3. Filterable Gallery with categories: All, Kitchens, Bathrooms, Additions, Roofing, Exteriors, Commercial
   - The Bedford Contemporary Kitchen (kitchens, large)
   - Apex Office Plaza (commercial)
   - Slate & Oak Master Spa (bathrooms)
   - Glass Sunroom Extension (additions)
   - Charcoal Standing Seam (roofing)
   - The Granite Ridge Estate (exteriors, full-width)
4. CTA Band - "Ready to Build Your Vision?"
5. Footer

### 5. Reviews (`/reviews`)
**Stitch Screen:** "Reviews - Image Contracting"
**Sections:**
1. Navigation
2. Header - "WHAT OUR CLIENTS SAY" with "VIEW OUR GOOGLE REVIEWS" link
3. Review Grid (3x2) - 6 reviews, all 5-star:
   - Robert Harrison, Bedford NH
   - Sarah Jenkins, Manchester NH
   - David Miller, Amherst NH
   - Elena Rossi, Nashua NH
   - Mark Stevens, Bedford NH
   - Jessica Thorne, Londonderry NH
4. CTA Section - "READY TO START YOUR PROJECT?" with stats (15+ years, 500+ projects)
5. Footer

### 6. Kitchen Remodeling (`/services/kitchen-remodeling`)
**Stitch Screen:** "Kitchen Remodeling - Image Contracting"
**Sections:**
1. Navigation
2. Hero - "Kitchen Remodeling" with asymmetric hero image
3. What's Included (6 items): Layout Design, Custom Cabinetry, Lighting & Electrical, Surface Finishes, Luxury Fixtures, Final Commissioning
4. Our Proven Process Timeline - 4 steps: Design & Specs (Wk 1-2), Demolition (Wk 3), Build Phase (Wk 4-8), Final Reveal (Wk 9)
5. Recent Transformation Gallery - Before/After with detail shots
6. FAQ Accordion (4 questions)
7. Closing CTA - "Ready to Build the Heart of Your Home?"
8. Footer

### 7. Contact (`/contact`)
**Stitch Screen:** "Contact - Image Contracting"
**Sections:**
1. Navigation
2. Hero - "STRATEGIC PLANNING FOR SUPERIOR CRAFTSMANSHIP."
3. Two-column layout:
   - Left (col-7): Estimate form (Full Name, Phone, Email, Project Service dropdown, Project Address, Project Details, Submit)
   - Right (col-5): Direct Contact info (Phone, Email, Hours, Service Area) + Map
4. Closing CTA Band - "Integrity in Every Inch."
5. Footer

## Open Questions
- Email inconsistency: `info@imagecontracting.com` on about/reviews footer vs `projects@imagecontracting.com` on contact page. Using `info@` as primary.
- Address varies: "123 Main St" on projects footer vs "123 Construction Way" on reviews footer. Both are placeholder-style. Flagging for client.
- Hours vary: "8am-5pm" on home footer vs "8am-6pm + Sat 9am-1pm" on contact page. Using contact page hours as authoritative.
- Google Review link not provided in Stitch design - needs client input.
- GHL webhook URLs needed from client.
- Primary domain needed from client.
- Social media links are placeholders (Material Symbols icons only, no actual URLs).

## Image Assets
All images are Stitch-generated via `lh3.googleusercontent.com/aida-public/`. These will be downloaded and optimized for `next/image`. Each has descriptive `data-alt` attributes for proper alt text.
