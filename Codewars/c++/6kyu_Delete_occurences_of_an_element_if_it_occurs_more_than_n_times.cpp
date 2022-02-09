#include <iostream>
#include <vector>
#include <map>
using namespace std;

std::vector<int> deleteNth(std::vector<int> arr, int n)
{
	vector<int> result;
	map<int, int> m;

	for (int i : arr) {
		m.insert({ i, 0 });
		m[i] += 1;
		if (m[i] <= n) result.push_back(i);
	}


	return result;
}

int main()
{
	vector<int> arr = deleteNth({ 1, 1, 1, 1 }, 2);
	for (int n : arr) cout << n << endl;

	return 0;
}