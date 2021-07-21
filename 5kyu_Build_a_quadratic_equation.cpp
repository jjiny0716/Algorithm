#include <string>
using namespace std;
#include <iostream>
string quadratic_builder(const string& expression)
{
	cout << expression << endl;
	string result = "";
	int numbers[4] = {0,0,0,0}, idx = 0, count = 0;
	string x;

	for (int i = 0; i < expression.size(); i++) {
		
		if (expression[i] == '(') {
			if (expression[i + 1] >= 'a' && expression[i + 1] <= 'z')
				numbers[idx++] = 1;
			else if (expression[i + 1] == '-') {
				if (expression[i + 2] >= 'a' && expression[i + 2] <= 'z')
					numbers[idx++] = -1;
				else {
					while (expression[i + 2 + count] >= '0' && expression[i + 2 + count] <= '9') count++;
					numbers[idx++] = stoi(expression.substr(i + 2, count)) * -1;
				}
					
			}
			else {
				
				while (expression[i + 1 + count] >= '0' && expression[i + 1 + count] <= '9') count++;
				cout << idx << "  " << i + count << "   " << count << endl << "( +";
				numbers[idx++] = stoi(expression.substr(i + 1, count));
			}
		}
		else if (expression[i] == ')') {
			
			while (expression[i - 1 - count] >= '0' && expression[i - 1 - count] <= '9') count++;
			cout << idx << "  " << i - 1 - count << "   " << count << endl;
			numbers[idx++] = expression[i - 1 - count] == '+' ? stoi(expression.substr(i - count, count)) : stoi(expression.substr(i - count, count)) * -1;
			x = expression[i - 2 - count];
		}
		count = 0;
	}

	for (int i : numbers) cout << i << endl;

	result += numbers[0] * numbers[2] > 0 ? "" : "-";
	result += abs(numbers[0] * numbers[2]) == 1 ? "" : to_string(abs(numbers[0] * numbers[2]));
	result += x + "^2";
	if (numbers[1] * numbers[2] + numbers[0] * numbers[3] != 0) {
		result += numbers[1] * numbers[2] + numbers[0] * numbers[3] > 0 ? "+" : "";
		result += abs(numbers[1] * numbers[2] + numbers[0] * numbers[3]) == 1 ? "" : to_string(numbers[1] * numbers[2] + numbers[0] * numbers[3]);
		result += numbers[1] * numbers[2] + numbers[0] * numbers[3] == -1 ? "-" : "";
		result += x;
	}
	if (numbers[1] * numbers[3] != 0)
		result += numbers[1] * numbers[3] > 0 ? "+" + to_string(numbers[1] * numbers[3]) : to_string(numbers[1] * numbers[3]);
	
	return result;
}

int main()
{
	cout << quadratic_builder("(-m-4)(m+4)") << endl;
}