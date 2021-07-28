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
			result += "[M: " + to_string(v[0]) + " B : " + to_string(v[1]) + " C : " + to_string(v[2]) + "]";
			
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