#include <iostream>
#include <regex>

std::string removeHTMLEntities(const std::string& text) {
    std::regex htmlEntityRegex("&(?:[a-zA-Z]+|#(?:\\d+|x[0-9a-fA-F]+));");
    return std::regex_replace(text, htmlEntityRegex, "");
}

int main() {
    std::string text;
    std::cout << "Write the text: " << std::endl;
    std::getline(std::cin, text);

    std::string modifiedText = removeHTMLEntities(text);
    std::cout << "Modified Text:" << std::endl;
    std::cout << modifiedText << std::endl;

    return 0;
}
