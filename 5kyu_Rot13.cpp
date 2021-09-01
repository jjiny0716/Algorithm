#include <string>
using namespace std;

string rot13(string msg)
{
	for (int i = 0; i < msg.size(); i++)
		if ((msg[i] >= 'a' && msg[i] <= 'z') || (msg[i] >= 'A' && msg[i] <= 'Z'))
			msg[i] = ((msg[i] > 93 ? msg[i] - 'a' : msg[i] - 'A') + 13) % 26 + (msg[i] > 93 ? 'a' : 'A');

	return msg;
}
