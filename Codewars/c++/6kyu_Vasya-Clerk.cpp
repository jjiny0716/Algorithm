#include <string>
#include <vector>
using namespace std;

string tickets(const vector<int>& peopleInLine) {
	int bill25 = 0, bill50 = 0;

	for (int i : peopleInLine) {
		switch (i) {
		case 25:
			bill25++;
			break;
		case 50:
			bill50++;
			if (bill25 > 0) bill25--;
			else return "NO";
			break;
		case 100:
			if (bill25 > 0 && bill50 > 0) {
				bill25--;
				bill50--;
			}
			else if (bill25 > 2) bill25 -= 3;
			else return "NO";
		}
	}

	return "YES";
}