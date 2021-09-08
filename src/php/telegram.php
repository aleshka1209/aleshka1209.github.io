<?php

/* https://api.telegram.org/bot1952903996:AAHZ6oMg29faSiR27KQNl_r6Of4JwpWd-ao/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$email = $_POST['user_email'];
$phone = $_POST['user_phone'];
$token = "1952903996:AAHZ6oMg29faSiR27KQNl_r6Of4JwpWd-ao";
$chat_id = "-1001566220575";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email
);


foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>