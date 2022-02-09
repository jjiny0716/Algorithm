#include <cmath>

long int findNextSquare(long int sq) {
	double d = sqrt(sq);
	return (d - (int)d == 0) ? pow(d + 1, 2) : -1;
}