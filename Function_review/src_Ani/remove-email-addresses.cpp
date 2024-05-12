#include <iostream>
#include <string>
#include <regex>

std::string removeEmailAddresses(const std::string& text) 
{
    std::regex pattern(R"(\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b)");
    return std::regex_replace(text, pattern, "");
}

// int main() 
// {
//     std::string text = "Send your inquiries to info@example.com or support@.example.";
//     std::string result = removeEmailAddresses(text);
//     std::cout << "Text with email addresses removed:\n" << result << std::endl;
//     return 0;
// }

