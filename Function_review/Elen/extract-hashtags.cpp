#include <iostream>
#include <sstream>
#include <string>
#include <vector>

std::vector<std::string> ExtractHashtags(const std::string& inputText)
{
    std::istringstream iss(inputText);
    std::string word;
    std::vector<std::string> result;

    while (iss >> word)
    {
        if (word[0] == '#')
        {
            result.push_back(word);
        }
    }

    return result;
}

// int main()
// {
//     std::string text = "Here are some #hashtags in a #sample text #string";
//     std::vector<std::string> hashtags = ExtractHashtags(text);

//     for (const auto &hashtag : hashtags)
//     {
//         std::cout << hashtag << std::endl;
//     }

//     return 0;
// }
