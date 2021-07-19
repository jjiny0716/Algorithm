#include <stdio.h>

int charToPower(const char c) {
	switch (c) {
	case 'w':
		return -4;
	case 'p':
		return -3;
	case 'b':
		return -2;
	case 's':
		return -1;
	case 't':
		return 0;
	case 'm':
		return 4;
	case 'q':
		return 3;
	case 'd':
		return 2;
	case 'z':
		return 1;
	case 'j':
		return 0;
	default:
		return 0;
	}
}

const char* alphabet_war(const char* fight)
{
	int i = 0, balance = 0;

	while (fight[i] != '\0') {
		balance += charToPower(fight[i]);
		if (fight[i] == 't') {
			if (i - 1 != -1) balance -= 2 * (charToPower(fight[i - 1]) < 0 ? 0 : charToPower(fight[i - 1]));
			if (fight[i + 1] != '\0') balance += charToPower(fight[i - 1]) < 0 ? charToPower(fight[i - 1]) : -charToPower(fight[i++ - 1]);
		}
		if (fight[i] == 'j') {
			if (i - 1 != -1) balance -= 2 * (charToPower(fight[i - 1]) > 0 ? 0 : charToPower(fight[i - 1]));
			if (fight[i + 1] != '\0') balance += charToPower(fight[i - 1]) > 0 ? charToPower(fight[i - 1]) : -charToPower(fight[i++ - 1]);
		}
		i++;
	}

	printf("%d", balance);

	return "asd";
}

int main()
{
	printf("%s", alphabet_war("tzj"));
}