#include <iostream>
#include <string>
#include <sstream>

std::string removeHashtags(const std::string& text)
{
    std::istringstream iss(text);
    std::ostringstream oss;
    std::string word;

    while (iss >> word)
    {
        if (word.size() > 1 && word[0] == '#' && isalpha(word[1]))
        {
            continue;
        }
        oss << word << " ";
    }

    std::string result = oss.str();
    if (!result.empty())
    {
        result.pop_back();
    }

    return result;
}

// int main()
// {
//     std::string text;
//     std::cout << "Enter text ";
//     std::getline(std::cin, text);

//     std::string filteredText = removeHashtags(text);

//     std::cout << "Text without hashtags:" << std::endl;
//     std::cout << filteredText << std::endl;

//     return 0;
// }
