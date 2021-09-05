#include <vector>
using namespace std;

class Kata
{
public:
    std::vector<int> foldArray(std::vector<int> array, int runs)
    {
        for (int run = 0; run < runs; run++) {
            vector<int> temp;
            int arraySize = array.size();
            for (int i = 0; i <= (arraySize - 1) / 2; i++)
                temp.push_back((array[i] + array[arraySize - i - 1]));
            if (arraySize % 2 == 1) temp[(arraySize - 1) / 2] /= 2;
            array = temp;
        }

        return array;
    }
};