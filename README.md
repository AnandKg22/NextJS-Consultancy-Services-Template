# Consultancy Services - Premium Next.js Template

Welcome to the **Consultancy Services** template. This is a high-performance, pixel-perfect corporate theme, rebuilt with **Next.js 15**, **Tailwind CSS**, **Framer Motion**, and **Sanity CMS**.

## ✨ Key Features

*   **⚡ Hybrid CMS Architecture**: Works out-of-the-box with **Static Demo Data**. Connect **Sanity.io** to switch to "Live Mode" seamlessly.
*   **🎨 Dynamic Theme System**: 10+ Professional color presets. Users can toggle themes or you can lock them via config.
*   **📧 Functional Contact Form**: Built-in backend integration with **Resend** (or easy to swap).
*   **📄 Blog & News**: Fully dynamic news section with categories, search, and individual post pages.
*   **📱 Fully Responsive**: Optimized for all devices.
*   **🔍 SEO Ready**: Dynamic metadata generation for all pages and posts.

---

## 🚀 Getting Started

### 1. Installation
Ensure you have [Node.js](https://nodejs.org/) (v18+) installed.

```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the site.

---

## ⚙️ Configuration & Features

### 1. 🎨 Theme System
This template comes with a powerful theme engine.

*   **Configuration**: Edit `src/config/themeConfig.ts`
    *   `allowUserCustomization`: Set to `true` to show the theme picker to users, or `false` to hide it.
    *   `defaultTheme`: Set the default look (e.g., `'nature'`, `'corporate'`, `'tech'`).
*   **Custom Colors**: You can edit the CSS variables in `src/app/globals.css`.
*   **Sticky Header**: Configure the header style when scrolled.
    *   `header.stickyStyle`: Choose `'dark'`, `'white'`, or `'primary'` (corporate blue).
*   **Footer Style**: Configure the main footer appearance.
    *   `footer.style`: Choose `'dark'`, `'primary'`, or `'secondary'` (corporate orange).

> **✨ Pro Tip:** If `allowUserCustomization` is `true`, visitors can toggle these settings live using the **Theme Customizer** (paint brush icon)!

### 2. 🎥 Studio CMS (Admin Dashboard)
The template includes a hidden, powerful admin dashboard.
*   **Access**: Click the **Login Icon** (top right of header) or go to `/studio`.
*   **Admin Layout**: The global header/footer is hidden on the Studio to provide a focused writing environment.
*   **Loading Screen**: Includes a custom loading indicator.
*   **Live Preview**: While editing posts in the Studio, you see updates in real-time.
### 3. 📰 Hybrid News System
The template uses a **Hybrid System**:
*   **Demo Mode (Default)**: If you haven't set up Sanity, the site uses static data from `src/data/demoContent.ts`. It works perfectly without any API keys!
*   **Live Mode (Sanity)**: Once you add your Sanity Project ID, the site automatically switches to fetching real content from your CMS.

👉 **[Read the Full CMS Setup Guide](docs/setup-cms.md)** for instructions on connecting your own Sanity content.

### 4. 📧 Contact Form
The contact form is wired up to a backend API route (`src/app/api/contact/route.ts`).
It uses **Resend** by default for reliable email delivery.

👉 **[Read the Email Setup Guide](docs/setup-email.md)** to configure your API keys.

---

## 📁 Project Structure

*   `src/app`: Routes and Pages (App Router).
*   `src/components`: Reusable UI components.
    *   `news`: Blog-related components (Card, Grid, Sidebar).
    *   `theme`: Theme switcher logic.
*   `src/data`: Static fallback data (`demoContent.ts`).
*   `src/sanity`: Sanity configuration, client, and schemas.
*   `src/config`: Global configuration files.
*   `docs`: Detailed setup documentation.

---

## 📦 Build & Deployment

### Vercel (Recommended)
1.  Push your code to GitHub/GitLab.
2.  Import project into [Vercel](https://vercel.com).
3.  Add your Environment Variables (Sanity, Resend) in the Vercel Dashboard.
4.  Deploy!

### Manual Build
```bash
npm run build
npm start
```

---

*Built with ❤️ by [Anand Kumar]*
