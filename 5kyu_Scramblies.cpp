#include <string>
#include <map>
using namespace std;

bool scramble(const string& s1, const string& s2) {
	map<char, int> m1, m2;

	for (char c : s2) m1[c]++;
	for (char c : s1) m2[c]++;
	for (char c : s2) if (m2[c] < m1[c]) return false;
	return true;
}