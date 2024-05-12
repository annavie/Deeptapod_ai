#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
#include <unordered_set>

std::string extractUnits(const std::string &text, std::vector<std::string> &units)
{
    std::string filteredText = text;
    std::unordered_set<std::string> measurementUnits = {"kg", "metr", "cm", "dm", "g", "t", "ml", "mhs", "pm", "am", "meter", "meters", "kilogram", "kilograms", "liter", "liters", "gram", "grams", "second", "seconds", "hour", "hours", "day", "days", "inch", "inches", "foot", "feet", "yard", "yards", "mile", "miles", "ounce", "ounces", "pound", "pounds", "gallon", "gallons", "millisecond", "milliseconds", "milligram", "milligrams", "milliliter", "milliliters", "centimeter", "centimeters", "millimeter", "millimeters", "micrometer", "micrometers", "nanometer", "nanometers", "tonne", "tonnes", "ton", "tons", "fluid ounce", "fluid ounces", "teaspoon", "teaspoons", "tablespoon", "tablespoons", "cup", "cups", "pint", "pints", "quart", "quarts", "ounce", "ounces", "pound", "pounds", "millimeter", "millimeters", "centimeter", "centimeters", "decimeter", "decimeters", "kilometer", "kilometers", "square meter", "square meters", "square kilometer", "square kilometers", "hectare", "hectares", "cubic meter", "cubic meters", "cubic kilometer", "cubic kilometers", "milliliter", "milliliters", "cubic centimeter", "cubic centimeters", "cubic millimeter", "cubic millimeters", "liter", "liters", "cubic inch", "cubic inches", "cubic foot", "cubic feet", "cubic yard", "cubic yards", "milligram", "milligrams", "gram", "grams", "kilogram", "kilograms", "tonne", "tonnes", "millisecond", "milliseconds", "second", "seconds", "minute", "minutes", "hour", "hours", "day", "days", "week", "weeks", "month", "months", "year", "years"};

    std::string lowercaseText = text;
    std::transform(lowercaseText.begin(), lowercaseText.end(), lowercaseText.begin(), ::tolower);

    for (const std::string &unit : measurementUnits)
    {
        size_t pos = lowercaseText.find(unit);
        while (pos != std::string::npos)
        {
            if ((pos == 0 || !isalpha(lowercaseText[pos - 1])) &&
                (pos + unit.length() == lowercaseText.length() || !isalpha(lowercaseText[pos + unit.length()])))
            {
                units.push_back(unit);
                filteredText.erase(pos, unit.length());
                lowercaseText = filteredText;
                std::transform(lowercaseText.begin(), lowercaseText.end(), lowercaseText.begin(), ::tolower);
            }
            pos = lowercaseText.find(unit, pos + 1);
        }
    }

    return filteredText;
}

int main()
{
    std::string text;
    std::cout << "Enter text: ";
    std::getline(std::cin, text);

    std::vector<std::string> units;
    std::string filteredText = extractUnits(text, units);

    if (filteredText.empty())
    {
        std::cout << "No text remaining after removing units of measurement." << std::endl;
    }
    else
    {
        std::cout << "Filtered text without measurement units:" << std::endl;
        std::cout << filteredText << std::endl;
    }

    return 0;
}
