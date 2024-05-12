#include <iostream>
#include <string>
#include <vector>

bool isSymbolOrDigit(char c) {
    return !isalpha(c);
}

std::vector<std::string> findLongestWords(const std::string& text) {
    std::vector<std::string> longestWords;
    size_t maxLength = 0;
    size_t start = 0;
    size_t length = 0;

    for (size_t i = 0; i <= text.size(); ++i) {
        if (i == text.size() || isSymbolOrDigit(text[i])) {
            length = i - start;
            if (length == maxLength && length > 0) {
                longestWords.push_back(text.substr(start, length));
            } else if (length > maxLength && length > 0) {
                maxLength = length;
                longestWords.clear();
                longestWords.push_back(text.substr(start, length));
            }
            start = i + 1;
        } else if (isalpha(text[i])) {
            if (length == 0) {
                start = i;
            }
            length++;
        }
    }

    return longestWords;
}

// int main() {
//     std::string text;
//     std::cout << "Enter the text: ";
//     std::getline(std::cin, text);
//     std::vector<std::string> longestWords = findLongestWords(text);

//     if (longestWords.empty()) {
//         std::cout << "No words found." << std::endl;
//     } else {
//         std::cout << "Longest word(s) is/are: ";
//         for (const auto& word : longestWords) {
//             std::cout << word << " ";
//         }
//         std::cout << std::endl;
//     }

//     return 0;
// }
