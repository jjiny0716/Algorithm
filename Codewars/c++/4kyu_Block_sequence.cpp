#include <iostream>
using namespace std;

int solve(long long n) {
	long long sum = 0;
	long long last_sum = 0;

	for (long long s = 1; ; s++) {
		int sub = 9;
		int a = s;

		sum += s * (s + 1) / 2;
		a = a / 10;

		while (a != 0) {
			sum += (s - sub) * (s + 1 - sub) / 2;
			sub *= 10;
			sub += 9;
			a = a / 10;
		}
		if (sum >= n) {
			cout << s << endl;
			break;
		}
		last_sum = sum;
		sum = 0;
	}
		
	n = n - last_sum;


	
	return n;
}

int main()
{
	//for (int i = 1; i <= 10000; i++)	cout << i << "  " << solve(i) <<  endl ;
	//for (int i = 1; i < 100; i++) solve(10000);
	cout << solve(100000000000000) << endl;
}
