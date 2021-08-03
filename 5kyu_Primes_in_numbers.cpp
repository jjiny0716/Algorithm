#include <string>
#include <vector>
#include <map>
using namespace std;
#include <iostream>
class PrimeDecomp
{
public:
    static std::string factors(int lst) {
        //vector<int> decomposition;
        string result = "";
        map<int, int> decomposition;
        int d = 2;
        bool isPrime = true;

        while (lst != 1 && d * d <= lst) {
            for (int i = 2; i * i <= d ; i++) {
                //cout << i << " " << sqrt(d) << endl;
                if (d % i == 0) isPrime = false;
            }
            if (isPrime == false) {
                isPrime = true;
                d++;   
                continue;
            }

           while (lst % d == 0) {
                //cout << "1";
                decomposition[d]++;
                lst /= d;
           }

            d++;

        }
        

        for (auto it = decomposition.begin(); it != decomposition.end(); it++) {
            //cout << (*it).first << " " << (*it).second << endl;
            if ((*it).second == 1) {
                result += "(" + to_string((*it).first) + ")";
            }
            else {
                result += "(" + to_string((*it).first) + "**" + to_string((*it).second) + ")";
                
            }
        }
        if (lst != 1) result += "(" + to_string(lst) + ")";
        
        return result;
    }
};

int main()
{
    cout << PrimeDecomp::factors(35791357);

    return 0;
}