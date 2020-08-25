package Lab2;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class GotHitServlet extends HttpServlet {

    private DotsForTable dotsForTab;
    private boolean hit;

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("gotHitServlet -- doPost");

        dotsForTab = (DotsForTable) req.getSession().getAttribute("dotsBeanComponent");

        //double x = Double.parseDouble((String) req.getAttribute("x_h"));
        //double y = Double.parseDouble((String) req.getAttribute("y_h"));
        //double r = Double.parseDouble((String) req.getAttribute("r_h"));
        //int n = Integer.parseInt((String) req.getAttribute("n_h"));

        double x = Double.parseDouble(req.getParameter("x_h"));
        double y = Double.parseDouble(req.getParameter("y_h"));
        double r = Double.parseDouble(req.getParameter("r_h"));
        //int n = Integer.parseInt(req.getParameter("n_h"));
        //int f = Integer.parseInt(req.getParameter("f_h"));

        Dot onedot = new Dot(x, y, r, dotsForTab.getN());

        dotsForTab.addDot(onedot);

        req.setAttribute("dotsBeanComponent", dotsForTab);

        resp.getWriter().println(onedot.areaChek(x, y, r));

        //resp.getWriter().close();

    }
}