#include <vector>

std::vector<int> humanYearsCatYearsDogYears(int humanYears) {
	if (humanYears == 1) return { 1, 15, 15 };
	else return { humanYears, 24 + 4 * (humanYears - 2), 24 + 5 * (humanYears - 2) };
}