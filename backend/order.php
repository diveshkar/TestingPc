<?php
header('Access-Control-Allow-Credentials: true');

session_start();
include "Dbconnect.php";

function get_test_price($tests) {
    $tests_prices = [
        'DSC/Sample' => 100,
        'DSC-Modulated' => 200,
        'FTIE-ATR' => 300,
    ];

    // Check if the test exists in the list of tests.
    if (!array_key_exists($tests, $tests_prices)) {
        return false;
    }

    // Return the price of the test.
    return $tests_prices[$tests];
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    // Get the order details from the form.
    $tests = isset($data['formdata']['tests']) ? $data['formdata']['tests'] : '';
    $parameters = isset($data['formdata']['parameters']) ? $data['formdata']['parameters'] : '';
    $sampleName = isset($data['formdata']['sampleName']) ? $data['formdata']['sampleName'] : '';
    $shelfLife = isset($data['formdata']['shelfLife']) ? $data['formdata']['shelfLife'] : '';
    $storage = isset($data['formdata']['storage']) ? $data['formdata']['storage'] : '';
    $sampleType = isset($data['formdata']['sampleType']) ? $data['formdata']['sampleType'] : '';
    $hazardous = isset($data['formdata']['hazardous']) ? $data['formdata']['hazardous'] : '';
    $sampleDisposition = isset($data['formdata']['sampleDisposition']) ? $data['formdata']['sampleDisposition'] : '';
    $agree = isset($data['formdata']['agree']) && $data['formdata']['agree'] ? 1 : 0;

    // Check if any required form fields are empty
    if (empty($tests) || empty($parameters) || empty($sampleName) || empty($shelfLife) || empty($storage) || empty($sampleType) || empty($hazardous) || empty($sampleDisposition) || empty($data['Username']) || empty($data['Email'])) {
        $response = array(
            'success' => false,
            'message' => 'Error: Required form fields are empty'
        );
        echo json_encode($response);
        exit;
    }

    // Calculate the total price.
    $total_price = 0;
    $test_price = get_test_price($tests);
    if ($test_price !== false) {
        $total_price += $test_price;
    }

    if (preg_match("/itu.mrt.ac.lk/i", $data['Email']) == 1 || preg_match('/uom.mrt.ac.lk/i' , $data['Email']) == 1) {
        // Apply a 20% discount.
        $discount = 0.2;
    } else if (preg_match('/mrt.ac.lk/i', $data['Email']) == 1) {
        // Apply a 10% discount.
        $discount = 0.1;
    } else {
        // No discount.
        $discount = 0;
    }

    // Calculate the discounted price.
    $discounted_price = $total_price * (1 - $discount) . "LKR";

    // Create a quotation.
    $quotation = [
        'success' => true,
        'username' => $data['Username'],
        'tests' => $tests,
        'parameters' => $parameters,
        'sampleName' => $sampleName,
        'shelfLife' => $shelfLife,
        'storage' => $storage,
        'sampleType' => $sampleType,
        'hazardous' => $hazardous,
        'sampleDisposition' => $sampleDisposition,
        'total_price' => $total_price,
        'discounted_price' => $discounted_price,
    ];

    // Save the quotation to the database.
    $stmt = $mysqli->prepare("INSERT INTO orders (username, email, tests, parameters, sampleName, shelfLife, storage, sampleType, hazardous, sampleDisposition, agree, total_price, discounted_price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssssssiii", $data['Username'], $data['Email'], $tests, $parameters, $sampleName, $shelfLife, $storage, $sampleType, $hazardous, $sampleDisposition, $agree, $total_price, $discounted_price);
    $stmt->execute();

    // Send the quotation to the client.
    echo json_encode($quotation);
} else {
    // Unsupported request method
    $response = array(
        'success' => false,
        'message' => 'Unsupported request method!'
    );
    echo json_encode($response);
}
?>
