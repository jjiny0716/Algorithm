#include <iostream>
#include <string>
#include <map>
using namespace std;

int dy[8] = {1, 1, 0, -1, -1, -1, 0, 1};
int dx[8] = {0, 1, 1, 1, 0, -1, -1, -1};
int kingX, kingY, stoneX, stoneY;
map<string, int> d;

void init() {
	d["T"] = 0;
	d["RT"] = 1;
	d["R"] = 2;
	d["RB"] = 3;
	d["B"] = 4;
	d["LB"] = 5;
	d["L"] = 6;
	d["LT"] = 7;
}

void stoXY(string s, int& x, int& y) {
	x = s[0] - 'A';
	y = s[1] - '1';
}

string XYtoS(int x, int y) {
	string result;
	result += 'A' + x;
	result += '1' + y;
	return result;
}


int main()
{
	init();
	string k, s;
	int n;
	cin >> k >> s >> n;
	stoXY(k, kingX, kingY);
	stoXY(s, stoneX, stoneY);

	for (int i = 0; i < n; i++) {
		string od;
		cin >> od;
		int nx = kingX + dx[d[od]];
		int ny = kingY + dy[d[od]];
		if (nx >= 0 && nx <= 7 && ny >= 0 && ny <= 7) {
			if (nx == stoneX && ny == stoneY) {
				int stoneNx = stoneX + dx[d[od]];
				int stoneNy = stoneY + dy[d[od]];
				if (stoneNx >= 0 && stoneNx <= 7 && stoneNy >= 0 && stoneNy <= 7) {
					kingX = nx;
					kingY = ny;
					stoneX = stoneNx;
					stoneY = stoneNy;
				}
			}
			else {
				kingX = nx;
				kingY = ny;
			}
		}
	}

	cout << XYtoS(kingX, kingY) << '\n' << XYtoS(stoneX, stoneY);

	
	return 0;
}