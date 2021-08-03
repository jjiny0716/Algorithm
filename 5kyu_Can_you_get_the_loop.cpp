#include <map>
using namespace std;

int getLoopSize(Node* startNode) // only in kata
{
    map<Node*, int> m;
    Node* p = startNode;
    int count = 1;

    while (true) {
        m[p]++;
        if (m[p] == 3) break;
        p = p->getNext();
    }

    for (auto it = m.begin(); it != m.end(); it++)
        if ((*it).second == 2) count++;

    return count;
}