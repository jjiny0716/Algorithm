#include <vector>
using namespace std;
#include <iostream>
class DigPow
{
public:
	static int digPow(int n, int p);
};

int DigPow::digPow(int n, int p) {
	vector<int> arr;
	double result = 0;
	const int origin = n;

	while (n != 0) {
		arr.insert(arr.begin(), n % 10);
		n /= 10;
	}

	for (int i : arr) result += pow(i, p++);
	
	result /= origin;

	return result - (int)result == 0 ? result : -1;
}



int main()
{
	cout << DigPow::digPow(695, 2);
}