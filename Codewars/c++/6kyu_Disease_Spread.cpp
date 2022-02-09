#include <iostream>
#include <vector>
using namespace std;

class Epidem
{
public:
    static int epidemic(int tm, int n, int s0, int i0, double b, double a);
};

int Epidem::epidemic(int tm, int n, int s0, int i0, double b, double a) {
    vector<double> s = { (double)s0 };
    vector<double> i = { (double)i0 };
    vector<double> r = { 0 };
    const double dt = tm / (double)n;
    double max = 0;

    for (int k = 0; k < n; k++) {
        s.push_back(s[k] -1 * dt * b * s[k] * i[k]);
        i.push_back(i[k] + dt * (b * s[k] * i[k] - a * i[k]));
        r.push_back(r[k] + dt * i[k] * a);
        if (i.back() > max) max = i.back();
    }
    

    return (int)max;
}

int main()
{
    cout << Epidem::epidemic(14, 336, 996, 2, 0.00206, 0.41);
}