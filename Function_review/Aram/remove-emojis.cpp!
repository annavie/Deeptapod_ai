#include <iostream>
#include <string>
#include <regex>

std::string removeEmojis(const std::string& text) {
    std::regex emojiRegex(u8"[\U0001F600-\U0001F64F\U0001F300-\U0001F5FF\U0001F680-\U0001F6FF\u2600-\u26FF\u2700-\u27BF\U0001F900-\U0001F9FF]");
    std::string cleanedText = std::regex_replace(text, emojiRegex, "");

    return cleanedText;
}

// int main() {
//     std::string text = "Hello! How are you? 😀👋 I hope you're doing well. 🌞";
//     std::cout << "Before: " << text << std::endl;
//     std::string cleanedText = removeEmojis(text);
//     std::cout << "After: " << cleanedText << std::endl;

//     return 0;
// }
