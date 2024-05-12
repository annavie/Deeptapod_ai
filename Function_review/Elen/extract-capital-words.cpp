#include <iostream>
#include <sstream>
#include <vector>
#include <string>
#include <cctype> 

std::vector<std::string> capitalLetters(const std::string& text) {
    std::istringstream ss(text);
    std::string word;
    std::vector<std::string> result;
    while (ss >> word) {
        if (std::isupper(word[0])) {
            result.push_back(word);
        }
    }
    return result;
}

// int main() {
//     std::string inputText = "This is a Test String. Another string for Testing.";
    
//     std::vector<std::string> capitalizedWords = capitalLetters(inputText);
    
//     std::cout << "Words starting with capital letters:" << std::endl;
//     for (const auto& word : capitalizedWords) {
//         std::cout << word << std::endl;
//     }
    
//     return 0;
// }
