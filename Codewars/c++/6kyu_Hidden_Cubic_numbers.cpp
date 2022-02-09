#include <string>
#include <vector>
#include <iostream>
using namespace std;

class Cubes
{
public:
	static string isSumOfCubes(string& str) {
		vector<int> numbers;
		string result = "";

		for (int i = 0; i < str.size(); i++) {
			if (str[i] >= '0' && str[i] <= '9') {
				int c = 1;
				for (int j = 1; j <= 2; j++) {
					if (str[i + j] >= '0' && str[i + j] <= '9') c++;
					else break;
				}
				numbers.push_back(stoi(str.substr(i, c)));
				i += c - 1;
			}
		}
		
		int sumOfCubicNumbers = 0;
		for (int n : numbers) {
			cout << n << "   " << (n / 100) * (n / 100) << " " << ((n / 10) % 10) * ((n / 10) % 10) << " " << (n % 10) * (n % 10) << " " << endl;
			if ((n / 100) * (n / 100) * (n / 100) + ((n / 10) % 10) * ((n / 10) % 10) * ((n / 10) % 10) + (n % 10) * (n % 10) * (n % 10) == n) {
				result += to_string(n) + " ";
				sumOfCubicNumbers += n;
			}
		}

		if (result == "") result = "Unlucky";
		else result += to_string(sumOfCubicNumbers) + " Lucky";
		cout << result << endl;

		return result;
	}
};

int main()
{
	string str = "&z _upon 407298a --- ???ry, ww/100 I thought, 631str*ng and w===y -721&()";
	Cubes::isSumOfCubes(str);
}
