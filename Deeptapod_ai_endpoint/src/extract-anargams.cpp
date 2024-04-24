#include <iostream>
#include <fstream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>
#include<sstream>

std::string sortString(const std::string& str) {
    std::string sortedStr = str;
    std::sort(sortedStr.begin(), sortedStr.end());
    return sortedStr;
}

std::vector<std::string> extractAnagrams(const std::string& text) {
    std::unordered_map<std::string, std::vector<std::string>> anagramMap;

    std::string word;
    std::istringstream iss(text);
    while (iss >> word) {
        std::string sortedWord = sortString(word);
        anagramMap[sortedWord].push_back(word);
    }

    std::vector<std::string> anagrams;
    for (const auto& pair : anagramMap) {
        if (pair.second.size() > 1) {
            anagrams.insert(anagrams.end(), pair.second.begin(), pair.second.end());
        }
    }

    return anagrams;
}

int main() {
    std::ifstream inputFile("../Inputs/extract-anargams.txt");
    if (!inputFile) {
        std::cerr << "Error: Unable to open input file." << std::endl;
        return 1;
    }

    std::string text;
    std::string line;
    while (std::getline(inputFile, line)) {
        text += line + "\n";
    }

    inputFile.close();

    std::vector<std::string> anagrams = extractAnagrams(text);

    std::cout << "Anagrams in the text: ";
    for (const std::string& anagram : anagrams) {
        std::cout << anagram << " ";
    }
    std::cout << std::endl;

    return 0;
}
