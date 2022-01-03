#include <vector>
#include <map>
#include <algorithm>
using namespace std;
#include <iostream>
// failed(2022-01-03) - timeout
//https://en.wikipedia.org/wiki/Euler%27s_totient_function
long long properFractions(long long n)
{
    if (n == 1) return 0;
    vector<long long> factors;
    long long t = n;
    for (long long i = 2; i <= t; i++) {
        while (t % i == 0) {
            cout << i << "  " << t << endl;
            t /= i;
            factors.push_back(i);
        }
    }
    factors.erase(unique(factors.begin(), factors.end()), factors.end());
    for (int f : factors) cout << f << endl;

    long long result = 0;
    for (int i = 0; i < factors.size(); i++) {
        // combination
        long long sum = 0;
        vector<bool> bools(factors.size(), false);
        for (int j = 0; j <= i; j++)
            bools[j] = true;
        do {
            int m = 1;
            for (int k = 0; k < factors.size(); k++) {
                if (bools[k]) {
                    m *= factors[k];
                }
            }
            sum += n / m;
        } while (prev_permutation(bools.begin(), bools.end()));
        result += (i % 2 == 0) ? sum : -sum;
    }
    
    return n - result;
}

int main()
{
    cout << properFractions(909276499086155268) << endl;
    //cout << properFractions(9999999) << endl;
    //cout << properFractions(500000003) << endl;
    //cout << properFractions(1532420) << endl;
    //cout << properFractions(123456789) << endl;

    return 0;
}