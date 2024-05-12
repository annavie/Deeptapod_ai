#include <iostream>
#include <string>
#include <regex>

std::vector<std::string> extractOrdinalNumbers(const std::string &text)
{
    std::vector<std::string> ordinalNumbers;
    std::regex pattern("\\b(?:\\d{1,3}(?:st|nd|rd|th)|[a-zA-Z]+(?:-first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth|thirteenth|fourteenth|fifteenth|sixteenth|seventeenth|eighteenth|nineteenth|twentieth|thirtieth|fourtieth|fiftieth|sixtieth|seventieth|eightieth|ninetieth|hundredth|thousandth|millionth|billionth|trillionth))\\b");
    std::sregex_iterator iterator(text.begin(), text.end(), pattern);
    std::sregex_iterator endIterator;
    while (iterator != endIterator)
    {
        std::smatch match = *iterator;
        ordinalNumbers.push_back(match.str());
        iterator++;
    }

    return ordinalNumbers;
}

// int main()
// {
//     std::string text = "I finished my 1st, 2nd, and 3rd assignments. I one thousand and first live on the twenty-first floor.";
//     std::vector<std::string> ordinals = extractOrdinalNumbers(text);

//     std::cout << "Extracted ordinal numbers:" << std::endl;
//     for (const auto &ordinal : ordinals)
//     {
//         std::cout << ordinal << std::endl;
//     }

//     return 0;
// }