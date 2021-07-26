#include <iostream> // failed 21-07-26
using namespace std;

int last_digit(long n) {
	long result = 1;

	for (int i = 1; i <= n; i++) {
		int n = i;
		while (n != 0) {
			if (n % 10 == 0)
				n /= 10;
			else {
				n = n % 10;
				break;
			}
		}
		result *= n;
		while (result != 0) {
			if (result % 10 == 0) {
				result /= 10;
			}
			else {
				result = result % 10;
				break;
			}
		}
		cout << i << "  " << n << "  " << result << endl;
	}

	return result;
}

int main()
{
	cout << last_digit(15);
}