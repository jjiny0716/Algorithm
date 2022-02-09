#include <string>
#include <map>
using namespace std;

std::string hist(const std::string& s)
{
    map<char, int> histo;

    for (char c : s) {
        if (c == 'u') histo['u']++;
        else if (c == 'w') histo['w']++;
        else if (c == 'x') histo['x']++;
        else if (c == 'z') histo['z']++;
    }

    string result = "";
    for (auto it = histo.begin(); it != histo.end(); it++) {
        result += (*it).first;
        result += "  " + to_string((*it).second);
        for (int i = 0; i < 6 - to_string((*it).second).size(); i++) result += " ";
        for (int i = 0; i < (*it).second; i++) result += "*";
        result += "\\r";
    }
    return result.substr(0, result.size() - 2);
}