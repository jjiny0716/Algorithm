#include <string>
#include <vector>
#include <algorithm>
using namespace std;
#include <iostream>
std::string encode(int n, std::string str)
{
    for (int repeat = 0; repeat < n; repeat++) {
        vector<int> indexsOfSpaces;
        int spaceCount = 0;
        for (int i = 0; i < str.size(); i++) {
            if (str[i] == ' ') {
                indexsOfSpaces.push_back(i + spaceCount++);
                str.erase(i--, 1);
            }
        }

        rotate(str.rbegin(), str.rbegin() + n, str.rend());

        for (int i : indexsOfSpaces)
            str.insert(i, 1, ' ');

        int lastIndex = 0;
        for (int i = 0; i <= str.size(); i++) {
            if (str[i] == ' ' || i == str.size()) {
                string word = str.substr(lastIndex, i - lastIndex);
                for (int j = 0; j < n; j++) rotate(word.rbegin(), word.rbegin() + 1, word.rend());
                str.replace(lastIndex, i - lastIndex, word);
                while (str[i] == ' ') i++;
                lastIndex = i;
            }
        }
    }

    return to_string(n) + " " + str;
}

std::string decode(std::string str)
{
    int n = 0;
    for (int i = 0; i < str.size(); i++) {
        if (str[i] == ' ') {
            n = stoi(str.substr(0, i));
            str.erase(0, i + 1);
            break;
        }
    }

    for (int repeat = 0; repeat < n; repeat++) {
        int lastIndex = 0;
        for (int i = 0; i <= str.size(); i++) {
            if (str[i] == ' ' || i == str.size()) {
                string word = str.substr(lastIndex, i - lastIndex);
                for (int j = 0; j < n; j++) rotate(word.begin(), word.begin() + 1, word.end());
                str.replace(lastIndex, i - lastIndex, word);
                while (str[i] == ' ') i++;
                lastIndex = i;
            }
        }

        vector<int> indexsOfSpaces;
        int spaceCount = 0;
        for (int i = 0; i < str.size(); i++) {
            if (str[i] == ' ') {
                indexsOfSpaces.push_back(i + spaceCount++);
                str.erase(i--, 1);
            }
        }

        rotate(str.begin(), str.begin() + n, str.end());

        for (int i : indexsOfSpaces)
            str.insert(i, 1, ' ');
    }

    return str;
}

int main() {
    string result1;
    result1 = encode(10, "7 B > RELd   J$7M00F1$@JqG TM{ v");
    //result1 = encode(10, "If you wish to make an apple pie from scratch, you must first invent the universe.");
    cout << decode(result1);
}

//If you wish to make an apple pie from scratch, you must first invent the universe.

// 7 B>RELd   J$7M00F1$@JqG TM{v -> "7 ETv0MJ   >@{B$Md$qL1F0 7RGJ" actual: "7 Jd{JRT E L$$B>0 M0FM@7 q1vG"