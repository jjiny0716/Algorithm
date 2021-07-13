#include <iostream>
#include <cstdint>
#include <string>
using namespace std;

std::string add_binary(uint64_t a, uint64_t b) {
    uint64_t sum = a + b;
    
    int i;
    string result = "";

    while (sum != 0) {
        if (sum % 2 == 0) {
            result.insert(0, "0");
        }
        else {
            result.insert(0, "1");
        }

        sum /= 2;
    }

    if (result == "") return "0";

    return result;
}

int main()
{
    cout << add_binary(1, 1);

    return 0;
}