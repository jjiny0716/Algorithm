#include <vector>
using namespace std;
#include <iostream>
class Tortoise
{
public:
    static vector<int> race(int v1, int v2, int g) {
        int h, m, s;
        float elapsed_time;
        elapsed_time = (v2 - v1) / (float)g;
        cout << elapsed_time << endl;

        elapsed_time *= 3600;

        cout << elapsed_time << endl;
        

        return {};
    }
};

int main()
{
    Tortoise::race(720, 850, 70);
    
    return 0;
}