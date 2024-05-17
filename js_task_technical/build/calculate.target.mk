# This file is generated by gyp; do not edit.

TOOLSET := target
TARGET := calculate
DEFS_Debug := \
	'-DNODE_GYP_MODULE_NAME=calculate' \
	'-DUSING_UV_SHARED=1' \
	'-DUSING_V8_SHARED=1' \
	'-DV8_DEPRECATION_WARNINGS=1' \
	'-DV8_DEPRECATION_WARNINGS' \
	'-DV8_IMMINENT_DEPRECATION_WARNINGS' \
	'-D_GLIBCXX_USE_CXX11_ABI=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-D__STDC_FORMAT_MACROS' \
	'-DBUILDING_NODE_EXTENSION' \
	'-DDEBUG' \
	'-D_DEBUG' \
	'-DV8_ENABLE_CHECKS'

# Flags passed to all source files.
CFLAGS_Debug := \
	-fPIC \
	-pthread \
	-Wall \
	-Wextra \
	-Wno-unused-parameter \
	-m64 \
	-fPIC \
	-g \
	-O0

# Flags passed to only C files.
CFLAGS_C_Debug :=

# Flags passed to only C++ files.
CFLAGS_CC_Debug := \
	-fno-rtti \
	-fno-exceptions \
	-std=gnu++17

INCS_Debug := \
	-I/home/anna/.cache/node-gyp/18.13.0/include/node \
	-I/home/anna/.cache/node-gyp/18.13.0/src \
	-I/home/anna/.cache/node-gyp/18.13.0/deps/openssl/config \
	-I/home/anna/.cache/node-gyp/18.13.0/deps/openssl/openssl/include \
	-I/home/anna/.cache/node-gyp/18.13.0/deps/uv/include \
	-I/home/anna/.cache/node-gyp/18.13.0/deps/zlib \
	-I/home/anna/.cache/node-gyp/18.13.0/deps/v8/include

DEFS_Release := \
	'-DNODE_GYP_MODULE_NAME=calculate' \
	'-DUSING_UV_SHARED=1' \
	'-DUSING_V8_SHARED=1' \
	'-DV8_DEPRECATION_WARNINGS=1' \
	'-DV8_DEPRECATION_WARNINGS' \
	'-DV8_IMMINENT_DEPRECATION_WARNINGS' \
	'-D_GLIBCXX_USE_CXX11_ABI=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-D__STDC_FORMAT_MACROS' \
	'-DBUILDING_NODE_EXTENSION'

# Flags passed to all source files.
CFLAGS_Release := \
	-fPIC \
	-pthread \
	-Wall \
	-Wextra \
	-Wno-unused-parameter \
	-m64 \
	-fPIC \
	-O3 \
	-fno-omit-frame-pointer

# Flags passed to only C files.
CFLAGS_C_Release :=

# Flags passed to only C++ files.
CFLAGS_CC_Release := \
	-fno-rtti \
	-fno-exceptions \
	-std=gnu++17

INCS_Release := \
	-I/home/anna/.cache/node-gyp/18.13.0/include/node \
	-I/home/anna/.cache/node-gyp/18.13.0/src \
	-I/home/anna/.cache/node-gyp/18.13.0/deps/openssl/config \
	-I/home/anna/.cache/node-gyp/18.13.0/deps/openssl/openssl/include \
	-I/home/anna/.cache/node-gyp/18.13.0/deps/uv/include \
	-I/home/anna/.cache/node-gyp/18.13.0/deps/zlib \
	-I/home/anna/.cache/node-gyp/18.13.0/deps/v8/include

OBJS := \
	$(obj).target/$(TARGET)/calculate.o

# Add to the list of files we specially track dependencies for.
all_deps += $(OBJS)

# CFLAGS et al overrides must be target-local.
# See "Target-specific Variable Values" in the GNU Make manual.
$(OBJS): TOOLSET := $(TOOLSET)
$(OBJS): GYP_CFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_C_$(BUILDTYPE))
$(OBJS): GYP_CXXFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_CC_$(BUILDTYPE))

# Suffix rules, putting all outputs into $(obj).

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(srcdir)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

# Try building from generated source, too.

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj).$(TOOLSET)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

# End of this set of suffix rules
### Rules for final target.
LDFLAGS_Debug := \
	-pthread \
	-rdynamic \
	-m64

LDFLAGS_Release := \
	-pthread \
	-rdynamic \
	-m64

LIBS :=

$(obj).target/calculate.node: GYP_LDFLAGS := $(LDFLAGS_$(BUILDTYPE))
$(obj).target/calculate.node: LIBS := $(LIBS)
$(obj).target/calculate.node: TOOLSET := $(TOOLSET)
$(obj).target/calculate.node: $(OBJS) FORCE_DO_CMD
	$(call do_cmd,solink_module)

all_deps += $(obj).target/calculate.node
# Add target alias
.PHONY: calculate
calculate: $(builddir)/calculate.node

# Copy this to the executable output path.
$(builddir)/calculate.node: TOOLSET := $(TOOLSET)
$(builddir)/calculate.node: $(obj).target/calculate.node FORCE_DO_CMD
	$(call do_cmd,copy)

all_deps += $(builddir)/calculate.node
# Short alias for building this executable.
.PHONY: calculate.node
calculate.node: $(obj).target/calculate.node $(builddir)/calculate.node

# Add executable to "all" target.
.PHONY: all
all: $(builddir)/calculate.node

