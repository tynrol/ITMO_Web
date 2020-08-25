<%--
  Created by IntelliJ IDEA.
  User: PK
  Date: 21.11.2019
  Time: 19:44
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE HTML>
<jsp:useBean id="dotsBeanComponent" class="Lab2.DotsForTable" scope="session"/>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Web_Lab2</title>
  <link rel="stylesheet" type="text/css" href="css/main.css">
  <script src="script/js.js"></script>
</head>

<body onload=init()>

<table class="header">
  <tr>
    <th class="leftheader">
      Tereshchenko Dmitry & Shishkov Gleb
      <br>Group P3202
    <th class="rightheader">
      Var 20211
    </th>
  </tr>
</table>

<form action="control?action=submit" name="form" method="post">

  <div class="container">

    <div class="arg" id="xdiv">
      X:
      <select name="x" onblur="return checkX(this)">
        <option name="x-5" value="-5">-5</option>
        <option name="x-4" value="-4">-4</option>
        <option name="x-3" value="-3">-3</option>
        <option name="x-2" value="-2">-2</option>
        <option name="x-1" value="-1">-1</option>
        <option name="x0" value="0">0</option>
        <option name="x1" value="1">1</option>
        <option name="x2" value="2">2</option>
        <option name="x3" value="3">3</option>
      </select>
    </div>

    <div class="arg" id="ydiv">
      Y:
      <input type="text" name="y" autocomplete="off" maxlength="5" x id="y" value="0"
             onblur="return checkY(this);" oninput="return checkY(this);">
    </div>

    <div class="arg" id="rdiv">
      R:
      <input type="text" name="r" id="r" value="1" placeholder="(1..4)"  onblur="return checkR(this);" oninput="return checkR(this);">
    </div>

    <div>
      <br>
      <input name="button" type="submit" value="Send">
    </div>

  </div>
</form>

<form method="post" action="control?action=gothit" name="hidden">
  <input type="hidden" autocomplete="off" id="x_h" name="x_h" value="0">
  <input type="hidden" autocomplete="off" id="y_h" name="y_h" value="0">
  <input type="hidden" autocomplete="off" id="r_h" name="r_h" value="1">
  <input type="hidden" autocomplete="off" id="g_h" name="g_h" value="false">
</form>

<div>
  <canvas id="canvas" onclick="clickGraph(r.value)" width="400" height="400"></canvas>
</div>
</body>
</html>
