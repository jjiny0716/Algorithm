#include <map>
#include <string>
#include <vector>
using namespace std;
#include <iostream>
using msv = std::map<std::string, std::vector<char>>;

msv remove_duplicate_ids(const msv& obj) {
    map<int, vector<char>> tmp;
    for (auto it = obj.begin(); it != obj.end(); it++)
        tmp[stoi((*it).first)] = (*it).second;

    map<char, int> m;
    for (auto it = tmp.rbegin(); it != tmp.rend(); it++) {
        for (int i = 0; i < (*it).second.size(); ) {
            if (m[(*it).second[i]] == 0) m[(*it).second[i++]] = 1;
            else { (*it).second.erase((*it).second.begin() + i);}
        }
    }

    msv result;
    for (auto it = tmp.begin(); it != tmp.end(); it++)
        result[to_string((*it).first)] = (*it).second;

	return result;
}

int main()
{
    msv d = {
        {"432", {'A', 'A', 'B', 'D'}},
        {"53", {'L', 'G', 'B', 'C'}},
        {"236", {'L', 'A', 'X', 'G', 'H', 'X'}},
        {"11", {'P', 'R', 'S', 'D'}},
    };

    msv result = remove_duplicate_ids(d);

    for (auto it = result.begin(); it != result.end(); it++) {
        cout << (*it).first << "   ";
        for (auto it2 = (*it).second.begin(); it2 != (*it).second.end(); it2++) {
            cout << *it2 << " ";
        }
        cout << endl;
    }
}