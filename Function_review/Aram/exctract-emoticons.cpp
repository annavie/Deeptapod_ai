#include <node.h>
#include <string>
#include <vector>
#include <regex>

void ExtractEmoticons(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
        return;
    }

    v8::String::Utf8Value utf8(isolate, args[0]->ToString(isolate->GetCurrentContext()).ToLocalChecked());
    std::string text(*utf8);

    std::vector<std::string> emoticons;
    std::regex emoticonRegex(R"((?::|;|=)(?:-)?(?:\)|D|O|P|\())");
    auto regexIt = std::sregex_iterator(text.begin(), text.end(), emoticonRegex);
    auto regexEnd = std::sregex_iterator();

    while (regexIt != regexEnd) {
        std::smatch match = *regexIt;
        emoticons.push_back(match.str());
        ++regexIt;
    }

    v8::Local<v8::Array> result = v8::Array::New(isolate, emoticons.size());
    for (size_t i = 0; i < emoticons.size(); ++i) {
        result->Set(isolate->GetCurrentContext(), i, v8::String::NewFromUtf8(isolate, emoticons[i].c_str()).ToLocalChecked()).Check();
    }

    args.GetReturnValue().Set(result);
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "extractEmoticons", ExtractEmoticons);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)
