#include <iostream>
int beeramid(int bonus, double price)
{
	std::cout << bonus << "  " << price << "      ";
	if (bonus <= 0) return 0;
	int i = 0, sum = 0;
	while (true) {
		if (sum > bonus) { std::cout << sum << "  " << i - 1 << std::endl; return i - 1; }
		i++;
		sum += i * i * price;
	}
}