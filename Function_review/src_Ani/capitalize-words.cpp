#include <iostream>
#include <string>
#include <cctype>

std::string capitalizeWords(const std::string &text)
{
    std::string capitalizedText = text;
    bool capitalizeNext = true;

    for (char &c : capitalizedText)
    {
        if (std::isspace(c))
        {
            capitalizeNext = true;
        }
        else if (capitalizeNext)
        {
            c = std::toupper(c);
            capitalizeNext = false;
        }
    }

    return capitalizedText;
}

// int main()
// {
//     std::string str = "The the  cat jumped jumped cat over over the fence fence.";
//     std::string capitalizedStr = capitalizeWords(str);
//     std::cout << capitalizedStr << std::endl;

//     return 0;
// }
