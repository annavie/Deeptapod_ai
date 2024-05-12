#include <iostream>
#include <vector>
#include <regex>

std::vector<int> extractNumbers(const std::string& text) {
    std::vector<int> nums;
    std::regex regex("\\d+"); 

    auto wordsBegin = std::sregex_iterator(text.begin(), text.end(), regex);
    auto wordsEnd = std::sregex_iterator();

    for (auto i = wordsBegin; i != wordsEnd; ++i) {
        nums.push_back(std::stoi(i->str()));
    }

    return nums;
}

// int main() {
//     std::string text = "I have 123 apples and 456 oranges.";
//     std::vector<int> numbers = extractNumbers(text);

//     for (int num : numbers) {
//         std::cout << num << std::endl;
//     }

//     return 0;
// }
