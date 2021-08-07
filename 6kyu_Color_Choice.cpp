class ColorChoice
{
public:
    static long long checkChoose(long long m, int n) {
        if (m < n) return 0;
        for (int x = 1; x < n; x++) {
            long long com = 1;
            for (int i = 0; i < x; i++) {
                com *= n - i;
                com /= (i + 1);
            }
            if (com == m) return x;
        }
        return -1;
    }
};


int main()
{
    int n = 22; 
    int x = 10;
    //cout << factorial(20) << endl;
    //cout << factorial(n) / (factorial(x) * factorial(n - x));

    long long com = 1;
    for (int i = 0; i < x; i++) {
        com *= n - i;
        com /= (i + 1);
    }

    return 0;
}