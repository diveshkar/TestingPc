<?php
header('Access-Control-Allow-Credentials: true');

session_start();
include "Dbconnect.php";

function get_test_price($tests) {
    $tests_prices = [
        'DSC/Sample' => 12610,
        'DSC-Modulated' => 14625,
        'FTIE-ATR' => 3100,
        'FTIR-KBr' => 4550,
        'TGA' => 9750,
        'Sieve' => 7600,
        'Moisture' => 2280,
        'Turbidity' => 1710,
        "Melting-point-of-powder" => 1900,
        'Viscosity Index' => 5700,
        'Softening-point'	=> 2850,
        'Torsion-viscometer' => 1710,
        'Penetrometer' => 1800,
        "Digital-Viscometer" => 1800,
        "Aniline-point"	=> 7500,
        'Flash-point' => 4620,
        'Centrifuge' => 1800,
        'pH' => 1000,
        'Total-solids' => 2500,
        'Total-suspended-solids'=> 3000,
        'Total-dissolved-solids'=> 2600,
        'Dissolved-oxygen'	=> 3500,
        'Residual-chlorine'	=> 3000,
        'COD'	=> 2500,
        'BOD'	=> 4000,
        'Oil-and-grease' => 3600,
        'Nitrate'	=> 2100,
        'Total-hardness'	=> 3500,
        'Oven-drying'	=> 1800,
        'Distillation'	=> 3500,
        'Soxhlet-extraction'	=> 3500,
        'Jar-tester'	=> 3500,
        'Vaccum-oven'	=> 2500,
        'UV-1' => 	10000,
        'UV-2' => 	500,
        'UV-3' => 	6000,
        'Internal-mixture' => 	4500,
        'Two-roll-mill' => 2800,
        'Hydraulic-press' => 2100,
        'De-mattia'	=> 8250,
        'Tensile'	=> 1800,
        'DIN' => 	2400,
        'MDR' => 	3000,
        'Moony-viscosity' => 3150,
        'Rebound-resilience' => 1350,
        'Hardness-test' =>1350,
        // 'Hardness test' =>1350,
        'Melt-flow' =>3000,
        'Spectrum-analysis' =>10500



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
        'quotation' => [
        'username' => $data['Username'],
        'tests' => $tests,
        'parameters' => $parameters,
        'sampleName' => $sampleName,
        'shelfLife' => $shelfLife,
        'storage' => $storage,
        'sampleType' => $sampleType,
        'hazardous' => $hazardous,
        'sampleDisposition' => $sampleDisposition,
        'total_price' => $total_price . "LKR",
        'discounted_price' => $discounted_price,
        ] 
    ];
    $current_time = date('Y-m-d H:i:s');
    $status = "pending";
    // Save the quotation to the database.
    $stmt = $mysqli->prepare("INSERT INTO orders (username, email, tests, parameters, sampleName, shelfLife, storage, sampleType, hazardous, sampleDisposition, agree, total_price, discounted_price, created_at, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssssssiiiss", $data['Username'], $data['Email'], $tests, $parameters, $sampleName, $shelfLife, $storage, $sampleType, $hazardous, $sampleDisposition, $agree, $total_price, $discounted_price, $current_time, $status);
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
