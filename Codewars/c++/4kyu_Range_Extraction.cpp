#include <string>
#include <vector>
using namespace std;

std::string range_extraction(std::vector<int> args) {
	int start = 0, end = 0;
	string result = "";

	while (start < (int)args.size()) {
		while (args[end] + 1 == args[end + 1]) end++;
		if (start == end) {
			result += to_string(args[start]) + ",";
		}
		else if (start + 1 == end) {
			result += to_string(args[start]) + ",";
			end = start;
		}
		else {
			result += to_string(args[start]) + "-" + to_string(args[end]) + ",";
		}
		start = end = end + 1;
	}

	result.erase(result.size() - 1);

	return result;
}