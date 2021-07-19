#include <string>
#include <map>
using namespace std;

string factorial(int factorial) {
	string result = "";
	map<long long, long long > num;
	num[1] = 1;
	
	for (int i = 2; i <= factorial; i++) {
		for (auto iter = num.begin(); iter != num.end(); iter++) iter->second *= i;
		for (auto iter = num.rbegin(); iter != num.rend(); iter++) {
			if (iter->second / 10 == 0 && next(iter, 1) == num.rend()) {
				break;
			}
			num[iter->first - 1] += iter->second / 10;
			iter->second = iter->second % 10;
		}
	}

	for (auto iter = num.begin(); iter != num.end(); iter++) {
		result += to_string(iter->second);
	}
	
	return result;
}

int main()
{
	//cout << factorial(110);


}