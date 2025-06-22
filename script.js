// // Scroll Progress Bar Logic
// window.addEventListener("scroll", () => {
//   const scrollTop = window.scrollY;
//   const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//   const scrollPercent = (scrollTop / docHeight) * 100;
//
//   const progressBar = document.getElementById("scroll-indicator");
//   progressBar.style.height = `${scrollPercent}%`;
// });
//
// // Loading animation
// const letters = document.querySelectorAll(".loading-text span");
//
// // Animate each letter with stagger
// gsap.to(letters, {
//   opacity: 1,
//   duration: 1.2,
//   stagger: 0.15,
//   onUpdate: function () {
//     letters.forEach((el, i) => {
//       gsap.to(el, {
//         color: "#ffffff",
//         duration: 0.2,
//         delay: i * 0.15,
//       });
//       gsap.to(el, {
//         color: "rgba(255,255,255,0.1)",
//         duration: 0.2,
//         delay: i * 0.15 + 0.4,
//       });
//       gsap.to(el.querySelector("::after"), {
//         opacity: 1,
//         duration: 0.2,
//         delay: i * 0.15,
//       });
//     });
//   },
//   onComplete: () => {
//     gsap.to("#loading", {
//       opacity: 0,
//       duration: 1,
//       delay: 0.5,
//       onComplete: () => {
//         document.getElementById("loading").style.display = "none";
//       },
//     });
//   },
// });
//
//
// // Animation for Hero Text
// gsap.from(".hero-left", {
//   opacity: 0,
//   x: -50,
//   duration: 1.2,
//   ease: "power3.out",
// });
//
// gsap.from(".hero-right", {
//   opacity: 0,
//   x: 50,
//   duration: 1.2,
//   ease: "power3.out",
//   delay: 0.3,
// });
//
// gsap.utils.toArray(".journey-card").forEach((card, index) => {
//   gsap.from(card, {
//     opacity: 0,
//     y: 80,
//     duration: .4,
//     ease: "power3.out",
//     scrollTrigger: {
//       trigger: card,
//       start: "top 85%",
//       toggleActions: "play none none reverse",
//     },
//     delay: index * 0.1,
//   });
// });
//
// // HERO SECTION PARTICLES
// particlesJS("particles-hero", {
//   "particles": {
//     "number": {
//       "value": 200,
//       "density": { "enable": true, "value_area": 800 }
//     },
//     "color": { "value": "#ffffff" },
//     "opacity": { "value": 0.7, "random": false },
//     "size": { "value": 4, "random": true },
//     "line_linked": { "enable": false },
//     "move": {
//       "enable": true,
//       "speed": 1,
//       "direction": "bottom",
//       "out_mode": "out"
//     }
//   },
//   "interactivity": {
//     "events": {
//       "onhover": { "enable": false },
//       "onclick": { "enable": false }
//     }
//   },
//   "retina_detect": true
// });
//
//
//
// particlesJS("particles-projects", {
//   "particles": {
//     "number": { "value": 50 },
//     "color": { "value": "ffffff" },
//     "shape": { "type": "circle" },
//     "opacity": {
//       "value": 0.5,
//       "random": true
//     },
//     "size": {
//       "value": 4,
//       "random": true
//     },
//     "line_linked": {
//       "enable": true,
//       "distance": 150,
//       "color": "ffffff",
//       "opacity": 0.4,
//       "width": 1
//     },
//     "move": {
//       "enable": true,
//       "speed": 3,
//       "direction": "none",
//       "out_mode": "out"
//     }
//   },
//   "interactivity": {
//     "detect_on": "canvas",
//     "events": {
//       "onhover": { "enable": true, "mode": "grab" },
//       "onclick": { "enable": true, "mode": "push" }
//     },
//     "modes": {
//       "grab": {
//         "distance": 140,
//         "line_linked": { "opacity": 1 }
//       },
//       "push": { "particles_nb": 4 }
//     }
//   },
//   "retina_detect": true
// });
//
//
// gsap.registerPlugin(ScrollTrigger);
//
// gsap.utils.toArray('.fade-in').forEach((el) => {
//   gsap.from(el, {
//     scrollTrigger: {
//       trigger: el,
//       start: "top 85%",
//       toggleActions: "play none none none"
//     },
//     opacity: 0,
//     y: 40,
//     duration: 1.2,
//     ease: "power3.out",
//   });
// });
//
// gsap.from(".project-card", {
//   scrollTrigger: {
//     trigger: ".project-card",
//     start: "top 85%",
//     toggleActions: "play none none reset"
//   },
//   opacity: 0,
//   y: 60,
//   duration: 1,
//   ease: "power3.out"
// });
//
//   gsap.from("#about-img", {
//     scrollTrigger: {
//       trigger: "#about-img",
//       start: "top 80%",
//       toggleActions: "play none none reset",
//     },
//     opacity: 0,
//     x: -100,
//     duration: .4,
//     ease: "power3.out"
//   });
//
//
//   gsap.from("#about-text", {
//     scrollTrigger: {
//       trigger: "#about-text",
//       start: "top 80%",
//       toggleActions: "play none none reset",
//     },
//     opacity: 0,
//     y: 50,
//     duration: .4,
//     ease: "power3.out",
//     delay: 0.2
//   });
//
//   gsap.from("#techstack h2", {
//     scrollTrigger: {
//       trigger: "#techstack",
//       start: "top 80%",
//       toggleActions: "play none none reset"
//     },
//     opacity: 0,
//     y: -40,
//     duration: 1.2,
//     ease: "power3.out"
//   });
//
//   gsap.utils.toArray("#techstack .group").forEach((card, i) => {
//     gsap.from(card, {
//       scrollTrigger: {
//         trigger: card,
//         start: "top 85%",
//         toggleActions: "play none none reset"
//       },
//       opacity: 0,
//       y: 50,
//       duration: 1,
//       ease: "power3.out",
//       delay: i * 0.1,
//     });
//   });
//
//   gsap.utils.toArray('.tech-category').forEach((section, index) => {
//     gsap.from(section, {
//       opacity: 0,
//       y: 60,
//       duration: 0.8,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: section,
//         start: "top 80%",
//         toggleActions: "play none none reverse"
//       }
//     });
//   });
//
//   gsap.utils.toArray('.reveal-section').forEach(section => {
//     gsap.from(section, {
//       opacity: 0,
//       y: 60,
//       duration: 1,
//       scrollTrigger: {
//         trigger: section,
//         start: "top 80%",
//         toggleActions: "play none none reset"
//       }
//     });
//   });
//
//   // Up coming projects
//
//   gsap.utils.toArray(".upcoming-card").forEach((card, i) => {
//     gsap.from(card, {
//       scrollTrigger: {
//         trigger: "#upcoming-projects",
//         start: "top 85%",
//         toggleActions: "play none none reset"
//       },
//       opacity: 0,
//       y: 60,
//       duration: 1,
//       ease: "power3.out",
//       delay: i * 0.15,
//     });
//   });
//
// Register GSAP plugins (important to do this once at the beginning)
gsap.registerPlugin(ScrollTrigger);

// --- Scroll Progress Bar Logic ---
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  // Ensure docHeight is not zero to prevent division by zero
  if (docHeight === 0) {
    document.getElementById("scroll-indicator").style.height = "0%";
    return;
  }
  const scrollPercent = (scrollTop / docHeight) * 100;
  const progressBar = document.getElementById("scroll-indicator");
  progressBar.style.height = `${scrollPercent}%`;
});

// --- Loading Animation ---
// Corrected the data-text for 'Priyadarshan Garg' in HTML previously
// Assuming the HTML is now: <span data-text="P">P</span> <span data-text="R">R</span> ...
const letters = document.querySelectorAll(".loading-text span");

// Enhanced loading animation:
// A more refined bounce/fade-in and then a clean fade out.
gsap.fromTo(letters, {
  opacity: 0,
  y: 50, // Start lower
  scale: 0.8, // Start smaller
  color: "rgba(255,255,255,0.2)" // Faint white initially
}, {
  opacity: 1,
  y: 0,
  scale: 1,
  color: "#ffffff", // Fade to bright white
  duration: 0.8, // Slightly faster, more snappy
  stagger: 0.08, // Slightly faster stagger
  ease: "back.out(1.7)", // A little bounce
  onComplete: () => {
    // Keep letters visible for a moment, then fade out the whole loader
    gsap.to("#loading", {
      opacity: 0,
      duration: 0.8, // Faster fade-out
      delay: 0.7, // Short delay after name appears
      onComplete: () => {
        document.getElementById("loading").style.display = "none";
        // Optionally, trigger main content animations here if they depend on loader being gone
        // For example, if .hero-left and .hero-right are not ScrollTriggered:
        // gsap.from(".hero-left", { opacity: 0, x: -50, duration: 1.2, ease: "power3.out" });
        // gsap.from(".hero-right", { opacity: 0, x: 50, duration: 1.2, ease: "power3.out", delay: 0.3 });
      },
    });
  },
});

// --- Hero Section Animations ---
// Assuming .hero-left and .hero-right are elements for the text/button
// If these classes are not present in your HTML, these animations won't run.
// From your HTML, the main title is in a button, and the paragraph is separate.
// Let's target them specifically.

// Targeting the main title button and paragraph directly
gsap.from(".hero-section .button", { // Assuming you add a class 'hero-section' to the hero div
  opacity: 0,
  y: 30, // Slight rise
  duration: 1,
  ease: "power3.out",
  delay: 0.2 // A small delay after loader is gone (if triggered here)
});

gsap.from(".hero-section p.lead", { // Targeting the <p class="lead"> element
  opacity: 0,
  y: 30, // Slight rise
  duration: 1,
  ease: "power3.out",
  delay: 0.4 // After the button
});

gsap.from(".hero-section .shadow__btn", { // Targeting the View Projects button
  opacity: 0,
  y: 30, // Slight rise
  duration: 1,
  ease: "power3.out",
  delay: 0.6 // After the paragraph
});


// --- Journey Cards Animation ---
gsap.utils.toArray(".journey-card").forEach((card, index) => {
  gsap.from(card, {
    opacity: 0,
    y: 50, // Reduced bounce for subtlety
    duration: 0.6, // Slightly longer for smoother entry
    ease: "power2.out", // A different ease for variety
    scrollTrigger: {
      trigger: card,
      start: "top 80%", // Trigger a bit earlier
      toggleActions: "play none none reverse", // Play on entry, reverse on scroll up
    },
    delay: index * 0.15, // Slightly increased stagger for more distinct entry
  });
});

// --- About Section Animations ---
gsap.from("#about-img", {
  scrollTrigger: {
    trigger: "#about-img",
    start: "top 75%", // Trigger a bit earlier
    toggleActions: "play none none reverse", // Play on entry, reverse on scroll up
  },
  opacity: 0,
  x: -80, // A bit less aggressive horizontal slide
  scale: 0.9, // Slight scale effect
  duration: 0.8, // Smoother duration
  ease: "power2.out"
});

gsap.from("#about-text", {
  scrollTrigger: {
    trigger: "#about-text",
    start: "top 75%", // Trigger with image
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 50, // Vertical slide
  duration: 0.8, // Smoother duration
  ease: "power2.out",
  delay: 0.2 // Stagger after image
});


// --- Tech Stack Section Animations ---
// Targeting the main heading
gsap.from("#tech-stack h2", { // Changed from #techstack h2 as per your HTML
  scrollTrigger: {
    trigger: "#tech-stack",
    start: "top 80%",
    toggleActions: "play none none reverse" // Play once on entry, reverse on scroll up
  },
  opacity: 0,
  y: -30, // Smaller vertical displacement
  duration: 0.8, // Smoother
  ease: "power2.out"
});

// Animations for the tech categories (Languages, Frameworks, etc.)
gsap.utils.toArray('.reveal-section').forEach((section, index) => { // .reveal-section covers these.
  gsap.from(section, {
    opacity: 0,
    y: 50, // Subtle lift
    duration: 0.7, // Smoother duration
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 85%", // Trigger slightly earlier
      toggleActions: "play none none reverse",
      // Markers: true, // Uncomment for debugging ScrollTrigger
    },
    delay: index * 0.1 // Stagger the sections
  });
});

// Animations for individual tech icons within categories (assuming 'group' class is what you want)
// Note: Your HTML uses 'flex items-center gap-2' directly for icons, not '.group'.
// I'll adjust to target the immediate children of .reveal-section grid for individual icons
gsap.utils.toArray("#tech-stack .grid > div").forEach((iconDiv, i) => { // Targeting direct children of the grid
  gsap.from(iconDiv, {
    scrollTrigger: {
      trigger: iconDiv,
      start: "top 90%", // Trigger quite early for individual icons
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    scale: 0.8, // Pop-in effect
    duration: 0.5,
    ease: "back.out(1.7)", // Quick, bouncy pop
    delay: i * 0.05, // Small stagger for individual icons
  });
});


// --- Projects Section Animations ---
// Apply to individual project cards.
// Your current code targets `.project-card` with a single animation, which only triggers for the *first* one.
// We need to loop through them.
gsap.utils.toArray(".project-card").forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card, // Each card triggers its own animation
      start: "top 80%", // Trigger slightly earlier
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 60,
    duration: 0.8, // Smoother duration
    ease: "power2.out",
    delay: index * 0.15, // Stagger effect between cards
  });
});


// --- Upcoming Projects Section Animations ---
// Already well-structured, just subtle tweaks
gsap.utils.toArray(".upcoming-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card, // Each card triggers its own animation
      start: "top 80%", // Trigger slightly earlier
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 50, // Slightly less jumpy
    duration: 0.7, // Smoother
    ease: "power2.out",
    delay: i * 0.1, // Adjusted stagger
  });
});


// --- Particles.js Configurations ---

// HERO SECTION PARTICLES
particlesJS("particles-hero", {
  "particles": {
    "number": {
      "value": 150, // Slightly reduced number for less clutter
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": "#1DCD9F" }, // Use your accent color!
    "opacity": { "value": 0.8, "random": true }, // More random opacity
    "size": { "value": 3, "random": true, "anim": { "enable": true, "speed": 10, "size_min": 0.5, "sync": false } }, // Add subtle size animation
    "line_linked": { "enable": false },
    "move": {
      "enable": true,
      "speed": 0.8, // Slower, more gentle movement
      "direction": "none", // Random direction for a floating feel
      "random": true, // Random movement paths
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": { "enable": false }
    }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": false }, // Keep hover off for hero for calmness
      "onclick": { "enable": false }
    }
  },
  "retina_detect": true
});


// PROJECTS SECTION PARTICLES
particlesJS("particles-projects", {
  "particles": {
    "number": { "value": 60 }, // Slightly more particles for the projects section
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": {
      "value": 0.6, // Slightly higher base opacity
      "random": true,
      "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } // Subtle opacity flicker
    },
    "size": {
      "value": 3, // Slightly smaller particles
      "random": true,
      "anim": { "enable": true, "speed": 4, "size_min": 0.3, "sync": false } // Subtle size animation
    },
    "line_linked": {
      "enable": true,
      "distance": 180, // Increased distance for longer lines
      "color": "#ffffff",
      "opacity": 0.3, // Slightly less opaque lines
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2, // Slightly slower movement
      "direction": "none",
      "random": true, // Random movement
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": { "enable": false }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "grab" }, // Keep grab on hover
      "onclick": { "enable": true, "mode": "push" } // Keep push on click
    },
    "modes": {
      "grab": {
        "distance": 120, // Reduced grab distance for a more focused interaction
        "line_linked": { "opacity": 0.8 } // Lines become more visible when grabbed
      },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});