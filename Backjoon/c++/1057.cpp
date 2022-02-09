#include <iostream>
using namespace std;

int main()
{
	int n, a, b;
	cin >> n >> a >> b;

	if (a > b) {
		int tmp = b;
		b = a;
		a = tmp;
	}
	
	int round = 1;
	while (!(b % 2 == 0 && b - a == 1)) {
		a = (a + 1) / 2;
		b = (b + 1) / 2;
		round++;
	}

	cout << round;

	return 0;
}
