<?php
include "Dbconnect.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Access the data using the $_POST superglobal
    // $username = $_POST['username'];
    // $email = $_POST['email'];
    // $contactNumber = $_POST['contactNumber'];
    // $industry = $_POST['industry'];
    // $address = $_POST['address'];
    // $password = $_POST['password'];
    // $reenterPassword = $_POST['reenterPassword'];
    $username = $data['username'];
    $email = $data['email'];
    $contactNumber = $data['contactNumber'];
    $industry = $data['industry'];
    $address = $data['address'];
    $password = $data['password'];
    $reenterPassword = $data['reenterPassword'];

    // Validate the data
    $errors = [];

    // Validate username
    if (empty($username)) {
        $errors[] = "Username is required.";
    }

    // Validate email
    if (empty($email)) {
        $errors[] = "Email is required.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format.";
    }

    // Validate contact number
    if (empty($contactNumber)) {
        $errors[] = "Contact number is required.";
    } elseif (!preg_match('/^\d{10}$/', $contactNumber)) {
        $errors[] = "Invalid contact number format. Please enter a 10-digit number.";
    }

    // Validate address
    if (empty($address)) {
        $errors[] = "Address is required.";
    }

    // Validate password
    if (empty($password)) {
        $errors[] = "Password is required.";
    } elseif ($password !== $reenterPassword) {
        $errors[] = "Passwords do not match.";
    }

    // If there are validation errors, display them
    if (!empty($errors)) {
        // foreach ($errors as $error) {
        //     echo $error . "<br>";
        // }
        echo json_encode(array('errors' => $errors));
        exit;
    }
    // Check if the username or email already exists in the database
    $stmt = $mysqli->prepare("SELECT * FROM signup WHERE Username = ? OR Email = ?");
    $stmt->bind_param("ss", $username, $email);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
        echo "Username or email already exists. Please choose a different one.";
        exit;
    }


    // Prepare the SQL statement
    $stmt = $mysqli->prepare("INSERT INTO signup (Username, Email, ContactNumber, Industry, Address, Password) VALUES (?, ?, ?, ?, ?, ?)");

    // Bind the parameters
    $stmt->bind_param("ssssss", $username, $email, $contactNumber, $industry, $address, $password);

    // Execute the statement
    // if ($stmt->execute()) {
    //     // TODO: Provide a success response or redirect to a success page
    //     echo "User registered successfully!";
    //     // header("Location: http://localhost:3000/login/");
    //     // echo '<script> window.location.href = "http://localhost:3000/login"; </script>';
    //     exit;
    // } else {
    //     // TODO: Handle the error
    //     echo "Error: " . $stmt->error;
    // }
    // After successful registration
    if ($stmt->execute()) {
        // User registered successfully!
        // Return a success response
        $response = array(
            'success' => true,
            'message' => 'User registered successfully!'
        );
    } else {
        // Handle the error
        $response = array(
            'success' => false,
            'message' => 'Error: ' . $stmt->error
        );
    }

   
    echo json_encode($response);
    exit;

    // Close the statement and connection
    $stmt->close();
    $mysqli->close();
} else {
    // Neither POST nor GET method is used
    // Handle the unsupported request method
    echo "Unsupported request method!";
}
?>
