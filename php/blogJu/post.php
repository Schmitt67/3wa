<?php



// Connexion à la base de données
   include './bddConect/bdd.php';
   
  

// Récupération de l'article
$query = $db->prepare("SELECT posts.id, posts.title, content, creation_date, first_name, last_name, categories.title AS category_title 
						FROM posts
						INNER JOIN authors ON authors.id = posts.author_id
						INNER JOIN categories ON categories.id = posts.category_id
						");

$query->execute();

$posts = $query->fetch();

// Récupération des commentaires
$query = $db->prepare("SELECT content, pseudo, creation_date
						FROM comments
						ORDER BY creation_date ASC");

$query->execute();

$comments = $query->fetchAll();

include 'post.phtml';