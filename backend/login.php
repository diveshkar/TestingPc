<?php
session_start(); // Start the session

require "Dbconnect.php"; // Include the database connection file

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
            $_SESSION['Username'] = $row['Username'];
            $_SESSION['Email'] = $row['Email'];

            $sessionToken = bin2hex(random_bytes(16));

            // Set the session token as a cookie
            setcookie('sessionToken', $sessionToken, time() + (86400), '/'); // Cookie valid for 1 days

            // Send a success response
            $response = [
                'success' => true,
                'sessionToken' => $sessionToken,
                'successMessage' => "LOGIN SUCCESS"
            ];
            header('Content-Type: application/json');
            echo json_encode($response);
            exit;
        } else {
            // Incorrect password
            $response = [
                'success' => false,
                'errorMessage' => 'Incorrect password.'
            ];
            header('Content-Type: application/json');
            echo json_encode($response);
            exit;
        }
    } else {
        // No matching user found
        $response = [
            'success' => false,
            'errorMessage' => 'Incorrect username/email.'
        ];
        header('Content-Type: application/json');
        echo json_encode($response);
        exit;
    }
} else {
    // Unsupported request method
    $response = [
        'success' => false,
        'errorMessage' => 'Unsupported request method!'
    ];
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}

// Close the connection
$mysqli->close();


?>
