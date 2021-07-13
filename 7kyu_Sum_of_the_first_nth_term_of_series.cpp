#include <iostream>
#include <string>
using namespace std;

std::string seriesSum(int n)
{
    double result = 0.0;
    string resultStr = "";

    for (int i = 0; i < n; i++) {
        result += 1.0 / (1+(3 * i));
    }

    resultStr = to_string(floor(result*100 + 0.5)/100.0);

    return resultStr.substr(0, resultStr.size() - 4);
}

int main()
{
    cout << seriesSum(9);

    return 0;
}