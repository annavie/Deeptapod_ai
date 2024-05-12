#include <iostream>
#include <string>
#include <sstream>
#include <unordered_set>

std::unordered_set<std::string> removeDuplicates(const std::string& text) {
    std::istringstream ss(text); 
    std::unordered_set<std::string> uniqueLines;
    std::string line;
    while (std::getline(ss, line)) {
        uniqueLines.insert(line);
    }
    return uniqueLines;
}

// int main() {
//     std::string text = "This is the first line.\n"
//                        "This is the second line.\n"
//                        "This is the first line.\n"
//                        "This is the third line.\n"
//                        "This is the second line.\n";

//     std::unordered_set<std::string> uniqueLines = removeDuplicates(text);
//     std::cout << "Unique lines:\n";
//     for (const auto& line : uniqueLines) {
//         std::cout << line << '\n';
//     }

//     return 0;
// }
