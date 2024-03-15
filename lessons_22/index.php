
<?php
    $link = new mysqli("localhost", "root", "", "photos");
    $link-> set_charset("utf8");
    $data = $link->query("SELECT * FROM `photos`")-> fetch_all(MYSQLI_ASSOC);
?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Практ-12</title>
    <link rel="stylesheet" href="style.css" />
</head>

<body>
    <header>
        <div class="popup">
            <a href="#">Главная</a>
            <a id="show_add_photo" href="#">Фото</a>
            <a href="#">Посты</a>
            <a href="#">Личный кабинет</a>
        </div>
        <div class="mobile_icon">
            <img src="free-icon-menu-bar-8860952.png" alt="" />
        </div>
    </header>
    <h1>Галерея</h1>
    <div id="grid">
    <?php foreach ($data as $photo): ?>
        <div class="photo">
            <img src="<?= $photo['Image'] ?>" alt="">
            <p><?= $photo['Text'] ?></p>
        </div>
    <?php endforeach; ?>
    </div>

    <div id="add_new_photo">
        <div>
            <input id="new_photo_src" type="text" placeholder="Картинка" />
            <input id="new_photo_text" type="text" placeholder="Подпись" />
            <button id="add_photo">Добавить</button>
            <button id="cancel">Отмена</button>
        </div>
    </div>

    <div id="popup_photo">
        <img src="" alt="">
    </div>

    <script src="script.js"></script>
</body>

</html>