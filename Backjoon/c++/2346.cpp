#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

int main()
{
	int n;
	cin >> n;

	vector<int> balloons;
	for (int i = 0; i < n; i++) {
		int num;
		cin >> num;
		balloons.push_back(num);
	}

	int index = 0;
	for (int i = 0; i < n - 1; i++) {
		cout << index + 1 << endl;
		int next = balloons[index];
		balloons[index] = 0;

		int p = 0;
		if (next < 0) p = n - 1;
		else p = 1;
		for (int j = 0; j < abs(next); j++) {
			while (balloons[(index + p) % n] == 0) index = (index + p) % n;
			index = (index + p) % n;
		}
	}
	
	cout << index + 1 << endl;

	return 0;
}