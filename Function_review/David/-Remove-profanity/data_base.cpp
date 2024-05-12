#include "data_base.hpp"

CurseWordsDatabase::CurseWordsDatabase()
{
    const std::string curseWordList[] = {
        "fuck", "shit", "damn", "asshole", "bitch", "bastard",
        "cock", "cunt", "dick", "piss", "prick", "twat",
        "wanker", "motherfucker", "asshat", "arsehole", "bollocks",
        "bugger", "crap", "goddamn", "horseshit", "son of a bitch",
        "tit", "bullshit", "douchebag", "fuckwit", "pussy",
        "bastard", "tosser", "bellend", "knobhead", "sod",
        "slut", "wank", "fuckface", "fucker", "shithead",
        "jackass", "twatwaffle"};

    for (const auto &word : curseWordList)
    {
        curseWords[word] = true;
    }
}

bool CurseWordsDatabase::isCurseWord(const std::string &word) const
{
    return curseWords.count(word) > 0;
}
