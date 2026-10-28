# Explore Uttarakhand — Website Screenshot & Submission Guide

> **UI/UX & Technical SEO Assignment Submission Guide**  
> **Institution:** Indian Institute of Information Technology, Nagpur (IIIT Nagpur)  
> **Student Author:** Aman Singh  

---

## 1. Overview & Submission Objective

For your assignment submission at IIIT Nagpur, you are required to submit a visual document (Microsoft Word `.docx` or exported `.pdf`) demonstrating the completed frontend implementation, responsive design across mobile/desktop, and on-page SEO verification.

This guide provides step-by-step instructions on:
1. How to capture high-resolution full-page and viewport screenshots.
2. The exact list of screens required for every page.
3. How to capture mobile responsive views using Chrome DevTools.
4. How to structure, format, and present your Word or PDF report for maximum academic evaluation marks.

---

## 2. Recommended Screen Capture Techniques

### Method A: Native Full-Page Screenshot in Google Chrome (Best Quality)
Google Chrome has a built-in feature to capture entire scrolling web pages from top to bottom without downloading third-party plugins:

1. Open your website in Google Chrome (e.g., `http://localhost:8000/index.html` or by opening the HTML file directly).
2. Press `Cmd + Option + I` on Mac (or `Ctrl + Shift + I` / `F12` on Windows) to open **Chrome DevTools**.
3. Press `Cmd + Shift + P` on Mac (or `Ctrl + Shift + P` on Windows) to open the DevTools Command Palette.
4. Type `screenshot` in the search box.
5. Select **"Capture full size screenshot"**.
6. Chrome will immediately download a crystal-clear PNG image containing the entire length of the page!

### Method B: Viewport & Element Screenshots
- **On Mac:** Press `Cmd + Shift + 4`, then tap the `Spacebar` to capture an exact browser window or active modal.
- **On Windows:** Use the built-in **Snipping Tool** (`Windows Key + Shift + S`) to select rectangular areas.

---

## 3. Step-by-Step Checklist of Required Screenshots

Capture each of the following sections to include in your submission report:

### Section 1: Home Page (`index.html`)
- [ ] **Desktop Full-Page View:** Top-to-bottom view showing the header, hero section with Himalayan photography, fast-facts bar, category cards, featured destinations, popular experiences, and footer.
- [ ] **Hero Section Close-Up:** Showing the H1 heading *"Discover the Beauty of Uttarakhand"*, call-to-action buttons, and background mountains.
- [ ] **Thematic Categories Grid:** Showing the 5 interactive cards (Hill Stations, Pilgrimage, Adventure, Lakes & Bugyals, Wildlife).
- [ ] **Featured Destination Cards:** Close-up of the Nainital, Mussoorie, and Rishikesh cards displaying altitudes and verified seasons.

### Section 2: Destinations Catalog (`destinations.html`)
- [ ] **Desktop Catalog View:** Showing the search input, category filter buttons, live count badge, and the destination cards grid.
- [ ] **Search & Filter in Action:**
  - *State A:* Click the **"Hill Stations"** filter chip and take a screenshot showing the live count updating to *"Showing 4 of 9 destinations"* (Nainital, Mussoorie, Auli, Chopta).
  - *State B:* Type *"Rishikesh"* in the search box and take a screenshot showing only the Rishikesh card displayed.
  - *State C:* Type *"xyz"* to trigger and screenshot the accessible **"No matching destinations found"** fallback box with the **"Reset All Filters"** button.

### Section 3: Dedicated Destination Detail Pages
- [ ] **Nainital Detail Page (`nainital.html`):**
  - Hero banner with altitude badge and Naini Lake photography.
  - Overview, Sapta-Shring background, and attractions grid.
  - Verified seasonal weather table (Summer, Monsoon, Autumn, Winter).
  - Fast facts sidebar and related destinations links.
- [ ] **Mussoorie Detail Page (`mussoorie.html`):**
  - Hero banner showing the Queen of the Hills.
  - Landour & Char Dukan attractions section, Camel's Back Road, and George Everest house.
  - Travel tips box explaining Mall Road evening pedestrian vehicle regulations.
- [ ] **Rishikesh Detail Page (`rishikesh.html`):**
  - Hero banner showing Ram Jhula and the sacred turquoise Ganga.
  - White-water rafting sections (Shivpuri rapids) and Beatles Ashram highlights.
  - Statutory notice explaining the holy city vegetarian/alcohol regulations and monsoon rafting closure.
- [ ] **Reusable Destination Template (`destination-details.html`):**
  - Open `destination-details.html?id=auli` to capture Auli ski slopes and Nanda Devi views.
  - Open `destination-details.html?id=kedarnath` to capture the dynamic load of the ancient stone temple and high-altitude advice.
  - Open `destination-details.html?id=chopta` to capture the Chopta bugyal and Tungnath trek details.

### Section 4: Travel Guides Page (`travel-guides.html`)
- [ ] **Travel Guides Header & Quick Navigation:** Showing the table of contents button bar.
- [ ] **Article 1 (State Overview):** Section showing Garhwal vs. Kumaon circuits and the cross-divisional transit warning box.
- [ ] **Article 2 (Beginner's Trekking Guide):** Section showing the trail list (Tungnath, Valley of Flowers, Nag Tibba) and the **Acute Mountain Sickness (AMS)** safety callout.
- [ ] **Article 3 (Weekend in Rishikesh):** 3-day Friday-to-Sunday hourly itinerary.
- [ ] **Article 4 (Nainital & Mussoorie Twin Itinerary):** 6-day driving logistics guide and cab hire tips.

### Section 5: About & Contact Page (`about.html`)
- [ ] **Mission & Purpose Section:** Explaining the IIIT Nagpur academic context and Himalayan conservation philosophy.
- [ ] **Responsible Tourism Principles:** Four cards detailing plastic bans, homestay support, cultural reverence, and flora protection.
- [ ] **Contact Form with Academic Disclaimer:** Capture the amber alert banner clearly stating that this is a frontend demonstration.
- [ ] **Form Validation in Action:**
  - *State A (Error Feedback):* Click *"Submit"* with empty inputs to screenshot the red borders and inline error messages (*"Please enter your full name"*, *"Please select your travel interest"*, etc.).
  - *State B (Success Confirmation):* Fill out valid information, submit, and screenshot the green confirmation alert banner.

### Section 6: Custom 404 Error Page (`404.html`)
- [ ] **404 Page View:** Showing the mountain theme *"You've Wandered Off Trail - 404"*, friendly explanation, and recovery navigation buttons.

### Section 7: Mobile Responsive Testing (Device Emulation)
To capture mobile responsive views using Chrome DevTools:
1. Press `Cmd + Option + I` (Mac) or `Ctrl + Shift + I` (Windows).
2. Press `Cmd + Shift + M` to toggle the **Device Toolbar**.
3. Select **iPhone 12/14/15 Pro** (390 x 844 px) or **Samsung Galaxy S20**.
4. Capture:
   - [ ] **Mobile Home Page:** Hero section, stacked highlight metrics, and stacked category cards.
   - [ ] **Mobile Navigation Drawer:** Click the hamburger button and screenshot the expanded mobile menu.
   - [ ] **Mobile Destination Catalog:** Search bar and vertically stacked destination cards.
   - [ ] **Mobile Detail Page:** Sticky header, full-width content column, and stacked fast facts sidebar.

### Section 8: Technical SEO Audits & Validation Proofs
- [ ] **W3C HTML Validation:** Direct input confirmation on `validator.w3.org` showing clean syntax.
- [ ] **Schema.org JSON-LD Validation:** Output from `validator.schema.org` showing detected `TouristDestination`, `WebSite`, and `Article` types with zero errors.
- [ ] **Lighthouse Audit:** Chrome DevTools Lighthouse audit showing 100/100 score in SEO and Accessibility.
- [ ] **XML Sitemap:** Browser view of `sitemap.xml` showing formatted URL nodes.
- [ ] **Robots.txt:** Browser view of `robots.txt` showing user-agent, allow, and disallow rules.

---

## 4. How to Assemble Your Word / PDF Submission Document

When formatting your final submission document in Microsoft Word or Google Docs before exporting to PDF, structure it with this professional layout:

```text
[PAGE 1: COVER PAGE]
--------------------------------------------------------------------------------
                     EXPLORE UTTARAKHAND
    Comprehensive Tourism Portal with Technical On-Page SEO
         UI/UX Design & Frontend Development Assignment
      Indian Institute of Information Technology, Nagpur
                       (IIIT Nagpur)

Student Name: Aman Singh
Enrollment ID: [Your Student ID]
Semester / Year: B.Tech / [Your Year]
Course: UI/UX & Web Technologies
Date of Submission: October 2026
--------------------------------------------------------------------------------

[PAGE 2: TABLE OF CONTENTS & PROJECT SUMMARY]
- 1. Executive Summary & Technology Stack
- 2. Design System (Color Palette, Typography, UI Components)
- 3. Desktop Page Screenshots (Home, Catalog, Detail Pages, Guides, About, 404)
- 4. Interactive Features (Live Search, Category Filters, Validated Contact Form)
- 5. Mobile Responsive Views (iPhone & Tablet)
- 6. On-Page SEO Technical Validation (W3C, Schema.org, Lighthouse)

[PAGE 3 ONWARD: BODY OF REPORT]
- Place screenshots with clear captions beneath each image:
  Example: "Figure 1.1: Explore Uttarakhand Homepage Desktop View (index.html)"
  Example: "Figure 2.3: Live Category Filter displaying only Hill Stations (destinations.html)"
  Example: "Figure 5.2: Frontend Form Validation displaying required field warnings (about.html)"
  Example: "Figure 6.1: Schema.org Structured Data Validator confirming TouristDestination JSON-LD"
```

### Pro-Tips for Maximum Submission Marks
1. **Side-by-Side Mobile Comparisons:** In Word, insert a 2-column borderless table. Put the desktop view in Column 1 and the corresponding mobile view in Column 2. This visually highlights your responsive design capabilities.
2. **Highlight Accessibility:** Mention the visible focus rings and skip-to-content link in your captions.
3. **Emphasize Academic Integrity:** Point out that the contact form explicitly includes the student assignment disclosure banner, showing professional ethics.
4. **Export as PDF:** Always export from Word to PDF (`File -> Export -> Create PDF/XPS`) to preserve typography, image alignment, and page margins across all evaluation computers.
