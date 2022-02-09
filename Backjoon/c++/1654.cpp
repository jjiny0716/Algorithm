#include <iostream> // 이진 탐색, 매개변수 탐색
#include <vector>   // https://www.acmicpc.net/problem/1654
#include <algorithm>
using namespace std;

int k, n;
vector<long long> lans;

bool cut(int length) {
	long long count = 0;
	for (long long lan : lans) {
		count += lan / length;
	}
	if (count >= n) return true;
	return false;
}

int binary_search() {
	long long left = 0;
	long long right = *max_element(lans.begin(), lans.end()) + 1;

	while (left + 1 < right) {
		long long mid = (left + right) / 2;
		if (cut(mid)) left = mid;
		else right = mid;
	}

	return left;
}

int main()
{
	cin >> k >> n;
	for (int i = 0; i < k; i++) {
		long long lan;
		cin >> lan;
		lans.push_back(lan);
	}

	cout <<	binary_search();


	return 0;
}
