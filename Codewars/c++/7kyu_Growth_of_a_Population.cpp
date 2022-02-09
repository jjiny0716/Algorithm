class Arge
{
public:
    static int nbYear(int p0, double percent, int aug, int p) {
        for (int y = 0; ; y++) {
            if (p0 >= p) return y;
            p0 = p0 + p0 * (percent / 100.0) + aug;
        }
    }
};