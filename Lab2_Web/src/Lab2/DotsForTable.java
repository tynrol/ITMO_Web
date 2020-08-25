package Lab2;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class DotsForTable implements Serializable {
    private int n;
    private List<Dot> dots;

    public DotsForTable() {
        dots = new ArrayList<>();
    }

    int getN() {
        return n;
    }

    void addDot(Dot dot) {
        n = n + 1;
        dots.add(dot);
    }

    public List getDots() {
        return dots;
    }
}