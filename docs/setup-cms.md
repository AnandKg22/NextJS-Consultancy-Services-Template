# CMS Integration (Sanity) setup

This template comes with **Sanity CMS** integration pre-configured. This allows you to manage your News/Blog posts via a beautiful dashboard without touching code.

## Step 1: Initialize Sanity
Since this is a new project, you need to connect it to your own Sanity account.

1.  Run the following command in your terminal:
    ```bash
    npx sanity init
    ```
2.  Follow the prompts:
    *   **Login type:** Select your preferred method (Google, GitHub, etc.).
    *   **Project name:** Enter a name (e.g., "My Consultancy Site").
    *   **Use the default dataset configuration?** Yes.
    *   **Project output path:** It might ask this, just confirm the current directory or the default.
    *   **Clean up?** If it asks to reconfigure `sanity.config.ts` or `src/sanity`, **be careful**. You generally want to KEEP the existing schema code I wrote.
        *   **CRITICAL:** The safest way is to just get your **Project ID** from the Sanity dashboard (https://www.sanity.io/manage) if `npx sanity init` tries to overwrite too much.

## Step 2: Configure Environment Variables
1.  Get your **Project ID** and **Dataset** (usually "production") from https://www.sanity.io/manage.
2.  Add them to your `.env` file:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

## Step 3: Access the Studio
1.  Run your dev server: `npm run dev`.
2.  Go to `http://localhost:3000/studio`.
3.  You will see the Desk Structure.
4.  Click on **News Post**, create a new post, add a title, image, and hit **Publish**.
5.  Go to `http://localhost:3000/news` to see your content appear dynamically!

## Troubleshooting
*   **CORS Errors:** If you see CORS errors in the console, go to your Sanity Dashboard -> API -> CORS Origins and add `http://localhost:3000` (and your production domain).
