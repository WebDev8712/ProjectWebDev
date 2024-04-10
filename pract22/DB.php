<?php 
namespace Photos;
use mysqli;

class DB {
    static $host = "localhost";
    static $user = "root";
    static $password = "";
    static $database = "photos";
    public $link;

    public function __construct() {
        $this->link = new mysqli(DB::$host, DB::$user, DB::$password, DB::$database);
        $this->link->set_charset("utf8");
    }
    public function get_all_photos() {
        $sql_result = $this->link->query("SELECT * FROM `photos` ORDER BY `Id` DESC");
        if ($sql_result->num_rows) {
            return $sql_result->fetch_all(MYSQLI_ASSOC);
        }
        return [];
    }

    public function get_user_photos($uid) {
        $sql_result = $this->link->query("SELECT * FROM `photos` WHERE `Uid` = $uid ORDER BY `Id` DESC");
        if ($sql_result->num_rows) {
            return $sql_result->fetch_all(MYSQLI_ASSOC);
        }
        return [];
    }

    function check_user($login, $password) {
        $sql_result = $this->link->query("SELECT * FROM `user` WHERE `Email` = '$login' AND `Password` = '$password'");
        if ($sql_result->num_rows) {
            $user = $sql_result->fetch_assoc();
            return $user["Id"];
        }
        return false;
    }

    function check_login($login) {
        $sql_result = $this->link->query("SELECT * FROM `user` WHERE `Email` = '$login'");
        if ($sql_result->num_rows) {
            return true;
        }
        return false;
    }

    public function new_user($login, $password, $name) {
        $this->link->query("INSERT INTO `user` (Name, Password, Email) VALUES ('$name', '$password', '$login')");
    }

    public function new_photo($uid, $image, $text) {
        $this->link->query("INSERT INTO `photos` (Uid, Image, Text, Tags) VALUES ($uid, '$image', '$text', '')");
    }

    public function get_photo_by_id($photo_id) {
       $sql_result = $this->link->query(
        "SELECT `p`.*, `U`.`Name` FROM `photos` `p` LEFT JOIN `user` `U` on `U`.`Id` = `p`.`Uid` WHERE `p`.`Id` = '$photo_id'");
        if ($sql_result->num_rows) {
            return $sql_result->fetch_assoc();
        }
        return false;
    }

    public function get_photo_comments($photo_id) {
        $sql_result = $this->link->query(
         "SELECT `c`.*, `U`.`Name` FROM `comments` `c` LEFT JOIN `user` `U` on `U`.`Id` = `c`.`Uid`
          WHERE `c`.`Pid` = '$photo_id' ORDER BY `Id` DESC");
         if ($sql_result->num_rows) {
             return $sql_result->fetch_all(MYSQLI_ASSOC);
         }
         return [];
     }
    
    public function add_comment($pid, $uid, $text) {
        $date = date("Y-m-d");
        $this->link->query("INSERT INTO `comments` (Pid, Uid, Text, Post_date) VALUES ($pid, $uid, '$text', '$date')");
        $last_id = $this->link->insert_id;
        $inserted_comment = $this->link->query(
            "SELECT `c`.*, `U`.`Name` FROM `comments` `c` LEFT JOIN `user` `U` on `U`.`Id` = `c`.`Uid` WHERE `c`.`Id` = '$last_id'");
            return $inserted_comment->fetch_assoc();
    }
}