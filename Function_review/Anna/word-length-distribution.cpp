
#include <iostream>
#include <string>
#include <unordered_map>
#include <sstream>

std::unordered_map<int, int> wordLengthDistribution(const std::string& text) {
    std::unordered_map<int, int> wordLengths;
    std::istringstream iss(text);
    std::string word;

    while (iss >> word) {
        int length = word.length();
        if (wordLengths.find(length) != wordLengths.end()) {
            wordLengths[length]++;
        } else {
            wordLengths[length] = 1;
        }
    }

    return wordLengths;
}

int main() {
    std::string text = "Hello there, how are you doing today? I hope you're having a great day!";
    std::unordered_map<int, int> distribution = wordLengthDistribution(text);
    for (const auto& pair : distribution) {
        std::cout << "Length " << pair.first << ": " << pair.second << " words" << std::endl;
    }

    return 0;
}
