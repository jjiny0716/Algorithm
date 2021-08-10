#include <string>
using namespace std;

class Suite2
{
public:
	static string game(unsigned long long n) {
		double dollars;
		dollars = n == 0 ? 0 : n * (n - 1) / 2 + n / 2.0;

		if (n % 2 == 0) {
			return "[" + to_string((unsigned long long)dollars) + "]";
		}
		else {
			return "[" + to_string((unsigned long long)(dollars * 2)) + ", " + to_string(2) + "]";
		}
	}
};
