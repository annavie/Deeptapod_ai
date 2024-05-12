#include <iostream>
#include <string>
#include <vector>
#include <cctype>

bool isPunctuation(char c) {
    return c == '.' || c == '!' || c == '?';
}

std::vector<std::string> extractSentences(const std::string &text)
{
    std::vector<std::string> sentences;
    std::string sentence;
    bool wordFound = false; 

    for (char c : text)
    {
        if (std::isalpha(c)) {
            wordFound = true;
        }

        sentence += c;

        if (isPunctuation(c) && wordFound)
        {
            int punctuationCount = 1; 
            size_t pos = sentence.size() - 2;
            while (pos < sentence.size() && (sentence[pos] == ' ' || isPunctuation(sentence[pos])))
            {
                if (isPunctuation(sentence[pos]))
                    punctuationCount++;
                pos--;
            }

            if (punctuationCount > 1)
            {
                sentence.erase(sentence.size() - punctuationCount + 1);
            }

            sentences.push_back(sentence);
            sentence.clear();
            wordFound = false; 
        }
    }

    if (!sentence.empty())
    {
        sentences.push_back(sentence);
    }

    return sentences;
}

// int main()
// {
//     std::string text;
//     std::cout << "Write text" << std::endl;
//     std::getline(std::cin, text);
//     std::cout << "Extracted Sentences:" << std::endl;
    
//     std::vector<std::string> extractedSentences = extractSentences(text);
//     for (const auto &sentence : extractedSentences)
//     {
//         std::cout << sentence << std::endl;
//     }

//     return 0;
// }
