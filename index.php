<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Send email notification
    $to = "your@email.com";
    $subject = "New form submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    mail($to, $subject, $body);
    
    // Send WhatsApp notification (using third-party service)
    // Insert your WhatsApp API code here
    // Example: 
    // file_get_contents("https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER&text=New+form+submission%0AName%3A+$name%0AEmail%3A+$email%0AMessage%3A+$message");
    
    // Redirect user after submission (optional)
    // header("Location: thank-you.html");
}
?>