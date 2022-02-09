#include <iostream>
#include <string>
#include <ctype.h>
using namespace std;

int main()
{
	string s;
	cin >> s;

	for (int i = 0; i < s.size(); i++) {
		if (islower(s[i])) s[i] = toupper(s[i]);
		else if (isupper(s[i])) s[i] = tolower(s[i]);
	}

	cout << s;

	return 0;
}