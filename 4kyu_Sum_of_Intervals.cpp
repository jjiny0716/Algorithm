#include <vector>
#include <utility>
#include <algorithm>
using namespace std;
#include <iostream>
bool compare(std::pair<int, int> a, std::pair<int, int> b) {
	return a.first != b.first ? a.first < b.first : a.second < b.second;
}

int sum_intervals(std::vector<std::pair<int, int>> intervals) {
	sort(intervals.begin(), intervals.end(), compare);

	int start = intervals[0].first, end = intervals[0].second;
	int result = 0;
	for (pair<int, int> p : intervals) {
		if (p.first <= end) {
			if (p.second > end)
				end = p.second;
		}
		else {
			result += end - start;
			start = p.first;
			end = p.second;
		}
	}
	result += end - start;

	return result;
}

int main()
{
	std::vector<std::pair<int, int>> intervals = { {1,5},
		{10, 20},
		{1, 6},
		{16, 19},
		{5, 11} 
	};

	cout << sum_intervals(intervals);

	return 0;
}