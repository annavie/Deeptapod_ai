#include <iostream>
#include <sstream>
#include <vector>
#include <string>

std::vector<std::string> extractTrigrams(const std::string& text)
{
    std::vector<std::string> trigrams;
    std::istringstream iss(text);
    std::string word1, word2, word3;

    iss >> word1 >> word2 >> word3;

    while (iss)
    {
        trigrams.push_back(word1 + " " + word2 + " " + word3);
        word1 = word2;
        word2 = word3;
        iss >> word3;
    }

    return trigrams;
}
// int main()
// {
//     std::string text = "This is a sample text for extracting trigrams.";
//     std::vector<std::string> trigrams = extractTrigrams(text);

//     std::cout << "Trigrams:" << std::endl;
//     for (const auto& trigram : trigrams)
//     {
//         std::cout << trigram << std::endl;
//     }

//     return 0;
// }
