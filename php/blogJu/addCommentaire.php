<?php

    include '../bddConect/bdd.php';
    /*var_dump($_POST);*/
    $comment = $_POST['data'];
	// Ajout du commentaire
	$query = $db->prepare("INSERT INTO comments(pseudo, content, post_id, creation_date) VALUES(?, ?, ?, NOW())");
	$query->execute([
		substr($comment['pseudo'],0 , 50),
		substr($comment['content'],0 , 200),
		$comment['post_id']
	]);

	include'comments.phtml';



/*
	// Redirection vers l'article
	header('Location: ../blog.php');
	exit();
;*/