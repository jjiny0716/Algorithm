#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main()
{
	int count[26] = { 0, }, max = 0, maxChar= 0, isMulti = 0;
	char str[1000001];
	scanf("%s", str);

	int strLength = strlen(str);
	if (str[0] != '\0') 
		for (int i = 0; i < strLength; i++)
			count[tolower(str[i]) - 'a']++;
	
	for (int i = 0; i < 26; i++) {
		if (count[i] > max) {
			
			max = count[i];
			maxChar = i;
			isMulti = 0;
		}
		else if (count[i] == max) 
			isMulti = 1;
	}

	if (isMulti == 1) printf("?");
	else printf("%c", maxChar + 'A');

	return 0;
}