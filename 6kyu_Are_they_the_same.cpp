#include <vector>
#include <algorithm>

class Same {
public:
    static bool comp(std::vector<int>& a, std::vector<int>& b) {
        if (a.size() != b.size()) return false;

        for (int i = 0; i < a.size(); i++) {
            a[i] = abs(a[i]);
            b[i] = abs(b[i]);
        }

        sort(a.begin(), a.end());
        sort(b.begin(), b.end());

        for (int i = 0; i < a.size(); i++)
            if (a[i] * a[i] != b[i]) return false;

        return true;
    }
};
