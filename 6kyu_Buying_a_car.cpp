#include <vector>
using namespace std;
#include <iostream>
class BuyCar
{

public:
	static vector<int> nbMonths(int startPriceOld, int startPriceNew, int savingperMonth, double percentLossByMonth) {
		vector<int> result;
		float priceOld = startPriceOld;
		float priceNew = startPriceNew;
		int saving = 0;
		int month = 0;

		for (month = 0; priceOld + saving < priceNew ; month++) {
			saving += savingperMonth;
			priceOld = priceOld * ((100 - percentLossByMonth) / 100);
			priceNew = priceNew * ((100 - percentLossByMonth) / 100);

			if (month % 2 == 0) percentLossByMonth += 0.5;
		}


		result.push_back(month);
		result.push_back(round(priceOld + saving - priceNew));
		return result;
	}
};

int main()
{
	vector<int> result = BuyCar::nbMonths(2000, 8000, 1000, 1.5);
	cout << result[0] << "  " << result[1];

	return 0;
}