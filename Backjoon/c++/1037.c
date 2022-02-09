#include <stdio.h>

int main()
{
	int n, min, max;
	int arr[50] = { 0, };
	scanf("%d", &n);

	for (int i = 0; i < n; i++) {
		scanf("%d", &arr[i]);
	}

	min = max = arr[0];
	for (int i = 0; i < n; i++) {
		if (arr[i] > max) max = arr[i];
		if (arr[i] < min) min = arr[i];
	}

	if (n == 1) printf("%d", arr[0] * arr[0]);
	else printf("%d", min * max);

	return 0;
}
