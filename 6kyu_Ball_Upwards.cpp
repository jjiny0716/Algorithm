#include <iostream> //ЙЬКа?
using namespace std;
class Ball
{
public:  
	static int maxBall(float v0) {
		const float g = 9.81;
		float max_h = -1;
		float t = 0;
		v0 /= 3.6;

		for (t = 0; ; t += 0.01) {
			float h = v0 * t - 0.5 * g * t * t;
			if (h > max_h) max_h = h;
			else break;
			cout << t << " " << h << endl;
		}
		cout << endl << t << endl;
		return floor(t * 10 + 0.5);
	}
};

int main()
{
	cout << Ball::maxBall(85);

	return 0;
}