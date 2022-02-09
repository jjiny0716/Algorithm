#include <string>
#include <vector>
#include <cmath>
#include <algorithm>
using namespace std;
#include <iostream>
class RevRot
{
public:
    static string revRot(const string& str, unsigned int sz) {
        if (str.empty() || sz <= 0 || str.size() < sz) return "";
        string result = "";
        vector<string> chunks;

        for (int i = 0; i < str.size(); i += sz) {
            chunks.push_back(str.substr(i, sz));
        }

        for (string s : chunks) cout << s.size() << endl;

        for (int i = 0; i < chunks.size(); i++) {
            
            int sumOfCubes = 0;
            for (int j = 0; j < chunks[i].size(); j++) {
                sumOfCubes += pow((chunks[i][j] - '0'), 3);
            }
            if (sumOfCubes % 2 == 0) {
                reverse(chunks[i].begin(), chunks[i].end());
            }
            else {
                chunks[i] += chunks[i][0];
                chunks[i].erase(0, 1);
            }
        }

        for (string s : chunks) if (s.size() == sz) result += s;

        return result;
    }
};

int main()
{
    cout << RevRot::revRot("733049910872815764", 5);

    return 0;
}