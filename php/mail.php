<?php

$method = $_SERVER['REQUEST_METHOD'];

if($method !== 'POST'){
    exit();

}

$project_name = 'PizzaTime';
$admin_email = '';
$form_subject = 'Заявка з сайту';
$message = 'Hello';

$headers  = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/plain; charset=utf-8\r\n";
$headers .= "From: $admin_email\r\n";