#include <string>
#include <vector>
#include <map>
#include <algorithm>
using namespace std;
#include <iostream>
class SumOfDivided
{
public:
    static string sumOfDivided(vector<int>& lst) {
        for (int i : lst) cout << i << " ";
        cout << endl << endl;
        if (lst.empty()) return "";
        int max;
        if (*max_element(lst.begin(), lst.end()) > abs(*min_element(lst.begin(), lst.end()))) max = *max_element(lst.begin(), lst.end());
        else max = abs(*min_element(lst.begin(), lst.end()));
        map<int, int> result;
        for (int n = 2; n <= max; n++) {
            bool isPrime = true;
            for (int d = 2; d < n; d++) {
                if (n % d == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (!isPrime) continue;

            for (int i : lst) {
                if (i % n == 0) result[n] += i;
            }
        }
        string resultStr = "";
        for (auto it = result.begin(); it != result.end(); it++) {
            resultStr += "(" + to_string((*it).first) + " " + to_string((*it).second) + ")";
        }

        return resultStr;
    }
};


int main()
{
    vector<int> v = { 18568 ,14214, 17119, 32615, 33885, 30832, 24060 ,18734, 21797, 21827, 33304, 5240, 36041, 35317, 2146, 29419, 25031, 35190, 18552, 19021, 8987 };
    cout << SumOfDivided::sumOfDivided(v);
}
