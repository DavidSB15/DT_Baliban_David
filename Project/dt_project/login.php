<!DOCTYPE html>
<html>
<head>
    <title>Login</title>

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
    
    <?php
        $con = mysqli_connect('localhost', 'root', '','quiz');

        $sql = "select ID, username,password from user";

        $result=mysqli_query($con,$sql);

        $fp = fopen('users.json', 'w');

        $data = [];
        foreach ($result as $res) {
            $t = [];
            $t['ID'] = $res['ID'];
            $t['username'] = $res['username'];
            $t['password'] = $res['password'];
            $data[] = $t;
        }

       //   while($row = mysqli_fetch_assoc($result)) {
        fwrite($fp, json_encode($data));
        
        fclose($fp);
    ?>

</head>
<body>

    
    <center><h1>Login</h1></center>
    <hr>
    <form method="" action="" name="reg_form" onsubmit="return validate()">
        <h2></h2>
        <table>
            <tr>
                <td><label>Username: </label></td>
                <td>
                    <input type="text" name="username" id="loginUsername" placeholder="Username">
                </td>
            </tr>
            <tr>
                <td><label>Password: </label></td>
                <td>
                    <input type="Password" name="password" id="loginPassword" placeholder="Password">
                </td>
            </tr>
            
            <tr>
                <td>
                    <a class="btn" onclick="validate()">Log In</a>
                </td>
            </tr>
        </table>
    </form>
    <script src="login.js"></script>
</body>
</html>