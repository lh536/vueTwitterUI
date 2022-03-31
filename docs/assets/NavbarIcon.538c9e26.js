import { _ as _export_sfc } from "./index.702e85ea.js";
import { o as openBlock, b as createElementBlock, e as createBaseVNode, t as toDisplayString, g as withDirectives, v as vShow, f as createVNode, r as resolveComponent } from "./vendor.0cf0f85f.js";
const _sfc_main$2 = {
  name: "NotificationDot"
};
const _hoisted_1$2 = { class: "h-2 w-2 bg-[#1A91DA] rounded-full absolute text-xs text-center top-3 left-4" };
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("span", { class: "" }, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", _hoisted_1$2, _hoisted_3$1);
}
var NotificationDot = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {
  name: "NotificationCounter",
  props: {
    counter: {
      type: Number,
      default: null,
      required: false
    }
  }
};
const _hoisted_1$1 = { class: "h-4 w-4 bg-[#1A91DA] rounded-full absolute text-xs text-center top-2 left-3 ring-2 ring-black" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", _hoisted_1$1, [
    createBaseVNode("span", null, toDisplayString($props.counter), 1)
  ]);
}
var NotificationCounter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  name: "NavbarIcon",
  components: { NotificationDot, NotificationCounter },
  props: {
    iconName: {
      type: String,
      default: "Icon Name",
      required: false
    },
    notificationIndicator: {
      type: Boolean,
      default: false,
      required: false
    },
    notificationCount: {
      type: Number,
      default: null,
      required: false
    }
  },
  mounted() {
  }
};
const _hoisted_1 = { class: "flex items-center space-x-4 hover:bg-[#161616] relative w-fit transform duration-300 py-3 rounded-full px-3 cursor-pointer" };
const _hoisted_2 = {
  role: "img",
  class: "w-7 h-7"
};
const _hoisted_3 = ["xlink:href"];
const _hoisted_4 = { class: "hidden lg:block capitalize" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_notification_dot = resolveComponent("notification-dot");
  const _component_notification_counter = resolveComponent("notification-counter");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(), createElementBlock("svg", _hoisted_2, [
      createBaseVNode("use", {
        "xlink:href": `./icons/iconSet.svg#${$props.iconName}`
      }, null, 8, _hoisted_3)
    ])),
    withDirectives(createVNode(_component_notification_dot, null, null, 512), [
      [vShow, $props.notificationIndicator]
    ]),
    withDirectives(createVNode(_component_notification_counter, {
      counter: this.notificationCount
    }, null, 8, ["counter"]), [
      [vShow, $props.notificationCount]
    ]),
    createBaseVNode("span", _hoisted_4, toDisplayString($props.iconName), 1)
  ]);
}
var NavbarIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { NavbarIcon as default };
