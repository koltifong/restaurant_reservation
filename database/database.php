<?php 

    $db_server = "127.0.0.1";
    $db_user = "root";
    $db_pass = "";
    $db_name = "restaurant_reservation";
    $conn = "";


    $conn = mysqli_connect($db_server,
                           $db_user,
                           $db_pass,
                           $db_name);


    if($conn){
        echo "You are connected!";
    } else {
        echo "Could not connect!";
    }

?>