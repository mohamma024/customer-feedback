<?php
// Include the database connection file
include 'db_connect.php';

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the form data
    $title = $_POST['title'];
    $description = $_POST['description'];

    // Insert the survey data into the database
    $sql = "INSERT INTO surveys (title, description) VALUES ('$title', '$description')";
    if (mysqli_query($conn, $sql)) {
        echo "Survey created successfully!";
        header("Location: dashboard.html");
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    // Close the database connection
    mysqli_close($conn);
}
?>
