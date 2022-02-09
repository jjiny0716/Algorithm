#include <cmath>
#include <iostream>
using namespace std;

class GapInPrimes
{
public:
    static pair<long long, long long> gap(int g, long long m, long long n) {
        pair<long long, long long> result = {0, 0};
        long long lastPrime = n;

        for (int i = m; i <= n; i++) {
            int isPrime = 1;
            for (int j = 2; j <= sqrt(i); j++) {
                if (i % j == 0) {
                    isPrime = 0;
                    break;
                }
            }
            if (isPrime == 1) {
                cout << i << endl;
                if (i - lastPrime == g) {
                    result = { lastPrime, i };
                    break;
                }
                lastPrime = i;
            }
            
        }
        return result;
    }
};

int main()
{
    GapInPrimes::gap(2, 100, 110);
}