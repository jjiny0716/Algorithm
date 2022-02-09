#include <vector>
#include <algorithm>
using namespace std;
#include <iostream>

unsigned long long solution(const vector<unsigned long long>& arr) { 
	vector<unsigned long long> v = arr;
	sort(v.begin(), v.end());

	while (true) {
		int count = 0;
		int min = *min_element(v.begin(), v.end());
		for (int i = 0; i < v.size(); i++) {
			if (min == v[i]) {
				count++;
				continue;
			}
			v[i] %= min;
			if (v[i] == 0) v[i] = min;
		}
		if (count == v.size()) break;
	}

	return v[0] * v.size();
}

// gcd를 이용해 매우 간단하게 풀 수 있었음..
int main()
{
	//cout << solution({ 60,12,96,48,60,24,72,36,72,72,48 });
	cout << solution({ 79112, 89900, 14384, 109678, 174406, 62930, 25172, 163618, 125860, 91698, 86304, 3596, 152830, 167214, 80910 });
	//cout << solution({ 1435 });
}