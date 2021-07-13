#include <vector>
#include <map>
#include <iostream>
using namespace std;

int findOdd(const std::vector<int>& numbers) {
	map<int, int> m;

	for (int n : numbers) {
		m.insert({ n, 0 });
		m[n] += 1;
	}

	for (auto iter = m.begin(); iter != m.end(); iter++) {
		if (iter->second % 2 == 1) return iter->first;
	}
}

int main()
{
	vector<int> arr = { 20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5 };
	
	cout << findOdd(arr);

	return 0;
}