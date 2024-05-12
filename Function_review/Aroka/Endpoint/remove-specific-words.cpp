#include <iostream>
#include <string>

void removeSpecificWords(std::string& text, const std::string& wordToRemove) {
    size_t pos = 0;

    while ((pos = text.find(wordToRemove, pos)) != std::string::npos) {
        text.erase(pos, wordToRemove.length());
    }
}

// int main() {
//     std::string text = "Remove specific words or phrases from this text.";
//     std::string wordToRemove;

//     std::cout << "Enter the word or phrase to remove: ";
//     std::getline(std::cin, wordToRemove);
    
//     removeSpecificWords(text, wordToRemove);
    
//     std::cout << "Text with \"" << wordToRemove << "\" removed: " << text << std::endl;
    
//     return 0;
// }
