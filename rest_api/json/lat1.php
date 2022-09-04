<?php
$mahasiswa = [
    "nama" =>"sandika galih",
    "nrp" => "0234566677",
    "email" => "Sandika@gmail.com"


];
var_dump($mahasiswa);
$data = json_encode($mahasiswa);
echo $data;

?>