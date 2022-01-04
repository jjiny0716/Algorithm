#include <string>
#include <vector>
#include <algorithm>
using namespace std;
#include <iostream>

std::vector<std::string> permutations(std::string s) {
	sort(s.begin(), s.end());
	vector<string> result;
	do {
		result.push_back(s);
		cout << s << endl;
	}
	while (next_permutation(s.begin(), s.end()));

	return result;
}

int main()
{
	string s = "jjiny";
	permutations(s);

	return 0;
}