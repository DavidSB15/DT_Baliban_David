<html>
<head>
    <link rel="stylesheet" href="app.css" />
    <style type="text/css">
        body{
            font-family: Calibri;
        }
        input[type="text"] {
            width: 250px;
        }
        input[type="submit"], input[type="reset"] {
            width: 77px;
            height: 27px;
            position: relative;left: 180px;
        }
        form{
            text-align: center;
            font-family: Calibri;
            font-size: 20px;
            border: 3px solid black;
            width: 600px;
            margin: 20px auto;
        }
        td {
            padding: 10px;
        }
        td:first-child {
            text-align: right;
            font-weight: bold;
        }
        td:last-child {
            text-align: left;
        }

    </style>
</head>



<?php

$servername = "localhost";  // Replace with your server name
$username = "root";         // Replace with your username
$password = "";             // Replace with your password
$database = "quiz"; // Replace with your database name

// Create a connection
$conn = new mysqli($servername, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query to retrieve data from the database
$sql = "SELECT * FROM highscores"; // Replace with your table name

// Execute the query
$result = $conn->query($sql);

// Check if any rows are returned
if ($result->num_rows > 0) {
    // Output data of each row
    while ($row = $result->fetch_assoc()) {
        echo "score: " . $row["score"] . "<br>";
        echo "scoreDate: " . $row["scoreDate"] . "<br>";
      
        echo "<br>";
    }
} else {
    echo "No data found.";
}

// Close the connection
$conn->close();

/*
$Data = "<script> document.write(localStorage.getItem('highScores'));</script>";
$str = substr_replace($Data, "'", 0);
$str .= "'";
print_r(explode(",", $str));

$con = mysqli_connect('localhost', 'root', '','quiz');

// Check if the connection was successful
if ($con->connect_error) {
    die('Connection failed: ' . $con->connect_error);
}

$sql = "INSERT INTO score (ID,score,scoreDate,userID) VALUES ($entry->id,$entry->score,$entry->date,$entry->userID)";

$rs = mysqli_query($con, $sql);

if($rs)
    {
    echo "Score saved succesfully";
    }
// Close the database connection
$con->close();
*/
 ?>