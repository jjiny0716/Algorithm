#include <iostream>
#include <vector>
#include <string>
using namespace std;


int main()
{
	int n, m;
	cin >> n >> m;
	int k = min(n, m);

	vector<string> square;
	for (int i = 0; i < n; i++) {
		string row;
		cin >> row;
		square.push_back(row);
	}

	int result = 0;
	for (int i = 0; i < k; i++) {
		for (int y = 0; y < n - i; y++) {
			for (int x = 0; x < m - i; x++) {
				if (square[y][x] == square[y][x + i] && square[y][x + i] == square[y + i][x] && square[y + i][x] == square[y + i][x + i]) result = i;
			}
		}
	}

	cout << (result + 1) * (result + 1);



	return 0;
}