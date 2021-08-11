#include <vector>
typedef unsigned long long ull;
class ProdFib
{
public:
	static std::vector<ull> productFib(ull prod) {
		ull f0 = 0, f1 = 1, f2 = 1;

		while (true) {
			if (f1 * f2 == prod) return { f1, f2, 1 };
			if (f1 * f2 >  prod) return { f0, f1, 0 };

			f0 = f1;
			f1 = f2;
			f2 = f0 + f1;
		}
	}
};