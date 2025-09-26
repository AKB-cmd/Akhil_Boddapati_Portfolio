# Personal Portfolio Website Development Prompt

## Project Overview
Create a minimalistic personal portfolio website for **Akhil Kumar Boddapati**, a software professional transitioning from mechanical engineering to Full Stack Development and Data Analytics. The website should be optimized for job applications and deployable on Vercel for free.

## Personal Information
- **Name:** Akhil Kumar Boddapati
- **Location:** Hyderabad, India
- **Email:** akhil.boddapati@outlook.com
- **Phone:** 9640551350
- **Current Role:** Software Trainee at Nexa Digital Engineering
- **Career Focus:** Transitioning to Full Stack Development and Data Analytics

## Design Requirements

### Visual Style
- **Minimalistic design** with ample white space
- **Limited color palette:** 2-3 colors maximum (neutral base + one accent color)
- **Typography:** Maximum 2 clean fonts (suggest Inter or Roboto)
- **Fully responsive** design for mobile and desktop
- **Professional aesthetic** suitable for recruiters

### Navigation Bar
- **Fixed/sticky horizontal navigation** at the top
- **Navigation items:** Home, Education, Experience, Projects
- **Social icons:** LinkedIn and GitHub (Font Awesome icons on the right side)
- **Logo:** "AKB" monogram on the left with hover effect (scale-up or shadow)
- **Mobile-responsive** with hamburger menu

## Page Structure & Content

### Hero Section
- **Logo:** "AKB" monogram with smooth hover transitions
- **Main headline:** "Software Professional | Full Stack Development & Data Analytics"
- **Subheading:** "Mechanical Engineer with 9 months of automation experience, transitioning to Full Stack Development"
- **CTA button:** "Download Resume" with accent color styling
- **Clean geometric background** (optional subtle shapes)

### Education Section
```
SCSVMV COLLEGE | B.E Mechanical Engineering
Enathur, Tamil Nadu | 07/2017 - 07/2021 | CGPA: 8.4/10.0
```

### Experience Section
```
Nexa Digital Engineering | Software Trainee | 09/2024 – 06/2025
- Automated folder creation using batch scripts, cutting manual steps by 60%
- Designed Excel macros and VBA tools to automate reporting and issue tracking
- Reduced task processing time by 30–50% using Python and Excel automation
- Coordinated Smart3D data migration and validated large datasets
- Supported cross-functional teams by streamlining documentation
```

### Technical Skills Section
```
Languages: C++, Java (Core), Python, SQL
Frameworks: Django, Spring Boot
Architecture & APIs: Microservices, REST APIs, JDBC
Tools: Git, Docker (learning), Jenkins, Google Workspace
Databases: MySQL, MongoDB
Data Analysis: Excel (VBA, PivotTables), Power BI
Currently Learning: Generative AI
```

### Projects Section
Display in grid layout with cards:

1. **Grocery Management System**
   - Technologies: Java, MySQL, JDBC
   - Description: Console-based inventory and billing system with OOP principles
   
2. **Hospital Dashboard Design**
   - Technologies: Power BI, Power Query
   - Description: Interactive dashboard with patient metrics, bed occupancy, and billing analysis
   
3. **Sales Data Analysis Dashboard**
   - Technologies: Python (pandas), SQL, Power BI
   - Description: Retail sales analysis with KPIs, trends, and regional insights

### Certifications Section
- Java Full Stack Developer – Inspanner Academy, 2023
- Oracle Cloud Infrastructure 2024 Generative AI Certified Professional
- The Complete Python Bootcamp – Pierian Training, Udemy, 2024

## Technical Requirements

### Development Stack (Free Tools)
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla or React)
- **Icons:** Font Awesome (CDN - free tier)
- **Deployment:** Vercel (free hosting)
- **Version Control:** GitHub (free)
- **Domain:** Use Vercel's free subdomain or connect custom domain

### Implementation Details
- **Semantic HTML5** structure
- **CSS3 with Flexbox/Grid** for layout
- **Font Awesome CDN** for social icons
- **Smooth scrolling** between sections
- **Proper SEO meta tags**
- **Accessibility features** (alt text, aria labels)
- **Mobile-first responsive** design
- **Optimized for performance** (fast loading)

### Interactive Elements
- **Smooth hover transitions** on buttons and links
- **Logo hover effect** (scale-up with shadow)
- **Active navigation highlighting** based on scroll position
- **Mobile hamburger menu** with smooth animations
- **CTA button interactions** with visual feedback

### Vercel Deployment Requirements
- Create `vercel.json` configuration file if needed
- Ensure all assets are properly referenced
- Optimize images and assets for web
- Test responsiveness across devices
- Set up custom domain (optional)

## File Structure
```
portfolio/
├── index.html
├── styles/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   └── resume/
│       └── Akhil-Kumar-Boddapati_Resume.pdf
└── vercel.json (if needed)
```

## Key Features Checklist
- [ ] Responsive navigation with mobile menu
- [ ] Hero section with AKB logo and hover effects
- [ ] Professional summary and contact information
- [ ] Education timeline/card layout
- [ ] Experience section with achievements
- [ ] Technical skills display
- [ ] Projects grid with descriptions and links
- [ ] Certifications section
- [ ] Download resume functionality
- [ ] Social media links (LinkedIn, GitHub)
- [ ] Smooth scrolling navigation
- [ ] Mobile-responsive design
- [ ] SEO optimization
- [ ] Fast loading performance
- [ ] Professional color scheme
- [ ] Clean typography
- [ ] Accessibility compliance

## Contact Information Integration
- **Email:** akhil.boddapati@outlook.com
- **LinkedIn:** Update with actual LinkedIn profile URL
- **GitHub:** Update with actual GitHub profile URL
- **Location:** Hyderabad, India
- **Phone:** 9640551350 (optional for public display)

## Deployment Steps for Vercel
1. Create GitHub repository
2. Push code to repository
3. Connect GitHub to Vercel
4. Deploy with automatic builds
5. Configure custom domain (optional)
6. Set up analytics (optional)

This prompt provides a complete foundation for building a professional portfolio website that can be easily deployed on Vercel's free tier while maintaining high quality and professional standards suitable for job applications in the tech industry.