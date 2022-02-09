#include <string>
int find_short(std::string str)
{
	int result = 20000, last = 0;
	str += ' ';

	for (int i = 0; i < (int)str.size(); i++) {
		if (str[i] == ' ') {
			if (i - last < result) result = i - last;
			last = i + 1;
		}
	}

	return result;
}