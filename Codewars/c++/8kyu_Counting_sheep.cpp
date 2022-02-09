#include <vector>
#include <algorithm>
using namespace std;

int count_sheep(vector<bool> arr)
{
	return count(arr.begin(), arr.end(), true);
}

