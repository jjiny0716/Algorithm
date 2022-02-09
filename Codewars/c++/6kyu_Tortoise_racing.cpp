#include <vector>
using namespace std;

class Tortoise
{
public:
    static vector<int> race(int v1, int v2, int g) {
        if (v1 >= v2) return { -1, -1, -1 };
        int h, m, s;
        float elapsed_time;

        elapsed_time = (float)g / (v2 - v1);
        elapsed_time *= 3600;

        h = elapsed_time / 3600;
        elapsed_time -= h * 3600;
        m = elapsed_time / 60;
        elapsed_time -= m * 60;
        s = elapsed_time;

        return { h, m, s };
    }
};

int main()
{
    Tortoise::race(720, 850, 70);
    
    return 0;
}