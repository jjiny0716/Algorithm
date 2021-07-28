#include <string>
#include <map>
using namespace std;
#include <iostream>
namespace process
{
    std::string decode(const std::string& r)
    {
        int num, i;
        string s;
        map<int, int> m;
        map<int, int> count;

        for (i = 0; i < r.size(); i++) {
            if (r[i] >= '0' && r[i] <= '9') continue;
            else break;
        }
        num = stoi(r.substr(0, i));
        s = r.substr(i, r.size() - i);

        //cout << num << "  " << s << endl;

        for (i = 0; i < 26; i++) {
            m[num * i % 26] = i;
            count[num * i % 26]++;
            if (count[num * i % 26] > 1) return "Impossible to decode";
        }

        //for (i = 0; i < 26; i++) cout << m[i] << endl;

        for (int i = 0; i < s.size(); i++) {
            s[i] = m[s[i] - 'a'] + 'a';
        }

        //return to_string(num) + s;
        return s;
    }
}

int main()
{
    cout << process::decode("6015ekx");
    //cout << process::decode("5057aan");

    return 0;
}