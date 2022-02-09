#include <string>
#include <vector>
#include <algorithm>
using namespace std;
#include <iostream>

class Stat
{
public:
	static string stat(const string& strg) {
		vector<string> parsed;
		vector<int> seconds;
		int second = 0, count = 0;
		
		int lastPos = 0;
		for (int i = 0; i < strg.size(); i++) {
			if (strg[i] == ',') {
				parsed.push_back(strg.substr(lastPos, i - lastPos));
				lastPos = i + 2;
			}
		}
		parsed.push_back(strg.substr(lastPos, strg.size() - lastPos));

		//for (string s : parsed) cout << s << endl;

		for (string s : parsed) {
			int first = s.find('|');
			int second = s.find('|', first + 1);
			seconds.push_back(3600 * stoi(s.substr(0, first)) + 60 * stoi(s.substr(first + 1, second - first - 1)) + stoi(s.substr(second + 1, strg.size() - 1)));
		}

		//for (int i : seconds) cout << i << endl;

		sort(seconds.begin(), seconds.end());

		int range = seconds.back() - seconds.front();

		int average = 0;
		for (int s : seconds) average += s;
		average /= seconds.size();

		int median = seconds.size() % 2 == 1 ? seconds[seconds.size() / 2]: (seconds[seconds.size() / 2] + seconds[seconds.size() / 2 - 1]) / 2;

		//cout << range << "  " << average << "  " << median << endl;

		return "Range: " + convert(range) + " Average: " + convert(average) + " Median: " + convert(median);
	}
private:
	static string convert(int second) {
		int h = 0, m = 0, s = 0;

		h = second / 3600;
		second -= 3600 * h;
		m = second / 60;
		second -= 60 * m;
		s = second;

		return (h / 10 != 0 ? to_string(h) : "0" + to_string(h)) + "|" + (m / 10 != 0 ? to_string(m) : "0" + to_string(m)) + "|" + (s / 10 != 0 ? to_string(s) : "0" + to_string(s));
	}
};

int main()
{
	cout << Stat::stat("01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17");

	return 0;
}