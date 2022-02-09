#include <string> 
#include <stack>
#include <iostream>
using namespace std;
// failed-2021-07-17
string brainfuck_to_c(string source_code)
{
	string result = "";
	string source_code_erased = "";
	string source_code_optimized = "";
	stack<char> s;

	// 1
	int pos = 0;

	for (int i = 0; i < source_code.size(); i++)
		if ((source_code[i] == '+' || source_code[i] == '-' || source_code[i] == '>' || source_code[i] == '<' || source_code[i] == '.' || source_code[i] == ',' || source_code[i] == '[' || source_code[i] == ']'))
			source_code_erased += source_code[i];

	const std::string pattern1("+-");
	const std::string pattern2("-+");
	const std::string pattern3("<>");
	const std::string pattern4("><");
	const std::string pattern5("[]");

	for (int i = 0; i < source_code_erased.size(); i++) {
		if (source_code_erased.substr(i, 2) == pattern1) i++;
		else if (source_code_erased.substr(i, 2) == pattern2) i++;
		else if (source_code_erased.substr(i, 2) == pattern3) i++;
		else if (source_code_erased.substr(i, 2) == pattern4) i++;
		else if (source_code_erased.substr(i, 2) == pattern5) i++;
		else source_code_optimized += source_code_erased[i];
	}

	// 2
	for (char c : source_code_optimized) {
		if (c == '[') s.push('[');
		if (c == ']') {
			if (s.empty()) return "Error!";
			s.pop();
		}
	}
	
	if (!s.empty()) return "Error!";

	// 3
	int spaceCounter = 0;
	int count = 0;
	int i = 0;

	while (i < source_code_optimized.size()) {
		if (source_code_optimized[i] == '+') {
			while (source_code_optimized[i] == '+' && i++ < source_code_optimized.size())
				count += 1;
			for (int sc = 0; sc < spaceCounter; sc++) result += ' ';
			result += "\*p += " + to_string(count) + ";\n";
		}
		else if (source_code_optimized[i] == '-') {
			while (source_code_optimized[i] == '-' && i++ < source_code_optimized.size())
				count += 1;
			for (int sc = 0; sc < spaceCounter; sc++) result += ' ';
			result += "\*p -= " + to_string(count) + ";\n";
		}
		else if (source_code_optimized[i] == '>') {
			while (source_code_optimized[i] == '>' && i++ < source_code_optimized.size())
				count += 1;
			for (int sc = 0; sc < spaceCounter; sc++) result += ' ';
			result += "p += " + to_string(count) + ";\n";
		}
		else if (source_code_optimized[i] == '<') {
			while (source_code_optimized[i] == '<' && i++ < source_code_optimized.size())
				count += 1;
			for (int sc = 0; sc < spaceCounter; sc++) result += ' ';
			result += "p -= " + to_string(count) + ";\n";
		}
		else if (source_code_optimized[i] == '.') {
			for (int sc = 0; sc < spaceCounter; sc++) result += ' ';
			result += "putchar(\*p);\n";
			i++;
		}
		else if (source_code_optimized[i] == ',') {
			for (int sc = 0; sc < spaceCounter; sc++) result += ' ';
			result += "\*p = getchar();\n";
			i++;
		}
		else if (source_code_optimized[i] == '[') {
			for (int sc = 0; sc < spaceCounter; sc++) result += ' ';
			result += "if (\*p) do {\n";
			spaceCounter += 2;
			i++;
		}
		else if (source_code_optimized[i] == ']') {
			spaceCounter -= 2;
			for (int sc = 0; sc < spaceCounter; sc++) result += ' ';
			result += "} while (\*p);\n";
			i++;
		}
		else i++;

		count = 0;
	}

	return result;
}

int main()
{
	cout << brainfuck_to_c("++++++-------");

	return 0;
}

// https://www.codewars.com/kata/58924f2ca8c628f21a0001a1/solutions