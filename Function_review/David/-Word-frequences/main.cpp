#include <iostream>
#include <unordered_map>
#include <string>
#include <sstream>
#include <algorithm>
// bacarutyunner ankanon bayer goyakanner
std::string cleanWord(const std::string &word)
{
    std::string cleanedWord;
    for (char ch : word)
    {
        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))
        {
            cleanedWord += std::tolower(ch);
        }
    }
    return cleanedWord;
}

std::string stemWord(const std::string &word)
{

    if (word.size() > 2 && word.substr(word.size() - 2) == "ed")
    {
        return word.substr(0, word.size() - 2);
    }
    if (word.size() > 3 && word.substr(word.size() - 3) == "ing")
    {
        return word.substr(0, word.size() - 3);
    }
    if (word.size() > 1 && word[word.size() - 1] == 's')
    {
        return word.substr(0, word.size() - 1);
    }
    return word;
}

int main()
{
    std::string text;
    std::cout << "Write the text: " << std::endl;
    std::getline(std::cin, text);
    std::unordered_map<std::string, int> wordFreq;

    std::stringstream ss(text);
    std::string word;
    while (ss >> word)
    {
        word = cleanWord(word);
        if (!word.empty())
        {
            std::string root = stemWord(word);
            wordFreq[root]++;
        }
    }

    std::cout << "Word Frequencies:\n";
    for (const auto &pair : wordFreq)
    {
        std::cout << pair.first << ": " << pair.second << std::endl;
    }

    return 0;
}
