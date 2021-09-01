#include <string>
#include <vector>
using namespace std;

class Rotations
{
public:
    static bool containAllRots(const string& strng, vector<string>& arr) {
        string rotation = strng;

        for (int i = 0; i < strng.size(); i++) {
            auto it = find(arr.begin(), arr.end(), rotation);
            if (it == arr.end()) return false;
            rotation += rotation[0];
            rotation.erase(0, 1);
        }

        return true;
    }
};

