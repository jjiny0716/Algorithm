#include <vector>
#include <cmath>
using namespace std;
#include <iostream>
class PrimeConsec
{
private:
    static int countPrimeDiv(long long n);
public:
    static int consecKprimes(int k, vector<long long>& arr) {
        int isLastKPrime = 0;
        int result = 0;
        for (long long n : arr) {
            vector<int> factors;
            long long dp = 2;
            while (n != 1) {
                if (n % dp == 0) {
                    n /= dp;
                    factors.push_back(dp);
                }
                else { // 다음 소수로 넘어가기
                    while (true) {
                        int isPrime = 1;
                        dp++;
                        for (int i = 2; i <= sqrt(dp); i++) {
                            if (dp % i == 0) isPrime = 0;
                        }
                        if (isPrime == 0) continue;
                        else break;
                    }
                }
            }
            //cout << n << endl;
            //for (int f : factors) cout << f << " ";
            //cout << endl;
            if (isLastKPrime == 1 && factors.size() == k) result++;
            if (factors.size() == k) isLastKPrime = 1;
            else isLastKPrime = 0;
        }

        return result;
    }
};


int main()
{
    vector<long long> t = { 10175, 10185, 10180, 10197 };
    cout << PrimeConsec::consecKprimes(4, t);

    return 0;
}