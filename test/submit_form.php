<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // Email configuration
    $to = "gamemodstudios@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    // Email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message";

    // Send email
    mail($to, $subject, $email_content, $headers);

    // Redirect to thank-you page
    header("Location: thank-you.html"); // Create a thank-you page and adjust the filename
    exit();
} else {
    // If the form is not submitted, redirect to the homepage or display an error message
    header("Location: index.html"); // Adjust the filename or URL
    exit();
}
?>
