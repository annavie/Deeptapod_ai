#include <iostream>
#include <string>
#include <sstream>

int countSentences(const std::string& inputText)
{
    int count = 0;
    std::string word;
    std::istringstream iss(inputText);

    while (iss >> word)
    {
        for (char& c : word)
        {
            if (c == '.' || c == '!' || c == '?')
            {
                ++count;
            }
        }
    }
    return count;
}

// int main()
// {
//     std::string text = "This is a sample text. It contains multiple sentences! Isn't it great?";
//     int sentence_count = CountSentences(text);
//     std::cout << "Number of sentences in the text: " << sentence_count << std::endl;

//     return 0;
// }
