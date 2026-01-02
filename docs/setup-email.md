# Setting Up the Contact Form (Email Service)

This template uses **Resend** to handle contact form submissions. Resend is a developer-first email API that is easy to set up and has a generous free tier.

## Step 1: Create a Resend Account
1.  Go to [Resend.com](https://resend.com/docs/dashboard/api-keys) and sign up.
2.  Verify your domain (optional for testing, but required for production).

## Step 2: Get your API Key
1.  Navigate to **API Keys** in the sidebar.
2.  Click **Create API Key**.
3.  Name it (e.g., "Consultancy Site") and verify the permissions (Sending access is enough).
4.  **Copy the key** (it starts with `re_`).

## Step 3: Configure Environment Variables
1.  In the root of your project, look for a file named `.env` (or create one if it doesn't exist).
2.  Add the following lines:

```bash
# Resend API Key (Get this from https://resend.com)
RESEND_API_KEY=re_123456789

# The email where you want to RECEIVE messages from the contact form
CONTACT_EMAIL=your-email@example.com
```

## Step 4: Verify
1.  Restart your development server (`npm run dev`).
2.  Go to the **Contact** page.
3.  Fill out the form and hit Send.
4.  Check your inbox (or the Resend dashboard logs)!

> **Note:** On the free tier of Resend, you can only send emails to the email address you signed up with. To send to others, you must verify your domain.
