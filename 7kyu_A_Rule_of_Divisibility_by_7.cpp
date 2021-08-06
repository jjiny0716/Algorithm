class DivSeven
{
public:
    static std::pair <long long, long long> seven(long long m) {
        int stepCount = 0;
        while (true) {
            if (m / 100 == 0)
                return { m, stepCount };
            stepCount++;
            m = m / 10 - 2 * (m % 10);
        }
    }
};


int main()
{
    DivSeven::seven(371);
}