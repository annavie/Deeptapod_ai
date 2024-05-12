#include <iostream>
#include <string>

std::string removeNumbers(const std::string &text)
{
    std::string result;
    for (char ch : text)
    {
        if (!std::isdigit(ch))
        {
            result += ch;
        }
    }
    return result;
}

    // int main()
    // {
    //     std::string inputText = "Hello 123 World! Tes12ting 456 789.";

    //     std::string textWithoutNumbers = removeNumbers(inputText);

    //     std::cout << "Text with numbers removed:" << std::endl;
    //     std::cout << textWithoutNumbers << std::endl;

    //     return 0;
    // }
