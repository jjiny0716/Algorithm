#include <stddef.h>
#include <math.h>
double mean_square_error(size_t n, const int a[], const int b[]) {
    double result = 0;

    for (int i = 0; i < n; i++) {
        result += pow(abs(a[i] - b[i]), 2);
    }

    result /= n;

    return result;
}