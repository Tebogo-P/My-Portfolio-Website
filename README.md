Tebogo Pii - Professional Portfolio Website
A modern, responsive single-page portfolio website showcasing my projects, skills, and experience as a software developer.
🚀 Live Demo
View Live Site
📋 Table of Contents

Features
Technologies Used
Project Structure
Setup Instructions
Customization Guide
Projects Showcased
Contact

✨ Features

Modern Design: Clean, professional interface with smooth animations
Fully Responsive: Optimized for all devices (desktop, tablet, mobile)
Single-Page Application: Smooth scrolling navigation between sections
Interactive Elements: Hover effects, scroll animations, and transitions
Performance Optimized: Fast loading times and efficient code
Accessibility: Keyboard navigation support and semantic HTML
Cross-Browser Compatible: Works on all modern browsers

🛠️ Technologies Used

HTML5: Semantic markup structure
CSS3: Modern styling with CSS Grid and Flexbox
JavaScript: Interactive features and animations
Git: Version control
GitHub Pages: Hosting (optional)

📁 Project Structure
portfolio/
│
├── index.html              # Main HTML file
├── style.css               # Main stylesheet
├── mediaqueries.css        # Responsive design styles
├── script.js               # JavaScript functionality
├── README.md               # Project documentation
│
└── images/                 # Image assets folder
    ├── profile.png         # Profile picture
    ├── linkedin.png        # LinkedIn icon
    ├── github.png          # GitHub icon
    ├── email.png           # Email icon
    ├── arrow.png           # Scroll indicator
    ├── project-1.png       # Project screenshot 1
    ├── project-2.png       # Project screenshot 2
    └── project-3.png       # Project screenshot 3
🔧 Setup Instructions
Method 1: Quick Start

Download/Clone the repository

bash   git clone https://github.com/YOUR-USERNAME/portfolio-website.git
   cd portfolio-website

Open in browser

Simply open index.html in your web browser
Or use Live Server in VS Code for live reloading



Method 2: Deploy to GitHub Pages

Create a new repository on GitHub
Upload your files or push via Git
Enable GitHub Pages:

Go to repository Settings → Pages
Select main branch as source
Click Save


Access your site at https://YOUR-USERNAME.github.io/REPO-NAME/

Method 3: Deploy to Netlify

Sign up at Netlify
Connect your GitHub repository
Deploy - automatic with every push
Custom domain available (optional)

🎨 Customization Guide
Update Personal Information
In index.html:

Update Name and Title:

html   <h1 class="hero-name">Your Name</h1>
   <p class="hero-title">Your Title</p>

Update About Section:

Edit the paragraphs in the About section
Update stats in stat-cards


Update Contact Information:

html   <a href="mailto:your-email@example.com">
   <a href="https://linkedin.com/in/your-profile">
Change Colors
In style.css, modify the CSS variables:
css:root {
  --primary-color: #2563eb;        /* Main brand color */
  --primary-dark: #1e40af;         /* Darker shade */
  --text-primary: #0f172a;         /* Main text color */
}
Add/Remove Projects
In index.html, duplicate a project card:
html<div class="project-card">
  <div class="project-image">
    <img src="your-project.png" alt="Your Project" />
    <div class="project-overlay">
      <span class="project-tag">Technology 1</span>
      <span class="project-tag">Technology 2</span>
    </div>
  </div>
  <div class="project-content">
    <h3>Your Project Name</h3>
    <p>Project description...</p>
    <div class="project-links">
      <button class="btn btn-small" onclick="window.open('URL')">View Code</button>
    </div>
  </div>
</div>
Update Skills
In index.html, add new skills:
html<div class="skill-item">
  <div class="skill-icon">🔥</div>
  <span class="skill-name">Your Skill</span>
  <span class="skill-level intermediate">Intermediate</span>
</div>
Skill levels: advanced, intermediate, beginner
📂 Projects Showcased
1. Student Residence Finder

Technologies: Java, Swing, Apache Derby
Description: Desktop application for student accommodation management
Features: User authentication, CRUD operations, database integration

2. Student Enrollment System

Technologies: Java, Socket Programming
Description: Client-server application for course enrollment
Features: Multi-threaded server, real-time sync, DAO pattern

3. Save Lives NGO Website

Technologies: HTML5, CSS3, JavaScript
Description: Multi-page website for non-profit organization
Features: Responsive design, contact forms, volunteer sign-up

4. Hand Gesture Recognition

Technologies: JavaFX, OpenCV
Description: Real-time computer vision application
Features: Gesture detection, webcam integration, image processing

5. Professional Portfolio

Technologies: HTML, CSS, JavaScript
Description: This portfolio website
Features: Single-page design, animations, responsive

6. Academic Portfolio (2023)

Technologies: Google Sites
Description: First portfolio documenting academic journey
Link: View Site

📧 Contact

Email: 230226442@mycput.ac.za
LinkedIn: Tebogo Pii
GitHub: Your GitHub
Location: Cape Town, South Africa

📝 License
© 2024 Tebogo Pii. All rights reserved.
This portfolio is for personal use. Feel free to use the code structure and design as inspiration for your own portfolio, but please don't copy it directly.
🙏 Acknowledgments

Font: Inter by Google Fonts
Icons: Custom SVG icons
Inspiration: Modern web design trends and best practices

📊 Browser Support
BrowserVersionChromeLatest ✅FirefoxLatest ✅SafariLatest ✅EdgeLatest ✅MobileiOS/Android ✅
🚀 Future Enhancements

 Add blog section
 Integrate analytics
 Add dark mode toggle
 Add more projects
 Add testimonials section
 Implement contact form backend
 Add certificate showcase
 Create downloadable CV


Made by Tebogo Pii
Last Updated: November 2024
