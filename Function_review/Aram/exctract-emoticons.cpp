#include <iostream>
#include <vector>
#include <regex>

std::vector<std::string> extractEmoticons(const std::string& text) {
    std::vector<std::string> emoticons;
    std::regex emoticonRegex(R"((?::|;|=)(?:-)?(?:\)|D|O|P|\())");

    auto regexIt = std::sregex_iterator(text.begin(), text.end(), emoticonRegex);
    auto regexEnd = std::sregex_iterator();

    while (regexIt != regexEnd) {
        std::smatch match = *regexIt;
        emoticons.push_back(match.str());
        ++regexIt;
    }

    return emoticons;
}

// int main() {
//     std::string text = "I'm feeling happy :) and excited :D but also sad :(";
//     std::vector<std::string> extractedEmoticons = extractEmoticons(text);

//     for (const auto& emoticon : extractedEmoticons) {
//         std::cout << emoticon << std::endl;
//     }

//     return 0;
// }
