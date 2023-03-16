<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $vin = $_POST['vin'];
  $marque = $_POST['marque'];
  $model = $_POST['model'];
  $annee = $_POST['annee'];
  $carburant = $_POST['carburant'];
  $telephone = $_POST['telephone'];


  http_response_code(200);
  echo json_encode(['message' => 'Your message was received successfully.']);
}