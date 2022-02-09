#include <stdio.h>
#include <stdlib.h>
#include <algorithm>

typedef struct Conference {
	unsigned int start;
	unsigned int end;
}c;

bool compare(c a, c b) {

}

int main()
{
	int n;
	c* cs;

	scanf("%d", &n);
	cs = (c*)malloc(sizeof(c) * n);

	for (int i = 0; i < n; i++) 
		scanf("%d %d", &cs[i].start, &cs[i].end);
	
	sort(cs, cs + n, compare);

	//for (int i = 0; i < n; i++)
		//printf("%d %d\n", cs[i].start, cs[i].end);
	
	int now = 0, ans = 0;
	for (int i = 0; i < n; i++) {
		if (cs[i].start >= now) {
			ans++;
			now = cs[i].end;
		}
	}

	printf("%d", ans);
	
	return 0;
}