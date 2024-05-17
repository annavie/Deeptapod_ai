#include <iostream>
#include <string>

std::string capitalizeFirstLetter(const std::string& input) {
    std::string result = input;
    bool capitalize = true;

    for (size_t i = 0; i < result.length(); ++i) {
        if (isspace(result[i])) {
            capitalize = true;  // Next character should be capitalized
        } else if (capitalize && isalpha(result[i])) {
            result[i] = toupper(result[i]);
            capitalize = false;  // Capitalize only the first character of the word
        } else {
            result[i] = tolower(result[i]);
        }
    }

    return result;
}

int main() {
    std::string input = "capitalize first letter";
    std::string output = capitalizeFirstLetter(input);
    std::cout << output << std::endl;  // Output: "Capitalize First Letter"
    return 0;
}
