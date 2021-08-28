#include <string>
#include <vector>
using namespace std;

class OrdersSummary
{
public:
    static string balanceStatements(const string& lst) {
        if (lst.empty()) return "Buy: 0 Sell: 0";
        int lastPos = 0, badly_formed_count = 0;;
        double b = 0, s = 0;
        string badly_formed = "";

        for (int i = 0; i <= lst.size(); i++) {
            if (lst[i] == ',' || i == lst.size()) {
                string order = lst.substr(lastPos, i - lastPos);
                string temp = order;
                lastPos = i + 2;

                vector<string> infos;
                for (int c = 0; c < 3; c++) {
                    int wsIndex = order.find(' ');
                    infos.push_back(order.substr(0, wsIndex));
                    order.erase(0, wsIndex + 1);
                }
                if (infos[1].find('.') != string::npos || infos[2].find('.') == string::npos || (order != "S" && order != "B")) {
                    badly_formed_count++;
                    badly_formed += temp + " ;";
                    continue;
                }
                if (order == "B") b += stoi(infos[1]) * stod(infos[2]);
                else s += stoi(infos[1]) * stod(infos[2]);
            }
        }

        return "Buy: " + to_string((int)(b + 0.5)) + " Sell: " + to_string((int)(s + 0.5)) + (badly_formed.empty() ? "" : "; Badly formed " + to_string(badly_formed_count) + ": " + badly_formed);
    }
};

int main()
{
    OrdersSummary::balanceStatements("GOOG 300 542.0 B, AAPL 50 145.0 B, CSCO 250.0 29 B, GOOG 200 580.0 S");
}