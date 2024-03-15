<?php
namespace Photos;
use mysqli;

class DB{
    static $host = "localhost";
    static $user = "root";
    static $password = "";
    static $database = "photos";
    public $link;

    public function __construct(){
        $this->link = new mysqli(self::$host, self::$user, self::$password, self::$database);
        $this->link->set_charset("utf8");
    }
    public function get_all_photos(){
        return $this->link->query("SELECT * FROM photos")->fetch_all(MYSQLI_ASSOC);
    }
}