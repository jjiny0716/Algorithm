#include <vector>

std::vector<int> move_zeroes(const std::vector<int>& input) {
	int zeroCount = 0;
	std::vector<int> result;

	for (int n : input) {
		if (n != 0) result.push_back(n);
		else zeroCount++;
	}

	for (int i = 0; i < zeroCount; i++)
		result.push_back(0);

	return result;

}

