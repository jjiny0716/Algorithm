#include <iostream>
#include <string>
using namespace std;

string coin[8] = { "TTT","TTH" ,"THT" ,"THH" ,"HTT" ,"HTH" ,"HHT" ,"HHH" };

int main()
{
	int n;
	cin >> n;

	for (int i = 0; i < n; i++) {
		string s;
		cin >> s;

		int count[8] = { 0, };
		for (int j = 0; j < 38; j++) {
			for (int k = 0; k < 8; k++) {
				if (s.substr(j, 3).compare(coin[k]) == 0) {
					count[k]++;
					break;
				}
			}
		}
		for (int c : count) cout << c << " ";
		cout << endl;
	}

	return 0;
}