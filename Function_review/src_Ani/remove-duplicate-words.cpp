#include <iostream>
#include <string>
#include <vector>
#include <sstream>
#include <unordered_set>
#include <algorithm>

std::string cleanWord(const std::string &word)
{
    std::string cleanedWord;
    cleanedWord.reserve(word.size());
    for (char ch : word)
    {
        if (std::isalnum(ch) || ch == ' ')
        {
            cleanedWord += ch;
        }
    }
    return cleanedWord;
}

std::string removeDuplicates(const std::string &inputString)
{
    std::stringstream ss(inputString);
    std::string word;
    std::unordered_set<std::string> wordSet;
    std::string result;

    while (ss >> word)
    {
        word = cleanWord(word);
        std::string lowercaseWord = word;
        std::transform(lowercaseWord.begin(), lowercaseWord.end(), lowercaseWord.begin(), ::tolower);
        if (wordSet.find(lowercaseWord) == wordSet.end())
        {
            wordSet.insert(lowercaseWord);
            result += word + " ";
        }
    }

    return result;
}

// int main()
// {
//     std::string inputString = "The the  cat jumped? jumped cat over over the fence, fence the THe .";

//     std::string uniqueWords = removeDuplicates(inputString);
//     std::cout << uniqueWords << std::endl;

//     return 0;
// }
