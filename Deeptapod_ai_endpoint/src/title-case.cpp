#include <iostream>
#include <string>
#include <fstream>
#include <cctype>
#include <unordered_set>
#include <sstream>

void toTitleCase( std::string& text) {
    std::istringstream iss(text);
    std::string word;
    bool isFirstWord = true;
    std::unordered_set<std::string> minorWords = {
        "a", "an", "the", "and", "but", "or", "for", "nor", "on", "at", "to", "by", "in", "of", "up", "with"
    };
    size_t index = 0;

    while (iss >> word) {
        size_t wordIndex = text.find(word, index);

        if (!isFirstWord && minorWords.find(word) != minorWords.end()) {
        } else {
            text[wordIndex] = std::toupper(word[0]);
        }
        index = wordIndex + word.length();
        if (index < text.length()) {
            text[index] = ' ';
            index++;
        }

        isFirstWord = false;
    }
}

std::string readFromFile(const std::string& filename) {
    std::ifstream inputFile(filename);
    if (!inputFile) {
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

int main() {
    std::string filename = "../Inputs/toTitleCase.txt"; 
    std::string input_text = readFromFile(filename);
    
    if (!input_text.empty()) {
        toTitleCase(input_text);
        std::cout << "Title case text:\n" << input_text << std::endl;
    }

    return 0;
}
