<?php

// Dato che il file si chiama index, viene visualizzato nella base della cartella del progetto
require_once("bootstrap.php");

// Per modificare la scritta della pagina nella barra di ricerca in maniera dinamica
$templateParams["titolo"] = "Blog TW - Home";

// Per riprendere gli articoli casuali dal database
$templateParams["articolicasuali"] = $dbh->getRandomPosts(2);

// Mostra le informazioni sulla variabile passata come argomento (come se fosse una stampa di controllo)
//var_dump($templateParams["articolicasuali"]);

// Assegno le categorie
$templateParams["categorie"] = $dbh->getCategories();

// Assegno gli articoli piu recenti
$templateParams["articoli"] = $dbh->getPosts(2);

// Per visualizzare il main
$templateParams["nome"] = "lista-articoli.php";

require("template/base.php")
?>