#include <map>
#include <cmath>
#include <vector>
using namespace std;
#include <iostream>

int sum_of_squares(int n) { // brute force
	int b = 1;
	while ((b + 1) * (b + 1) <= n) b++;
	vector<int> sqs;
	for (int i = 0; i <= b; i++) sqs.push_back(i * i);


	int result = 987654321;
	map<int, bool> mp;
	for (b = b; b >= 1; b--) {
		int count = 0;
		int t = b, m = n;
		while (m != 0) {
			if ((sqs[t]) <= m) {
				m -= sqs[t];
				count++;
				if (count >= result) break;
			}
			else t -= 1;
		}
		if (count < result) result = count;
	}

	return result;
}

int sum_of_squares_dp(int n) { // dynamic programming
	vector<int> dp(n + 1, 987654321);
	dp[0] = 0;
	//for (int i : dp) cout << i << endl;

	for (int i = 1; i <= n; i++) {
		for (int j = 1; j <= i; j++) {
			if (i >= j * j)
				dp[i] = min(dp[i], dp[i - j * j] + 1);
		}
	}

	return dp.back();
}


int main()
{
	cout << sum_of_squares(76473);

	return 0;
}
