#include <map>
#include <cmath>
using namespace std;
#include <iostream>
int solve(int a, int b) {
    int result = 0;

    for (int n = a; n < b; n++) {
        int isPrime = 1;
        for (int i = 2; i <= sqrt(n); i++) {
            if (n % i == 0) {
                isPrime = 0;
                break;
            }
        }
        if (isPrime == 0 || n == 1) continue;

        int num = n;
        map<int, int> m;

        while (num != 1) {
            if (m[num] >= 1) break;
            m[num]++;

            int tmp = 0;
            while (num != 0) {
                tmp += (num % 10) * (num % 10);
                num /= 10;
            }
            num = tmp;
        }
        if (num == 1) {result++; cout << n << endl;}
    }

    return result;
}

int main()
{
    cout << solve(1, 25) << endl;
}