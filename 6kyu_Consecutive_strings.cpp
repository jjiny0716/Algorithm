#include <string>
#include <vector>
#include <iostream>
using namespace std;

class LongestConsec
{
public:
    static std::string longestConsec(const std::vector<std::string>& strarr, int k);
};

string LongestConsec::longestConsec(const std::vector<std::string>& strarr, int k) {
    int max_length = 0;
    int index = 0;
    int size_sum = 0;
    string result = "";

    for (string s : strarr) cout << s << " ";

    for (int i = 0; i < strarr.size() - k + 1; i++) {
        for (int j = 0; j < k; j++) size_sum += strarr[i + j].size();
        if (size_sum > max_length) {
            max_length = size_sum;
            index = i;
        }
        size_sum = 0;
    }

    for (int i = 0; i < k; i++) result += strarr[index + i];
    return result;
}

int main()
{
    cout << LongestConsec::longestConsec({"zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail", "ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh "}, 1);
}