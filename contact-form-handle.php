<?php
if (isset($_POST['name']) && isset($_POST['email'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $to = 'mathiasqm@gmail.com';
    $subject = 'Website form - Lead Gen';
    $custommsg = $_POST['message'];
    $photography = $_POST['category'][0];
    $graphicDesign = $_POST['category'][1];
    $liveInstallation = $_POST['category'][2];
    $videography = $_POST['category'][3];
    $other = $_POST['category'][5];
    $body = '<html>
                <body>
                    <h2>Lead Generation - synkron.dk</h2>
                    <br>
                    <p><strong>Name: </strong>'.$name.'</p>
                    <p><strong>Email: </strong>'.$email.'</p>
                    <p><strong>Interested in: </strong><br>'.$photography.'<br>'.$graphicDesign.'<br>'.$liveInstallation.'<br>'.$videography.'<br>'.$personalProjects.'<br>'.$other.'</p>
                    <p><strong>They wrote: </strong>'.$custommsg.'</p>
                    </body>
             </html>';

    //headers
    $headers = "From: ".$name." <".$email.">\r\n";
    $headers = "Reply-To: ".$email."\r\n";
    $headers = "Mime-Version: 1.0\r\n";
    $headers = "Content-type: text/html; charset-utf-8";

    //Send
    $send = mail($to, $subject, $body, $headers);
    if ($send) {
        header( "Location: submitted.html" ); 
        exit; 
    } else {
        echo 'Error';
    }
}
?>