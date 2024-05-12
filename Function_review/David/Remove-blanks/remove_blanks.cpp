#include <iostream>
#include <string>
#include <vector>
#include <sstream>
#include <algorithm>
std::vector<std::string> removeBlanks(const std::string& text)
{
    std::istringstream iss(text);
    std::vector<std::string> lines;
    std::string line;

    while (std::getline(iss, line))
    {
        line.erase(std::remove_if(line.begin(), line.end(), ::isspace), line.end());

        if (!line.empty())
        {
            lines.push_back(line);
        }
    }

    return lines;
}

int main()
{
    std::string text;
    std::cout << "Enter text: ";
    std::getline(std::cin, text);

    std::vector<std::string> modifiedLines = removeBlanks(text);

    std::cout << "Modified text:\n";
    for (const auto &line : modifiedLines)
    {
        std::cout << line << std::endl;
    }

    return 0;
}
