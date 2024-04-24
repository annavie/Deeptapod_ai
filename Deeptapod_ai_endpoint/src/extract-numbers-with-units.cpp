#include <iostream>
#include <string>
#include <regex>
#include <vector>
#include <unordered_set>

const std::unordered_set<std::string> validUnits = {
    "meters", "kilometers", "centimeters",
    "grams", "kilograms", "milligrams"
};

std::vector<std::pair<double, std::string>> extractNumbersWithUnits(const std::string& text) {
    std::vector<std::pair<double, std::string>> numbersWithUnits;
    std::regex pattern("([0-9]+(?:\\.[0-9]+)?)\\s*\\(?(\\w+)\\)?");
    std::smatch matches;

    std::string::const_iterator searchStart(text.cbegin());
    while (std::regex_search(searchStart, text.cend(), matches, pattern)) {
        double number = std::stod(matches[1].str());
        std::string unit = matches[2].str();

        if (validUnits.find(unit) != validUnits.end()) {
            numbersWithUnits.emplace_back(number, unit);
        }

        searchStart = matches.suffix().first;
    }

    return numbersWithUnits;
}

int main() {
    std::string text = "I am 25 years old, and I weigh 70 kilograms. The distance is 10.5 (meters) (or 500 centimeters).";
    std::vector<std::pair<double, std::string>> extractedNumbers = extractNumbersWithUnits(text);

    for (const auto& pair : extractedNumbers) {
        std::cout << pair.first << " " << pair.second << std::endl;
    }

    return 0;
}
