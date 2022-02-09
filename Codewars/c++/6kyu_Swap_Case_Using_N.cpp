#include <string>
#include <bitset>
#include <algorithm>

std::string toBinary(int n)
{
	std::string r = "";
	while (n != 0) {
		r += (n % 2 == 0 ? "0" : "1");
		n /= 2;
	}
	if (r == "") return "0";
	reverse(r.begin(), r.end());
	return r;
}

std::string swap(std::string s, int n) {
	std::string binary = toBinary(n);
	int bIndex = 0;

	for (int i = 0; i < s.size(); i++) {
		if (islower(s[i])) {
			if (binary[bIndex++] == '1') s[i] = toupper(s[i]);
		}
		else if (isupper(s[i])) {
			if (binary[bIndex++] == '1') s[i] = tolower(s[i]);
		}
		bIndex = bIndex % binary.size();
	}

	return s;
}

int main()
{
	isupper('H');
}