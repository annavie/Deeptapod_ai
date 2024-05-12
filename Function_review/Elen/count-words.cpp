#include <iostream>
#include <string>
#include <regex>

int countWords(const std::string& inputText)
{
    std::regex wordRegex(R"([\w'-]+)");
    auto words_begin = std::sregex_iterator(inputText.begin(), inputText.end(), wordRegex);
    auto words_end = std::sregex_iterator();
    return std::distance(words_begin, words_end);
}

// int main()
// {
//     std::string text = "This is a test. Another test line. a ?  hhs , hjs, asjhd,  ";

//     int wordCount = countWords(text);
//     std::cout << "Total number of words in the string: " << wordCount << std::endl;

//     return 0;
// }
