#include <stdio.h>
#include <string.h>

int main()
{
	int count = 0;
	char str[1000001], b;
	scanf("%s", str);

	b = str[0];
	int length = strlen(str);
	for (int i = 1; i < length; i++) {
		if (b != str[i]) {
			count++;
			b = str[i];
		}
	}

	printf("%d", (count + 1) / 2);


	return 0;
}