#include <iostream>
#include <string>
#include <vector>
#include <sstream>

bool isPalindrome(const std::string& word) {
    int size = word.size();
    for (int i = 0; i < size / 2; ++i) {
        if (word[i] != word[size - 1 - i]) {
            return false;
        }
    }
    return true;
}

std::vector<std::string> palindromeWords(const std::string& inputText) {
    std::istringstream iss(inputText);
    std::string word;
    std::vector<std::string> palindromes;

    while (iss >> word) {
        if (isPalindrome(word)) {
            palindromes.push_back(word);
        }
    }
    return palindromes;
}

// int main() {
//     std::string text = "radar level two  civic  one kayak rotor racecar madam name";
//     std::vector<std::string> palindromes = palindromeWords(text);

//     std::cout << "Palindrome words in the text:" << std::endl;
//     for (const auto& palindrome : palindromes) {
//         std::cout << palindrome << std::endl;
//     }

//     return 0;
// }
