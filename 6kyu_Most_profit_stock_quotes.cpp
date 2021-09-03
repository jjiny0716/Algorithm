#include <vector>
#include <algorithm>
using namespace std;
#include <iostream>
int most_profit(const std::vector<int>& quotes)
{
    int profit = 0, numOfStocks = 0;
    vector<int> q = quotes;

    while (!q.empty()) {
        int maxIndex = max_element(q.begin(), q.end()) - q.begin();
        for (int i = 0; i < maxIndex; i++)
            profit -= q[i];
        profit += q[maxIndex] * maxIndex;
        q.erase(q.begin(), q.begin() + maxIndex + 1);
    }

    return profit;
}

int main()
{
    cout << most_profit({ 1, 2, 3, 4, 5, 6 });
}