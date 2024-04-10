<header>
        <div class="popup">
            <a href="index.php">Глвная</a>
            <?php if ($user_id): ?>
                <a id="show_add_photo" href="#">Фото</a>
            <?php endif; ?>
            
            <a href="#">Посты</a>
            <a href="user.php">Личный кабинет</a>
            <?php if ($user_id): ?>
                <a href="logout.php">Выйти</a>
            <?php endif; ?>
        </div>
        <div class="mobile_icon">
            <img id="misha" src="free-icon-menu-8472202.png" alt="">
        </div>
        
</header>