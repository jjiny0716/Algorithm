#include <string>
#include <cmath>
#include <iostream>
using namespace std;

class RomanHelper {
public:
    char romanChar[4][3] = {
        { 'I','V','X' },
        { 'X','L','C' },
        { 'C','D','M' },
        { 'M',' ',' ' }
    };
    int order[10] = { 8, 7, 3, 9, 6, 4, 2, 5, 1, 0}; // 수의 size 순서대로 찾기위한 배열 

    std::string to_roman(unsigned int n) {
        string result = "";

        for (int i = 3; i >= 0; i--) {
            n = n % (int)pow(10, i + 1);
            result.append(makingRomanString(n / (int)pow(10, i), i));
        }
            
        return result;
    }
    int from_roman(std::string rn) {
        int result = 0;
        string romanString;

        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 10; j++) {
                romanString = makingRomanString(order[j], i); 
                if (romanString.size() > rn.size()) continue;
                if (rn.substr(rn.size() - romanString.size(), rn.size()).find(romanString) != string::npos) {
                    result += pow(10, i) * order[j];
                    rn.erase(rn.size() - romanString.size(), romanString.size());
                    break;
                }
            }
        }
        
        return result;
    }

private:
    string makingRomanString(int n, int i) {
        string romanString;

        switch (n) {
        case 0: romanString.append("");                                                            break;
        case 1: romanString.append(1, romanChar[i][0]);                                            break;
        case 2: romanString.append(2, romanChar[i][0]);                                            break;
        case 3: romanString.append(3, romanChar[i][0]);                                            break;
        case 4: romanString.append(1, romanChar[i][0]);  romanString.append(1, romanChar[i][1]);   break;
        case 5: romanString.append(1, romanChar[i][1]);                                            break;
        case 6: romanString.append(1, romanChar[i][1]);  romanString.append(1, romanChar[i][0]);   break;
        case 7: romanString.append(1, romanChar[i][1]);  romanString.append(2, romanChar[i][0]);   break;
        case 8: romanString.append(1, romanChar[i][1]);  romanString.append(3, romanChar[i][0]);   break;
        case 9: romanString.append(1, romanChar[i][0]);  romanString.append(1, romanChar[i][2]);   break;
        }

        return romanString;
    }
} RomanNumerals;

int main()
{
    RomanHelper rh;
    cout << rh.to_roman(2008) << endl;
    cout << rh.from_roman("MMVIII") << endl;

    return 0;
}
