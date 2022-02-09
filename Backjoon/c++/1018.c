#include <stdio.h>
#include <stdlib.h>

int** board;
int chessBoard[8][8] = {
	{0,1,0,1,0,1,0,1},
	{1,0,1,0,1,0,1,0},
	{0,1,0,1,0,1,0,1},
	{1,0,1,0,1,0,1,0},
	{0,1,0,1,0,1,0,1},
	{1,0,1,0,1,0,1,0},
	{0,1,0,1,0,1,0,1},
	{1,0,1,0,1,0,1,0}
};

int chessBoardReverse[8][8] = {
	{1,0,1,0,1,0,1,0},
	{0,1,0,1,0,1,0,1},
	{1,0,1,0,1,0,1,0},
	{0,1,0,1,0,1,0,1},
	{1,0,1,0,1,0,1,0},
	{0,1,0,1,0,1,0,1},
	{1,0,1,0,1,0,1,0},
	{0,1,0,1,0,1,0,1}
};

int main()
{
	int n, m, result = 64;
	char* buffer;

	scanf("%d %d", &n, &m);
	board = (int**)malloc(sizeof(int*) * n);
	for (int i = 0; i < n; i++)
		board[i] = (int*)malloc(sizeof(int) * m);
	
	buffer = (char*)malloc(sizeof(char) * m);
	for (int i = 0; i < n; i++) {
		scanf("%s", buffer);
		for (int j = 0; j < m; j++) {
			if (buffer[j] == 'W') board[i][j] = 1;
			else board[i][j] = 0;
		}
	}
	
	for (int i = 0; i <= n - 8; i++) {
		for (int j = 0; j <= m - 8; j++) {
			int count = 0, reverseCount = 0;
			for (int dy = 0; dy < 8; dy++) {
				for (int dx = 0; dx < 8; dx++) {
					int x = j + dx, y = i + dy;
					if (board[y][x] != chessBoard[dy][dx]) count++;
					if (board[y][x] != chessBoardReverse[dy][dx]) reverseCount++;		
				}
			}
			if (result > count) result = count;
			if (result > reverseCount) result = reverseCount;
		}
	}

	printf("%d", result);
	
	return 0;
}