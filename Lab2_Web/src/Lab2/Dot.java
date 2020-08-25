package Lab2;

import java.io.Serializable;

public class Dot implements Serializable {
    private double x;
    private double y;
    private double r;
    private boolean hit;
    private int n;

    public Dot (double x, double y, double r, int n) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.n = n;
        hit = areaChek(x, y, r);
    }


    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public double getR() {
        return r;
    }

    public int getN() {
        return n;
    }

    public boolean isHit() {
        return hit;
    }

    static boolean areaChek(double x, double y, double r) {

        boolean figure1 = (Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(r, 2) && (x <= 0) && (y <= 0));
        boolean figure2 = ((x >= (-r)) && (x <= 0) && (y <= r) && (y >= 0));
        boolean figure3 = (y >= 0 && y <= (-x + (r / 2)) && x >= 0 && x <= (r / 2));

        return figure1 || figure2 || figure3;
    }

}