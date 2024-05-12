#include <iostream>
#include <vector>
#include <regex>

std::vector<std::string> extractURLs(const std::string& text) {
    std::vector<std::string> urls;
    std::regex url(R"(https?:\/\/\S+)");
    
    auto regexIt = std::sregex_iterator(text.begin(), text.end(), url);
    auto regexEnd = std::sregex_iterator();
    
    while(regexIt != regexEnd){
        std::smatch match = *regexIt;
        urls.push_back(match.str());
        ++regexIt;
    }
    
    return urls;
}

// int main() {
//     std::string text = "Here are some URLs: https://www.example.com and http://another-example.com.";
//     std::vector<std::string> extractedURLs = extractURLs(text);

//     for (const auto& url : extractedURLs) {
//         std::cout << url << std::endl;
//     }

//     return 0;
// }
