<!DOCTYPE html>
<html>
 <head>
  <title>highscores Form</title>

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
    <center><h1>Highscores</h1></center>
    <hr>
    
     <b>
        <form METHOD = POST ACTION ="highscoresPHP.php">
            <label for="ID">ID:</label><br>
            <input type="text" id="ID" name="ID"><br>

            <label for="score">score:</label><br>
            <input type="text" id="score" name="score"><br>

            <label for="scoreDate">scoreDate:</label><br>
            <input type="text" id="scoreDate" name="scoreDate"><br>

            <label for="UserID">UserID:</label><br>
            <input type="text" id="UserID" name="UserID"><br>
    </b>
    </form>
</body>

</html>
