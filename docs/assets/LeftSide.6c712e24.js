import { _ as _export_sfc, a as __vitePreload } from "./index.4d70cbd5.js";
import { d as defineAsyncComponent, b as createElementBlock, e as createBaseVNode, f as createVNode, r as resolveComponent, o as openBlock } from "./vendor.0cf0f85f.js";
const _sfc_main = {
  name: "LeftSide",
  components: {
    TwitterNavIcon: defineAsyncComponent(() => __vitePreload(() => import("./TwitterNavIcon.88884403.js"), true ? ["assets/TwitterNavIcon.88884403.js","assets/index.4d70cbd5.js","assets/index.dacabcfc.css","assets/vendor.0cf0f85f.js"] : void 0)),
    NavbarIcon: defineAsyncComponent(() => __vitePreload(() => import("./NavbarIcon.4e38a05b.js"), true ? ["assets/NavbarIcon.4e38a05b.js","assets/index.4d70cbd5.js","assets/index.dacabcfc.css","assets/vendor.0cf0f85f.js"] : void 0)),
    TwitterButton: defineAsyncComponent(() => __vitePreload(() => import("./TwitterButton.2123ebed.js"), true ? ["assets/TwitterButton.2123ebed.js","assets/index.4d70cbd5.js","assets/index.dacabcfc.css","assets/vendor.0cf0f85f.js"] : void 0)),
    User: defineAsyncComponent(() => __vitePreload(() => import("./User.adc2e0d2.js"), true ? ["assets/User.adc2e0d2.js","assets/fabio.eecfaddf.js","assets/index.4d70cbd5.js","assets/index.dacabcfc.css","assets/vendor.0cf0f85f.js"] : void 0))
  }
};
const _hoisted_1 = { class: "col-span-1 lg:col-span-2" };
const _hoisted_2 = { class: "flex flex-col items-center lg:items-stretch space-y-2 py-2 lg:px-2 min-h-screen sticky top-0" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_twitter_nav_icon = resolveComponent("twitter-nav-icon");
  const _component_navbar_icon = resolveComponent("navbar-icon");
  const _component_twitter_button = resolveComponent("twitter-button");
  const _component_user = resolveComponent("user");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode(_component_twitter_nav_icon),
      createVNode(_component_navbar_icon, {
        "icon-name": "home",
        "notification-indicator": true
      }),
      createVNode(_component_navbar_icon, { "icon-name": "explore" }),
      createVNode(_component_navbar_icon, {
        "icon-name": "notifications",
        "notification-count": 2
      }),
      createVNode(_component_navbar_icon, { "icon-name": "messages" }),
      createVNode(_component_navbar_icon, { "icon-name": "bookmarks" }),
      createVNode(_component_navbar_icon, { "icon-name": "lists" }),
      createVNode(_component_navbar_icon, { "icon-name": "profile" }),
      createVNode(_component_navbar_icon, { "icon-name": "more" }),
      createVNode(_component_twitter_button),
      createVNode(_component_user)
    ])
  ]);
}
var LeftSide = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { LeftSide as default };
