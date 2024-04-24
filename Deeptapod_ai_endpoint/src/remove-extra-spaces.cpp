#include <iostream>
#include <fstream>
#include <string>
#include <sstream>

std::string readFromFile(const std::string& filename) {
    std::ifstream inputFile(filename);
    if (!inputFile.is_open()) {
        std::cerr << "Error: Unable to open the input file.\n";
        return "";
    }

    std::string text;
    std::string line;
    while (std::getline(inputFile, line)) {
        text += line + '\n';
    }
    inputFile.close();

    return text;
}

void removeExtraSpaces(std::string& text) {
    std::istringstream iss(text);
    std::ostringstream oss;
    std::string word;
    bool isFirstWord = true;

    while (iss >> word) {
        if (!isFirstWord) {
            oss << ' '; 
        }
        oss << word;
        isFirstWord = false;
    }
    text = oss.str();
}

int main() {
    std::string filename = "../Inputs/removeExtraSapces.txt"; 
    std::string input_text = readFromFile(filename);
    
    if (!input_text.empty()) {
        removeExtraSpaces(input_text);
        std::cout << "Text after removing extra spaces by word:\n" << input_text << std::endl;
    }

    return 0;
}
