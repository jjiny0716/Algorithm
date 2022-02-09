#include <vector>
#include <string>
using namespace std;

class Kata
{
public:
    std::vector<std::string> towerBuilder(int nFloors)
    {
        vector<string> result;
        for (int i = 1; i <= nFloors; i++) {
            string floor = "";
            for (int j = 0; j < nFloors - i; j++) floor += " ";
            for (int j = 0; j < 2 * i - 1; j++) floor += "*";
            for (int j = 0; j < nFloors - i; j++) floor += " ";
            result.push_back(floor);
        }

        return result;
    }
};