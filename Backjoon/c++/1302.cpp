#include <iostream>
#include <string>
#include <map>
using namespace std;

int main()
{
	int n;
	map<string, int> m;

	cin >> n;

	for (int i = 0; i < n; i++) {
		string buf;
		cin >> buf;
		m[buf]++;
	}

	string result;
	int max = 0;
	for (auto it = m.begin(); it != m.end(); it++) {
		if ((*it).second > max) {
			max = (*it).second;
			result = (*it).first;
		}
	}

	cout << result;

	return 0;
}