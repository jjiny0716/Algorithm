#include <string>
#include <map>
using namespace std;

long long factorial(int i) {
    if (i == 0 || i == 1) return 1;
    return i * factorial(i - 1);
}

class Dec2Fact
{
public:
    static std::string dec2FactString(long long nb);
    static long long factString2Dec(const std::string& str);
};

std::string Dec2Fact::dec2FactString(long long nb) {
    map<int, int> m;
    for (int i = 20; i >= 0; i--) {
        long long f = factorial(i);
        if (f > nb) continue;
        else {
            long long j = 1;
            while (f * j <= nb) j++;
            j--;
            m[i] = j;
            nb -= f * j;
        }
    }

    string result = "";
    for (int i = (*(m.rbegin())).first; i >= 0; i--) {
        if (m[i] >= 10) result += 'A' + i - 10;
        else result += to_string(m[i]);
    }
    return result;
}

long long Dec2Fact::factString2Dec(const std::string& str) {
    long long result = 0;

    for (int i = str.size() - 1; i >= 0; i--) {
        if (str[i] >= '0' && str[i] <= '9') result += (str[i] - '0') * factorial(str.size() - i - 1);
        else result += (str[i] - 'A') * factorial(str.size() - i - 1);
    }

    return result;
}


int main()
{
	Dec2Fact::dec2FactString(2982);
}

