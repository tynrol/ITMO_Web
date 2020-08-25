<?php

  $header = '<html>
    <head>
    <title> Result </title>
    <link rel=\'stylesheet\' type=\'text/css\' href=\'css/php.css\'>
  </head>';
  $tableHeader = '<body>
  <table width="100%" cellpadding="5">
    <tr>
      <th>x</th>
      <th>y</th>
      <th>r</th>
      <th>Hit</th>
      <th>Time</th>
    </tr>';

  $tableEnding = '</table>';
  $end='</body> </html>';
    ini_set('session.gc_maxlifetime', 86400);
    if (session_id() === "") session_start();

    class Point{
        public $x;
        public $y;
        public $r;
        public $time;
        function __construct($x,$y,$r, $time)
        {
            $this->x=$x;
            $this->y=$y;
            $this->r=$r;
            $this->time=$time;
        }
    }

  function check($x, $y, $r){ 
    if ($x<0 and $y<0){return false;}
      elseif ($x>-$r and $y>($r/2)) {return false;}
      elseif ($x>($r/2) and $y>$r and $y>(-2*$x+$r)){return false;}
      elseif (pow($x,2) +pow($y,2)>pow($r,2)){return false;}
      else return true;
  }
        $start = microtime(true);

        date_default_timezone_set("UTC");
        $time=time()+3*3600;

        echo $header;

        $xArray = $_GET["x"];
        $numAr = 0;
        $extAr = 0;
        $y = $_GET["y"];
        $y = str_replace(",", ".", $y);
        $r = $_GET["r"];

        if(count($xArray)>0){
          for($j=0; $j<count($xArray); $j++){
            if(!is_numeric($xArray[$j])){
                $numAr++;
                echo $j;
            }
            if(!(($xArray[$j]>=-4)&&($xArray[$j]<=4))){
              $extAr++;
            }
          }
        }
        if(is_numeric($y)&&is_numeric($r)&&($y>=-3)&&($y<=5)&&!is_null($y)&&!is_null($r)&&(count($xArray)!=0)&&($numAr==0)&&($extAr==0)){
            if (!isset($_SESSION['points'])) {
                $_SESSION['points'] = array();
            }
            if (($_GET['token']) != $_SESSION['lastToken']){
                $_SESSION['lastToken'] = $_GET['token'];
              for ($i=0; $i<count($xArray); $i++) {
                $point = new Point($xArray[$i], $y, $r, date("h:i:s", $time));
                array_push($_SESSION['points'], $point);
              }
            }

          echo $tableHeader;
          $tableFiller = '';

          $count = 0;
          foreach (array_reverse($_SESSION['points']) as $point) {
            $count = $count+1;
            $tableFiller = $tableFiller . "<tr> <td>" . $point->x . "</td><td>" . $point->y. "</td><td>" . $point->r. "</td><td>" .  (check($point->x, $point->y, $point->r)?'true':'false'). "</td><td>" . $point->time;
            if ($count === 10) break;
          }
          echo $tableFiller;
          echo $tableEnding;
        } else {
             if(!is_numeric($r)){
                 echo 'r is not a number!<br>';
             }
             if(!is_numeric($y)){
                echo 'y is not a number!<br>';
            }
            if(!(($y>-3)&&($y<5))){
                echo 'y is not in the range!<br>';
            }
            if(!(($r>=-3)&&($r<=5))){
                echo 'r is not in the range!<br>';
            }
            if(is_null($r)){
                echo 'r doesnt exist!<br>';
            }
            if(is_null($y)){
                echo 'y doesnt exist!<br>';
            }
            if(count($xArray)==0){
                echo 'x doesnt exist!<br>';
            }
            if($numAr>0){
                echo 'x is not a number!<br>';
            }
            if($extAr>0){
                echo 'x is not in the range!<br>';
            }
        }

        echo '<br>Script done in ' . (microtime(true) - $start) . ' seconds.';
        echo $end;
