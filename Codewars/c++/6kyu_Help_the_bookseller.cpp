#include <string>
#include <vector>
#include <map>
using namespace std;

class StockList
{
public:
	static string stockSummary(vector<string>& lstOfArt, vector<string>& categories) {
		if (lstOfArt.empty() || categories.empty()) return "";
		map<char, int> result;
		for (string bookName : lstOfArt) {
			result[bookName[0]] += stoi(bookName.substr(bookName.find(' ') + 1, bookName.size() - bookName.find(' ')));
		}

		string resultString = "";
		for (string categorie : categories) {
			resultString += "(" + categorie + " : " + to_string(result[categorie[0]]) + ")" + " - ";
		}
		return resultString.substr(0, resultString.size() - 3);
	}
};
