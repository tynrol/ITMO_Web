<%--
  Created by IntelliJ IDEA.
  User: PK
  Date: 21.11.2019
  Time: 20:39
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="Lab2.Dot" %>
<%@ page import="java.util.List" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.Collections" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:useBean id="dotsBeanComponent" class="Lab2.DotsForTable" scope="session"/>
<html>
<head>
    <title>Результат проверки</title>
    <link rel="stylesheet" href="css/table.css">
    <meta charset="utf-8">
</head>
<body>
<table class="results block centered">
    <tr> <th>N</th> <th>X</th> <th>Y</th> <th>R</th> <th><b>Результат</b></th> </tr>
    <%
        List<Dot> list = dotsBeanComponent.getDots();
        while (list.size() > 10) {
            list.remove(0);
        }
        List<Dot> reversed = new ArrayList<>(list);
        Collections.reverse(reversed);
        for (Dot onedot : reversed) {
    %>
    <tr>
        <td><%=onedot.getN() %></td>
        <td maxlength="5"><%=onedot.getX() %></td>
        <td maxlength="5"><%=onedot.getY() %></td>
        <td><%=onedot.getR() %></td>
        <td><%=onedot.isHit() ? "Попадание" : "Промах" %></td>
    </tr>
    <%}%>


</table>
<form method="get" action="control">
    <input type="submit" value="Back">
</form>
</body>
</html>