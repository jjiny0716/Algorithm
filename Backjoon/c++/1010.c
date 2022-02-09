#include <stdio.h>

int main()
{
	int t, n, m;
	scanf("%d", &t);

	for (int i = 0; i < t; i++) {
		scanf("%d %d", &m, &n);
		
		long long result = 1;
		for (int i = 1; i <= m; i++) {
			result *= n - i + 1;
			if (i >= 2 && i <= m) result /= i;
		}

		printf("%d\n", result);
	}

	return 0;
}