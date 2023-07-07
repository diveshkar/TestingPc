<?php
session_start(); // Start the session

include "Dbconnect.php"; // Include the database connection file
// Send the response back to the frontend


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
        // print_r($row);

        // Verify the password
        // if (password_verify($password, $row['Password'])) {
        if ($password === $row['Password']) {
            // Password is correct
            // Store user data in session variables
            $_SESSION['Username'] = $row['Username'];
            $_SESSION['Email'] = $row['Email'];

             // Send a success response
            $response = [
                'success' => true
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
