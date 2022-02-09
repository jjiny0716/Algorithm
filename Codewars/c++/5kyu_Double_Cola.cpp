#include <string>
#include <vector>
#include <cmath>
using namespace std;
#include <iostream>
std::string who_is_next(const std::vector<std::string>& names, long long r) {

	int size = names.size();
	int p = 0;
	while (r > size * pow(2, p)) {
		r -= size * pow(2, p);
		p++;
	}
	
	//cout << p;
	int count = 0;
	while (r > pow(2, p)) {
		r -= pow(2, p);
		count++;
	}
		
	return names[count];
}

int main()
{
	std::vector<std::string> names = { "Sheldon", "Leonard", "Penny", "Rajesh", "Howard" };
	cout << who_is_next(names, 100);

	return 0;
}