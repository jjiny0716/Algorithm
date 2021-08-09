#include <vector>
using namespace std;
#include <iostream>
std::vector<std::vector<int>> create_spiral(int n)
{
    if (n < 1) return {};
    vector<vector<int>> spiral;
    for (int i = 0; i < n; i++) {
        vector<int> row;
        for (int j = 0; j < n; j++)
            row.push_back(0);
        spiral.push_back(row);
    }

    int direction = 0;
    int x = 0, y = 0, num = 1;
    while (true) {
        cout << y << " " << x << endl;
        spiral[y][x] = num++;
        
        //if (x + 1 == n && x - 1 == -1 && y + 1 == n && y - 1 == -1) break;
        //if (x + 1 != n && x - 1 != -1 && y + 1 != n && y - 1 != -1)
        //    if (spiral[y][x + 1] != 0 && spiral[y][x - 1] != 0 && spiral[y + 1][x] != 0 && spiral[y - 1][x] != 0) break;

        int breakCount = 0;
        if (x + 1 == n) breakCount++;
        else
            if (spiral[y][x + 1] != 0) breakCount++;
        if (x - 1 == -1) breakCount++;
        else
            if (spiral[y][x - 1] != 0) breakCount++;
        if (y + 1 == n) breakCount++;
        else
            if (spiral[y + 1][x] != 0) breakCount++;
        if (y - 1 == -1) breakCount++;
        else
            if (spiral[y - 1][x] != 0) breakCount++;
        if (breakCount == 4) break;

        if (direction == 0) {
            if (x + 1 == n) direction = 1;
            else if (spiral[y][x + 1] != 0) direction = 1; 
        }
        else if (direction == 1) {
            if (y + 1 == n) direction = 2;
            else if (spiral[y + 1][x] != 0) direction = 2;
        }
        else if (direction == 2) {
            if (x - 1 == -1) direction = 3;
            else if (spiral[y][x - 1] != 0) direction = 3;
        }
        else if (direction == 3) {
            if (y - 1 == -1) direction = 0;
            else if (spiral[y - 1][x] != 0) direction = 0;
        }
        
        switch (direction) {
        case 0: x++; break;
        case 1: y++; break;
        case 2: x--; break;
        case 3: y--; break;
        }

    }
    
    return spiral;
}

int main()
{
    create_spiral(2);

    return 0;
}

//????
/*
* 
* #include <vector>

std::vector<std::vector<int>> create_spiral(int n) {
    if (n<1) {return {};}
    std::vector<std::vector<int>> spiral(n, std::vector<int>(n));
    
    int i=0, j=0, di=0, dj=1;
    for (int x=1; x<=n*n; x++) {
        spiral[i][j] = x;
        if (i+di<0 || i+di>=n || j+dj<0 || j+dj>=n || spiral[i+di][j+dj]!=0) {
            if      (di== 0 && dj== 1) {di= 1; dj= 0;}
            else if (di== 1 && dj== 0) {di= 0; dj=-1;}
            else if (di== 0 && dj==-1) {di=-1; dj= 0;}
            else if (di==-1 && dj== 0) {di= 0; dj= 1;}
        }
        i+=di; j+=dj;
    }
    return spiral;
}

*/