#include <iostream>
#include <string>
#include <algorithm>

std::string reverseString(const std::string &input)
{
  std::string reversed = input;
  std::reverse(reversed.begin(), reversed.end());
  return reversed;
}

// int main()
// {
//   std::string str = "Hello World";
//   std::string str1 = "145hellonasda234";
//   std::cout << "Reversed string: " << reverseString(str1) << std::endl;

//   return 0;
// }