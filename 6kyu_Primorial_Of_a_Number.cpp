#include <iostream>
using namespace std;

unsigned long long numPrimorial(unsigned short int number)
{
	int result = 1;

	for (int i = 2; ; i++) {
		bool isPrime = true;
		for (int j = 2; j * j <= i; j++) {
			if (i % j == 0) {
				isPrime = false;
				break;
			}
		}

		if (isPrime) {
			result *= i;
			number -= 1;
			if (number == 0) break;
		}

	}

	return result;
}

int main()
{
	cout << numPrimorial(8);

	return 0;
}