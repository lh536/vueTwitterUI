import { _ as _export_sfc } from "./index.4d70cbd5.js";
import { o as openBlock, b as createElementBlock, e as createBaseVNode, t as toDisplayString, n as normalizeClass, F as Fragment, f as createVNode, r as resolveComponent } from "./vendor.0cf0f85f.js";
import { _ as _imports_0 } from "./fabio.eecfaddf.js";
const _sfc_main$1 = {
  name: "SvgIcon",
  props: {
    icon: {
      type: String,
      required: true,
      default: ""
    },
    position: {
      type: String,
      required: false,
      default: ""
    }
  }
};
const _hoisted_1$1 = {
  role: "img",
  class: "w-6 h-6"
};
const _hoisted_2$1 = ["xlink:href"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    (openBlock(), createElementBlock("svg", _hoisted_1$1, [
      createBaseVNode("use", {
        "xlink:href": `./icons/iconSet.svg#${$props.icon}`
      }, null, 8, _hoisted_2$1)
    ])),
    createBaseVNode("span", {
      class: normalizeClass([$props.position, "text-xs font-normal text-white bg-slate-500 rounded-sm p-0.5 absolute top-8 invisible group-hover:visible group-hover:delay-300 group-hover:transition-all capitalize"])
    }, toDisplayString($props.icon), 3)
  ], 64);
}
var SvgIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  name: "WhatsHappening",
  components: {
    SvgIcon
  }
};
const _hoisted_1 = { class: "flex px-4 py-2 border-b border-[#2F3336]" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "w-12 h-12 shrink-0 rounded-full" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    class: "rounded-full",
    alt: "Twitter Avatar"
  })
], -1);
const _hoisted_3 = { class: "flex flex-col mx-2 pl-2 py-3 space-y-6" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", { class: "text-[#6E767D]" }, "What's happening?", -1);
const _hoisted_5 = { class: "flex space-x-2 sm:space-x-3 items-center text-[#1DA1F2]" };
const _hoisted_6 = { class: "flex flex-col items-center relative group cursor-pointer" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-col items-center relative group cursor-pointer" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "border w-5 h-5 flex justify-center items-center rounded-sm border-[#1DA1F2]" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "text-[0.6rem]" }, "GIF")
  ]),
  /* @__PURE__ */ createBaseVNode("span", { class: "text-xs font-normal text-white bg-slate-500 rounded-sm p-0.5 absolute top-8 invisible group-hover:visible group-hover:delay-300 group-hover:transition-all" }, "GIF")
], -1);
const _hoisted_8 = { class: "hidden sm:flex flex-col items-center relative group cursor-pointer transform rotate-90" };
const _hoisted_9 = { class: "flex flex-col items-center relative group cursor-pointer" };
const _hoisted_10 = { class: "hidden sm:flex flex-col items-center relative group cursor-pointer" };
const _hoisted_11 = { class: "flex flex-col items-center relative group cursor-pointer text-[#0E4D77]" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "flex-grow flex p-1 justify-end" }, [
  /* @__PURE__ */ createBaseVNode("button", { class: "text-sm bg-[#0E5078] px-5 py-2 rounded-full self-end text-[#7F7F7F]" }, "Tweet")
], -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_svg_icon = resolveComponent("svg-icon");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createBaseVNode("div", _hoisted_3, [
      _hoisted_4,
      createBaseVNode("div", _hoisted_5, [
        createBaseVNode("div", _hoisted_6, [
          createVNode(_component_svg_icon, { icon: "media" })
        ]),
        _hoisted_7,
        createBaseVNode("div", _hoisted_8, [
          createVNode(_component_svg_icon, {
            icon: "poll",
            position: "transform -rotate-90 left-8 -top-0"
          })
        ]),
        createBaseVNode("div", _hoisted_9, [
          createVNode(_component_svg_icon, { icon: "emoji" })
        ]),
        createBaseVNode("div", _hoisted_10, [
          createVNode(_component_svg_icon, { icon: "schedule" })
        ]),
        createBaseVNode("div", _hoisted_11, [
          createVNode(_component_svg_icon, { icon: "location" })
        ])
      ])
    ]),
    _hoisted_12
  ]);
}
var WhatsHappening = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { WhatsHappening as default };
