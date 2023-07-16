<?php
session_start();

if(isset($_GET)){
    $_SESSION['Username'] = $_GET['username'];
    $_SESSION['Email'] = $_GET['useremail'];
    echo '<script>window.location.href = "http://localhost:3000/order";</script>';
    exit;
}else{
    echo '<script>window.location.href = "http://localhost:3000/order";</script>';
    exit;
}


// header('http://localhost:3000/order');


?>