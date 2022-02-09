#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
	int n;
	cin >> n;

	int dasom;
	cin >> dasom;

	vector<int> candidates;
	for (int i = 1; i < n; i++) {
		int a;
		cin >> a;
		candidates.push_back(a);
	}
	
	int result = 0;
	while (1) {
		int maxIndex = max_element(candidates.begin(), candidates.end()) - candidates.begin();
		if (!candidates.empty() && dasom <= candidates[maxIndex]) {
			candidates[maxIndex]--;
			dasom++;
			result++;
		}
		else break;
	}

	cout << result;

	return 0;
}