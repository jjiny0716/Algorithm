#include <utility>
#include <vector>
using namespace std;

unsigned int number(const std::vector<std::pair<int, int>>& busStops) {
	int result = 0;

	for (auto p : busStops) 
		result += p.first - p.second;

	return result;
}

int main()
{
	
	return 0;
}