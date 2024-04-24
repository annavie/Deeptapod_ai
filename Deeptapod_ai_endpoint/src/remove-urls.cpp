#include <iostream>
#include <regex>
#include <string>

std::string removeUrls(const std::string& text) {
    std::regex urlPattern("(https?://)?[a-zA-Z]{2,}(\\.[a-zA-Z]{2,})+(\\.[a-zA-Z]{2,})?/[a-zA-Z0-9]{2,}|((https?://)?[a-zA-Z]{2,}(\\.[a-zA-Z]{2,})+(\\.[a-zA-Z]{2,})?)|(https?://)?[a-zA-Z0-9]{2,}\\.[a-zA-Z0-9]{2,}\\.[a-zA-Z0-9]{2,}(\\.[a-zA-Z0-9]{2,})?");

    std::string textWithoutUrls = std::regex_replace(text, urlPattern, "");

    return textWithoutUrls;
}

int main() {
    std::string textWithUrls = "Check out this website: https://www.example.com. It's really cool!";
    std::string textWithoutUrls = removeUrls(textWithUrls);
    std::cout << "Text without URLs: " << textWithoutUrls << std::endl;
    
    return 0;
}
