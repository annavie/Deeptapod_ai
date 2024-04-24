#include <iostream>
#include <fstream>
#include <string>
#include <sstream>
#include <unordered_map>
#include <algorithm>
#include <vector>

void writeToTextFile(const std::string& filename, const std::vector<std::pair<std::string, int>>& sortedWords) {
    std::ofstream outputFile(filename);
    if (!outputFile.is_open()) {
        std::cerr << "Error: Unable to open output file." << std::endl;
        return;
    }
    for (const auto& pair : sortedWords) {
        outputFile << pair.first << ": " << pair.second << std::endl;
    }
    outputFile.close();

    std::cout << "Output written to " << filename << std::endl;
}

void readTextFromFile(const std::string& filename, std::unordered_map<std::string, int>& wordCount) {
    std::ifstream inputFile(filename);
    if (!inputFile.is_open()) {
        std::cerr << "Error: Unable to open input file: " << filename << std::endl;
        return;
    }
    std::string word;
    while (inputFile >> word) {
        wordCount[word]++;
    }
    inputFile.close();
}

bool sortByFrequency(const std::pair<std::string, int>& a, const std::pair<std::string, int>& b) {
    return a.second > b.second;
}

void printMostCommonWords(const std::vector<std::pair<std::string, int>>& sortedWords) {
    std::cout << "Most common words:\n";
    for (const auto& pair : sortedWords) {
        std::cout << pair.first << ": " << pair.second << std::endl;
    }
}

void findCommonWords(const std::string& filename) {
    std::unordered_map<std::string, int> wordCount;
    readTextFromFile(filename, wordCount);

    std::vector<std::pair<std::string, int>> sortedWords(wordCount.begin(), wordCount.end());
    std::sort(sortedWords.begin(), sortedWords.end(), sortByFrequency);
    
    printMostCommonWords(sortedWords);
}

int main() {
    std::string filename = "../Inputs/find-common-words.txt";
    findCommonWords(filename);
    return 0;
}
