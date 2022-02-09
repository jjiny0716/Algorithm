#include <iostream>
#include <vector>
using namespace std;

long long determinant(vector< vector<long long> > m) {
	if (m.size() == 1) return m[0][0];
	vector<vector<vector<long long>>> minors;
	long long result = 0;
	
	for (int i = 0; i < (int)m.size(); i++) {
		vector<vector<long long>> minor;
		for (int y = 1; y < (int)m.size(); y++) {
			vector<long long> row;
			for (int x = 0; x < (int)m.size(); x++) {
				if (i == x) continue;
				row.push_back(m[y][x]);
			}
			minor.push_back(row);
		}
		minors.push_back(minor);
	}

		for (int i = 0; i < (int)m.size(); i++)
			result += m[0][i] * determinant(minors[i]) * ((i % 2 == 0) ? 1 : -1);

	return result;
}

int main()
{
	cout << determinant({ {1, 3}, {2, 5} });
}

