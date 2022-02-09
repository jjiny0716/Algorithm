#include <stdio.h>

int main()
{
	int n = 0, ans = 0;
	scanf("%d", &n);

	int original = n;
	while (1) {
		int newNumber = (n / 10) + (n % 10);
		n = ((n % 10) * 10) + (newNumber % 10);
		ans++;
		if (n == original) break;
	}

	printf("%d", ans);

	return 0;
}