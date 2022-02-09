#include <iostream>
#include <vector>
#include <string>
#include <tuple>
#include <cmath>
using namespace std;

#include <vector>
#include <string>
#include <tuple>
#include <cmath>
using namespace std;

namespace Closest
{
    std::vector<std::tuple<int, unsigned int, long long>> closest(const std::string& strng)
    {
        string str = strng;
        vector<long long> numbers;
        vector<int> weights;

        int pos = 0;
        while ((pos = str.find(' ')) != string::npos) {
            numbers.push_back(atoll(str.substr(0, pos).c_str()));
            str.erase(0, pos + 1);
        }
        numbers.push_back(atoll(str.c_str()));

        std::vector<std::tuple<int, unsigned int, long long>> result;
        if (numbers.size() == 0) return result;

        for (long long ll : numbers) {
            int weight = 0;
            while (ll != 0) {
                weight += ll % 10;
                ll /= 10;
            }
            weights.push_back(weight);
        }

        int d1 = weights[0], i1 = 0;
        int d2 = weights[1], i2 = 1;
        long long o1 = numbers[0], o2 = numbers[1];
        int dif = abs(weights[0] - weights[1]);

        if (d1 == 0) i2 = 0;

        for (int i = 0; i < weights.size() - 1; i++) {
            for (int j = i + 1; j < weights.size(); j++) {
                if (abs(weights[i] - weights[j]) < dif) {
                    d1 = weights[i]; i1 = i; o1 = numbers[i];
                    d2 = weights[j]; i2 = j; o2 = numbers[j];
                    dif = abs(weights[i] - weights[j]);
                }
                else if (abs(weights[i] - weights[j]) == dif) {
                    if ((weights[i] + weights[j]) / 2 < (d1 + d2) / 2) {
                        d1 = weights[i]; i1 = i; o1 = numbers[i];
                        d2 = weights[j]; i2 = j; o2 = numbers[j];
                    }
                }
            }
        }

        auto tuple1 = make_tuple(d1, i1, o1);
        auto tuple2 = make_tuple(d2, i2, o2);

        if (d1 <= d2) {
            result.push_back(tuple1);
            result.push_back(tuple2);
        }
        else {
            result.push_back(tuple2);
            result.push_back(tuple1);
        }

        return result;
    }
}

int main()
{
    std::string s = "456899 50 11992 176 272293 163 389128 96 290193 85 52";
    Closest::closest(s);


    return 0;
}