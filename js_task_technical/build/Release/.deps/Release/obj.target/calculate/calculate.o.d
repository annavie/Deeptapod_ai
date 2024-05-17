cmd_Release/obj.target/calculate/calculate.o := g++ -o Release/obj.target/calculate/calculate.o ../calculate.cc '-DNODE_GYP_MODULE_NAME=calculate' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_GLIBCXX_USE_CXX11_ABI=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-D__STDC_FORMAT_MACROS' '-DBUILDING_NODE_EXTENSION' -I/home/anna/.cache/node-gyp/18.13.0/include/node -I/home/anna/.cache/node-gyp/18.13.0/src -I/home/anna/.cache/node-gyp/18.13.0/deps/openssl/config -I/home/anna/.cache/node-gyp/18.13.0/deps/openssl/openssl/include -I/home/anna/.cache/node-gyp/18.13.0/deps/uv/include -I/home/anna/.cache/node-gyp/18.13.0/deps/zlib -I/home/anna/.cache/node-gyp/18.13.0/deps/v8/include  -fPIC -pthread -Wall -Wextra -Wno-unused-parameter -m64 -fPIC -O3 -fno-omit-frame-pointer -fno-rtti -fno-exceptions -std=gnu++17 -MMD -MF ./Release/.deps/Release/obj.target/calculate/calculate.o.d.raw   -c
Release/obj.target/calculate/calculate.o: ../calculate.cc \
 /home/anna/.cache/node-gyp/18.13.0/include/node/node.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/cppgc/common.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8config.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-array-buffer.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-local-handle.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-internal.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-version.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8config.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-object.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-maybe.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-persistent-handle.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-weak-callback-info.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-primitive.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-data.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-value.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-traced-handle.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-container.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-context.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-snapshot.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-date.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-debug.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-script.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-message.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-exception.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-extension.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-external.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-function.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-function-callback.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-template.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-memory-span.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-initialization.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-callbacks.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-isolate.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-embedder-heap.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-microtask.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-statistics.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-promise.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-unwinder.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-embedder-state-scope.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-platform.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-json.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-locker.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-microtask-queue.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-primitive-object.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-proxy.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-regexp.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-typed-array.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-value-serializer.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/v8-wasm.h \
 /home/anna/.cache/node-gyp/18.13.0/include/node/node_version.h
../calculate.cc:
/home/anna/.cache/node-gyp/18.13.0/include/node/node.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/cppgc/common.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8config.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-array-buffer.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-local-handle.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-internal.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-version.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8config.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-object.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-maybe.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-persistent-handle.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-weak-callback-info.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-primitive.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-data.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-value.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-traced-handle.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-container.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-context.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-snapshot.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-date.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-debug.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-script.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-message.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-exception.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-extension.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-external.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-function.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-function-callback.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-template.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-memory-span.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-initialization.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-callbacks.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-isolate.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-embedder-heap.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-microtask.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-statistics.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-promise.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-unwinder.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-embedder-state-scope.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-platform.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-json.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-locker.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-microtask-queue.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-primitive-object.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-proxy.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-regexp.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-typed-array.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-value-serializer.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/v8-wasm.h:
/home/anna/.cache/node-gyp/18.13.0/include/node/node_version.h:
