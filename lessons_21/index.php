<?php
$data = [
    [
        "path" => "https://picsum.photos/seed/1/1920/1080",
        "title" => "Мост"
    ],
    [
        "path" => "https://picsum.photos/seed/2/1920/1080",
        "title" => "Комп"
    ],
    [
        "path" => "https://picsum.photos/seed/3/1920/1080",
        "title" => "Водопад"
    ],
    [
        "path" => "https://picsum.photos/seed/4/1920/1080",
        "title" => "Клубника"
    ],
    [
        "path" => "",
        "title" => "Тест"
    ],
    [
        "path" => "https://picsum.photos/seed/4/1920/1080",
        "title" => ""
    ]
];
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Практ-21</title>
    <style>
        img {
            max-width: 500px;
        }
    </style>
</head>

<body>
    <?php
    foreach ($data as $str) {
        if ($str["path"] && $str["title"]) {
            echo "<img src='{$str['path']}' />";
            echo "<p>{$str["title"]}<p/>";
        }
    }
    ?>

    <?php
    foreach ($data as $str) :
        if ($str["path"] && $str["title"]) :
    ?>
            <img src="<?= $str["path"] ?>" />
            <p><?= $str["title"] ?></p>
    <?php
        endif;
    endforeach;
    ?>
</body>

</html>