<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars($_POST['name']);
    $email   = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to      = "sahanabeysingheofficial@gmail.com"; // Your email
    $subject = "New Message from Portfolio Contact Form";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    $body = "You have received a new message from your website contact form:\n\n" .
            "Name: $name\n" .
            "Email: $email\n" .
            "Message:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.location.href='index.php';</script>";
    } else {
        echo "<script>alert('Message failed to send.'); window.location.href='index.php';</script>";
    }
} else {
    echo "Invalid Request";
}
?>
