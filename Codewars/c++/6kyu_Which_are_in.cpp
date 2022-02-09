#include <vector>
#include <string>
using namespace std;
#include <iostream>
#include <algorithm>
class WhichAreIn
{

public:
	static vector<string> inArray(vector<string>& array1, vector<string>& array2) {
		vector<string> result;

		for (string s1 : array1)
			for (string s2 : array2) {
				if (s2.find(s1) != string::npos) {
					result.push_back(s1);
					break;
				}
			}

		sort(result.begin(), result.end());
		return result;
	}
};

int main()
{
	vector<string> str1 = { "arp", "live", "strong" };
	vector<string> str2 = { "lively", "alive", "harp", "sharp", "armstrong" };
	for (string s : WhichAreIn::inArray(str1, str2)) cout << s << endl;
}
