using namespace std;
class Bouncingball
{
public:
    static int bouncingBall(double h, double bounce, double window) {
        if (!(h > 0) || !(bounce > 0 && bounce < 1) || !(window < h)) return -1;
        int result = -1;

        while (h > window) {
            result += 2;
            h = h * bounce;
        }

        return result;
    }
};