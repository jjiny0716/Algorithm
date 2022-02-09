#include <iostream>
#include <string>
#include <map>
using namespace std;

int main()
{
	int n;
	cin >> n;

	int result = 0;
	for (int i = 1; i <= n; i++) {
		string num = to_string(i);
		map<int, int> m;

		int length = num.size();
		for (int j = 0; j < length - 1; j++) 
			m[num[j] - num[j + 1]]++;

		if (m.empty() || m.size() == 1) result++;
	}

	cout << result;
	
	return 0;
}