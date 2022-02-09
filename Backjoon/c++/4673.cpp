#include <iostream>
#include <map>
using namespace std;

int d(int x) {
	int result = x;
	while (x != 0) {
		result += x % 10;
		x /= 10;
	}

	return result;
}

int main()
{
	map<int, bool> m;
	for (int i = 1; i <= 10000; i++) {
		int x = d(i);

		while (x <= 10000 && !m[x]) {
			m[x] = true;
			x = d(x);
		}
	}

	for (int i = 1; i <= 10000; i++) 
		if (!m[i]) cout << i << '\n';
	

	return 0;
}