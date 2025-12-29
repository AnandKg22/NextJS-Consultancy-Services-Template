# Consultancy Services - Next.js Template

Welcome to the **Consultancy Services** template. This is a high-performance, pixel-perfect clone of a corporate WordPress theme, rebuilt with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (version 18 or higher recommended).

### 2. Installation
Open your terminal in the project directory and run:

```bash
npm install
```

### 3. Running Development Server
To start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

---

## � Build & Deployment

### 1. Build for Production
To create an optimized production build:

```bash
npm run build
```

This will generate a `.next` folder optimized for performance.

### 2. Start Production Server
After building, you can start the production server locally to test:

```bash
npm start
```

### 3. Deploy to Vercel (Recommended)
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1.  Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2.  Import your project into Vercel.
3.  Vercel will detect Next.js and automatically configure build settings.
4.  Your site will be deployed instantly with a global CDN and automatic SSL.

### 4. Other Hosting Options
- **Netlify**: Drag and drop your project or connect via Git.
- **Node.js Server**: You can host this on any server (AWS, DigitalOcean, Heroku) that runs Node.js. Run `npm run build` followed by `npm start`.
- **Static Export**: If you need a purely static site (no server features), update `next.config.ts` with `output: 'export'` and run `npm run build`.

---

## �📂 Project Structure

- **`src/app`**: Contains all routes and pages.
    - `page.tsx`: The Homepage.
    - `layout.tsx`: The main root layout (includes Header/Footer).
    - `[folder]/page.tsx`: Inner pages (e.g., `src/app/about/page.tsx` -> `/about`).
- **`src/components`**: Reusable UI blocks, organized by feature.
    - `layout`: Header, Footer, PageHeader.
    - `home`: Homepage-specific sections (Hero, Stats, etc.).
    - `common`: Generic components (Buttons, Inputs).
- **`src/lib`**: Utility functions and data files.
- **`public`**: Static assets (images, icons).

---

## 📖 Training Manual: Content Management

### How to Add a New Page

1.  **Create a Folder**: Navigate to `src/app` and create a new folder with your desired URL slug (e.g., `careers`).
2.  **Create Page File**: Inside that folder, create a file named `page.tsx`.
3.  **Add Content**: Copy the structure below to maintain visual consistency.

```tsx
// src/app/careers/page.tsx
import PageHeader from "@/components/layout/PageHeader";
import HomeCTA from "@/components/home/HomeCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join our team of experts.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen pt-[120px] lg:pt-[150px]">
      {/* 1. Page Header with Title and Breadcrumb */}
      <PageHeader title="Join Our Team" breadcrumb="Careers" />

      {/* 2. Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
           <h2 className="text-3xl font-oswald font-bold text-corporate-blue mb-6">Open Positions</h2>
           <p className="font-lato text-gray-600">
             We are currently looking for talented consultants...
           </p>
           {/* Add your custom components here */}
        </div>
      </section>

      {/* 3. Bottom CTA Strip */}
      <HomeCTA />
    </main>
  );
}
```

4.  **Add to Navigation**:
    - Open `src/components/layout/Navbar.tsx` (or `src/lib/nav-data.ts` if you centralized data).
    - Add your new link to the menu array.

### How to Configure the Contact Form

Currently, the form at `src/components/contact/ContactForm.tsx` is set up for **demonstration** (alerts on submit). To make it functional, follow these steps:

#### Method 1: Using Server Actions (Recommended)
We have prepared a skeleton action for you in `src/lib/actions.ts`.

1.  Open `src/components/contact/ContactForm.tsx`.
2.  Import the action:
    ```tsx
    import { submitContactForm } from "@/lib/actions";
    ```
3.  Update the form logic to call this action (or pass it to the `<form action={...}>` prop).
4.  Open `src/lib/actions.ts` and add your email provider logic (e.g., using **Resend** or **Nodemailer**).

#### Method 2: Using a Service (Formspree/EmailJS)
If you prefer not to write backend code:

1.  Sign up for [Formspree](https://formspree.io/).
2.  Get your **Form Endpoint URL**.
3.  Open `src/components/contact/ContactForm.tsx`.
4.  Change the `<form>` tag:
    ```tsx
    <form action="YOUR_FORMSPREE_URL" method="POST">
    ```
    *(Note: You will need to adjust the React Hook Form `onSubmit` handler to allow native submission or use Formspree's React library).*

---

## 🎨 Customization
- **Colors & Fonts**: Edit `src/app/globals.css` to change the CSS variables for colors.
- **Tailwind Config**: Edit `tailwind.config.ts` to extend the theme.

## 📱 Mobile Responsiveness
The site is fully responsive. To test mobile views:
1.  Open Developer Tools (F12).
2.  Click the "Device Toolbar" icon (Ctrl+Shift+M).
3.  Select a device (e.g., iPhone 12).
