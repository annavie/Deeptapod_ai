#include <iostream>
#include <vector>
#include <string>
#include <cctype> // Include for std::isalnum

std::string removeNonAlphanumeric(const std::string& text)
{
    std::string modifiedText;

    for (char c : text)
    {
        if (std::isalnum(c) || c == ' ')
        {
            modifiedText.push_back(c);
        }
    }

    return modifiedText;
}

// int main()
// {
//     std::string text;
//     std::cout << "Write the text: ";
//     std::getline(std::cin, text);

//     std::string modified_text = removeNonAlphanumeric(text);
//     std::cout << "Modified text: " << modified_text << std::endl;

//     return 0;
// }
