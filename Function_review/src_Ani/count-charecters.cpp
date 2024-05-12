#include <iostream>
#include <string>

int countOfChars(const std::string &inputString)
{
    int count = 0;
    for (char ch : inputString)
    {
        if (ch != ' ')
        {
            count++;
        }
    }
    return count;
}

// int main()
// {
//     std::string inputString = "Welcome Home! 124  1564 sdads ef ";
//     std::cout << "Number of characters excluding spaces: " << countOfChars(inputString) << std::endl;
//     return 0;
// }
