#include <iostream>
#include <vector>
using namespace std;

struct PeakData {
	vector<int> pos, peaks;
};

PeakData pick_peaks(const std::vector<int>& v) {
	PeakData result;
	if (v.empty()) return result;

	for (int i = 1; i < v.size() - 1; i++) {
		if (v[i - 1] < v[i] && v[i] > v[i + 1]) {
			result.pos.push_back(i);
			result.peaks.push_back(v[i]);
		}
		else if (v[i - 1] < v[i] && v[i] == v[i + 1]) {
			int j = i + 1;
			while (v[j - 1] == v[j]) j++;
			if (j == v.size() || v[j - 1] < v[j]) i = j - 1;
			else {
				result.pos.push_back(i);
				result.peaks.push_back(v[i]);
				i = j;
			}
		}
	}

	return result;
}

int main()
{
	PeakData data = pick_peaks({ });

	for (int i : data.pos) cout << i << " ";
	cout << endl;
	for (int i : data.peaks) cout << i << " ";
	cout << endl << endl << "-----------";

	data = pick_peaks({ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 });

	for (int i : data.pos) cout << i << " ";
	cout << endl;
	for (int i : data.peaks) cout << i << " ";
	cout << endl;

	return 0;
}