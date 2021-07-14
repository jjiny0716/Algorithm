#include <iostream>
typedef unsigned long long ull;
class SumFct
{
public:
	static ull perimeter(int n);
};

ull SumFct::perimeter(int n) {
	ull sum = 1;
	ull a = 0, b = 1, c = 1;

	for (int i = 0; i < n; i++) {
		sum += c;
		a = b;
		b = c;
		c = a + b;
	}

	
	
	return sum * 4;
}

int main()
{
	std::cout << SumFct::perimeter(0);
}