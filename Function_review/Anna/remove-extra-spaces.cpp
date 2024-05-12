#include <iostream>
#include <fstream>
#include <string>
#include <sstream>

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
    std::string input_text = " This   text has      lot of extra      spaces";
    
    if (!input_text.empty()) {
        removeExtraSpaces(input_text);
        std::cout << "Text after removing extra spaces by word:\n" << input_text << std::endl;
    }

    return 0;
}
