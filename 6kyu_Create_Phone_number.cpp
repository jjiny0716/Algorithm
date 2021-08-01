#include <string>
using namespace std;
std::string createPhoneNumber(const int arr[10]) {
    string result = "";
    for (int i = 0; i < 10; i++)
        result += to_string(arr[i]);

    result.insert(0, "(");
    result.insert(4, ")");
    result.insert(5, " ");
    result.insert(9, "-");

    return result;
}