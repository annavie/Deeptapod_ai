#include <iostream>
#include <string>
#include <sstream>
#include <vector>

#include "data_base.cpp"

std::vector<std::string> filterText(const std::string &text, const CurseWordsDatabase &db)
{
    std::vector<std::string> filteredWords;
    std::string word;
    std::istringstream iss(text);

    while (iss >> word)
    {
        if (!db.isCurseWord(word))
        {
            filteredWords.push_back(word);
        }
    }

    return filteredWords;
}

int main()
{
    CurseWordsDatabase db;

    std::string text;
    std::cout << "Enter text: ";
    std::getline(std::cin, text);

    std::vector<std::string> filteredWords = filterText(text, db);
    std::cout << "Filtered text: ";
    for (const auto &word : filteredWords)
    {
        std::cout << word << " ";
    }
    std::cout << std::endl;

    return 0;
}
