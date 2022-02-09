#include <cstdint>
using namespace std;

std::uint32_t hamming_distance(std::uint32_t a, std::uint32_t b) {
	uint32_t binary = a ^ b, result = 0;

	while (binary != 0) {
		if (binary % 2 == 1) result++;
		binary /= 2;
	}

	return result;
}

int main()
{
	uint32_t a = 25;
	uint32_t b = 87;

	hamming_distance(a, b);

	return 0;
}