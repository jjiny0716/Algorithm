#include <string>
#include <vector>
using namespace std;
#include <iostream>
string pig_it(string str)
{
    string result = "";
    vector<string> words;
    int lastPos = 0;

    for (int i = 0; i < str.size(); i++) {
        if (str[i] == ' ') {
            words.push_back(str.substr(lastPos, i - lastPos));
            lastPos = i + 1;
        }
    }

    words.push_back(str.substr(lastPos, str.size() - lastPos));

    for (auto it = words.begin(); it != words.end(); it++) {
        if ((*it).size() == 1 && !((*it)[0] >= 'a' && (*it)[0] <= 'z' || (*it)[0] >= 'A' && (*it)[0] <= 'Z')) continue;
        (*it) += (*it)[0];
        (*it) += "ay";
        (*it).erase(0, 1);
    }

    //for (string s : words) cout << s << endl;

    for (string s : words) {
        result += s + " ";
        
    }
    result.erase(result.size() - 1, 1);

    return result;
}

int main()
{
    cout << pig_it("Pig latin is cool a O !");

    return 0;
}