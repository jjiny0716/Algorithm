#include <string>

std::string group_by_commas(int n)
{
	std::string result = "";

	result = std::to_string(n);
	for (int i = 0; i < result.size(); i++) {
		if ((i + 1) % 4 == 0) result.insert(result.size() - i, ",");
	}

	return result;
}