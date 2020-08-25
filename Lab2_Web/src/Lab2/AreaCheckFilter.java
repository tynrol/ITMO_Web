package Lab2;

import javax.servlet.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;

public abstract class AreaCheckFilter implements Filter {

    private int[] xValues = {-5, -4, -3, -2, -1, 0, 1, 2, 3};

    // public void init(FilterConfig arg0) {}

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain)
            throws IOException {

        resp.setContentType("text/html; charset=UTF-8");

        PrintWriter out = resp.getWriter();

        try {
            double x = Double.parseDouble(req.getParameter("x"));
            double y = Double.parseDouble(req.getParameter("y"));
            double r = Double.parseDouble(req.getParameter("r"));

            if (validate(x, y, r))
                chain.doFilter(req, resp);
            else
                throw new Exception("validation failed");
        } catch (Exception e) {
            out.println(("<!DOCTYPE html>\n" +
                    "<html>\n" +
                    "<head>\n" +
                    "\t<title>Ошибка</title>\n" +
                    "</head>\n" +
                    "<body>\n" +
                    "</body> </html>"));
        }

    }

    private boolean validate(double x, double y, double r) {
        boolean checkX = Arrays.binarySearch(xValues, (int) x) > -1;
        boolean checkY = y >= -5 && y <= 5;
        boolean checkR = r >= 1 && y <= 4;
        return checkX && checkY && checkR;
    }

}