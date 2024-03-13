<?php
    $name = "Adik";
    $surname = "Abashev";
    $age = 16;
    $salary = 2200000
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Практ-20</title>
</head>
<body>
    <?php
        echo "<p>Меня зовут $name $surname, мне $age, я получаю" . ($salary*12) . " в год</p>"
    ?>
</body>
</html>