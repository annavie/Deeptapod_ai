#include <iostream>
#include "Symbol_Database.cpp"

int main()
{
    SymbolDatabase symbolDB;

    std::string text;
    std::cout << "Enter the text: ";
    std::getline(std::cin, text);

    std::vector<char> textWithoutSymbols = symbolDB.removeMathSymbols(text);

    std::cout << "Text without mathematical symbols: ";
    for (char c : textWithoutSymbols)
    {
        std::cout << c;
    }
    std::cout << std::endl;

    return 0;
}
