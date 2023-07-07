<?php
include "Dbconnect.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    

    $tests = isset($data['tests']) ? $data['tests'] : '';
    $parameters = isset($data['parameters']) ? $data['parameters'] : '';
    $sampleName = isset($data['sampleName']) ? $data['sampleName'] : '';
    $shelfLife = isset($data['shelfLife']) ? $data['shelfLife'] : '';
    $storage = isset($data['storage']) ? $data['storage'] : '';
    $sampleType = isset($data['sampleType']) ? $data['sampleType'] : '';
    $hazardous = isset($data['hazardous']) ? $data['hazardous'] : '';
    $sampleDisposition = isset($data['sampleDisposition']) ? $data['sampleDisposition'] : '';
    $agree = isset($data['agree']) && $data['agree'] ? 1 : 0;

    if (empty($tests) || empty($parameters) || empty($sampleName) || empty($shelfLife) || empty($storage) || empty($sampleType) || empty($hazardous) || empty($sampleDisposition)) {
        $response = array(
            'success' => false,
            'message' => 'Error: Required form fields are empty'
        );
        echo json_encode($response);
        exit;
    }

    $stmt = $mysqli->prepare("INSERT INTO orders (tests, parameters, sampleName, shelfLife, storage, sampleType, hazardous, sampleDisposition, agree) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssssi", $tests, $parameters, $sampleName, $shelfLife, $storage, $sampleType, $hazardous, $sampleDisposition, $agree);

    if ($stmt->execute()) {
        $response = array(
            'success' => true,
            'message' => 'Order successfully submitted'
        );
    } else {
        $response = array(
            'success' => false,
            'message' => 'Error: ' . $stmt->error
        );
    }

    $stmt->close();
    $mysqli->close();

    echo json_encode($response);
    exit;
} else {
    // Neither POST nor GET method is used
    // Handle the unsupported request method
    echo "Unsupported request method!";
}
?>
