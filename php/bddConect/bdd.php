<?php

	//	Connexion à la base de données
	$db = new PDO
	(
		'mysql:host=localhost;dbname=st-21_schmitt67_projetWA;charset=UTF8',
		'schmitt67',
		'1cf7393fNDI0YjQyNmRlZmEwYTU1ODhhMTAwZDIzaec21a35',
	    [
	    	PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
	        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
	    ]
    );