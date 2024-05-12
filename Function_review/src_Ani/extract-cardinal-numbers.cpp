#include <iostream>
#include <regex>
#include <string>
#include <vector>

std::vector<int> extractCardinalNumbers(const std::string& text)
{
    std::vector<int> cardinalNumbers;
    std::regex pattern("\\b\\d+\\b");

    std::sregex_iterator iterator(text.begin(), text.end(), pattern);
    std::sregex_iterator endIterator;

    while (iterator != endIterator)
    {
        std::smatch match = *iterator;
        int number = std::stoi(match.str());
        cardinalNumbers.push_back(number);
        ++iterator;
    }

    return cardinalNumbers;
}

// int main()
// {
//     std::string text = "There are 10 apples and 20 oranges in the basket.";
//     std::vector<int> cardinalNumbers = extractCardinalNumbers(text);

//     std::cout << "Cardinal numbers extracted from the text: ";
//     for (int number : cardinalNumbers)
//     {
//         std::cout << number << " ";
//     }
//     std::cout << std::endl;

//     return 0;
// }