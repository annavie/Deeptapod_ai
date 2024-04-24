#include <iostream>
#include <string>
#include <vector>
#include <sstream>

bool isForeign(const std::string& word) {
    for (char c : word) {
        if (!isalpha(c) && !isdigit(c) && !ispunct(c) && c != '\'') {
            return true;
        }
    }
    return false;
}

std::vector<std::string> extractForeignWords(const std::string& text) {
    std::vector<std::string> foreignWords;
    std::istringstream iss(text);
    std::string word;
    while (iss >> word) {
        if (isForeign(word)) {
            foreignWords.push_back(word);
        }
    }
    return foreignWords;
}
int main() {
    std::string text = "This is a sample text with some foreign words like café and résumé.";
    std::vector<std::string> foreignWords = extractForeignWords(text);
    std::cout << "Foreign Words:\n";
    for (const auto& word : foreignWords) {
        std::cout << word << std::endl;
    }
    return 0;
}
