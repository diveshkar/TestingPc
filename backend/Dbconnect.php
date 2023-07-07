<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');

//get inputs from user
$request_data = file_get_contents('php://input');
$data = json_decode($request_data, true);

// Database connection details
$host = 'localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'testingpc';

// Create a mysqli connection
$mysqli = new mysqli($host, $dbUsername, $dbPassword, $dbName);

// Check connection
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
    exit;
}

?>
