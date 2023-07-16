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
        'Sieve Analyser( For 01kg max/20min)' => 7600,
        'Moisture Content (Oven method or moisture balance)' => 2280,
        'Turbidity' => 1710,
        "Melting Point of Powder" => 1900,
        'Viscosity Index' => 5700,
        'Softening Point'	=> 2850,
        'Torsion Viscometer' => 1710,
        'Penetrometer' => 1800,
        "Digital Viscometer" => 1800,
        "Aniline Point"	=> 7500,
        'Flash point and fire point (using open cup)' => 4620,
        'Centrifuge (For minimum 15min)' => 1800,
        'pH/Conductivity/Salinity'	=> 1000,
        'Total Solids'	=> 2500,
        'Total Suspended Solids'=> 3000,
        'Total Dissolved Solids'	=> 2600,
        'Dissolved Oxygen'	=> 3500,
        'Residual Chlorine'	=> 3000,
        'COD (open reflux and Tirametric method)'	=> 2500,
        'BOD Winckler method'	=> 4000,
        'Oil & Grease'	=> 3600,
        'Nitrate/ Nitrite/Total Nitrogen/Phosphate colorimetric method'	=> 2100,
        'Total Hardness/ Bicarbonate'	=> 3500,
        'Oven drying/ hour'	=> 1800,
        'Distillation/ hour'	=> 3500,
        'Soxhlet Extraction/hour'	=> 3500,
        'Jar tester'	=> 3500,
        'Vacuum oven/hour'	=> 2500,
        'UV Spectroscopy (Preparing Callibartion curve)' => 	10000,
        'UV Spectroscopy (Determining concentration of unknown sample by using the calibration curve)sample )' => 	500,
        'UV Spectroscopy (Determining maximum wavelength for a certain chemical compound)/sample' => 	6000,
        'Internal Mixture / hour' => 	4500,
        'Two roll mill/hour' => 2800,
        'Hydraulic press/hour' => 2100,
        'De Mattia flexing test /sample'	=> 8250,
        'Tensile properties test/ Tear Resistant test /sample'	=> 1800,
        'DIN Abrasion test /sample' => 	2400,
        'Rheograph (MDR)' => 	3000,
        'Moony viscosity Test' => 3150,
        'Rebound resilience test /sample' => 1350,
        'Specific gravity test /sample' =>1350,
        'Hardness test' =>1350,
        'Melt Flow Index' =>3000,
        'Spectrum Analysis' =>10500



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
