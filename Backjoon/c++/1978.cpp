#include <iostream>
#include <vector>
using namespace std;

int main()
{
	int n, num, result = 0;

	cin >> n;

	for (int i = 0; i < n; i++) {
		cin >> num;
		if (num == 1) continue;

		bool isPrime = true;
		for (int d = 2; d * d <= num; d++) {
			if (num % d == 0) {
				isPrime = false;
				break;
			}
		}
		if (isPrime) result += 1;
	}

	cout << result;

	return 0;
}