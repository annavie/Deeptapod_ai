#include <iostream>
#include <string>
#include <vector>
#include <sstream>
#include <algorithm>

bool isForeign(const std::string& word) {
    for (char c : word) {
        if (!isalpha(c) && !isdigit(c) && !ispunct(c) && c != '\'') {
            return true;
        }
    }
    return false;
}
std::string removeForeignLanguageText(const std::string& text) {
    std::string result;
    std::istringstream iss(text);
    std::string word;
    bool firstWord = true;
    while (iss >> word) {
        if (!isForeign(word)) {
            if (firstWord) {
                result += word;
                firstWord = false;
            } else {
                result += " " + word;
            }
        }
    }
    return result;
}

int main() {
    std::string text = "This is a sample text with some foreign words like café and résumé. This is also another text with ਨਾਲ ਮੇਲ ਨਹੀਂ ਖਾਂਦੇ only English words.";
    std::string cleanedText = removeForeignLanguageText(text);
    std::cout << "Cleaned Text:\n" << cleanedText << std::endl;
    return 0;
}
