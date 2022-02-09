#include <string>
#include <cmath>
using namespace std;

namespace coding
{
    std::string code(const std::string& strng)
    {
        string result = "";
        for (char c : strng) {
            int digit = c - '0';
            string binary = "";
            while (digit != 0) {
                binary.insert(0, to_string(digit % 2));
                digit /= 2;
            }
            if (binary == "") binary = "0";

            string front = "";
            for (int i = 0; i < binary.size() - 1; i++) front += "0";
            front += "1";

            result += front + binary;
        }

        return result;
    }
    std::string decode(const std::string& str)
    {
        string result = "";
        int size = 1;
        for (int i = 0; i < str.size(); i++) {
            if (str[i] == '1') {
                int binary = stoi(str.substr(i + 1, size));
                int num = 1, digit = 0;
                while (binary != 0) {
                    digit += (binary % 10) * num;
                    num *= 2;
                    binary /= 10;
                }
                result += to_string(digit);

                i += size;
                size = 1;
            }
            else size++;
        }
        return result;
    }
}