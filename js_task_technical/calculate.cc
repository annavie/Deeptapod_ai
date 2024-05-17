#include <node.h>
#include <string>
#include <regex>

namespace calculate {

    void CountWords(const v8::FunctionCallbackInfo<v8::Value>& args) {
        v8::Isolate* isolate = args.GetIsolate();

        if (args.Length() < 1 || !args[0]->IsString()) {
            isolate->ThrowException(v8::Exception::TypeError(
                v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
            return;
        }

        v8::String::Utf8Value inputText(isolate, args[0]->ToString(isolate->GetCurrentContext()).ToLocalChecked());
        std::string inputString(*inputText);

        std::regex wordRegex(R"([\w'-]+)");
        auto words_begin = std::sregex_iterator(inputString.begin(), inputString.end(), wordRegex);
        auto words_end = std::sregex_iterator();
        int wordCount = std::distance(words_begin, words_end);

        args.GetReturnValue().Set(v8::Number::New(isolate, wordCount));
    }

    void Initialize(v8::Local<v8::Object> exports) {
        NODE_SET_METHOD(exports, "countWords", CountWords);
    }

    NODE_MODULE(calculate, Initialize)

}  // namespace calculate
