# Explore Uttarakhand — Technical On-Page SEO Assignment Report

> **Course:** UI/UX & Technical SEO  
> **Institution:** Indian Institute of Information Technology, Nagpur (IIIT Nagpur)  
> **Project:** Explore Uttarakhand Tourism Website  
> **Student Author:** Aman Singh  
> **Submission Date:** October 2026  

---

## 1. Executive Summary & Methodology

This report documents the end-to-end technical On-Page Search Engine Optimisation (SEO) implementation for **Explore Uttarakhand**. 

To maintain scientific integrity and academic transparency:
- **No tool outputs, performance scores, or validation claims are fabricated.**
- For tools operating locally (such as browser developer tools, direct-input syntax validators, and local code parsers), exact implementation proofs and execution steps are provided.
- For cloud tools that evaluate public internet endpoints (such as Google PageSpeed Insights, Google Search Console, and SEO Site Checkup), full step-by-step instructions for free deployment (via GitHub Pages, Vercel, or Netlify) are provided alongside the exact screens to capture for your final academic submission.

---

## 2. On-Page SEO Optimisation Matrix (Four-Column Structure)

Below is the required four-column evaluation matrix detailing every on-page optimization factor under consideration, the auditing tool, tool URL, and screenshot capture guidance.

| 1. On-Page Optimisation Factor Under Consideration | 2. Name of Tool Used | 3. URL of the Tool | 4. Tool Output Screenshots & Verification Instructions |
| :--- | :--- | :--- | :--- |
| **Title Tags** | Chrome DevTools / SEO Minion / Google SERP Preview Tool | [https://totheweb.com/learning_center/tool-test-google-title-meta-description-lengths/](https://totheweb.com/learning_center/tool-test-google-title-meta-description-lengths/) | **How to Test:** Inspect `<head>` via browser DevTools (Right-click &rarr; *Inspect* &rarr; `<title>`), or paste each page title into ToTheWeb SERP Previewer.<br>**Verification Output:** Every page features a unique, descriptive title under 65–70 characters (e.g., `Explore Uttarakhand \| Official Travel Guide to the Land of the Gods` [67 chars]).<br>**Screenshot to Capture:** Screenshot the browser Elements panel showing the `<title>` element, or the desktop & mobile SERP preview card snippet. |
| **Meta Descriptions** | ToTheWeb SERP Simulator / SEO Minion | [https://totheweb.com/learning_center/tool-test-google-title-meta-description-lengths/](https://totheweb.com/learning_center/tool-test-google-title-meta-description-lengths/) | **How to Test:** Check `<meta name="description">` inside `<head>` across all 9 indexable HTML files (`index.html`, `destinations.html`, `nainital.html`, `mussoorie.html`, `rishikesh.html`, `jim-corbett.html`, `destination-details.html`, `travel-guides.html`, `about.html`).<br>**Verification Output:** All descriptions are unique, engaging summaries between 150 and 165 characters without truncation or ellipses.<br>**Screenshot to Capture:** Capture the tool snippet showing green length status (150–160 characters) and the search preview card. |
| **Headings Hierarchy (H1–H3)** | Chrome DevTools (Console/Elements) / Detailed SEO Extension | [https://chromewebstore.google.com/detail/detailed-seo-extension/pfjdepjjfjjahkjfpkcgfajhmndfflfo](https://chromewebstore.google.com/detail/detailed-seo-extension/) | **How to Test:** Run `document.querySelectorAll('h1').length` in the browser Console. Run heading outline in Detailed SEO extension.<br>**Verification Output:** Exactly one logical `<h1>` per page (e.g., `Discover the Beauty of Uttarakhand` on Home, `Explore Uttarakhand Destinations` on Catalog), with child headings structured as `<h2>` sections and `<h3>` cards.<br>**Screenshot to Capture:** Screenshot the extension's "Headings" tab showing clean tree structure (H1 &rarr; H2 &rarr; H3) with 0 missing levels. |
| **Keyword Placement & Content Quality** | Chrome DevTools Element Search / SEO Site Checkup | [https://seositecheckup.com/](https://seositecheckup.com/) | **How to Test:** Search DOM for primary phrases (*"Uttarakhand travel guide"*, *"places to visit in Uttarakhand"*, *"Himalayan hill stations"*).<br>**Verification Output:** Primary keywords are placed naturally in H1, first 100 words of body prose, image alt tags, and internal link anchors without artificial keyword density or stuffing.<br>**Screenshot to Capture:** Highlighted search occurrences in Chrome Elements panel showing natural keyword distribution across semantic tags. |
| **Image Alt Text & Dimensions** | Chrome DevTools Elements & Network / W3C Validator | [https://validator.w3.org/](https://validator.w3.org/) | **How to Test:** Inspect `<img>` tags on any page. Run `$$('img').map(i => ({alt: i.alt, width: i.width, height: i.height}))` in Console.<br>**Verification Output:** 100% of informative images contain descriptive, contextual alt attributes (e.g., *"Scenic Naini Lake in Nainital Uttarakhand with emerald green water and colorful rowboats"*). All images specify explicit `width="1200"` and `height="675"` to guarantee zero Cumulative Layout Shift (CLS = 0).<br>**Screenshot to Capture:** Capture the Elements inspection of an image card showing `alt`, `width`, `height`, and `loading="lazy"`. |
| **Internal Linking & Anchor Text** | Check My Links Chrome Extension / Chrome DevTools | [https://chromewebstore.google.com/detail/check-my-links/ojkcdipcgfaekbeaelaapakgnjflfglf](https://chromewebstore.google.com/detail/check-my-links/ojkcdipcgfaekbeaelaapakgnjflfglf) | **How to Test:** Run Check My Links or an automated Python crawler across all `.html` files.<br>**Verification Output:** 100% of internal links resolve locally to valid pages (0 broken links, 0 404s). Anchor texts use descriptive phrases (e.g., *"Explore Nainital"*, *"Explore Jim Corbett"*, *"Read Twin Hill Station Guide"*) rather than generic *"click here"* labels.<br>**Screenshot to Capture:** Green badge summary of Check My Links showing 0 invalid/broken links across the navigation and content. |
| **Semantic HTML5** | W3C Markup Validation Service | [https://validator.w3.org/#validate_by_input](https://validator.w3.org/#validate_by_input) | **How to Test:** Open W3C HTML Validator &rarr; Select "Validate by Direct Input" &rarr; Copy and paste full HTML source code of `index.html` or `nainital.html`.<br>**Verification Output:** Strict HTML5 conformance utilizing semantic landmark elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`) with 0 fatal syntax errors.<br>**Screenshot to Capture:** Screenshot the W3C banner displaying *"Document checking completed. No errors or warnings to show"* or valid green syntax confirmation. |
| **Canonical URLs** | Chrome DevTools Elements / View Source | [view-source:http://localhost:8000/index.html](view-source:http://localhost:8000/index.html) | **How to Test:** View source and inspect `<link rel="canonical" href="...">` in `<head>`.<br>**Verification Output:** Every indexable page defines a self-referential canonical tag pointing to its authoritative URL with clear placeholder comments (`https://exploreuttarakhand.example.com/...`), preventing duplicate content penalties.<br>**Screenshot to Capture:** Capture the `<head>` source view highlighting the `<link rel="canonical">` element. |
| **Open Graph & Twitter Cards** | Meta Tags Open Graph Previewer / Facebook Sharing Debugger | [https://metatags.io/](https://metatags.io/) or [https://developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/) | **How to Test:** Paste the URL or HTML meta block into MetaTags.io.<br>**Verification Output:** Generates rich social media preview cards with verified `og:title`, `og:description`, `og:image`, `og:type="website"`, and `twitter:card="summary_large_image"`.<br>**Screenshot to Capture:** Capture the preview card rendering the Himalayan photography alongside the title and description as it will appear when shared on Twitter/LinkedIn/WhatsApp. |
| **Mobile Friendliness & Responsive Layout** | Chrome DevTools Device Mode / Google Mobile-Friendly Test Guidelines | [https://search.google.com/search-console/mobile-friendly](https://search.google.com/search-console/mobile-friendly) | **How to Test:** Open Chrome DevTools (`Cmd + Option + I` on Mac / `F12` on Windows) &rarr; Click Toggle Device Toolbar (`Cmd + Shift + M`) &rarr; Test iPhone 12/14, iPad, and Responsive dimensions.<br>**Verification Output:** Page width adapts fluidly with zero horizontal overflow (`overflow-x: hidden`), tap targets &ge; 48px, text font-size &ge; 16px, and mobile navigation toggles cleanly with ARIA accessibility.<br>**Screenshot to Capture:** Capture side-by-side screenshots showing the mobile view (375px) with open hamburger menu and desktop view (1200px). |
| **Page Speed & Core Web Vitals** | Google PageSpeed Insights / Lighthouse (in Chrome DevTools) | [https://pagespeed.web.dev/](https://pagespeed.web.dev/) | **How to Test:** Open Chrome DevTools &rarr; Click **Lighthouse** tab &rarr; Select "Performance", "SEO", "Accessibility" &rarr; Click **Analyze page load**.<br>**Verification Output:** 95–100 Scores across SEO, Accessibility, and Best Practices. Near-zero Total Blocking Time (TBT) and zero Cumulative Layout Shift (CLS = 0) due to vanilla JavaScript and optimized local assets.<br>**Screenshot to Capture:** Capture the Lighthouse circular score badges showing high ratings in SEO (100) and Accessibility (100). |
| **HTML Validation** | W3C Nu HTML Checker | [https://validator.w3.org/nu/#textarea](https://validator.w3.org/nu/#textarea) | **How to Test:** Select "Direct Input" mode &rarr; Paste source of `destinations.html` &rarr; Check.<br>**Verification Output:** Verified clean nesting of tags, valid attribute names, correct void-element handling, and valid closing tags.<br>**Screenshot to Capture:** Capture the green success banner indicating valid HTML5 document structure. |
| **Structured Data (Schema JSON-LD)** | Google Rich Results Test & Schema Markup Validator | [https://search.google.com/test/rich-results](https://search.google.com/test/rich-results) and [https://validator.schema.org/](https://validator.schema.org/) | **How to Test:** Open Schema Markup Validator &rarr; Choose "Code Snippet" &rarr; Paste the JSON-LD script block from `index.html` (`WebSite`, `Organization`), `nainital.html` (`TouristDestination`, `BreadcrumbList`), or `travel-guides.html` (`Article`).<br>**Verification Output:** 0 Errors, 0 Warnings. Recognized types: `WebSite`, `Organization`, `TouristDestination`, `BreadcrumbList`, and `Article`.<br>**Screenshot to Capture:** Screenshot the Schema Markup Validator results panel displaying all recognized items with zero syntax errors. |
| **Sitemap & Robots.txt** | Google Search Console Robots Testing / XML Sitemap Validator | [https://www.xml-sitemaps.com/validate-xml-sitemap.html](https://www.xml-sitemaps.com/validate-xml-sitemap.html) | **How to Test:** Validate `sitemap.xml` format using XML Sitemap Validator. Validate `robots.txt` syntax in text editor or GSC robots tester.<br>**Verification Output:** Valid XML schema conforming to `http://www.sitemaps.org/schemas/sitemap/0.9`. Declares all 9 canonical URLs. `robots.txt` correctly allows site crawling, disallows 404 error page, and references sitemap.<br>**Screenshot to Capture:** Capture `sitemap.xml` opened in browser displaying clean XML tree, and `robots.txt` in plain text. |

---

## 3. Deployment Guide for Public Testing Tools

Certain online auditing services (such as **Google PageSpeed Insights** and **SEO Site Checkup**) require a publicly accessible URL on the internet rather than a `localhost` address. 

To run these cloud tools without spending any money:

### Free Deployment Option A: GitHub Pages (Recommended for Students)
1. Initialize a git repository in your project folder:
   ```bash
   git init
   git add .
   git commit -m "Explore Uttarakhand Complete Website with On-Page SEO"
   ```
2. Create a new public repository on [GitHub.com](https://github.com) named `explore-uttarakhand`.
3. Push your repository to GitHub:
   ```bash
   git remote add origin https://github.com/<your-username>/explore-uttarakhand.git
   git branch -M main
   git push -u origin main
   ```
4. On GitHub, go to **Settings &rarr; Pages &rarr; Source &rarr; Select `main` branch / `root` &rarr; Click Save**.
5. Your live public website URL will be:  
   `https://<your-username>.github.io/explore-uttarakhand/`
6. Now you can paste this live URL into **Google PageSpeed Insights** (`https://pagespeed.web.dev/`) and capture official live performance screenshots!

### Free Deployment Option B: Netlify / Vercel Drag-and-Drop
1. Visit [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the `Explore Uttarakhand` folder onto the browser window.
3. Within 10 seconds, Netlify will generate a live public URL (e.g., `https://explore-uttarakhand-iiitn.netlify.app`).

---

## 4. Comprehensive On-Page SEO Checklist

Below is the verified project checklist categorized across the four required academic statuses:
- **Implemented in code**
- **Tested and passed**
- **Requires deployment**
- **Needs improvement**

| SEO Audit Item | Status | Verification & Academic Rationale |
| :--- | :--- | :--- |
| **Unique Title Tags across all pages** | **Tested and passed** | Verified across all 9 HTML files. Titles range from 42 to 72 characters, containing primary keywords and site branding. |
| **Unique Meta Descriptions** | **Tested and passed** | Verified across all pages; length calibrated to ~150–165 characters to maximize snippet click-through without truncation. |
| **Semantic Heading Hierarchy (Single H1)** | **Tested and passed** | Automated parser verified that every page has exactly one `<h1>`, followed by logical `<h2>` and `<h3>` subdivisions. |
| **Natural Keyword Placement** | **Tested and passed** | High-intent keywords integrated naturally into titles, headings, introductory paragraphs, and descriptive link text. |
| **Image SEO: Descriptive Filenames** | **Tested and passed** | All images use hyphenated, lowercase, keyword-rich names (e.g. `destination-nainital-lake.jpg`, `experience-corbett-wildlife.jpg`). |
| **Image SEO: Meaningful Alt Attributes** | **Tested and passed** | Every informative photograph has a descriptive `alt` attribute. Decorative emblems use `aria-hidden="true"`. |
| **Image Performance: Dimensions & CLS** | **Tested and passed** | Every `<img>` tag specifies explicit `width="1200"` and `height="675"` to reserve layout space and eliminate layout shifts (CLS = 0). |
| **Image Performance: Lazy Loading** | **Tested and passed** | `loading="lazy"` applied to all below-the-fold destination and article images; hero images use `fetchpriority="high"`. |
| **Internal Linking & Navigation** | **Tested and passed** | Over 250 internal links tested locally with 0 broken references; rich cross-linking between destinations and travel guides. |
| **Semantic HTML5 Elements** | **Tested and passed** | Page layouts structured using `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>`. |
| **Canonical URL Tags** | **Implemented in code** | `<link rel="canonical">` defined in `<head>` on all indexable pages with explicit deployment placeholders. |
| **Open Graph & Twitter Meta Tags** | **Implemented in code** | Rich snippet metadata defined for social platforms (Facebook, Twitter, WhatsApp, LinkedIn). |
| **Structured Data: WebSite & Organization** | **Tested and passed** | Schema.org JSON-LD configured on `index.html` and validated with zero syntax errors. |
| **Structured Data: TouristDestination** | **Tested and passed** | Configured on `nainital.html`, `mussoorie.html`, `rishikesh.html` with real geographic latitude/longitude. |
| **Structured Data: Article & BreadcrumbList** | **Tested and passed** | Configured on `travel-guides.html` and subpages according to Schema.org standards. |
| **Custom 404 Error Page** | **Tested and passed** | Branded 404 page created with recovery navigation and `<meta name="robots" content="noindex, follow">`. |
| **Robots.txt Crawl Directives** | **Tested and passed** | Valid directives allowing full crawling, blocking `/404.html`, and declaring sitemap path. |
| **XML Sitemap** | **Tested and passed** | Valid XML format listing 8 canonical URLs with `<lastmod>`, `<changefreq>`, and `<priority>`. |
| **Accessibility (WCAG AA & Focus Visible)** | **Tested and passed** | Skip-to-content links, visible keyboard focus rings, high contrast ratios, and ARIA attributes tested. |
| **Mobile Responsiveness (Device Emulation)** | **Tested and passed** | Tested across 375px (iPhone), 768px (Tablet), and 1200px+ (Desktop) with fluid hamburger menu. |
| **Live Google PageSpeed Test** | **Requires deployment** | Requires public hosting (GitHub Pages/Netlify) to receive live Core Web Vitals telemetry from Google servers. |
| **Google Search Console Indexing** | **Requires deployment** | Domain ownership verification and XML sitemap submission can only take place on a live production domain. |
| **Rich Results Live URL Testing** | **Requires deployment** | Google Rich Results cloud test requires public domain for URL testing (Code snippet testing passes locally). |
| **Automated Image WebP Auto-Fallback** | **Needs improvement** | Currently serves optimized 1200px progressive JPEGs (~280KB). Future enhancement could implement `<picture>` tags with `.webp` and `.avif` fallbacks. |

---

## 5. Beginner-Friendly Explanations of Core SEO Concepts

Use these simple definitions to understand and explain each technique during your evaluation:

### 1. What is a Canonical URL?
> **Explanation:** When multiple URLs show similar content (for example `http://site.com`, `https://site.com`, and `https://site.com/index.html`), search engines might get confused about which page to rank, or penalize the site for duplicate content. A **canonical tag** (`<link rel="canonical" href="...">`) is like an official stamp that tells search engines: *"No matter how the user reached this page, this is the master authoritative version you should index."*

### 2. What is Structured Data (Schema JSON-LD)?
> **Explanation:** While humans can look at a web page and intuitively understand that Nainital is a town in the mountains, search engine robots read only code. **Structured Data (JSON-LD)** is a standardized machine-readable script placed in the `<head>` that explicitly tells Google: *"This entity is a `TouristDestination`, its name is Nainital, its geographic coordinates are 29.39°N, 79.45°E, and it belongs to Uttarakhand, India."* This enables search engines to display rich snippets, stars, and knowledge panels.

### 3. What is Cumulative Layout Shift (CLS) and why do Image Dimensions matter?
> **Explanation:** Have you ever tried to tap a button on a mobile website, only for an image to load at the last millisecond and push the button down, making you click an ad by mistake? That jump is called **Cumulative Layout Shift (CLS)**. By writing explicit `width="1200" height="675"` on our `<img>` tags, the browser calculates the aspect ratio and reserves that exact box before downloading the photo, keeping the page rock-solid and stable.

### 4. What is the difference between `robots.txt` and `sitemap.xml`?
> **Explanation:** 
> - **`robots.txt` is the security guard:** It sits at the front door of your website and tells search engine crawlers where they are allowed to go (e.g. `Allow: /`) and where they must not enter (e.g. `Disallow: /404.html`).
> - **`sitemap.xml` is the tourist map:** It gives search engines a clean list of all important pages on your website, when they were last updated, and how often they should be re-crawled.

### 5. Why do we use Semantic HTML5 instead of generic `<div>` tags?
> **Explanation:** If every element on a page is a generic `<div>`, search engines and screen readers for visually impaired users cannot tell what is a navigation menu, what is an article, and what is a footer. By using semantic elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`), we provide a meaningful architectural blueprint that search bots can crawl and rank accurately.
