#include <vector>
#include <iostream>
using namespace std;

std::vector < int> josephus(std::vector < int > items, int k) {
	vector<int> result;
	unsigned long index = k;
	k--;
	
	while (!items.empty()) {
		while (index > items.size() && !items.empty())
			index -= items.size();

		result.push_back(items[index - 1]);

		items.erase(items.begin() + index - 1);
		index += k;
		
	}

	return result;
}

int main()
{
	vector<int> r = josephus({0,1,2,3}, 5);

	for (int n : r) cout << n << " ";

	return 0;
}