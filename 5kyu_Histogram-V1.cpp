#include <string>
#include <vector>
#include <algorithm>
using namespace std;
#include <iostream>
std::string histogram(std::vector<int> results)
{
    string result = "";
    int max = *max_element(results.begin(), results.end());
    
    for (int i = max; i >= 0; i--) {
        string line = "";
        for (int r : results) {
            if (i > r) {
                line += "  ";
            }
            else if (i == r) {
                if (i == 0) line += "  ";
                else if (i >= 10) line += to_string(i);
                else line += to_string(i) + " ";
            }
            else {
                line += "# ";
            }
        }

        for (int pos = 11; pos >= 0; pos--) {
            if (line[pos] == ' ')  line.erase(pos, 1);
            else break;
        }
            
        
        line += "\n";
        result += line;
    }

    result += "-----------\n"
        "1 2 3 4 5 6\n";
    return result;
}

int main()
{
    cout << histogram({ 7, 3, 10, 1, 0, 5 });

    return 0;
}