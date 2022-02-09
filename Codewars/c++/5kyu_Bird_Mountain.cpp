#include <string>
#include <vector>
using namespace std;

int peak_height(vector<string>& mountain) {
    int width = mountain[0].size(), height = mountain.size();
    int result = -1;
    bool isChanged = true;

    while (isChanged) {
        vector<string> buf = mountain;
        isChanged = false;

        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                if (mountain[y][x] == '^' && (x + 1 == width || x - 1 == -1 || y + 1 == height || y - 1 == -1 || mountain[y][x + 1] == ' ' || mountain[y][x - 1] == ' ' || mountain[y + 1][x] == ' ' || mountain[y - 1][x] == ' ')) {
                    buf[y][x] = ' ';
                    isChanged = true;
                }
            }
        }

        mountain = buf;
        result++;
    }

    return result;
}

int main()
{
	std::vector<std::string> mountain = {
			   "^^^^^^        ",
			   " ^^^^^^^^     ",
			   "  ^^^^^^^     ",
			   "  ^^^^^       ",
			   "  ^^^^^^^^^^^ ",
			   "  ^^^^^^      ",
			   "  ^^^^        "
	};

	peak_height(mountain);
}