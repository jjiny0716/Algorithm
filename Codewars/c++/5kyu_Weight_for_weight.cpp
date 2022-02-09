#include <string>
#include <vector>
#include <algorithm>
using namespace std;
#include <iostream>

class Weight {
public:
    long long weight;
    long long sumOfDigits;
    Weight(long long w, long long s) {
        weight = w;
        sumOfDigits = s;
    }
};

class WeightSort
{
public:
    static std::string orderWeight(const std::string& strng) {
        cout << strng << endl;
        if (strng == "") return "";
        string result = "";
        vector<Weight> weights;

        int lastPos = 0;
        for (int i = 0; i <= strng.size(); i++) {
            if (strng[i] == ' ' || i == strng.size()) {
                if (i - lastPos == 0) continue;
                long long weight = stoll(strng.substr(lastPos, i - lastPos));
                lastPos = i + 1;

                long long sumOfDigits = 0;
                long long tmp = weight;
                while (tmp != 0) {
                    sumOfDigits += tmp % 10;
                    tmp /= 10;
                }

                Weight w(weight, sumOfDigits);
                weights.push_back(w);
            }
        }

        //for (Weight w : weights) cout << w.weight << endl;

        sort(weights.begin(), weights.end(), sumOfDigitsCompare);
        for (Weight w : weights) cout << w.weight << endl;
        //sort(weights.begin(), weights.end(), weightsCompare); //??????????????????????????????

        for (int i = 0; i < weights.size(); i++) { //¤Ì¤Ì
            for (int j = 0; j < weights.size() - 1; j++) {
                if (to_string(weights[j].weight).compare(to_string(weights[j + 1].weight)) > 0 && weights[j].sumOfDigits == weights[j + 1].sumOfDigits) {
                    Weight tmp = weights[j + 1];
                    weights[j + 1] = weights[j];
                    weights[j] = tmp;
                }
            }
        }

        cout << endl;
        for (Weight w : weights) cout << w.weight << endl;
        //for (Weight w : weights) cout << w.sumOfDigits << endl;
        //for (Weight w : weights) cout << w.weight << endl;

        for (Weight w : weights) result += to_string(w.weight) + " ";
        result.erase(result.size() - 1, 1);

        return result;
    }

    static bool sumOfDigitsCompare(Weight a, Weight b) {
        //if (a.sumOfDigits > b.sumOfDigits) return true;
        //return false;
        return a.sumOfDigits < b.sumOfDigits;
    }

    static bool weightsCompare(Weight a, Weight b) { // XXXXXXXXXXXXXXXXXXXXX

        //if (a.sumOfDigits == b.sumOfDigits) return a.weight < b.weight;
        //return false;
        /*if (a.sumOfDigits == b.sumOfDigits) {

            if (to_string(a.weight).compare(to_string(b.weight)) < 0) {cout << "ddd" << endl; return true;}
            return false;
        }
        return false; */
        if (a.sumOfDigits == b.sumOfDigits) {
            return to_string(a.weight).compare(to_string(b.weight)) < 0;
        }
        else {
            return false;
        }
    }
};

int main()
{
    cout << WeightSort::orderWeight("71899703 200 6 91 425 4 67407 7 96488 6 4 2 7 31064 9 7920 1 34608557 27 72 18 81") << endl;
    //long long weight = stoll("496636983114762");
    //cout << weight;
}