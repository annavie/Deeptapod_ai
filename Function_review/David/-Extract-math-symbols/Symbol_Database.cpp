#include "Symbol_Database.hpp"

SymbolDatabase::SymbolDatabase()
{
    symbols.insert('+');
    symbols.insert('-');
    symbols.insert('*');
    symbols.insert('/');
    symbols.insert('=');
    symbols.insert('^');
    symbols.insert('%');
    symbols.insert('&');
    symbols.insert('|');
    symbols.insert('<');
    symbols.insert('>');
    symbols.insert('!');
    symbols.insert('~');
    symbols.insert('(');
    symbols.insert(')');
    symbols.insert('[');
    symbols.insert(']');
    symbols.insert('{');
    symbols.insert('}');
    symbols.insert(',');
    symbols.insert('.');
    symbols.insert(':');
    symbols.insert(';');
    symbols.insert('\'');
    symbols.insert('"');
    symbols.insert('\\');
    symbols.insert('`');
    symbols.insert('$');
    symbols.insert('@');
    symbols.insert('#');
    symbols.insert('?');
    symbols.insert('_');
    symbols.insert('*');
    symbols.insert('&');
    symbols.insert('%');
    symbols.insert('$');
}

bool SymbolDatabase::isMathSymbol(char c) const
{
    return symbols.find(c) != symbols.end();
}

std::vector<char> SymbolDatabase::removeMathSymbols(const std::string &text) const
{
    std::vector<char> result;
    for (char c : text)
    {
        if (!isMathSymbol(c))
        {
            result.push_back(c);
        }
    }
    return result;
}
