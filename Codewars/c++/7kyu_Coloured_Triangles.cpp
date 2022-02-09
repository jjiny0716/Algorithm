#include <string>
using namespace std;

string triangle(string row_str) {
	while (row_str.size() != 1) {
		string temp = "";
		for (int i = 0; i < row_str.size() - 1; i++) {
			string substr = row_str.substr(i, 2);
			if (substr == "RR" || substr == "GB" || substr == "BG") temp += "R";
			else if (substr == "GG" || substr == "RB" || substr == "BR") temp += "G";
			else if (substr == "BB" || substr == "RG" || substr == "GR") temp += "B";
		}
		row_str = temp;
	}


	return row_str;
}