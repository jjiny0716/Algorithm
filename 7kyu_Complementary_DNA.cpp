#include <string>
#include <map>

std::string DNAStrand(const std::string& dna)
{
	std::map<char, char> c = { {'A','T'}, {'T','A'}, {'C','G'}, {'G','C'} };
	std::string result = "";

	for (char s : dna) result += c[s];

	return result;
}