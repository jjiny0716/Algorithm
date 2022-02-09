#include <stdio.h>

int main()
{ 
	int n[5], ans = 0;
	scanf("%d %d %d %d %d", &n[0], &n[1], &n[2], &n[3], &n[4]);
	
	for (int i = 1;; i++) {
		int count = 0;
		for (int j = 0; j < 5; j++) 
			if (i % n[j] == 0) count++;
		if (count >= 3) {
			ans = i;
			break;
		}
	}
	
	printf("%d", ans);

	return 0;
}