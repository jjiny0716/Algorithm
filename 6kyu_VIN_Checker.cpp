#include <vector>
using namespace std;
#include <iostream>

int solve(int x, int y) {
    int result = 0;

    for (int i = x; i < y; i++) {
        int num = i;
        int reverse = 0;
        while (num != 0) {
            reverse *= 10;
            int rotate;
            if (num % 10 == 0 || num % 10 == 1 || num % 10 == 8) rotate = num % 10;
            else if (num % 10 == 9) rotate = 6;
            else if (num % 10 == 6) rotate = 9;
            else rotate = 10;
            //cout << rotate << endl;
            reverse += rotate;
            num /= 10;
            //cout << num << "  " << reverse << endl;
        }
        
        if (reverse == i) { result++;  cout << i << endl; }

    }

    return result;
}

int main()
{
    cout << solve(1, 1000) << endl;

    return 0;
}