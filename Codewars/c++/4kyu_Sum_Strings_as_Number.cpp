#include <string>
#include <algorithm>
using namespace std;
#include <iostream>
std::string sum_strings(const std::string& a, const std::string& b) {
	string u, d, result = "";
	if (a.size() > b.size()) {
		u = a;
		d = b;
	}
	else {
		u = b;
		d = a;
	}

	reverse(u.begin(), u.end());
	reverse(d.begin(), d.end());
	int	next = 0;

	for (int i = 0; i < u.size(); i++) {
		int sum = (u[i] - '0') + ((i < d.size()) ? (d[i] - '0') : 0) + next;
		result += to_string(sum % 10);
		next = sum / 10;
	}

	result += next == 1 ? "1" : "";
	reverse(result.begin(), result.end());

	return result;
}