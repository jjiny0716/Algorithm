#include <string>
#include <vector>

std::string alphabet_war(const std::vector<std::string>& reinforces,
    const std::vector<std::string>& airstrikes)
{
    std::vector<int> damageCount;
    int rowSize = reinforces[0].size();
    int columnSize = reinforces.size();

    for (int i = 0; i < rowSize; i++)
        damageCount.push_back(0);

    for (int i = 0; i < airstrikes.size(); i++) {
        std::vector<bool> damagedArea;
        for (int i = 0; i < rowSize; i++)
            damagedArea.push_back(false);
        for (int j = 0; j < airstrikes[i].size(); j++) {
            if (airstrikes[i][j] == '*') {
                if (j - 1 != -1) damagedArea[j - 1] = true;
                damagedArea[j] = true;
                if (j + 1 != rowSize) damagedArea[j + 1] = true;
            }
        }
        for (int j = 0; j < rowSize; j++)
            if (damagedArea[j]) damageCount[j]++;
        for (int i : damageCount) std::cout << i << " ";
    }

    std::string result = "";
    for (int i = 0; i < rowSize; i++) {
        if (damageCount[i] >= columnSize) result += "_";
        else result += reinforces[damageCount[i]][i];
    }

    return result;
}

int main()
{
    std::cout << alphabet_war({ "zzzzz","bbbbb", "ccccc", "ddddd" }, { "*", " *", "   " });
}