typedef struct Laps_Pairing {
    int bob;
    int charles;
} laps;

laps nbr_of_laps(int x, int y) {
    int bobCount = 1, charlesCount = 0, bobLength = x, charlesLength = 0;

    while (bobLength == charlesLength) {
        if (bobLength > charlesLength) {
            charlesLength += y;
            charlesCount++;
        }
        else {
            bobLength += x;
            bobCount++;
        }
    }

    laps result = { bobCount, charlesCount };
    return result;
}