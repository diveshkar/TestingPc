<?php
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
else {
    echo "connect succesfully";
}
?>
