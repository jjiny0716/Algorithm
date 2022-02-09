#include <iostream>
#include <map>
using namespace std;

int main()
{
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);

	int n;
	cin >> n;

	for (int i = 0; i < n; i++) {
		int t;
		cin >> t;

		map<long, int> m;
		for (int j = 0; j < t; j++) {
			long number;
			cin >> number;
			m[number]++;
		}

		long win = -1;
		for (auto it = m.begin(); it != m.end(); it++) {
			if ((*it).second > t / 2) {
				win = (*it).first;
				break;
			}
		}

		if (win == -1) cout << "SYJKGW" << '\n';
		else cout << win << '\n';
	}
}