#include <cmath>

long zeros(long n) {
	long count = 0;
	while (n >= 5) {
		int p = 1;
		long numOfZeros = 0;
		while (pow(5, p) <= n) {
			p++;
			numOfZeros = numOfZeros * 5 + 1;
		}
		p--;
		n -= pow(5, p);
		count += numOfZeros;
	}

	return count;
}

int main()
{
	std::cout << zeros(126);
}