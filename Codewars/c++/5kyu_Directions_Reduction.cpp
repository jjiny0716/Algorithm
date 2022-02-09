#include <vector>
#include <string>
using namespace std;
#include <iostream>
class DirReduction
{
public:
    static std::vector<std::string> dirReduc(std::vector<std::string>& arr) {
        int i = 0;
        while (i < arr.size() - 2) {
            if (arr[i] == "NORTH" && arr[i + 1] == "SOUTH")      { arr.erase(arr.begin() + i, arr.begin() + i + 2); i--; }
            else if (arr[i] == "SOUTH" && arr[i + 1] == "NORTH") { arr.erase(arr.begin() + i, arr.begin() + i + 2); i--; }
            else if (arr[i] == "EAST" && arr[i + 1] == "WEST")   { arr.erase(arr.begin() + i, arr.begin() + i + 2); i--; }
            else if (arr[i] == "WEST" && arr[i + 1] == "EAST")   { arr.erase(arr.begin() + i, arr.begin() + i + 2); i--; }
            else i++;
            if (i == -1) i = 0;
        }

        return arr;
    }
};

int main()
{
    vector<string> arr = { "NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST" };
  
    for (string s : DirReduction::dirReduc(arr)) cout << s << endl;
}