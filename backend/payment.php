<?php
session_start();
require 'Dbconnect.php';
// // echo "hi";

if($_SERVER['REQUEST_METHOD']=='POST' && isset($_FILES['myFile'])){
    $myFile = $_FILES['myFile'];

    // // //Get file details
    $filename = $myFile['name'];
    $fileTmpath = $myFile['tmp_name'];
    $fileSize = $myFile['size'];
    $fileError = $myFile['error'];

    // $filename = $data['myFile']['name'];
    // $fileTmpath = $data['myFile']['tmp_name'];
    // $fileSize = $data['myFile']['size'];
    // $fileError = $data['myFile']['error'];

    // print_r($myFile);

    $uploadDirectory = 'C:\xampp\htdocs\TestingPc\backend\payment/';
    $response = "";
    switch ($fileError) {
        case UPLOAD_ERR_OK:
            
            // Generate a unique filename to prevent conflicts
            $uniqueFilename = uniqid() . '_' . $filename;
            //move the uploaded file to specified directory
            $destination = $uploadDirectory . $uniqueFilename;
            // print_r($destination);
            move_uploaded_file($fileTmpath, $destination);
            
            
            //Save image details to the database
            $sql = "INSERT INTO payment (paymentslip) VALUES (?)";
            $stmt = $mysqli->prepare($sql);
            $stmt->bind_param("s", $uniqueFilename);
            $stmt->execute();

            $response = array(
                'success' => true,
                'successMessage' => 'There is no error, the file uploaded with success.' );
            // echo json_encode($response);  
            break;
        case UPLOAD_ERR_INI_SIZE:
            $response = array(
                'success' => true,
                'errorMessage' => 'The uploaded file exceeds the upload_max_filesize.' );
            // echo json_encode($response);
            break;
        case UPLOAD_ERR_FORM_SIZE: 
            $response = array('success' => false,
                               'errorMessage' =>'The uploaded file exceeds the MAX_FILE_SIZE.');
            // echo json_encode($response);
            break;
        case UPLOAD_ERR_PARTIAL:
            $response = array('success' => false,
                               'errorMessage' =>'The uploaded file was only partially uploaded.');
            // echo json_encode($response);
            break;
        case UPLOAD_ERR_NO_FILE:
            $response = array('success' => false,
                               'errorMessage' =>'No file was uploaded.');
            // echo json_encode($response);
            break;
        case UPLOAD_ERR_NO_TMP_DIR:
            $response = array('success' => false,
                               'errorMessage' =>'Missing a temporary folder.');
            // echo json_encode($response);
            break;
        case UPLOAD_ERR_CANT_WRITE:
            $response = array('success' => false,
                               'errorMessage' =>'Failed to write file to disk.');
            // echo json_encode($response);
            break;
        case UPLOAD_ERR_EXTENSION:
            $response = array('success' => false,
                               'errorMessage' =>'File upload stopped by extension.');
            // echo json_encode($response);
            break;
        default:
        $response = array('success' => false,
                          'errorMessage' =>'Unknown upload error');
            // echo json_encode($response);
            break;
    }

    
    // $request_data = file_get_contents('php://input');
    // $data = json_decode($request_data, true);
    echo json_encode($response);
    // print_r($response);
    // print_r($data);
} 

// $stmt->close()
$mysqli -> close()

// if (isset($_FILES['myFile']) && $_FILES['myFile']['error'] === 0) {
    
//     $imageName = time() . '_' . uniqid() . '.' . pathinfo($_FILES['myFile']['name'], PATHINFO_EXTENSION);
//     $targetDirectory = 'C:\xampp\htdocs\TestingPc\backend\payment/'; // Directory where the images will be stored
//     $targetPath = $targetDirectory . $imageName;

//     if (move_uploaded_file($_FILES['myFile']['tmp_name'], $targetPath)) {
//         // echo "Succ";
//         //Save image details to the database
//             $sql = "INSERT INTO payment (paymentslip) VALUES (?)";
//             $stmt = $mysqli->prepare($sql);
//             $stmt->bind_param("s", $targetPath);
//             $stmt->execute();

//             $response = array(
//                 'success' => true,
//                 'message' => 'There is no error, the file uploaded with success.' );
//                 echo json_encode($response);
//                 // echo $response;
//     } else {
//         // echo "Handle the move failure case";
//     }
// } else {
//     // echo "Handle the error case";
// }

?>