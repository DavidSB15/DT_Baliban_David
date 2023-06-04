<?php
// connect to the database
$servername = "localhost";
$username = "postgres";
$password = "parola123";
$dbname = "accesa";

//$conn = new mysqli($servername, $username, $password, $dbname);
$conn = pg_connect($servername, $username, $password, $dbname);

// retrieve data from a table
$sql = "SELECT sometext FROM test_table";
$result = $conn->query($sql);

// display the data in an HTML table
if ($result->num_rows > 0) {
    echo "<table><tr><th>sometext</th></tr>";
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["sometext"] . "</td><td>";
    }
    echo "</table>";
} else {
    echo "0 results";
}

// close the database connection
