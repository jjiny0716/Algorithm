using namespace std;
#include <iostream>
class VolTank
{
public:
    static int tankVol(int h, int d, int vt) {
        const float pi = 3.141592;
        float r = d / 2.0;
        float rad = acos((r - h) / r);
        float theta = rad * 180 / pi;
      //  cout << theta << endl;
        //cout << pi * r * r << endl;
        float sectorArea = vt * (2 * theta / 360.0);
   //     cout << sectorArea << endl;
        //cout << cos(rad);
        //cout << r - h << endl;
        //cout << (tan(rad) * (r - h)) << endl;

        float triangleArea = (r - h) * sqrt(r * r - (r - h) * (r - h)) * vt / (pi * r * r);
        
        
        cout << triangleArea << endl;
        return sectorArea - triangleArea;
    }
};

int main()
{
    cout << VolTank::tankVol(80, 120, 3500);
}