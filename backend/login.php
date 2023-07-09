<?php
session_start(); // Start the session

include "Dbconnect.php"; // Include the database connection file

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Access the data using the $_POST superglobal
    $username_or_Email = $data['username_or_Email'];
    $password = $data['password'];

    // Prepare the SQL statement
    $stmt = $mysqli->prepare("SELECT * FROM signup WHERE Username = ? OR Email = ?");

    // Bind the parameters
    $stmt->bind_param("ss", $username_or_Email, $username_or_Email);

    // Execute the statement
    $stmt->execute();

    // Get the result
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        // Fetch the row
        $row = $result->fetch_assoc();

        // Verify the password
        if ($password === $row['Password']) {
            // Password is correct
            // Store user data in session variables
            $_SESSION['Username'] = $row['Username'];
            $_SESSION['Email'] = $row['Email'];

            $sessionToken = bin2hex(random_bytes(16));

            // Set the session token as a cookie
            setcookie('sessionToken', $sessionToken, time() + (86400 * 30), '/'); // Cookie valid for 30 days

            // Send a success response
            $response = [
                'success' => true,
                'sessionToken' => $sessionToken
            ];
            echo json_encode($response);
            exit;
        } else {
            // Password is incorrect
            echo "Incorrect username/email or password.";
        }
    } else {
        // No matching user found
        echo "Incorrect username/email or password.";
    }

    // Close the statement
    $stmt->close();
} else {
    // Neither POST nor GET method is used
    // Handle the unsupported request method
    echo "Unsupported request method!";
}

// Close the connection
$mysqli->close();

?>
