class Finance
{
public:
	static unsigned long long finance(unsigned long long n) {
		unsigned long long result = 0;
		for (int i = 1; i <= n; i++) {
			result += (i * (i + 1)) / 2 * 3;
		}

		return result;
	}
};