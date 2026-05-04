
```markdown
# Abhi's Motion Design Portfolio

This is a single-page portfolio website for a motion-first graphic designer and video editor. The core concept of the site is to showcase the transformation **"From Static to Motion,"** demonstrating how static designs evolve into dynamic, animated content. The visual style is a dark, premium, studio aesthetic with cinematic lighting and subtle, elegant animations.

**[▶︎ View Live Demo](https://your-deployment-url.vercel.app/)** <!-- Replace with your actual live URL after deployment -->

---

## Features

-   **Cinematic Intro Animation:** A custom, multi-stage loading animation featuring line art and welcome text to set a premium tone.
-   **Single-Page Smooth Scroll Layout:** All content is accessible on a single, seamlessly scrolling page.
-   **"Static to Motion" Interaction:** A unique hover effect on portfolio items where static images subtly animate and video thumbnails preview their motion.
-   **Asymmetrical Masonry Grid:** A visually engaging portfolio layout that supports mixed media types (images, videos, text blocks).
-   **Scroll-Triggered Animations:** Elements elegantly fade and slide into view as the user scrolls down the page.
-   **Featured Transformation Section:** A dedicated section that uses scroll-based animation to showcase a "before and after" of a project.
-   **Custom Cursor:** A minimal, interactive cursor that enhances the premium feel of the site.
-   **Fully Responsive:** Designed to look and perform beautifully across desktops, tablets, and mobile devices.

## Tech Stack

This project was built using a modern, efficient frontend stack:

-   **[Vite](https://vitejs.dev/):** A next-generation frontend build tool for fast development and optimized production builds.
-   **[TypeScript](https://www.typescriptlang.org/):** A strongly typed superset of JavaScript for robust and maintainable animation logic.
-   **[Anime.js](https://animejs.com/):** A lightweight and powerful JavaScript animation library for choreographing all motion effects.
-   **HTML5 & CSS3:** For structuring the content and creating the visual style, including CSS variables and a masonry grid layout.

## Project Structure

The codebase is organized to separate concerns, making it easy to manage and update.

```text
portfolio-project/
├── index.html          # Main structural markup (Hero, Grid, Process)
├── README.md           # You are here!
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration rules
├── public/             # Static assets (fonts, images, videos)
└── src/
    ├── style.css       # All styling, CSS variables, grid logic, and static hovers
    ├── main.ts         # The main entry point that initializes the application
    └── animations.ts   # A dedicated module for all Anime.js choreographies
```

## Getting Started

To run this project on your local machine, follow these steps.

### Prerequisites

You must have [Node.js](https://nodejs.org/) (which includes npm) installed on your computer.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/portfolio-project.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd portfolio-project
    ```

3.  **Install the dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start a local server, and you can view the website in your browser at `http://localhost:5173` (the port may vary). The server supports hot-reloading, so any changes you make to the code will be reflected instantly.

## Building for Production

When you are ready to deploy the website, you need to create an optimized production build.

Run the following command in the project root:
```bash
npm run build
```
This will compile all the files and place them in a new `dist` folder. This `dist` folder contains the complete static website ready for deployment.

## Deployment

This Vite project builds to a set of static files, making it perfect for hosting on services like Vercel, Netlify, or GitHub Pages.

### Deploying with Vercel

The quickest way to deploy is using the Vercel CLI.

1.  **Install the Vercel CLI:**
    ```bash
    npm install -g vercel
    ```

2.  **Run the build command** (if you haven't already):
    ```bash
    npm run build
    ```

3.  **Deploy from the project root:**
    ```bash
    vercel --prod
    ```
    Follow the on-screen prompts. When asked for the directory, ensure it points to the `./dist` folder. Vercel will upload the files and provide you with a live URL.

# this Website is created by [Kr Satyam](https://github.com/krsatyam11/)
