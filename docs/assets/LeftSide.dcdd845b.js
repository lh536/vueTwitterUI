import { _ as _export_sfc, a as __vitePreload } from "./index.0ba555d9.js";
import { d as defineAsyncComponent, b as createElementBlock, e as createBaseVNode, f as createVNode, r as resolveComponent, o as openBlock } from "./vendor.0cf0f85f.js";
const _sfc_main = {
  name: "LeftSide",
  components: {
    TwitterNavIcon: defineAsyncComponent(() => __vitePreload(() => import("./TwitterNavIcon.ec61c811.js"), true ? ["assets/TwitterNavIcon.ec61c811.js","assets/index.0ba555d9.js","assets/index.6005bbd5.css","assets/vendor.0cf0f85f.js"] : void 0)),
    NavbarIcon: defineAsyncComponent(() => __vitePreload(() => import("./NavbarIcon.e0a4d93e.js"), true ? ["assets/NavbarIcon.e0a4d93e.js","assets/index.0ba555d9.js","assets/index.6005bbd5.css","assets/vendor.0cf0f85f.js"] : void 0)),
    TwitterButton: defineAsyncComponent(() => __vitePreload(() => import("./TwitterButton.594717c3.js"), true ? ["assets/TwitterButton.594717c3.js","assets/index.0ba555d9.js","assets/index.6005bbd5.css","assets/vendor.0cf0f85f.js"] : void 0)),
    User: defineAsyncComponent(() => __vitePreload(() => import("./User.59c858bf.js"), true ? ["assets/User.59c858bf.js","assets/fabio.22eb2fab.js","assets/index.0ba555d9.js","assets/index.6005bbd5.css","assets/vendor.0cf0f85f.js"] : void 0))
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
