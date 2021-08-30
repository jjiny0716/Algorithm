#include <map>
using namespace std;

bool validSolution(unsigned int board[9][9]) {
	for (int i = 0; i < 9; i++) {
		map<int, int> m1;
		map<int, int> m2;
		for (int j = 0; j < 9; j++) {
			m1[board[i][j]] += 1;
			m2[board[j][i]] += 1;
		}
		for (int n = 1; n <= 9; n++) {
			if (m1[n] != 1) return false;
			if (m2[n] != 1) return false;
		}
	}

	for (int i = 0; i < 3; i++) {
		for (int j = 0; j < 3; j++) {
			map<int, int> m;
			for (int x = i * 3; x < i * 3 + 3; x++) {
				for (int y = j * 3; y < j * 3 + 3; y++) 
					m[board[y][x]] += 1;
			}
			for (int n = 1; n <= 9; n++) 
				if (m[n] != 1) return false;
		}
	}

	return true;
}


