<?php

header('Access-Control-Allow-Credentials: true');
session_start();
include "Dbconnect.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the orderId from the request body
    $orderId = $data['orderId'];

    // Update the status of the order to "Accepted"
    $stmt = $mysqli->prepare("UPDATE orders SET status = 'Rejected' WHERE orderID = ?");
    $stmt->bind_param("i", $orderId);
    $stmt->execute();

    // Check if the update was successful
    if ($stmt->affected_rows > 0) {
        $response = array(
            'success' => true,
            'message' => 'Order accepted successfully!'
        );
    } else {
        $response = array(
            'success' => false,
            'message' => 'Failed to accept the order!'
        );
    }

    // Send the response as JSON
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

