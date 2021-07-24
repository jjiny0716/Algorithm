#include <vector>
using namespace std;
#include <iostream>
class Kata
{
public:
    std::vector<int> sortArray(std::vector<int> array)
    {
        if (array.empty()) return array;
        for (int i = 0; i < array.size() - 1; i++)
        {
            if (array[i] % 2 == 0) continue;
            for (int j = i + 1; j < array.size(); j++) {
                if ((array[i] > array[j]) && (array[j] % 2 == 1)) {
                    int tmp = array[j];
                    array[j] = array[i];
                    array[i] = tmp;
                }
            }
            for (int n : array) cout << n << " ";
            cout << endl;
        }

        return array;
    }
};

int main()
{
    Kata k;
    k.sortArray({ });
}