#include <vector>
using namespace std;
#include <iostream>
double ideal_trader(const std::vector<double>& prices)
{
    double dollars = 1.0, price = 0;
    vector<double> fr;
    for (int i = 0; i < prices.size() - 1; i++)
        fr.push_back(prices[i + 1] - prices[i]);

    for (int i = 0; i < fr.size(); i++) {
        if (fr[i] > 0) {
            if (price == 0)
                price = prices[i];
        }
        else if (fr[i] < 0) {
            if (price != 0) {
                dollars *= prices[i] / price;
                price = 0;
            }
        }
    }

    if (fr[fr.size() - 1] > 0) dollars *= prices[prices.size() - 1] / price;

    return dollars;
}

int main()
{
    cout << ideal_trader({ 1.0, 1.0, 1.2, 0.8, 0.9, 1.0 });
}