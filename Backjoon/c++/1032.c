#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
	int n;
	char tmp;
	char* result;
	char** arr;

	scanf("%d", &n);
	result = (char*)malloc(sizeof(char) * 50);
	arr = (char**)malloc(sizeof(char*) * n);
	for (int i = 0; i < n; i++) {
		arr[i] = (char*)malloc(sizeof(char) * 50);
		scanf("%s", arr[i]);
		scanf("%c", &tmp);
	}

	for (int i = 0; i < strlen(arr[0]); i++) {
		int allSame = 1;
		for (int j = 0; j < n - 1; j++) {
			if (arr[j][i] != arr[j + 1][i])
				allSame = 0;
		}
		if (allSame == 1) {
			result[i] = arr[0][i];
		}
		else {
			result[i] = '?';
		}
	}

	result[strlen(arr[0])] = '\0';
	printf("%s", result);

	return 0;
}
