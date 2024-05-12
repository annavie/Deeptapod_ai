#include <iostream>
#include <string>
#include <regex>

std::string removeEmojis(const std::string& text) {
    std::regex emojiRegex(R"([\u0080-\uFFFF])");
    return std::regex_replace(text, emojiRegex, "");
}

// int main() {
//     std::string text = "I love coding! 💻 Programming is so much fun. Let's build amazing projects together! 🚀🌟";
    
//     std::string cleanedText = removeEmojis(text);
    
//     std::cout << "Text after removing emojis:\n" << cleanedText << std::endl;
    
//     return 0;
// }
