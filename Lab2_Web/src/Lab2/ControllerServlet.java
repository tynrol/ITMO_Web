package Lab2;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ControllerServlet extends HttpServlet {

    private DotsForTable dotsForTab;
    @Override
    public void init(ServletConfig config) throws ServletException {
        super.init();

        dotsForTab = new DotsForTable();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("control doPost");

        req.setCharacterEncoding("UTF-8");

        String action = req.getParameter("action");

        if ("submit".equals(action)) {
            System.out.println("control doPost - submit");

            String xValue = req.getParameter("x");
            String yValue = req.getParameter("y");
            String rValue = req.getParameter("r");

            if (xValue == null || yValue == null || rValue == null) {
                //req.setAttribute("dotsBeanComponent", dotsForTab);
                req.getServletContext().getRequestDispatcher("/index.jsp").forward(req, resp);
            }
            else  {
                //req.setAttribute("dotsBeanComponent", dotsForTab);
                req.getServletContext().getRequestDispatcher("/areacheck").forward(req, resp);
            }

        }
        else if("gothit".equals(action)) {
            System.out.println("control doPost -- gothit");

            String xValue = req.getParameter("x_h");
            String yValue = req.getParameter("y_h");
            String rValue = req.getParameter("r_h");
            //String nValue = req.getParameter("n_h");
            //String fValue = req.getParameter("f_h");

            if (xValue == null || yValue == null || rValue == null) {
                //req.setAttribute("dotsBeanComponent", dotsForTab);
                System.out.println("control doPost -- gothit -- index");
                req.getServletContext().getRequestDispatcher("/index.jsp").forward(req, resp);
            }
            else {
                //req.setAttribute("dotsBeanComponent", dotsForTab);
                System.out.println("control doPost -- gothit -- hit");
                req.getServletContext().getRequestDispatcher("/hit").forward(req, resp);
            }
        }

    }


    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("control doGet");

        String action = req.getParameter("action");

        req.setAttribute("dotsBeanComponent", dotsForTab);

        switch (action == null ? "def" : action) {
            case "update":
                req.getRequestDispatcher("/table.jsp").forward(req, resp);
                break;
            case "def":
            default:
                req.getRequestDispatcher("/index.jsp").forward(req, resp);
                break;
        }
    }
}