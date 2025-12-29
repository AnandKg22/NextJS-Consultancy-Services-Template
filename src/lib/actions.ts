"use server";

// This is a skeleton Server Action for handling form submissions.
// You can use this to integrate with APIs like Resend, SendGrid, or save to a database.

export async function submitContactForm(formData: FormData) {
    // 1. Get data from the form
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Console log for debugging (will appear in your terminal)
    console.log("Form submitted:", { name, email, subject, message });

    // 2. Validate data (Basic example)
    if (!name || !email || !message) {
        return { success: false, message: "Missing required fields" };
    }

    // 3. TODO: Add your email sending logic here
    // Example with Resend:
    // await resend.emails.send({ ... })

    // 4. Return success response
    return { success: true, message: "Message sent successfully!" };
}
