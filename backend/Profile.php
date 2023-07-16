<?php
require "Dbconnect.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve and sanitize the username from the request
    $username = $data['Username']; // Assuming the parameter is named 'username'

    // Prepare the SQL statement
    $stmt = $mysqli->prepare("SELECT Industry FROM signup WHERE Username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if a matching record is found
    if ($result->num_rows > 0) {
        // Retrieve the industry value from the result
        $row = $result->fetch_assoc();
        $industry = $row['Industry'];

        // Prepare the response
        $response = array(
            'success' => true,
            'industry' => $industry
        );

        // Return the response as JSON
        header('Content-Type: application/json');
        echo json_encode($response);
        exit;
    } else {
        $response = array(
            'success' => false,
            'errorMessage' => 'Username not found'
        );

        // Return the response as JSON
        header('Content-Type: application/json');
        echo json_encode($response);
        exit;
    }
} else {
    $response = array(
        'success' => false,
        'errorMessage' => 'Unsupported request method'
    );

    // Return the response as JSON
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}


?>