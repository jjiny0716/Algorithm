#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Carboat
{

public:
	static string howmuch(int m, int n) {
		vector<vector<int>> cases;
		string result = "";

		if (m > n) {
			int tmp = n;
			n = m;
			m = tmp;
		}

		for (int i = m; i <= n; i++) {
			if (i % 9 == 1 && i % 7 == 2) {
				vector<int> c;
				c.push_back(i);
				c.push_back(i / 7);
				c.push_back(i / 9);
				cases.push_back(c);
				cout << i << "  " << i / 7 << "  " << i / 9 << endl;
			}
		}

		result += '[';
		for (vector<int> v : cases) { // ["M: 1045", "B: 149", "C: 116"]
			result += "[M: " + to_string(v[0]) + " B: " + to_string(v[1]) + " C: " + to_string(v[2]) + "]";
			
		}
		//if (!cases.empty()) result.erase(result.size() - 1, 1);
		result += ']';

		return result;
	}
};


int main()
{
	cout << Carboat::howmuch(0, 200);
	
	return 0;
}


// other answer
#include <algorithm>

class Carboat
{

public:
	static std::string howmuch(int m, int n)
	{
		int min = std::min(m, n);
		int max = std::max(m, n);

		int num = min + 37 - (min % 63);
		num = (num >= min) ? num : num + 63;

		/*
		 *  There is no need to check every
		 *  value. As the cars need to be multiple
		 *  of 9 and boats multiple of 7 it is clear
		 *  that the answers are always 63 units apart.
		 */
		std::string answer = "[";
		for (; num <= max; num += 63)
		{
			answer += "[M: " + std::to_string(num) +
				" B: " + std::to_string((num - 2) / 7) +
				" C: " + std::to_string((num - 1) / 9) + "]";
		}
		answer += "]";

		return answer;
	}
};