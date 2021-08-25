#include <string>

std::string highestScoringWord(const std::string& str)
{
	int lastPos = 0, wordScore = 0, maxWordScore = 0;
	std::string result = "";
	for (int i = 0; i <= str.size(); i++) {
		if (str[i] == ' ' || i == str.size()) {
			std::string word = str.substr(lastPos, i - lastPos);
			for (char c : word) wordScore += c - 'a' + 1;
			if (wordScore > maxWordScore) {
				maxWordScore = wordScore;
				result = word;
			}
			wordScore = 0;
			lastPos = i + 1;
		}
	}

	return result;
}
