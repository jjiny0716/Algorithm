#include <stdio.h>

int main()
{
	int a, b, c, result;
	scanf("%d %d %d", &a, &b, &c);
	if (b >= c) printf("%d", -1);
	else printf("%d", a / (c - b) + 1);

	return 0;
}