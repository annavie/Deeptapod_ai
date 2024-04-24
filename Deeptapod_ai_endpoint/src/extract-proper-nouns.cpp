#include <iostream>
#include <string>
#include <sstream>
#include <vector>
#include <algorithm>
#include <cctype>
#include <unordered_set>

std::unordered_set<std::string> properNounDatabase = {"Paris", "London", "John", "Mary", "Anna", "Drive"};

bool isProperNoun(const std::string& word) {
    if (word.empty()) return false;
    if (!std::isupper(word[0])) return false;
    return properNounDatabase.count(word) > 0;
}

std::string removePunctuation(const std::string& word) {
    std::string result;
    for (char c : word) {
        if (std::isalpha(c)) {
            result += c;
        }
    }
    return result;
}

std::vector<std::string> extractProperNouns(const std::string& text) {
    std::vector<std::string> properNouns;
    std::istringstream iss(text);
    std::string word;
    while (iss >> word) {
        word = removePunctuation(word);
        if (isProperNoun(word)) {
            properNouns.push_back(word);
        }
    }
    return properNouns;
}

int main() {
    std::string text = "In Paris, John met Mary and they went to London. Anna and John are in my drive.";
    std::vector<std::string> properNouns = extractProperNouns(text);
    std::cout << "Proper Nouns extracted from the text:" << std::endl;
    for (const auto& noun : properNouns) {
        std::cout << noun << std::endl;
    }
    return 0;
}
