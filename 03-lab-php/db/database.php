<?php

class DatabaseHelper{
    private $db;

    // COSTRUTTORE
    public function __construct($servername, $username, $password, $dbname, $port){
        $this->db = new mysqli($servername, $username, $password, $dbname, $port);
        if ($this->db->connect_error){
            die("Connessione al database fallita.");
        }
    }

    // CARICA POST CASUALI
    public function getRandomPosts($numberOfPosts=2){
        //Se non viene specificato il valore di n, viene dato valore 2 (di default)
        $statement = $this->db->prepare("SELECT idarticolo, titoloarticolo, imgarticolo FROM articolo ORDER BY RAND() LIMIT ?");
        $statement->bind_param("i", $numberOfPosts);
        $statement->execute();
        $result = $statement->get_result();
        
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    // CARICA IL POST PIU RECENTE
    public function getPosts($numberOfPosts=1){
        $query = "SELECT idarticolo, titoloarticolo, imgarticolo, dataarticolo, anteprimaarticolo, nome FROM articolo, autore WHERE autore = idautore ORDER BY dataarticolo DESC";
        if ($numberOfPosts > 0){
            $query = $query . " LIMIT ?";
        }
        $statement = $this->db->prepare($query);
        if ($numberOfPosts > 0){
            $statement->bind_param("i", $numberOfPosts);    
        }
        $statement->execute();
        $result = $statement->get_result();
        
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    // CARICA TUTTE LE CATEGORIE
    public function getCategories(){
        $statement = $this->db->prepare("SELECT idcategoria, nomecategoria FROM categoria");
        $statement->execute();
        $result = $statement->get_result();
        
        return $result->fetch_all(MYSQLI_ASSOC);
    }
}

?>