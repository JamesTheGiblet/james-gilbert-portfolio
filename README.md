# James Gilbert - Personal Portfolio Website

This repository contains the source code for my personal portfolio website, showcasing my skills, projects, and journey as an "Amateur Inventor, Professional Tinkerer."

**Live Site:** [https://jamesthegiblet.github.io/james-gilbert-portfolio/](https://jamesthegiblet.github.io/james-gilbert-portfolio/)

## About This Project

This portfolio is designed to be a comprehensive representation of my technical abilities, entrepreneurial experiences, and unique problem-solving approach. It serves as a central hub for potential employers, collaborators, and anyone interested in my work. The site highlights my diverse background, from carpentry and electronics to 3D printing, robotics, and AI.

The narrative focuses on my drive for continuous learning, my "I wonder if..." spirit, and my tenacity in turning ideas into reality.

## Features

*   **Responsive Design:** Adapts to various screen sizes (desktop, tablet, mobile).
*   **Interactive Navigation:**
    *   Smooth scrolling to different sections.
    *   Active link highlighting in the navigation bar as you scroll.
    *   Mobile-friendly hamburger menu.
*   **Dynamic Content:**
    *   "Back to Top" button for easy navigation on longer pages.
    *   Scroll-triggered animations for sections to enhance user experience.
    *   Hero section with subtle entrance animations.
*   **Detailed Sections:**
    *   **Hero:** A captivating introduction.
    *   **About Me:** In-depth personal story, motivations, and journey.
    *   **Skills:** Categorized list of technical, business, practical, and soft skills.
    *   **Projects:** Showcase of key creations and ventures with links to:
        *   Dedicated project detail pages (Praxis, Gismo, Large 3D Printer).
        *   Relevant GitHub repositories.
    *   **Contact:** Easy ways to get in touch.
*   **Separate Resume Page:** A clean, printable HTML resume linked from the main portfolio.
*   **Accessibility Considerations:**
    *   ARIA attributes for interactive elements like the mobile menu.
    *   Respects `prefers-reduced-motion` for users who prefer less animation.

## Technologies Used

*   **HTML5:** For the structure and content.
*   **CSS3:**
    *   Custom CSS for base styling and animations (`style.css`).
    *   **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
*   **JavaScript (Vanilla JS):** For interactivity, including:
    *   Mobile menu toggle.
    *   Smooth scrolling with fixed header offset.
    *   Active navigation highlighting on scroll.
    *   Scroll-triggered animations using `IntersectionObserver`.
    *   "Back to Top" button functionality.
*   **Google Fonts:** For typography (Inter).
*   **Lucide Icons (SVG):** For clean and modern iconography.
*   **GitHub Pages:** For hosting the live website.

## Setup & Local Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/JamesTheGiblet/james-gilbert-portfolio.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd james-gilbert-portfolio
    ```
3.  **Open `index.html` in your browser:**
    You can simply open the `index.html` file directly in any modern web browser to view the site locally. No complex build steps are required for this static site.

## File Structure

```
james-gilbert-portfolio/
├── index.html               # Main portfolio page
├── resume.html              # Separate HTML resume page
├── praxis-project.html      # Detail page for Praxis project
├── gismo-project.html       # Detail page for Gismo project
├── large-printer-project.html # Detail page for Large 3D Printer project
├── style.css                # Custom CSS styles
├── script.js                # Custom JavaScript for interactivity
└── README.md                # This file
```

## Contact

You can reach me via the contact form on the portfolio website or connect with me on LinkedIn.

---

Thank you for visiting my portfolio repository!