#include <iostream>
#include <regex>
#include <string>
#include <vector>

std::vector<std::string> extract_emails(const std::string& text)
{
    std::vector<std::string> emails;
    std::regex email_pattern(R"(\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b)");

    std::sregex_iterator iterator(text.begin(), text.end(), email_pattern);
    std::sregex_iterator end;

    while (iterator != end)
    {
        emails.push_back(iterator->str());
        ++iterator;
    }

    return emails;
}

// int main()
// {
//     std::string text = R"(
//     Here are some sample email addresses: john.doe@example.com, alice_smith@domain.co.uk, an.@.com
//     info@company.com. Please contact us at support@website.net for further assistance.
//     )";

//     std::vector<std::string> extracted_emails = extract_emails(text);

//     for (const auto &email : extracted_emails)
//     {
//         std::cout << email << std::endl;
//     }

//     return 0;
// }
