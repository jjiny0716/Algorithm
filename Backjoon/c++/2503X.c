#include <stdio.h>
#include <stdlib.h>

char* to_string(int value) {
	char* str;
	str = (char*)malloc(sizeof(char) * 3);

	str[0] = (value / 100) + '0';
	str[1] = ((value / 10) % 10) + '0';
	str[2] = (value % 10) + '0';

	return str;
}

typedef struct Game {
	char* number;
	int strike;
	int ball;
}game;

int n;
char temp;
game* games;

int main()
{
	scanf("%d", &n);
	games = (game*)malloc(sizeof(game) * n);
	
	for (int i = 0; i < n; i++) {
		int a, b, c;
		scanf("%d %d %d", &a, &b, &c);
		printf("!");
		games[n].number = to_string(a);
		games[n].strike = b;
		games[n].ball = b;
		printf("!");
		printf("%c %d %d", games[n].number[1], games[n].strike, games[n].ball);
	}
		

	return 0;
}