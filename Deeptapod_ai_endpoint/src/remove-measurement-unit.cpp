#include <iostream>
#include <string>
#include <regex>

std::string removeMeasurementUnits(const std::string& text) {
    std::regex unitPattern("\\b(\\d+\\.?\\d*)\\s*(\\w+)\\b");
    return std::regex_replace(text, unitPattern, "");
}

int main() {
    std::string text = "The length is 10 meters, and the weight is 5.5 kilograms.";
    std::string textWithoutUnits = removeMeasurementUnits(text);

    std::cout << "Text without units: " << textWithoutUnits << std::endl;

    return 0;
}
