#include <string>
#include <map>
#include <iostream>
using namespace std;

std::string decomp(int n) {
	map<int, int> result;
	string resultStr = "";

	for (int i = 2; i <= n; i++) {
		int num = i, k = 2;

		while (num != 1) {
			if (num % k == 0) {
				num /= k;
				result[k] += 1;
			}
			else k++;
		}
	}

	for (auto iter = result.begin(); iter != result.end(); iter++) {
		if (iter->second == 1) resultStr += to_string(iter->first) + " * ";
		else resultStr += to_string(iter->first) + "^" + to_string(iter->second) + " * ";
	}
	
	return resultStr.substr(0, resultStr.size() - 3);
}

int main()
{
	cout << decomp(25);
}