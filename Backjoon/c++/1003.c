#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int c1 = 0, c2 = 0, n;
int zeroCount[40];
int oneCount[40];

void fibonacci(int n) {
    if (n == 0) {
        zeroCount[0] = 1;
        oneCount[0] = 0;
        c1++;
    }
    else if (n == 1) {
        zeroCount[1] = 0;
        oneCount[1] = 1;
        c2++;
    }
    else {
        if (zeroCount[n - 2] != -1 && zeroCount[n - 1] != -1) {
            zeroCount[n] = zeroCount[n - 1] + zeroCount[n - 2];
            oneCount[n] = oneCount[n - 1] + oneCount[n - 2];
            c1 += zeroCount[n];
            c2 += oneCount[n];
        }
        else {
            fibonacci(n - 1);
            fibonacci(n - 2);
        }
    }
}

void initialization() {
    c1 = c2 = 0;
    memset(zeroCount, -1, sizeof(zeroCount));
    memset(oneCount, -1, sizeof(oneCount));
}


int main()
{
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        initialization();
        int f;
        scanf("%d", &f);
        fibonacci(f);
        printf("%d %d\n", c1, c2);
    }

	return 0;
}