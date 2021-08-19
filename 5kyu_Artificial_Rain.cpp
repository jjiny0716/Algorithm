#include <vector>
using namespace std;

int artificialRain(const std::vector<int>& v) {
	int max = 0;

	for (int i = 0; i < v.size(); i++) {
		if (i - 1 != 0) if (v[i - 1] == v[i]) continue;
		if (i - 1 != -1 && i + 1 != v.size()) {
			if (v[i - 1] > v[i] || v[i + 1] > v[i]) continue;
		}
		int count = 0;
		for (int r = i; r < v.size(); r++) {
			if (r + 1 >= v.size()) break;
			if (v[r] >= v[r + 1]) count++;
			else break;
		}
		for (int l = i; l >= 0; l--) {
			if (l - 1 < 0) break;
			if (v[l - 1] <= v[l]) count++;
			else break;
		}

		if (max < count) max = count;
	}

	return max + 1;
}


int main()
{
		artificialRain({ 4,2,3,3,2 });

	return 0;
}

