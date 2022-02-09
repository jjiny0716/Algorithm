#include <string>
#include <vector>
#include <cmath>
using namespace std;
#include <iostream>
double posAverage(const string& s)
{
	int i = 0, j = 0, k = 0, str_size = 0, total = 0, common = 0;
	vector<string> strings;

	for (i = 0 ;i < s.size() ; i++) {
		if (s[i] == ',') {
			str_size = i;
			break;
		}
	}

	i = 0;

	while (i < s.size()) {
		strings.push_back(s.substr(i, str_size));
		i += str_size + 2;
	}

	for (i = 0; i < strings.size(); i++)
		for (j = i + 1; j < strings.size(); j++) {
			for (k = 0; k < strings[j].size(); k++) {
				total++;
				if (strings[i][k] == strings[j][k]) common++;
			}
		}

	return (double)common / (double)total * 100;
}

int main()
{
	const string s = "444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490";
	cout << posAverage(s);
}
