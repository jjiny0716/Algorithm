#include <vector>
using namespace std;

class SqInRect
{
public:
	static std::vector<int> sqInRect(int lng, int wdth) {
		if (lng == wdth) return {};
		vector<int> result;

		while (lng != wdth) {
			int min;
			if (lng < wdth) min = lng;
			else min = wdth;

			result.push_back(min);

			if (lng < wdth) wdth -= min;
			else lng -= min;
		}
		result.push_back(wdth);

		return result;
	}
};