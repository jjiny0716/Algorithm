#include <iostream>
#include <vector>
using namespace std;

int dx[4] = { 0, 1, 0, -1 };
int dy[4] = { 1, 0, -1, 0 };
vector<vector<int>> farm;
int m, n, k;

void worm(int y, int x) {
	farm[y][x] = 2;
	for (int i = 0; i < 4; i++) {
		int nx = x + dx[i];
		int ny = y + dy[i];
		if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
			if (farm[ny][nx] == 1) 
				worm(ny, nx);
		}
	}
}

int main()
{
	int h;
	cin >> h;

	while (h--) {
		cin >> m >> n >> k;

		for (int i = 0; i < n; i++) {
			vector<int> row;
			for (int j = 0; j < m; j++)
				row.push_back(0);
			farm.push_back(row);
		}

		for (int i = 0; i < k; i++) {
			int x, y;
			cin >> x >> y;
			farm[y][x] = 1;
		}

		int result = 0;
		for (int y = 0; y < n; y++) {
			for (int x = 0; x < m; x++) {
				if (farm[y][x] == 1) {
					worm(y, x);
					result++;
				}
			}
		}

		cout << result << endl;
		farm.clear();
	}
	return 0;
}