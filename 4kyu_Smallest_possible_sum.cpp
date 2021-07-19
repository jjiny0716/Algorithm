#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;
// failed-2021-07-18 (performance)
unsigned long long solution(const vector<unsigned long long>& arr) {
	if (arr.size() == 1) return arr[0];
	vector<unsigned long long> v;
	unsigned long long max = 0;
	int max_index = 0;
	unsigned long long second_max = 0;
	int second_index = 0;

	for (unsigned long long n : arr) v.push_back(n);
	sort(v.begin(), v.end());

	while (true) {
		/*for (int i = 0; i < v.size(); i++) {
			if (v[i] > max) {
				max = v[i];
				max_index = i;
			}
		}

		for (int i = 0; i < v.size(); i++) {
			if (v[i] > second_max && v[i] < max) {
				second_max = v[i];
				second_max_index = i;
			}
		}*/

		max_index = max_element(v.begin(), v.end()) - v.begin();
		max = v[max_index];
		if (max_index == 0) second_index = 1;
		else second_index = max_index - 1;
		

		if (v[0] == 0) break;
		v[max_index] = v[max_index] - v[second_index];
		for (int n : v) cout << n << " ";
		cout << endl;
		
		max = second_max = 0;
	}

	return v[v.size() - 1] * v.size();
}

int main()
{
	cout << solution({ 79112, 89900, 14384, 109678, 174406, 62930, 25172, 163618, 125860, 91698, 86304, 3596, 152830, 167214, 80910 });
}