#include <string>

std::string switcheroo(const std::string& s) {
	std::string s = s;
	for (int i = 0; i < s.size(); i++) {
		if (s[i] == 'a') s[i] = 'b';
		else if (s[i] == 'b') s[i] = 'a';
	}
	return s;
}