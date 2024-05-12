#ifndef DATA_BASE_HPP
#define DATA_BASE_HPP

#include <string>
#include <map>
#include <vector>

class CurseWordsDatabase
{
private:
    std::map<std::string, bool> curseWords;

public:
    CurseWordsDatabase();

    bool isCurseWord(const std::string &word) const;
};

#endif // DATA_BASE_HPP
