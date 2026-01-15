export async function sendEmail({
    to,
    subject,
    text,
    html,
}: {
    to: string;
    subject: string;
    text: string;
    html?: string;
}) {
    // In a real app, you would use Resend, SendGrid, etc.
    // For now, we'll just log to the console.
    console.log("----------------------------------------------------");
    console.log(`📧 SENDING EMAIL TO: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`Body: ${text}`);
    console.log("----------------------------------------------------");

    return { success: true };
}
