#include <string>
#include <vector>
#include <algorithm>
using namespace std;
#include <iostream>
std::string removeDuplicateWords(const std::string& str)
{
	vector<string> words;

	int lastPos = 0;
	for (int pos = 0; pos < str.size(); pos++) {
		if (str[pos] == ' ') {
			words.push_back(str.substr(lastPos, pos - lastPos));
			lastPos = pos + 1;
		}
	}
	words.push_back(str.substr(lastPos, str.size() - lastPos));

	//for (string s : words) cout << s << endl;

	for (int i = 0; i < words.size(); i++) {
		for (int j = i + 1; j < words.size(); j++) {
			
			if (words[i] == words[j]) words.erase(words.begin() + j--);
		}
	}

	string result = "";
	result += words[0];
	for (auto it = words.begin() + 1; it != words.end(); it++) {
		result += " " + *it;
	}

	return result;
}

int main()
{
	cout << removeDuplicateWords("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta");
}