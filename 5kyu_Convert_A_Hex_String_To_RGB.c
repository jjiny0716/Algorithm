typedef struct {
    int r, g, b;
} rgb;

int hexToDecimal(char c) {
    if (c >= 'a' && c <= 'f') return 10 + c - 'a';
    if (c >= 'A' && c <= 'F') return 10 + c - 'A';
    if (c >= '0' && c <= '9') return c - '0';
}

rgb hex_str_to_rgb(const char* hex_str) {
    rgb result;
    result.r = hexToDecimal(hex_str[1]) * 16 + hexToDecimal(hex_str[2]);
    result.g = hexToDecimal(hex_str[3]) * 16 + hexToDecimal(hex_str[4]);
    result.b = hexToDecimal(hex_str[5]) * 16 + hexToDecimal(hex_str[6]);

    return result;
}
