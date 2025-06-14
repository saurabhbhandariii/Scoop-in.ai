/* General Body Styles */
body {document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (document.querySelector('.nav-links').classList.contains('active')) {
                document.querySelector('.nav-links').classList.remove('active');
                document.querySelector('.hamburger-menu').classList.remove('open');
            }
        });
    });

    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('open'); // Optional: for animating hamburger icon
    });

    // Fade-in on scroll effect (using IntersectionObserver)
    const fadeInElements = document.querySelectorAll('.fade-in-scroll');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2 // Element is 20% visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});

    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #333;
    line-height: 1.6;
    scroll-behavior: smooth;
    background-color: #f4f7f6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Headings and Paragraphs */
h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    color: #2c3e50;
    margin-bottom: 0.8em;
}

h2 {
    font-size: 2.8em;
    text-align: center;
    margin-bottom: 1.5em;
    position: relative;
    padding-bottom: 10px;
}

h2::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: #007bff;
    margin: 10px auto 0;
    border-radius: 2px;
}

h3 {
    font-size: 2.2em;
    text-align: center;
    margin-bottom: 1.2em;
}

p {
    margin-bottom: 1em;
}

/* Buttons */
.btn {
    display: inline-block;
    padding: 12px 25px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    text-align: center;
}

.btn-primary {
    background-color: #007bff;
    color: #fff;
    border: 2px solid #007bff;
    box-shadow: 0 4px 10px rgba(0, 123, 255, 0.3); /* Added for more pop */
}

.btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
    transform: translateY(-3px); /* Slightly more lift */
    box-shadow: 0 6px 15px rgba(0, 123, 255, 0.4);
}

.btn-secondary {
    background-color: transparent;
    color: #007bff;
    border: 2px solid #007bff;
    box-shadow: 0 2px 5px rgba(0, 123, 255, 0.1);
}

.btn-secondary:hover {
    background-color: #007bff;
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
}

.btn-light {
    background-color: #fff;
    color: #007bff;
    border: 2px solid #fff;
    box-shadow: 0 4px 10px rgba(255, 255, 255, 0.3);
}

.btn-light:hover {
    background-color: #e2e6ea;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(255, 255, 255, 0.4);
}

/* Header */
header {
    background-color: rgba(255, 255, 255, 0.95); /* Slightly transparent white */
    padding: 15px 0;
    box-shadow: 0 2px 15px rgba(0,0,0,0.1); /* Stronger shadow */
    position: sticky;
    top: 0;
    z-index: 1000;
    backdrop-filter: blur(5px); /* Blurry background for modern feel */
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo h1 {
    margin: 0;
    font-size: 2em; /* Slightly larger logo */
    color: #007bff;
    font-weight: 700;
}

nav .nav-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

nav .nav-links li {
    margin-left: 30px;
}

nav .nav-links a {
    text-decoration: none;
    color: #555;
    font-weight: 600; /* Bolder navigation links */
    transition: color 0.3s ease, transform 0.2s ease;
    padding: 5px 0;
    position: relative;
}

nav .nav-links a:hover {
    color: #007bff;
    transform: translateY(-2px); /* Slight lift on hover */
}

nav .nav-links a::after { /* Underline effect on hover */
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #007bff;
    transition: width 0.3s ease;
}

nav .nav-links a:hover::after {
    width: 100%;
}


/* Hamburger Menu for Mobile */
.hamburger-menu {
    display: none; /* Hidden on desktop */
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;
}

.hamburger-menu .bar {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 5px 0;
    transition: all 0.3s ease;
}

.hamburger-menu.open .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}

.hamburger-menu.open .bar:nth-child(2) {
    opacity: 0;
}

.hamburger-menu.open .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}


/* Hero Section */
.hero-section {
    /* Adjusted gradient for more depth and slightly darker initial state */
    background: linear-gradient(to bottom right, rgba(0, 123, 255, 0.95), rgba(0, 180, 255, 0.7)),
                url('https://images.unsplash.com/photo-1516035970222-1d582847a195?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center/cover;
    color: #fff;
    text-align: center;
    padding: 150px 0; /* More vertical padding */
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80vh; /* Make it take up even more vertical space */
    position: relative;
    overflow: hidden;
    background-size: 110% 110%; /* Slightly zoomed background */
    animation: panBackground 20s infinite alternate ease-in-out; /* Background animation */
}

/* Keyframes for background panning effect */
@keyframes panBackground {
    0% {
        background-position: 0% 0%;
    }
    100% {
        background-position: 100% 100%;
    }
}

.hero-content {
    max-width: 900px; /* Wider content area */
    margin: 0 auto;
    z-index: 2; /* Ensure text is above any potential background animations */
    position: relative;
    animation: fadeInScale 1s ease-out forwards; /* Fade in and slightly scale up */
    animation-delay: 0.5s;
    opacity: 0; /* Hidden initially */
}

/* Keyframes for hero content initial animation */
@keyframes fadeInScale {
    from {
        opacity: 0;
        transform: translateY(20px) scale(0.95);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.hero-content h2 {
    color: #fff;
    font-size: 4.2em; /* Larger, more impactful heading */
    margin-bottom: 25px;
    line-height: 1.2;
    text-shadow: 0 3px 6px rgba(0,0,0,0.3); /* Text shadow for pop */
    font-weight: 700;
}

.hero-content h2::after {
    background-color: #fff;
    width: 80px; /* Longer line */
    height: 5px; /* Thicker line */
    margin: 15px auto 0;
}

.hero-content p {
    font-size: 1.5em; /* Larger paragraph text */
    margin-bottom: 50px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

/* Sections General */
.section {
    padding: 80px 0;
    position: relative;
    overflow: hidden; /* For fade-in effect */
}

.section:nth-of-type(even) {
    background-color: #f9f9f9;
}

.bg-light-blue {
    background-color: #eaf6ff;
}

.bg-gradient {
    background: linear-gradient(135deg, #007bff 0%, #00c6ff 100%);
    color: #fff;
}

.bg-gradient h3, .bg-gradient p {
    color: #fff;
}


/* How It Works Section */
.grid-layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    text-align: center;
    margin-top: 50px;
}

/* Staggered animation for grid items */
.grid-layout .grid-item {
    opacity: 0; /* Hidden initially for fade-in effect */
    transform: translateY(30px); /* Start from slightly below */
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

/* Apply transition delay for staggered effect */
.fade-in-scroll.is-visible .grid-item:nth-child(1) { transition-delay: 0.1s; }
.fade-in-scroll.is-visible .grid-item:nth-child(2) { transition-delay: 0.2s; }
.fade-in-scroll.is-visible .grid-item:nth-child(3) { transition-delay: 0.3s; }
.fade-in-scroll.is-visible .grid-item:nth-child(4) { transition-delay: 0.4s; }


.grid-item {
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.grid-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.grid-item i {
    font-size: 3.2em; /* Slightly larger icons */
    color: #007bff;
    margin-bottom: 15px;
}

.grid-item h4 {
    font-size: 1.5em; /* Slightly larger heading */
    margin-bottom: 10px;
    color: #2c3e50;
}

/* Technology Section */
.tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 50px;
}

/* Staggered animation for tech cards, sliding from side */
.tech-grid .tech-card {
    opacity: 0; /* Hidden initially */
    transform: translateX(-50px); /* Start from left for "in side" effect */
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

/* Apply transition delay for staggered effect for tech cards */
.fade-in-scroll.is-visible .tech-card:nth-child(1) { transition-delay: 0.1s; }
.fade-in-scroll.is-visible .tech-card:nth-child(2) { transition-delay: 0.2s; }
.fade-in-scroll.is-visible .tech-card:nth-child(3) { transition-delay: 0.3s; }
.fade-in-scroll.is-visible .tech-card:nth-child(4) { transition-delay: 0.4s; }
.fade-in-scroll.is-visible .tech-card:nth-child(5) { transition-delay: 0.5s; }
.fade-in-scroll.is-visible .tech-card:nth-child(6) { transition-delay: 0.6s; }


.tech-card {
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
}

.tech-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.tech-card .icon-wrapper {
    width: 65px; /* Slightly larger icon wrapper */
    height: 65px;
    background-color: #eaf6ff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    flex-shrink: 0;
}

.tech-card i {
    font-size: 2.5em; /* Slightly larger icons */
    color: #007bff;
}

.tech-card h4 {
    font-size: 1.6em; /* Slightly larger heading */
    margin-top: 0;
    margin-bottom: 15px;
    color: #2c3e50;
}

.tech-card ul {
    list-style: none;
    padding-left: 0;
    margin-top: 15px;
}

.tech-card ul li {
    margin-bottom: 8px;
    padding-left: 25px;
    position: relative;
    font-size: 0.98em; /* Slightly larger font */
}

.tech-card ul li::before {
    content: '\f00c'; /* FontAwesome check icon */
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    position: absolute;
    left: 0;
    color: #28a745;
}

/* Mission Section */
#mission p {
    max-width: 800px;
    margin: 0 auto 40px auto;
    text-align: center;
    font-size: 1.15em; /* Slightly larger font */
}

/* Contact Section */
.contact-form {
    max-width: 600px;
    margin: 40px auto 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 15px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 1em;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
    color: rgba(255, 255, 255, 0.8);
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
}

.contact-form button {
    width: auto;
    align-self: center;
}

/* Footer */
footer {
    background-color: #2c3e50;
    color: #ecf0f1;
    padding: 50px 0 20px;
    font-size: 0.9em;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 30px;
}

.footer-logo, .footer-links, .footer-social {
    flex: 1;
    min-width: 200px;
}

.footer-logo h4 {
    color: #007bff;
    font-size: 1.6em; /* Slightly larger */
    margin-bottom: 10px;
}

.footer-links h5, .footer-social h5 {
    color: #007bff;
    font-size: 1.2em; /* Slightly larger */
    margin-bottom: 15px;
}

.footer-links ul {
    list-style: none;
    padding: 0;
}

.footer-links ul li {
    margin-bottom: 10px;
}

.footer-links a {
    color: #ecf0f1;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-links a:hover {
    color: #007bff;
}

.footer-social a {
    color: #ecf0f1;
    font-size: 1.6em; /* Slightly larger */
    margin-right: 15px;
    transition: color 0.3s ease;
}

.footer-social a:hover {
    color: #007bff;
}

.footer-bottom {
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 20px;
    margin-top: 20px;
}


/* Fade-in on Scroll Effect (General) */
.fade-in-scroll {
    opacity: 0;
    /* Removed translateY here, as specific child elements will have their own transform for diverse effects */
    transition: opacity 0.6s ease-out; /* Main transition for the section wrapper */
}

.fade-in-scroll.is-visible {
    opacity: 1;
    /* No transform here, children handle it */
}

/* When the parent is visible, apply the transform to its children with a staggered effect */
.fade-in-scroll.is-visible .grid-item,
.fade-in-scroll.is-visible .tech-card,
.fade-in-scroll.is-visible p,
.fade-in-scroll.is-visible .btn { /* Apply to other elements as needed */
    opacity: 1;
    transform: translateY(0) translateX(0); /* Return to original position */
}

/* Specific animations for elements inside sections */
.section h3 {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    transition-delay: 0.1s; /* Slight delay for heading */
}

.fade-in-scroll.is-visible h3 {
    opacity: 1;
    transform: translateY(0);
}

.section p, .section .btn { /* For paragraphs and buttons within sections */
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    transition-delay: 0.2s; /* Delay after heading */
}

.fade-in-scroll.is-visible p,
.fade-in-scroll.is-visible .btn {
    opacity: 1;
    transform: translateY(0);
}

/* Responsive Design */
@media (max-width: 768px) {
    header .container {
        flex-wrap: wrap;
        justify-content: space-between; /* Adjusted to keep logo left, hamburger right */
    }

    .logo {
        width: auto; /* Allow logo to take natural width */
        text-align: left;
        margin-bottom: 0;
    }

    nav {
        width: auto; /* Allow nav to take natural width */
        text-align: right;
    }

    nav .nav-links {
        flex-direction: column;
        align-items: center;
        margin-top: 15px;
        display: none; /* Hidden by default for mobile */
        width: 100%;
        background-color: rgba(255, 255, 255, 0.98); /* Near opaque white */
        box-shadow: 0 5px 10px rgba(0,0,0,0.05);
        padding: 10px 0;
        position: absolute; /* Position relative to header, not document flow */
        top: 100%; /* Below the header */
        left: 0;
        border-radius: 0 0 10px 10px;
    }

    nav .nav-links.active {
        display: flex;
    }

    nav .nav-links li {
        margin: 10px 0;
    }

    .hamburger-menu {
        display: block; /* Show hamburger on mobile */
        position: relative; /* Position relative to nav */
        right: 0;
        top: 0;
    }

    .hero-content h2 {
        font-size: 2.8em; /* Adjusted for smaller screens */
    }

    .hero-content p {
        font-size: 1.1em; /* Adjusted for smaller screens */
    }

    h2 {
        font-size: 2.4em;
    }

    h3 {
        font-size: 2em;
    }

    .grid-layout, .tech-grid {
        grid-template-columns: 1fr;
    }

    .footer-content {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .footer-social {
        margin-top: 20px;
    }
}

@media (max-width: 480px) {
    .hero-section {
        padding: 100px 0; /* Adjust padding for smallest screens */
        min-height: 70vh;
    }

    .hero-content h2 {
        font-size: 2.2em;
    }

    .hero-content p {
        font-size: 0.95em;
    }

    .btn {
        padding: 10px 20px;
        font-size: 0.9em;
    }

    .section {
        padding: 50px 0;
    }

    .grid-item, .tech-card {
        padding: 20px;
    }
}
