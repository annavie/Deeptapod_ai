#ifndef SYMBOL_DATABASE_HPP
#define SYMBOL_DATABASE_HPP

#include <string>
#include <unordered_set>
#include <vector>

class SymbolDatabase
{
private:
    std::unordered_set<char> symbols;

public:
    SymbolDatabase();
    bool isMathSymbol(char c) const;
    std::vector<char> removeMathSymbols(const std::string &text) const;
};

#endif /* SYMBOL_DATABASE_HPP */
