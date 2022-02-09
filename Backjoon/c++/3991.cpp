#include <iostream>
#include <string>
using namespace std;

int main()
{
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);

	int n;
	cin >> n;

	for (int i = 0; i < n; i++) {
		string log;
		cin >> log;

		string password = "";
		int index = 0;
		for (char c : log) {
			if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) {
				string buf = "";
				buf += c;
				password.insert(index, buf);
				index++;
			}
			else if (c == '<') {
				if (index != 0) index--;
			}
			else if (c == '>') {
				if (index != password.size()) index++;
			}
			else if (c == '-') {
				if (index != 0) {
					password.erase(index - 1, 1);
					index--;
				}
			}
		}

		cout << password << '\n';
	}

	return 0;
}