#include <iostream>
int countSquares(int cuts)
{
    return cuts == 0 ? 1 : (cuts + 1) * (cuts + 1) * (cuts + 1) - (cuts - 1) * (cuts - 1) * (cuts - 1);
}

int main()
{
    std::cout << countSquares(1);
}