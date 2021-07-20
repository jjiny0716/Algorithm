#include <vector>
#include <iostream>
using namespace std;

class Fibkind
{
public:
    static int lengthSupUK(int n, int k) {
        int count = 0;
        vector<int> u;
        u.push_back(0);
        u.push_back(1);
        u.push_back(1);

        for (int i = 3; i <= n; i++) {
            u.push_back(u[i - u[i - 1]] + u[i - u[i - 2]]);
            if (u[i] >= k) count++;
        }

        return k > 1 ? count : count + 2;
    };

    static int comp(int n) {
        int count = 0;
        vector<int> u;
        u.push_back(0);
        u.push_back(1);
        u.push_back(1);

        for (int i = 3; i <= n; i++) {
            u.push_back(u[i - u[i - 1]] + u[i - u[i - 2]]);
            if (u[i] < u[i - 1]) count++;
        }

        return count;
    };

};

int main()
{
    cout << Fibkind::lengthSupUK(23, 12) << endl;;
    cout << Fibkind::comp(23);
}
