#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

bool compare(int a, int b) {
	return a > b;
}

int main()
{
	int n;
	cin >> n;
	
	vector<int> numbers;
	while (n != 0) {
		numbers.push_back(n % 10);
		n /= 10;
	}

	sort(numbers.begin(), numbers.end(), compare);

	for (int i : numbers) cout << i;
	
	return 0;
}