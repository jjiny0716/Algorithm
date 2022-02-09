#include <vector>
#include <cstdlib>

std::vector<std::vector<int>> pyramid(std::size_t n) {
    std::vector<std::vector<int>> result;

    for (int i = 0; i < n; i++) {
        std::vector<int> temp;
        for (int j = 0; j <= i; j++)
            temp.push_back(1);
        result.push_back(temp);
    }

    return result;
}