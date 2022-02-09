#include <stdio.h> // greedy
#include <stdlib.h>

int main()
{
	int n = 0, k = 0, count = 0, idx = 0;
	int* coins;
	scanf("%d %d", &n, &k);
	
	idx = n - 1;
	coins = (int*)malloc(sizeof(int) * n);
	for (int i = 0; i < n; i++) 
		scanf("%d", &coins[i]);
	
	while (k != 0) { 
		if (coins[idx] <= k) {
			k -= coins[idx]; // 나누기와 for문으로 풀이가능
			count++;
		}
		else idx--;
	}
	
	printf("%d", count);

	return 0;
}