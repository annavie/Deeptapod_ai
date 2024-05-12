#include <iostream>
#include <regex>
#include <string>
#include <vector>
#include <fstream> 

std::string cleanTime(const std::string& time) {
    std::regex extraSignsRegex(R"([^A-Za-z0-9]+$)");
    return std::regex_replace(time, extraSignsRegex, "");
}
std::vector<std::string> extractTimes(const std::string& text) {
    std::vector<std::string> times;
    std::regex timeRegex(R"(\b\d{1,2}[:;][0-5]\d\s?(?:AM|PM)\b)", std::regex_constants::icase);
    std::sregex_iterator iter(text.begin(), text.end(), timeRegex);
    std::sregex_iterator end;

    while (iter != end) {
        std::string matchedTime = iter->str();
        times.push_back(cleanTime(matchedTime));
        ++iter;
    }

    return times;
}



int main() {
    std::string text = "The event starts at 9:00 AM. Please be on time.Lunch break is scheduled for 12;30 PM.The meeting is at 10:15 AM sharp.The train departs at 14:45.We'll meet again at 16;00. nash 10:30 AM? nfjjen (15;30PM)10:30AM ?";

    if (!text.empty()) {
        std::vector<std::string> extractedTimes = extractTimes(text);
        std::cout << "Extracted times:" << std::endl;
        for (const auto& time : extractedTimes) {
            std::cout << time << std::endl;
        }
    }

    return 0;
}