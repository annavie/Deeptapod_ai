#include <iostream>
#include <vector>
#include <string>
#include <unordered_set> 
#include <algorithm> 
#include <cctype>    
#include<sstream>

std::string toLower(const std::string& str) {
    std::string result = str;
    std::transform(result.begin(), result.end(), result.begin(),
                   [](unsigned char c) { return std::tolower(c); });
    return result;
}

std::vector<std::string> extractGenderedWords(const std::string& text, const std::unordered_set<std::string>& genderedWords) {
    std::vector<std::string> extractedWords;

    std::string word;
    std::istringstream iss(text);
    while (iss >> word) {
        std::string lowercaseWord = toLower(word);

        if (genderedWords.find(lowercaseWord) != genderedWords.end()) {
            extractedWords.push_back(word); 
        }
    }

    return extractedWords;
}

int main() {
    std::string text = "He went to the store to buy a dress for his daughter.";

     std::unordered_set<std::string> genderedWords = {
        "male", "female", "intersex", "androgynous",
        "man", "woman", "non-binary", "genderqueer", "transgender", "cisgender", 
        "genderfluid", "agender", "bigender",
        "he", "him", "his", "she", "her", "hers", "they", "them", "theirs", "ze", "zir", "zirs", "xe", "xem", "xyrs",
        "masculine", "feminine", "patriarchy", "matriarchy", "gender roles", "gender norms",
        "gender stereotypes", "gender inequality", "gender discrimination", "gender gap",
        "gender bias", "gender expression",
        "lgbtq+", "queer", "gay", "lesbian", "bisexual", "pansexual", "asexual", "two-spirit"
    };

    std::vector<std::string> extractedWords = extractGenderedWords(text, genderedWords);

    std::cout << "Extracted Gendered Words:" << std::endl;
    for (const std::string& word : extractedWords) {
        std::cout << word << std::endl;
    }

    return 0;
}
