#include <iostream>
#include <regex>
#include <string>
#include <vector>
#include <fstream> 

std::string readFromFile(const std::string& filename) {
    std::ifstream file(filename);
    if(!file.is_open()) {
        std::cerr << "Error: Unable to open file " << filename << std::endl;
        return "";
    }
    std::string text;
    std::string line;
    while(std::getline(file,line)) {
        text += line + '\n';
    }
    file.close();
    return text;

}
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
    std::string filename = "../Inputs/extract-time.txt"; 
    std::string text = readFromFile(filename);

    if (!text.empty()) {
        std::vector<std::string> extractedTimes = extractTimes(text);
        std::cout << "Extracted times:" << std::endl;
        for (const auto& time : extractedTimes) {
            std::cout << time << std::endl;
        }
    }

    return 0;
}