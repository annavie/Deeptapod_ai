#include <iostream>
#include <sstream>
#include <vector>
#include <string>
#include <cctype>

std::vector<std::string> convertToUppercase(const std::string& inputText)
{
    std::istringstream ss(inputText);
    std::string word;
    std::vector<std::string> result;
    while (ss >> word)
    {
        for (char& c : word)
        {
            c = std::toupper(c);
        }
        result.push_back(word);
    }
    return result;
}

// int main()
// {
//     std::string inputText = "This is a Test String. Another String for Testing.";

//     std::vector<std::string> uppercaseWords = convertToUppercase(inputText);

//     std::cout << "Words converted to uppercase:" << std::endl;
//     for (const auto& word : uppercaseWords)
//     {
//         std::cout << word << std::endl;
//     }

//     return 0;
// }
