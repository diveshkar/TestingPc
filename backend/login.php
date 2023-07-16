<?php
header('Access-Control-Allow-Origin: http://localhost:3000/login'); // Replace with the origin of your frontend app
header('Access-Control-Allow-Credentials: true');
session_start();
// $_SESSION['username'] = "";
require "Dbconnect.php"; // Include the database connection file
// $_SESSION['username'] = "x";
// $_SESSION['email'] = "y";
// function setSess($x,$y){
//     $_SESSION['username'] = $x;
//     $_SESSION['email'] = $y;
// }

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username_or_Email = $data['username_or_Email'];
    $password = $data['password'];
   
    // Prepare the SQL statement
    $sql = "SELECT * FROM signup WHERE Username = '$username_or_Email' OR Email = '$username_or_Email'";

    // Execute the query
    $result = $mysqli->query($sql);

    if ($result && $result->num_rows === 1) {
        $row = $result->fetch_assoc();

        // Verify the password using a secure password hashing algorithm
        // Replace this with your preferred password hashing method (e.g., bcrypt)
        if ($password === $row['Password']) {
            // Password is correct

            // Store user data in session variables
            // $_SESSION['username'] = $row['Username'];
            // $_SESSION['email'] = $row['Email'];
            
            // setSess($_SESSION['email'],$_SESSION['username']);

            $sessionToken = bin2hex(random_bytes(16));

            // Set the session token as a cookie
            setcookie('sessionToken', $sessionToken, time() + (86400), '/'); // Cookie valid for 1 days
            

            // $_SESSION['username'] = $_COOKIE['sessionUsername'];
            // $_SESSION['email'] = $_COOKIE['sessionEmail'];
            // Send a success response
            $response = [
                'success' => true,
                'sessionToken' => $sessionToken,
                'successMessage' => "LOGIN SUCCESS",
                'sessionusername'=> $row['Username'],
                'sessionemail' => $row['Email']
            ];
            // header('Content-Type: application/json');
            echo json_encode($response);
            
        } else {
            // Incorrect password
            $response = [
                'success' => false,
                'errorMessage' => 'Incorrect password.'
            ];
            header('Content-Type: application/json');
            echo json_encode($response);
            
        }
    } else {
        // No matching user found
        $response = [
            'success' => false,
            'errorMessage' => 'Incorrect username/email.'
        ];
        header('Content-Type: application/json');
        echo json_encode($response);
    
    }
} 
else {
    // Unsupported request method
    $response = [
        'success' => false,
        'errorMessage' => 'Unsupported request method!'
    ];
    header('Content-Type: application/json');
    echo json_encode($response);
  
}

// Close the connection
$mysqli->close();


?>
