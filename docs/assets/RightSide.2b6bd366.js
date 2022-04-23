import { _ as _export_sfc, a as __vitePreload } from "./index.4d70cbd5.js";
import { d as defineAsyncComponent, b as createElementBlock, e as createBaseVNode, f as createVNode, r as resolveComponent, o as openBlock } from "./vendor.0cf0f85f.js";
const _sfc_main = {
  name: "RightSide",
  components: {
    SearchTwitterInput: defineAsyncComponent(() => __vitePreload(() => import("./SearchTwitterInput.417be4c2.js"), true ? ["assets/SearchTwitterInput.417be4c2.js","assets/index.4d70cbd5.js","assets/index.dacabcfc.css","assets/vendor.0cf0f85f.js"] : void 0)),
    WhatsHappeningRight: defineAsyncComponent(() => __vitePreload(() => import("./WhatsHappeningRight.d32b383c.js"), true ? ["assets/WhatsHappeningRight.d32b383c.js","assets/index.4d70cbd5.js","assets/index.dacabcfc.css","assets/vendor.0cf0f85f.js"] : void 0)),
    WhoToFollow: defineAsyncComponent(() => __vitePreload(() => import("./WhoToFollow.7279d477.js"), true ? ["assets/WhoToFollow.7279d477.js","assets/index.4d70cbd5.js","assets/index.dacabcfc.css","assets/vendor.0cf0f85f.js"] : void 0))
  }
};
const _hoisted_1 = { class: "hidden lg:block md:col-span-1 lg:col-span-3 borde-2 border-yellow-500" };
const _hoisted_2 = { class: "col-span-3 pl-3" };
const _hoisted_3 = { class: "flex flex-col text-[#D9D9D9] text-xl font-semibold" };
const _hoisted_4 = { class: "px-4 py-2 space-y-4" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_search_twitter_input = resolveComponent("search-twitter-input");
  const _component_whats_happening_right = resolveComponent("whats-happening-right");
  const _component_who_to_follow = resolveComponent("who-to-follow");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          createVNode(_component_search_twitter_input),
          createVNode(_component_whats_happening_right),
          createVNode(_component_who_to_follow)
        ])
      ])
    ])
  ]);
}
var RightSide = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { RightSide as default };
