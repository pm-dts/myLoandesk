### Architecture & Tech Stack

- **Framework:** Next.js (App Router) with React and TypeScript.
- **Styling:** Tailwind CSS v4 utilizing the new native `@theme` directive for custom CSS variables (`brand-orange`, `moss-deep`, `cream`, etc.).
- **Icons:** `lucide-react` for clean, scalable, and consistent iconography.

### Built Components & Pages

- **Global Header:** Sticky, frosted-glass navigation with a fully functional mobile menu toggle.
- **Interactive Mortgage Calculator:** Real-time estimation tool with custom range sliders, accurate amortized math, and dynamic visual progress bars for Principal vs. Interest.
- **Hero Section:** Two-column layout integrating primary copy, CTAs, social proof, and the embedded Calculator.
- **Stats & Lender Marquee:** 4-column data grid utilizing a custom zero-dependency `AnimatedCounter`, paired with a synchronized, infinite-scrolling CSS marquee for partner lenders.
- **Loan Types:** 6-card grid showcasing mortgage products with premium hover-lift effects.
- **Process Steps:** 4-step "How it works" section utilizing a 1px internal border grid technique.
- **Why Us & Stories:** Value proposition and customer testimonial cards with integrated 5-star ratings.
- **FAQ Accordion:** State-driven, animated accordion for frequently asked questions, paired with a static daily rate widget.
- **Application Lead Form:** Accessible form with floating background glow gradients and controlled inputs.
- **Global Footer:** Comprehensive layout using Next.js routing, structured sitemap columns, and inline brand social icons.

---

## 🚀 Setup Guide

If you are new to code and just want to get this website running on your local computer, follow these step-by-step instructions.

### Step 1: Install Prerequisites (ignore if you already have them)

Before you can run the site, your computer needs two essential pieces of software:

1. **Git:** This is used to download the code from the internet to your computer.

- **Download:** Go to [git-scm.com](https://git-scm.com/downloads) and download the version for your operating system (Windows/Mac). Run the installer and click "Next" through the default options.

2. **Node.js:** This is the engine that runs the website's code on your computer.

- **Download:** Go to [nodejs.org](https://nodejs.org/) and download the **LTS (Long Term Support)** version. Run the installer with the default settings.

> **To verify they installed correctly:** Open your computer's terminal (search for "Command Prompt" or "Terminal" in your start menu). Type `node -v` and press Enter. It should print a version number (like `v20.x.x`). Then type `git --version` and press Enter. If both show numbers, you are ready!

### Step 2: Download the Code (Clone)

1. Open your Terminal or Command Prompt.
2. Navigate to the folder where you want to save the project (for example, your Desktop) by typing:

```bash
cd Desktop

```

3. "Clone" (download) the repository by copying and pasting this command (replace `YOUR_REPOSITORY_URL` with your actual GitHub link):

```bash
git clone <YOUR_REPOSITORY_URL>

```

4. Move inside the newly downloaded project folder:

```bash
cd myloandesk

```

### Step 3: Install Project Dependencies

The project relies on a few external tools (like Tailwind and Lucide Icons). To download these tools into your project folder, run:

```bash
npm install

```

_(This might take a minute or two. You will see a lot of text scrolling by—this is normal!)_

### Step 4: Run the Application

Once the installation is complete, start the local development server by running:

```bash
npm run dev

```

### Step 5: View the Website

1. Open your favorite web browser (Chrome, Safari, Edge, etc.).
2. Type the following address into the URL bar and press Enter:
   **[http://localhost:3000](http://localhost:3000)**

You should now see the fully functioning myloandesk website running on your computer! Keep the terminal window open as long as you want to use the site. To stop the server, go back to the terminal and press `Ctrl + C`.

---

## 🛠 Next.js Default Documentation

_This project was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)._

### Editing the Project

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
