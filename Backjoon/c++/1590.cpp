#include <iostream>
#include <set>
using namespace std;

int main()
{
	
	int n, t;
	cin >> n >> t;

	set<int> buses;
	for (int b = 0; b < n; b++) {
		int s, i, c;
		cin >> s >> i >> c;

		for (int j = 0; j < c; j++) {
			buses.insert(s);
			s += i;
		}
	}
	
	auto it = buses.lower_bound(t);
	if (it == buses.end()) cout << -1;
	else cout << *it - t;

	return 0;
}