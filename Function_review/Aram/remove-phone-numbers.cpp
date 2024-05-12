#include <iostream>
#include <string>
#include <regex>

std::string removePhoneNumbers(const std::string& text) {
    std::regex phoneNumberRegex(R"(\+[1-9][0-9]*(\s?\d{2,3}){3})");
    std::string cleanedText = std::regex_replace(text, phoneNumberRegex, "");
    return cleanedText;
}

// int main() {
//     std::string text = "Contact us at +123 456 789 012 or +987654321098 for assistance.";
//     std::cout << "Before: " << text << std::endl;
//     std::string cleanedText = removePhoneNumbers(text);
//     std::cout << "After: " << cleanedText << std::endl;

//     return 0;
// }
