#include <iostream>
#include <string>
#include <sstream>

void removeWordsByLength(std::string& text, int lengthToRemove) {
    std::istringstream ss(text);
    std::string word;
    std::string newText;

    while (ss >> word) {
        if (word.length() != lengthToRemove) {
            newText += word + " ";
        }
    }

    if (!newText.empty()) {
        newText.pop_back();
    }

    text = newText;
}

// int main() {
//     std::string text = "Remove words with a specified length from this text.";
//     int lengthToRemove;

//     std::cout << "Enter the length of the words to remove: ";
//     std::cin >> lengthToRemove;
    
//     removeWordsByLength(text, lengthToRemove);
    
//     std::cout << "Text with words of length " << lengthToRemove << " removed: " << text << std::endl;
    
//     return 0;
// }
