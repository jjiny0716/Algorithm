#include <string>
#include <vector>

std::vector<std::string> sort_the_pile(std::vector<std::string> pile_of_towels, const std::vector<unsigned>& weekly_used_towels) {
	for (unsigned u : weekly_used_towels) {
		for (int i = pile_of_towels.size() - 1; i + 1 > pile_of_towels.size() - u; i--) {
			int count = 0;
			if (pile_of_towels[i] == "blue") {
				pile_of_towels.erase(pile_of_towels.begin() + i);
				count++;
			}
			for (int j = 0; j < count; j++) pile_of_towels.push_back("blue");
		}
	}

	return pile_of_towels;
}