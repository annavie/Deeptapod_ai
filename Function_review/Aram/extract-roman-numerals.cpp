#include <iostream>
#include <string>
#include <regex>
#include <vector>

std::vector<std::string> extractRomanNumerals(const std::string& text) {
    std::regex romanNumeralRegex(R"(\bM{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3}))");
    std::vector<std::string> romanNumerals;
    
    auto regexIterator = std::sregex_iterator(text.begin(), text.end(), romanNumeralRegex);
    auto regexEnd = std::sregex_iterator();
    
    while (regexIterator != regexEnd) {
        std::smatch match = *regexIterator;
        romanNumerals.push_back(match.str());
        ++regexIterator;
    }
    
    return romanNumerals;
}

// int main() {
//     std::string text = "The year 2024 is MMXXIV in Roman numerals. Also, MCMLXVIII is 1968.";
//     std::vector<std::string> romanNumerals = extractRomanNumerals(text);
    
//     std::cout << "Roman Numerals found in the text:" << std::endl;
//     for (const auto& numeral : romanNumerals) {
//         std::cout << numeral << std::endl;
//     }
    
//     return 0;
// }
