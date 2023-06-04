<!DOCTYPE html>
<html>
<head>
    <title>Reg Form</title>

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
    <center><h1>Register account</h1></center>
    <hr>
    
     <b>
        <form METHOD = POST ACTION ="registerPHP.php">
            <label for="cfName">First Name:</label><br>
            <input type="text" id="cfName" name="cfName" placeholder="Your first name.." required><br>

            <label for="clName">Last Name:</label><br>
            <input type="text" id="clName" name="clName" placeholder="Your last name.." required><br>

            <label for="eAdress">Email Address:</label><br>
            <input type="email" id="eAdress" name="eAdress" placeholder="Your email address.." required><br>

            <label for="username">Username:</label><br>
            <input type="text" id="username" name="username" placeholder="Your username" required><br>

            <label for="cPass">Password:</label><br>
            <input type="password" id="cPass" name="cPass" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="A-Z, a-z and 0-9 required.." required><br>

            <input style="width:75px; height:40px;" type="reset" value="Reset">
            <input style="width:150px; height:40px;" type="submit" value="Submit">
    </b>
    </form>
</body>
</html>