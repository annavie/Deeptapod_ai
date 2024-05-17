#include <iostream>
#include <string>

void removeWhitespace(std::string& text) {
    int writeIndex = 0;

    for (char c : text) {
        if (c != ' ' || (writeIndex > 0 && text[writeIndex - 1] != ' ')) {
            text[writeIndex++] = c;
        }
    }

    text.resize(writeIndex);
}

// int main() {
//     std::string text = "   This   is    a    test   .   ";
//     std::cout << "Before: " << text << std::endl;
//     removeWhitespace(text);
//     std::cout << "After: " << text << std::endl;
//     return 0;
// }
