#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
	int n, x;
	vector<int> a;
	cin >> n;
	for (int i = 0; i < n; i++) {
		int buf;
		cin >> buf;
		a.push_back(buf);
	}
	cin >> x;

	sort(a.begin(), a.end());
	int result = 0;
	for (auto it = a.begin(); it != a.end() - 1; it++) {
		if (*lower_bound(it + 1, a.end(), x - *it) == x - *it) result++;
	}

	cout << result;

	return 0;
}