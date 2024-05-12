#include <iostream>
#include <string>
#include <map>
#include <vector>
#include <algorithm>

std::vector<std::pair<std::string, int>> findMostCommonWordsFirst(const std::string& text) {
    std::map<std::string, int> wordCount;
    std::string word;
    
    for (size_t i = 0; i < text.size(); ++i) {
        if (std::isalnum(text[i])) {
            word += std::tolower(text[i]);
        } else if (!word.empty()) {
            wordCount[word]++;
            word.clear();
        }
    }
    
    if (!word.empty()) {
        wordCount[word]++;
    }
    
    std::vector<std::pair<std::string, int>> sortedWordCount(wordCount.begin(), wordCount.end());
    std::sort(sortedWordCount.begin(), sortedWordCount.end(),
              [](const auto& a, const auto& b) { return a.second > b.second; });

    return sortedWordCount;
}

int main() {
    std::string text = "This is a sample text. It contains some words, and some of them repeat. Words like repeat, sample, text, and some others.";

    std::vector<std::pair<std::string, int>> wordCountPairs = findMostCommonWordsFirst(text);

    std::cout << "Words with most common ones first:" << std::endl;
    for (const auto& pair : wordCountPairs) {
        std::cout << pair.first << ": " << pair.second << std::endl;
    }

    return 0;
}
