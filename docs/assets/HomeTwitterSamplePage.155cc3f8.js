import { _ as _export_sfc, a as __vitePreload } from "./index.0ba555d9.js";
import { d as defineAsyncComponent, b as createElementBlock, e as createBaseVNode, f as createVNode, r as resolveComponent, o as openBlock } from "./vendor.0cf0f85f.js";
const _sfc_main = {
  name: "TwitterSamplePage",
  components: {
    LeftSide: defineAsyncComponent(() => __vitePreload(() => import("./LeftSide.dcdd845b.js"), true ? ["assets/LeftSide.dcdd845b.js","assets/index.0ba555d9.js","assets/index.6005bbd5.css","assets/vendor.0cf0f85f.js"] : void 0)),
    Center: defineAsyncComponent(() => __vitePreload(() => import("./Center.d6a09f23.js"), true ? ["assets/Center.d6a09f23.js","assets/index.0ba555d9.js","assets/index.6005bbd5.css","assets/vendor.0cf0f85f.js"] : void 0)),
    RightSide: defineAsyncComponent(() => __vitePreload(() => import("./RightSide.5c026986.js"), true ? ["assets/RightSide.5c026986.js","assets/index.0ba555d9.js","assets/index.6005bbd5.css","assets/vendor.0cf0f85f.js"] : void 0))
  }
};
const _hoisted_1 = { class: "min-h-screen bg-black" };
const _hoisted_2 = { class: "grid grid-cols-8 md:grid-cols-10 w-full md:max-w-3xl lg:max-w-7xl mx-auto bg-transparent text-[#D9D9D9] text-xl font-semibold borde-2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LeftSide = resolveComponent("LeftSide");
  const _component_Center = resolveComponent("Center");
  const _component_RightSide = resolveComponent("RightSide");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode(_component_LeftSide),
      createVNode(_component_Center),
      createVNode(_component_RightSide)
    ])
  ]);
}
var HomeTwitterSamplePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { HomeTwitterSamplePage as default };
