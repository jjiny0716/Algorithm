unsigned int countBits(unsigned long long n) {
	unsigned int result = 0;

	while (n != 0) {
		if (n % 2 == 1) result += 1;
		n /= 2;
	}
	
	return result;
}

