#include <iostream>
#include <sstream>
#include <unordered_map>
#include <vector>
#include <algorithm>
//ankanon bayer goyakanner bacarutyunner@ chisht haskana
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
    if (word.size() > 2 && word.substr(word.size() - 2) == "es") 
    {
        return word;
    }
    if (word.size() > 1 && word[word.size() - 1] == 's')
    {
        return word.substr(0, word.size() - 1);
    }
    return word;
}


std::vector<std::string> findLeastCommonWords(const std::string &text, size_t maxWords)
{
    std::istringstream iss(text);
    std::string word;

    std::unordered_map<std::string, int> freqMap;
    size_t wordCount = 0;
    while (iss >> word)
    {
        if (++wordCount > maxWords)
        {
            break;
        }
        std::string root = stemWord(word);
        freqMap[root]++;
    }

    int minFreq = INT_MAX;
    for (const auto &pair : freqMap)
    {
        minFreq = std::min(minFreq, pair.second);
    }

    std::vector<std::string> leastCommonWords;
    for (const auto &pair : freqMap)
    {
        if (pair.second == minFreq)
        {
            leastCommonWords.push_back(pair.first);
        }
    }

    return leastCommonWords;
}

int main()
{
    std::cout << "Enter the text: ";
    std::string text;
    std::getline(std::cin, text);

    const size_t maxWords = 10000;

    std::vector<std::string> leastCommonWords = findLeastCommonWords(text, maxWords);

    std::cout << "Least common words:\n";
    for (const std::string &word : leastCommonWords)
    {
        std::cout << word << std::endl;
    }

    return 0;
}
