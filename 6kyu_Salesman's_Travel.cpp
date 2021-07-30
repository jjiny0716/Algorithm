#include <string>
using namespace std;
#include <iostream>
class SalesmanTravel
{
public:
    static string travel(const string& orgr, string zipcode) {
        if (orgr.size() != 8) return "";
        string result = zipcode + ":/";
        int pos = orgr.find(zipcode);

        while (pos != string::npos) {
            int subPos = pos - 1;
            for (subPos = pos - 1; !(orgr[subPos] >= '0' && orgr[subPos] <= '9'); subPos--);
            result.insert(result.find('/'), orgr.substr(subPos + 2, pos - subPos - 3) + ',');

            int subPos2 = subPos;
            while ((subPos2 != -1) && (orgr[subPos2] >= '0' && orgr[subPos2] <= '9')) subPos2--;
            //result.insert(result.find('/') + 1, orgr.substr(subPos2 + 1, subPos - subPos2) + ',');
            result += orgr.substr(subPos2 + 1, subPos - subPos2) + ',';
            pos = orgr.find(zipcode, pos + 1);
            cout << pos << endl;

        }

        result.erase(result.find('/') - 1, 1);
        result.erase(result.size() - 1, 1);
        if (result.size() == 8) result += ":/";
        return result;
    }
};

int main()
{
    string r = "123 Main Street St.Louisville OH 43071, 432 Main Long Road St.Louisville OH 43071, 786 High Street Pollocksville NY 56432, 54 Holy Grail Street Niagara Town ZP 32908, 3200 Main Rd.Bern AE 56210, 1 Gordon St.Atlanta RE 13000, 10 Pussy Cat Rd.Chicago EX 34342, 10 Gordon St.Atlanta RE 13000, 58 Gordon Road Atlanta RE 13000, 22 Tokyo Av.Tedmondville SW 43098, 674 Paris bd.Abbeville AA 45521, 10 Surta Alley Goodtown GG 30654, 45 Holy Grail Al.Niagara Town ZP 32908, 320 Main Al.Bern AE 56210, 14 Gordon Park Atlanta RE 13000, 100 Pussy Cat Rd.Chicago EX 34342, 2 Gordon St.Atlanta RE 13000, 5 Gordon Road Atlanta RE 13000, 2200 Tokyo Av.Tedmondville SW 43098, 67 Paris St.Abbeville AA 45521, 11 Surta Avenue Goodtown GG 30654, 45 Holy Grail Al.Niagara Town ZP 32918, 320 Main Al.Bern AE 56215, 14 Gordon Park Atlanta RE 13200, 100 Pussy Cat Rd.Chicago EX 34345, 2 Gordon St.Atlanta RE 13222, 5 Gordon Road Atlanta RE 13001, 2200 Tokyo Av.Tedmondville SW 43198, 67 Paris St.Abbeville AA 45522, 11 Surta Avenue Goodville GG 30655, 2222 Tokyo Av.Tedmondville SW 43198, 670 Paris St.Abbeville AA 45522, 114 Surta Avenue Goodville GG 30655, 2 Holy Grail Street Niagara Town ZP 32908, 3 Main Rd.Bern AE 56210, 77 Gordon St.Atlanta RE 13000";

    cout << SalesmanTravel::travel(r, "AA 45522");

    return 0;
}