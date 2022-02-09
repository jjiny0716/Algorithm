using namespace std;
#include <iostream>
class BankerPlan
{
public:
    static bool fortune(int f0, double p, int c0, int n, double i) {
        for (int y = 1; y < n; y++) {
            f0 = f0 + f0 * (p / 100) - c0;
            c0 = c0 + c0 * (i / 100);
            if (f0 < 0) return false;
        }
        return true;
    }
};

int main()
{
    cout << BankerPlan::fortune(100000, 1, 2000, 15, 1);
}
