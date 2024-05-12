#include <iostream>
#include <string>
#include <sstream>
#include <vector>
#include <cctype>

std::vector<std::string> reverseWordsInSentence(std::string sentence)
{
    if (!sentence.empty() && std::ispunct(sentence.back()))
    {
        sentence.pop_back();
    }

    for (size_t i = 0; i < sentence.size(); ++i)
    {
        if (std::ispunct(sentence[i]) && i > 0 && sentence[i - 1] != ' ')
        {
            size_t j = i + 1;
            while (j < sentence.size() && sentence[j] != ' ')
            {
                ++j;
            }
            sentence.erase(i, j - i);
        }
    }

    std::stringstream ss(sentence);
    std::vector<std::string> words;
    std::string word;

    while (ss >> word)
    {
        words.push_back(word);
    }

    for (int i = 0, j = words.size() - 1; i < j; i++, j--)
    {
        std::swap(words[i], words[j]);
    }

    return words;
}

// int main()
// {
//     std::string input_sentence;
//     std::cout << "Enter a sentence: ";
//     std::getline(std::cin, input_sentence);

//     std::vector<std::string> reversed_sentence = reverseWordsInSentence(input_sentence);

//     std::cout << "Reversed sentence: ";
//     for (const std::string &word : reversed_sentence)
//     {
//         std::cout << word << " ";
//     }
//     std::cout << std::endl;

//     return 0;
// }
