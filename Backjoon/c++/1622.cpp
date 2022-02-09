#include <iostream>
#include <string>
#include <vector>
#include <map>
#include <algorithm>

using namespace std;

int main() {
    int n, n2;
    cin >> n;
    cin >> n2;

    vector<int> v, v2;
    for (int i = 0; i < n; i++) 
        v.push_back(n);
    for (int i = 0; i < n2; i++)
        v2.push_back(n2);

    sort(v.begin(), v.end());

    for (int i : v) cout << i;
    cout << endl;
    for (int i : v2) cout << i;
}