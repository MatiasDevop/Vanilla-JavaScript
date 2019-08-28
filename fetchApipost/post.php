<?php 
$user = $_POST['user'];
$pass = $_POST['pass'];

if($user === '' || $pass === ''){
    echo json_decode('error');
}else{
    echo json_decode('Correct: <br>USer'.$user.'<br>pass:'.$pass);
}
?>