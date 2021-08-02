#include <vector>
#include <cmath>
using namespace std;
#include <iostream>
class HiddenSeq
{
public:
    static unsigned long long fcn(int n) {

        return pow(2, n);
    }
};

int main()
{
    cout << HiddenSeq::fcn(33);

    return 0;
}