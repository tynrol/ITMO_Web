package Lab2;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AreaCheckServlet extends HttpServlet {

    private DotsForTable dotsForTab;

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        dotsForTab = (DotsForTable) req.getSession().getAttribute("dotsBeanComponent");

        double x = Double.parseDouble(req.getParameter("x"));
        double y = Double.parseDouble(req.getParameter("y"));
        double r = Double.parseDouble(req.getParameter("r"));

        Dot onedot = new Dot(x, y, r, dotsForTab.getN());

        dotsForTab.addDot(onedot);

        resp.setContentType("text/html; charset=UTF-8");

        req.getServletContext().getRequestDispatcher("/table.jsp").include(req, resp);
    }
}