#include <iostream>
#include <string>
#include <vector>
#include <map>
using namespace std;

int main()
{

	int n;
	cin >> n;

	string tmp;
	getline(cin, tmp);

	vector<string> strings;
	for (int i = 0; i < n; i++) {
		string buf;
		getline(cin, buf);
		strings.push_back(buf);
	}
	
	vector<int> indexes;
	map<char, bool> m;
	for (int i = 0; i < strings.size(); i++) {
		if (!m[strings[i][0]]) {
			m[tolower(strings[i][0])] = m[toupper(strings[i][0])] = true;
			indexes.push_back(0);
			continue;
		}

		for (int j = 0; j < strings[i].size() - 1; j++) {
			if (strings[i][j] == ' ' && !m[strings[i][j + 1]]) {
				m[tolower(strings[i][j + 1])] = m[toupper(strings[i][j + 1])] = true;
				indexes.push_back(j + 1);
				break;
			}
		}
		if (indexes.size() == i + 1) continue;

		for (int j = 0; j < strings[i].size(); j++) {
			if (strings[i][j] != ' ' && !m[strings[i][j]]) {
				m[tolower(strings[i][j])] = m[toupper(strings[i][j])] = true;
				indexes.push_back(j);
				break;
			}
		}
		if (indexes.size() != i + 1) indexes.push_back(-1);
	}

	for (int i = 0; i < n; i++) {
		for (int j = 0; j < strings[i].size(); j++) {
			if (indexes[i] == j) cout << "[" << strings[i][j] << "]";
			else cout << strings[i][j];
		}
		cout << endl;
	}

	return 0;
}