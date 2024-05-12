#include <iostream>
#include <string>
#include <vector>

std::vector<std::string> extractUserMentions(const std::string &text)
{
    std::vector<std::string> mentions;
    bool inMention = false;
    std::string mention;

    for (char c : text)
    {
        if (c == '@')
        {
            inMention = true;
            mention.clear();
        }
        else if (inMention && (isalnum(c) || c == '_'))
        {
            mention += c;
        }
        else if (inMention && c == ' ')
        {
            mentions.push_back(mention);
            inMention = false;
            mention.clear();
        }
    }

    if (!mention.empty())
    {
        mentions.push_back(mention);
    }

    return mentions;
}

// int main()
// {
//     std::string text;
//     std::cout << "Write the text: ";
//     std::getline(std::cin, text);
//     std::vector<std::string> mentions = extractUserMentions(text);
//     for (int i = 0; i < mentions.size(); ++i)
//     {
//         std::cout << "Text without mentions: " << mentions[i] << std::endl;
//     }

//     return 0;
// }
