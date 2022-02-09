#include <string>
#include <map> 
#include <algorithm>
using namespace std;
#include <iostream>
size_t duplicateCount(const std::string& in); // helper for tests

size_t duplicateCount(const char* in)
{
    size_t result = 0;
    map<char, int> m;
    string str = in;
    transform(str.begin(), str.end(), str.begin(), ::tolower);

    for (char c : str)
        m[c]++;

    for (auto it = m.begin(); it != m.end(); it++) {
        if ((*it).second > 1) result++;
    }

    cout << str;

    return result;
}

int main()
{
    duplicateCount("aDs");
}
