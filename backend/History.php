<?php
header('Access-Control-Allow-Credentials: true');
session_start();
include "Dbconnect.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Fetch order history for a specific username from the database
    $username = $data['Username'];

    if (empty($username)) {
        $response = array(
            'success' => false,
            'message' => 'Error: Username is required'
        );
        echo json_encode($response);
        exit;
    }

    $stmt = $mysqli->prepare("SELECT * FROM orders WHERE username = ? ORDER BY created_at DESC");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    $orders = array();

    // Iterate over the result and store each row in the $orders array
    while ($row = $result->fetch_assoc()) {
        $orders[] = $row;
    }

    // Send the order history as a JSON response
    $response = array(
        'success' => true,
        'orders' => $orders
    );
    echo json_encode($response);
} else {
    // Unsupported request method
    $response = array(
        'success' => false,
        'message' => 'Unsupported request method!'
    );
    echo json_encode($response);
}
?>
