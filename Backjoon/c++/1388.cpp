#include <string>
#include <iostream>
#include <vector>
using namespace std;

int n, m, result = 0;
vector<string> f;

void changer(int y, int x, char c) {
	f[y][x] = 'x';
	if (c == '-') {
		if (x + 1 < m) {
			if (f[y][x + 1] == c)
				changer(y, x + 1, c);
		}
	}
	if (c == '|') {
		if (y + 1 < n) {
			if (f[y + 1][x] == c)
				changer(y + 1, x, c);
		}
	}

}

int main()
{
	cin >> n >> m;

	for (int i = 0; i < n; i++) {
		string row;
		cin >> row;
		f.push_back(row);
	}

	for (int y = 0; y < n; y++) {
		for (int x = 0; x < m; x++) {
			if (f[y][x] == '-' || f[y][x] == '|') {
				changer(y, x, f[y][x]);
				result++;
			}
		}
	}

	cout << result;

	return 0;
}