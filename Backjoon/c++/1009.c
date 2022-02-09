#include <stdio.h>

int main()
{
	int n, a, b;

	scanf("%d", &n);

	for (int i = 0; i < n; i++) {
		scanf("%d %d", &a, &b);
		int tmp = a;
		for (int j = 1; j < b; j++) {
			tmp = (tmp * a) % 10;
		}
		tmp = tmp % 10;
		if (tmp == 0) tmp = 10;
		printf("%d\n", tmp);
	}

	return 0;
}