package model;

import entities.Point;

import javax.ejb.Stateless;

@Stateless
public class Graphic {
    public boolean isInArea(double x, double y, double r) {
        boolean triangle = x <= 0 && y <= 0 && y >= (- x - r);
        boolean square = x >= 0 && y <= 0 && x <= r && y >= -r;
        boolean sector = x >= 0 && y >= 0 && Math.sqrt(x*x + y*y) <= r;
        return triangle || square || sector;
    }

    public boolean isInArea(Point point) {
        return isInArea(point.getX(), point.getY(), point.getR());
    }

}
