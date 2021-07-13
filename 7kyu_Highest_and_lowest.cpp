#include <iostream>
#include <string>
using namespace std;

std::string highAndLow(const std::string& numbers) {
	int num, min, max, idx = 0;
	string result = "";

	for (int i = 0; i < numbers.size(); i++) {
		if (numbers[i] == ' ') {
			num = stoi(numbers.substr(idx, i));
			if (idx == 0) {
				min = max = num;
			}
			if (num < min) min = num;
			if (num > max) max = num;
			idx = i + 1;
		}
	}

	num = stoi(numbers.substr(idx, numbers.size()));
	if (idx == 0) {
		min = max = num;
	}
	if (num < min) min = num;
	if (num > max) max = num;


	result += to_string(max);
	result += ' ';
	result += to_string(min);

	return result;
}

int main()
{
	cout << highAndLow("1") << endl;

	return 0;
}