#include <stddef.h>
#include <stdio.h>
char longest_repetition(const char* s, size_t* n) {
	if (s == '\0') return '\0';
	int i = 0;
	size_t length = 1, maxLength = 0;
	char result = s[0];
	while (s[i] != '\0') {
		if (s[i] == s[i + 1]) length++;
		else {
			if (length > maxLength) {
				result = s[i];
				maxLength = length;
			}
			length = 1;
		}
		i++;
	}

	*n = maxLength;
	return result;
}
int main()
{
	char* s = "aaaabb";
	size_t* p = 0;
	longest_repetition(s, p);
	//printf("%d", *p);

	return 0;
}