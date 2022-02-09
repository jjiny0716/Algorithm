#include <vector>
#include <string>
using namespace std;
#include <iostream>
bool check_course(vector<string> sea_map)
{
	vector<string> direction;
	vector<int> navyIndex; //y
	int myShipIndex = 0; //y

	direction.push_back("Empty");
	navyIndex.push_back(-2);

	for (int i = 1; i < sea_map[0].size(); i++) {
		if (sea_map[0][i] == 'N') { direction.push_back("Down"); navyIndex.push_back(0); }
		else if (sea_map[sea_map.size() - 1][i] == 'N') { direction.push_back("Up"); navyIndex.push_back(sea_map.size() - 1); }
		else { direction.push_back("Empty"); navyIndex.push_back(-2); }
	}

	for (int i = 0; i < sea_map.size(); i++) 
		if (sea_map[i][0] == 'X') myShipIndex = i;

	for (string s : direction) cout << s << endl;

	for (int i = 0; i < sea_map[0].size() - 1; i++) {
		cout << navyIndex[10] << direction[10] << endl;
		
		if (i - 1 != -1)
			if (navyIndex[i - 1] == myShipIndex) return false;
		if (i + 1 != sea_map[0].size())
			if (navyIndex[i + 1] == myShipIndex) return false;
		if (myShipIndex - 1 != -1)
			if (navyIndex[i] == myShipIndex - 1) return false;
		if (myShipIndex + 1 != sea_map.size())
			if (navyIndex[i] == myShipIndex + 1) return false;
		if (myShipIndex - 1 != -1 && i - 1 != -1)
			if (navyIndex[i - 1] == myShipIndex - 1) return false;
		if (myShipIndex - 1 != -1 && i + 1 != sea_map[0].size())
			if (navyIndex[i + 1] == myShipIndex - 1) return false;
		if (myShipIndex + 1 != sea_map.size() && i + 1 != sea_map[0].size())
			if (navyIndex[i + 1] == myShipIndex + 1) return false;
		if (myShipIndex + 1 != sea_map.size() && i - 1 != -1)
			if (navyIndex[i - 1] == myShipIndex + 1) return false;



		for (int i = 1; i < sea_map[0].size(); i++) {
			if (direction[i] == "Down") navyIndex[i]++;
			else if (direction[i] == "Up") navyIndex[i]--;
			if (navyIndex[i] == 0) direction[i] = "Down";
			if (navyIndex[i] == sea_map.size() - 1) direction[i] = "Up";
		}
	}

	return true;
}

int main()
{
	std::vector<std::string> sample1 = { "0000000000N000",
										 "00000000000000",
										 "X0000000000000",
										 "00000000000000",
										 "00000000000000" };


	cout << check_course(sample1);
} // 0000 0000 00N