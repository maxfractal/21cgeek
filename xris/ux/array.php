<?php 

$projects = array('USAT', 'Cogstate', 'etouches');

$count = 0;
while($count < count($projects)) {
    
    echo "<li>$projects[$count]</li>";
    $count++;
}


?>