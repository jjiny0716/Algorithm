#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
	while (1) {
		int n;
		cin >> n;
		if (n == 0) break;

		vector<string> strings;
		for (int i = 0; i < n; i++) {
			string s;
			cin >> s;	
			//transform(s.begin(), s.end(), s.begin(), tolower);
			strings.push_back(s);
		}

		vector<string> tmp;
		copy(strings.begin(), strings.end(), tmp.begin());
		for (int i = 0; i < tmp.size(); i++)
			transform(tmp[i].begin(), tmp[i].end(), tmp[i].begin(), tolower);
		string word = *max_element(tmp.begin(), tmp.end());

		for (string s : strings)
			if (word.compare(s) == 0) cout << s;
	}


	return 0;
}