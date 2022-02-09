#include <iostream>
#include <string>
#include <vector>
#include <map>
#include <algorithm>
using namespace std;

class Team {
public:
	int number, solvedNumber, totalTime;
	map<int, bool> isSolved;
	map<int, int> exceedTime;

	Team(int n) {
		number = n;
		solvedNumber = 0;
		totalTime = 0;
	}
	
	void addResult(int t, int pn, string result) {
		if (!isSolved[pn]) {
			if (result.compare("AC") == 0) {
				isSolved[pn] = true;
				exceedTime[pn] += t;
			}
			else exceedTime[pn] += 20;
		}
	}

	void makeResult() {
		auto it = isSolved.begin();
		for (auto it2 = exceedTime.begin(); it2 != exceedTime.end(); it++, it2++) {
			if ((*it).second) {
				solvedNumber++;
				totalTime += (*it2).second;
			}
			
		}
	}
	
	void print() {
		cout << number << " " << solvedNumber << " " << totalTime << "\n";
	}

};

int n, m, q;
vector<Team> teams;

bool compare(Team t1, Team t2) { // compare함수 작성법.....
	if (t1.solvedNumber > t2.solvedNumber) return true;
	else if (t1.solvedNumber < t2.solvedNumber) return false;
	else {
		if (t1.totalTime > t2.totalTime) return false;
		else if (t1.totalTime < t2.totalTime) return true;
		else {
			if (t1.number > t2.number) return false;
			else if (t1.number < t2.number) return true;
		}
	}
}


int main()
{
	cin >> n >> m >> q;
	for (int i = 0; i < n; i++) {
		Team t = Team(i + 1);
		teams.push_back(t);
	}

	for (int i = 0; i < q; i++) {
		int time, tn, pn;
		string result;
		cin >> time >> tn >> pn >> result;
		teams[tn - 1].addResult(time, pn, result);
	}
	
	for (int i = 0; i < n; i++)
		teams[i].makeResult();
	sort(teams.begin(), teams.end(), compare);

	for (Team t : teams) t.print();

	return 0;
}