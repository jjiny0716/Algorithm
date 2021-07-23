#include <vector>
#include <iostream>
#include <numeric>
#include <cmath>
using namespace std;

namespace KStep {
    vector<pair <long, long>> kprimesStep(int k, int step, long long m, long long n)
    {

        if (m < 2) m = 2;
        vector<long long> primes;
        vector<long> steps;
        vector<pair<long, long>> pairs;
        int last_num = 0;

        for (int i = m; i <= n; i++) {
            int num = i;
            int count = 0;
            int j = 2;
            long long loopC = 0;
            while (num != 1) {
                loopC += 1;
                if (loopC > i / 2) break; //!!!
                if (num % j == 0) {
                    num /= j;
                    count++;
                    if (count > k) break;
                    if (loopC > (int)sqrt(i)) break;

                }
                else j++;
            }


            if (count == k) {
                primes.push_back(i);
                steps.push_back(i - last_num);
                last_num = i;
            }


        }

        steps.erase(steps.begin());
        for (int i = 0; i < steps.size() + 1; i++) {
            for (int j = i; j < steps.size() + 1; j++) {
                if (accumulate(steps.begin() + i, steps.begin() + j, 0) == step) pairs.push_back({ primes[i], primes[j] });
            }
        }

        return pairs;
    }
}

int main()
{
    for (pair<long, long> p : KStep::kprimesStep(2, 6, 233042, 233422)) cout << p.first << " " << p.second << endl;
}