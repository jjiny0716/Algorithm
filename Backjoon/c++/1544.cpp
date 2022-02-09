#include <iostream>
#include <string>
#include <map>
using namespace std;

int main()
{
	map <string, bool> m;
	int n, ans = 0;
	string s;
	
	cin >> n;

	for (int i = 0; i < n; i++) {
		cin >> s;
		if (m[s] == false) {
			for (int j = 0; j < s.size(); j++) {
				m[s] = true;
				s += s[0];
				s.erase(0, 1);
			}
			ans++;
		}
	}

	cout << ans;

}