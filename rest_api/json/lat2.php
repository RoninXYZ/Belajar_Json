<?php
$data = file_get_contents('./coba1.json');
$mahasiswa = json_decode($data ,true);
var_dump($mahasiswa)



?>