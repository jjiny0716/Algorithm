#include <iostream>
#include <vector>
using namespace std;

int FindOutlier(std::vector<int> arr)
{
    int result, oddNum = 0;

    for (int i = 0; i < 3; i++) {
        if (arr[i] % 2 == 1 || arr[i] % 2 == -1) oddNum += 1;
    }
    
    for (int n : arr) {
        if (oddNum >= 2) if (n % 2 == 0) result = n;
        if (oddNum < 2)  if (n % 2 == 1 || n % 2 == -1) result = n;
    }

    return result;
}

int main()
{
    cout << FindOutlier({ 2, -6, 8, -10, -3 });

    return 0;
}