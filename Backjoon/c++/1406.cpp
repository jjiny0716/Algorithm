#include <iostream>
#include <string>
#include <list>
using namespace std;

int main()
{
	string str;
	cin >> str;

	list<char> listStr;
	for (char c : str) listStr.emplace_back(c);

	int n;
	cin >> n;

	auto it = listStr.end();
	for (int i = 0; i < n; i++) {
		char op;
		cin >> op;
		switch (op) {
		case 'L':
			if (it != listStr.begin()) it--;
			break;
		case 'D':
			if (it != listStr.end()) it++;
			break;
		case 'B':
			if (it !=listStr.begin()) {
				it--;
				it = listStr.erase(it);
			}
			break;
		case 'P':
			char c;
			cin >> c;
			listStr.insert(it, c);
		}
	}

	for (char c : listStr) cout << c;

	return 0;
}