#include <iostream>
#include <string>
#include <vector>
#include <sstream>

std::vector<std::string> extractWordBigrams(const std::string& text) {
    std::vector<std::string> bigrams;
    std::istringstream ss(text);
    std::string prevWord, currentWord;
    
    ss >> prevWord;
    while (ss >> currentWord) {
        std::string bigram = prevWord + " " + currentWord;
        bigrams.push_back(bigram);
        prevWord = currentWord;
    }
    
    return bigrams;
}

// int main() {
//     std::string text = "Extracts pairs of consecutive words (bigrams) from the text.";
    
//     std::vector<std::string> bigrams = extractWordBigrams(text);
    
//     std::cout << "Bigrams extracted from the text:" << std::endl;
//     for (const auto& bigram : bigrams) {
//         std::cout << bigram << std::endl;
//     }
    
//     return 0;
// }
