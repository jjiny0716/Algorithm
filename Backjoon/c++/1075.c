#include <stdio.h>

int main()
{
	int n, f, i;

	scanf("%d %d", &n, &f);
	
	for (i = 0; i <= 99; i++) {
		int tmp = (n / 100) * 100;
		if ((tmp + i) % f == 0) break;
	}

	if (i / 10 == 0) printf("%d", 0);
	printf("%d", i);

	return 0;
}