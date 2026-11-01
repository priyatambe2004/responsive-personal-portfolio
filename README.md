# Responsive Personal Portfolio Website

A modern, responsive portfolio website built with **HTML5, CSS3, and JavaScript**.
This is my capstone project for the Web Development Internship at **Veda Technology**.

## 📌 About the Project

A single-page portfolio that presents my profile, skills, projects, experience, and contact details. It works on desktop, tablet, and mobile, and it uses no frameworks or libraries.

## ✨ Sections

| Section | What it shows |
|---|---|
| **Home** | Name, typing-effect roles, call-to-action buttons, social links, animated avatar and code card |
| **Stats** | Animated counters for projects, internship days, technologies, and responsive layouts |
| **About** | Short bio, quick facts, and four highlights |
| **Skills** | Animated skill bars, soft skills, and "learning next" chips |
| **Projects** | 17 project cards with filters (All, JavaScript, HTML & CSS) and a "show all" button |
| **Experience & Education** | Tabbed timeline: Experience, Learning journey, Education |
| **Contact** | Contact details and a validated contact form |

## 🎯 Features

- Responsive navigation with a hamburger menu and slide-in panel on small screens
- Active link highlighting while scrolling (scrollspy)
- Scroll progress bar, sticky navbar that changes style on scroll, and a back-to-top button
- Typing effect, floating badges, and animated blobs in the hero
- Scroll-reveal animations using `IntersectionObserver`
- Animated counters and skill bars that read their values from `data-` attributes
- Project filter with a "show all / show fewer" button
- Accessible tabs with arrow-key navigation
- Contact form with live JavaScript validation:
  - name (letters only, 2–60 characters)
  - email format
  - subject required
  - message (10–500 characters) with a character counter
  - the first invalid field receives focus on submit
- Success screen with a pre-filled "Send with my email app" button
- Semantic HTML5 (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Accessibility: skip link, labels, ARIA attributes, focus styles, keyboard support, `prefers-reduced-motion`
- No-JavaScript fallback: content stays visible and skill bars show their final width

## 🛠️ Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, custom properties, media queries, animations)
- JavaScript (DOM, events, `IntersectionObserver`, form validation, timers)
- VS Code, Git, and GitHub

## 📁 Project Structure

```
responsive-personal-portfolio/
├── index.html
├── style.css
├── script.js
└── README.md
```


## 📚 What I Learned

- Planning a full website with semantic HTML sections
- Building responsive layouts with Flexbox, Grid, and media queries
- Making a mobile navigation menu with a CSS transition and one class toggle
- Detecting scroll position with `IntersectionObserver` instead of scroll events
- Validating a form step by step and showing helpful error messages
- Writing accessible components: tabs, menus, and forms
- Organising CSS with variables and JavaScript into clear sections
- Documenting a project with a README and publishing it with GitHub Pages

## 👩‍💻 Author

**Priya Vijay Tambe**
