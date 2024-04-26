#include <iostream>
#include <string>
#include <map>
#include <vector>
#include <algorithm>

std::vector<std::pair<std::string, int>> find_most_common_words_first(const std::string& text) {
    std::map<std::string, int> word_count;
    std::string word;
    for (size_t i = 0; i < text.size(); ++i) {
        if (std::isalnum(text[i])) {
            word += std::tolower(text[i]);
        } else if (!word.empty()) {
            word_count[word]++;
            word.clear();
        }
    }
    if (!word.empty()) {
        word_count[word]++;
    }
    std::vector<std::pair<std::string, int>> sorted_word_count(word_count.begin(), word_count.end());
    std::sort(sorted_word_count.begin(), sorted_word_count.end(),
              [](const auto& a, const auto& b) { return a.second > b.second; });

    return sorted_word_count;
}

int main() {
    std::string text = "This is a sample text. It contains some words, and some of them repeat. Words like repeat, sample, text, and some others.";

    std::vector<std::pair<std::string, int>> word_count_pairs = find_most_common_words_first(text);

    std::cout << "Words with most common ones first:" << std::endl;
    for (const auto& pair : word_count_pairs) {
        std::cout << pair.first << ": " << pair.second << std::endl;
    }

    return 0;
}
