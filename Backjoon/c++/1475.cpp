#include <iostream>
#include <map>
using namespace std;

int main()
{
	int n;
	cin >> n;
	map<int, int> m;
	while (n != 0) {
		if (n % 10 == 9) {
			m[6]++;
		}
		else m[n % 10]++;
		n = n / 10;
	}

	int max = 0;
	for (auto it = m.begin(); it != m.end(); it++) {
		if ((*it).second > max) max = (*it).second;
	}

	cout << max;

	return 0;
}