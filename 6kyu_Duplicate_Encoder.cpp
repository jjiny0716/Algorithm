#include <iostream>
#include <String>
using namespace std;

string duplicate_encoder(const std::string& word) {
	string result = "";
	string tmp = word;

	for (int i = 0; i < word.size(); i++) {
		tmp[i] = tolower(tmp[i]);
	}

	for (char c : tmp) {
		if (tmp.find(c) == tmp.find_last_of(c)) result += "(";
		else result += ")";
	}

	return result;
}

int main()
{
	cout << duplicate_encoder("(( @") << endl;

	return 0;
}

