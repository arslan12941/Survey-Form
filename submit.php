<?php
$host = 'localhost';
$dbname = 'survey';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $age = filter_input(INPUT_POST, 'age', FILTER_VALIDATE_INT);
    $satisfaction = filter_input(INPUT_POST, 'satisfaction', FILTER_VALIDATE_INT);
    $recommend = $_POST['recommend'] ?? '';
    $improvements = isset($_POST['improvements']) ? implode(', ', $_POST['improvements']) : '';
    $comments = filter_input(INPUT_POST, 'comments', FILTER_SANITIZE_SPECIAL_CHARS);

    $sql = "INSERT INTO survey_responses (name, email, age, satisfaction, recommend, improvements, comments)
            VALUES (:name, :email, :age, :satisfaction, :recommend, :improvements, :comments)";

    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':name' => $name,
        ':email' => $email,
        ':age' => $age,
        ':satisfaction' => $satisfaction,
        ':recommend' => $recommend,
        ':improvements' => $improvements,
        ':comments' => $comments
    ]);

    header("Location: survey.html?success=1");
    exit();
} catch (PDOException $e) {
    error_log("Error: " . $e->getMessage());
    header("Location: survey.html?success=0");
    exit();
}
?>
