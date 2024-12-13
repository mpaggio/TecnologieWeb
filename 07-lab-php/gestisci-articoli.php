<?php

require_once "bootstrap.php";

// Controllo su action se non è settato o se non vale da 1 a 3
if (!isUserLoggedIn()) {
    header("location: login.php");
}

$templateParams["titolo"] = "BlogTW - Gestisci Articoli";
$templateParams["nome"] = "admin-form.php";
$templateParams["categorie"] = $dbh->getCategories();
$templateParams["articolicasuali"] = $dbh->getRandomPosts(2);

$templateParams["azione"] = $_GET["action"];

require "template/base.php";

?>