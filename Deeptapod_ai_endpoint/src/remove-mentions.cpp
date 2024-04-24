#include <iostream>
#include <regex>
#include <string>

std::string removeMentions(const std::string& text) {
    std::regex mentionPattern("@[a-zA-Z0-9_]+");
    std::string textWithoutMentions = std::regex_replace(text, mentionPattern, "");

    return textWithoutMentions;
}

int main() {
    std::string textWithMentions = "Hey @user1, did you see @user2's post? @user3 mentioned you in a comment.";
    std::string textWithoutMentions = removeMentions(textWithMentions);
    std::cout << "Text without user mentions: " << textWithoutMentions << std::endl;
    
    return 0;
}
