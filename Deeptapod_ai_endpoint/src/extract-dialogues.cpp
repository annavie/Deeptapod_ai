#include <iostream>
#include <string>
#include <regex>
#include <vector>

std::vector<std::string> extractDialogues(const std::string& text) {
    std::vector<std::string> dialogues;
    std::regex pattern("([A-Za-z]+):\\s*(.*)");

    std::sregex_iterator iter(text.begin(), text.end(), pattern);
    std::sregex_iterator end;

    for (; iter != end; ++iter) {
        dialogues.push_back((*iter)[0]);
    }

    return dialogues;
}

int main() {
    std::string text ="Emma: Can you believe it's been five years since we all got together like this?\n"
"Jack: Time flies when you're having fun, right?\n"
"Sarah: Absolutely! And speaking of fun, did you guys see Uncle Bob attempting to dance earlier?\n"
"Emma: Oh, I saw it. It was like watching a newborn giraffe trying to walk!\n"
"Jack: Poor Uncle Bob. At least he's still got some moves, even if they're a bit rusty.\n"
"Sarah: Hey, rusty moves are better than no moves at all!\n"
"Emma: True that. So, have you guys caught up with Aunt Linda yet?\n"
"Jack: Not yet. Is she still chatting with Grandma over there?\n"
"Sarah: Yeah, looks like. They're probably exchanging all the latest gossip.\n"
"Emma: Oh, you know it. Those two can gossip for hours.\n"
"Jack: Like mother, like daughter, huh?"
"Sarah: (playfully nudging Jack)";

    std::vector<std::string> extractedDialogues = extractDialogues(text);
    for (const auto& dialogue : extractedDialogues) {
        std::cout << dialogue << std::endl;
    }

    return 0;
}
