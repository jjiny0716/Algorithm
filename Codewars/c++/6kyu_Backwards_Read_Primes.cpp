#include <string>
using namespace std;
#include <iostream>
class BackWardsPrime
{
public:
	static std::string backwardsPrime(long long start, long long end) {
		string result = "";
		for (long long i = start; i <= end; i++) {
			if (isPrime(i)) {
				string s = to_string(i);
				reverse(s.begin(), s.end());
				long long r = stoll(s);
				if (isPrime(r)) result += to_string(i) + " ";
			}
		}

		return result.substr(0, result.size() - 1);
	}

private:
	static bool isPrime(long long n) {
		for (long long l = 2; l * l <= n; l++) {
			if (n % l == 0) return false;
		}
		return true;
	}
};

int main()
{
	cout << BackWardsPrime::backwardsPrime(1, 100);

	return 0;
}