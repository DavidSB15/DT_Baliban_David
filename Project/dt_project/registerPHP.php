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
<body>

    <center>
    <div class="container">
    <h1>
    <?php
    $con = mysqli_connect('localhost', 'root', '','quiz');

    $cfName = $_POST["cfName"];
    $clName = $_POST["clName"];
    $eAdress = $_POST["eAdress"];
    $cPass = $_POST["cPass"];
    $username = $_POST["username"];

    $sql = "INSERT INTO user (ID, username, password, email, fName, lName)
    VALUES ('0','$username', '$cPass', '$eAdress','$cfName', '$clName')";

    $rs = mysqli_query($con, $sql);

    if($rs)
    {
    echo "Account created succesfully";
    }
    else
    echo "Failed to create account";
     ?><h1>

        <a href="http://localhost/dt_project/login.php">Login</a>
    </div>
    </center>
</body>
</html>