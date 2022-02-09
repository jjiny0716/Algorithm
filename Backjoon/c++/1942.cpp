#include <iostream>
#include <string>

using namespace std;

int timeToInt(string time) {
	int h = stoi(time.substr(0, 2)) * 3600;
	int m = stoi(time.substr(3, 2)) * 60;
	int s = stoi(time.substr(6, 2));

	return h + m + s;
}

string intToTime(int i) {
	int h = i / 3600;
	int m = (i % 3600) / 60;
	int s = ((i % 3600) % 60);

	return (h / 10 != 0 ? to_string(h) : "0" + to_string(h)) + ":" + (m / 10 != 0 ? to_string(m) : "0" + to_string(m)) + ":" + (s / 10 != 0 ? to_string(s) : "0" + to_string(s));
}

int timeToTimeint(string time) {
	return stoi(time.substr(0, 2)) * 10000 + stoi(time.substr(3, 2)) * 100 + stoi(time.substr(6, 2));
}

int main()
{
	for (int i = 0; i < 3; i++) {
		string start, end;
		cin >> start;
		cin >> end;

		int sInt = timeToInt(start);
		int eInt = timeToInt(end);
		if (sInt > eInt) eInt += 24 * 3600;

		int count = 0;
		for (int t = sInt; t <= eInt; t++) 
			if (timeToTimeint(intToTime(t)) % 3 == 0) count++;
		
		cout << count << endl;
	}

	return 0;
}