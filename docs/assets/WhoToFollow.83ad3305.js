import { _ as _export_sfc } from "./index.0ba555d9.js";
import { o as openBlock, b as createElementBlock, e as createBaseVNode, t as toDisplayString, f as createVNode, r as resolveComponent } from "./vendor.0cf0f85f.js";
const _sfc_main$1 = {
  name: "HowToFollowItem",
  props: {
    name: {
      type: String,
      required: true,
      default: "Name"
    },
    username: {
      type: String,
      required: true,
      default: "Username"
    },
    avatarImage: {
      type: String,
      required: true,
      default: "src/assets/avatarImage/sustrato.png"
    }
  }
};
const _hoisted_1$1 = { class: "border-b border-[#2F3336] px-4 py-4 hover:bg-[#1C1F23] cursor-pointer" };
const _hoisted_2$1 = { class: "flex justify-between items-center" };
const _hoisted_3$1 = { class: "w-11 h-11 shrink-0 rounded-full" };
const _hoisted_4 = ["src", "alt"];
const _hoisted_5 = { class: "flex flex-col pl-3 grow truncate" };
const _hoisted_6 = { class: "leading-5 text-base hover:underline truncate" };
const _hoisted_7 = { class: "text-base font-normal text-[#6E767D] truncate" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("button", { class: "text-[#1DA1F2] text-base font-bold border border-[#1DA1F2] hover:bg-[#1C2C38] transform duration-300 rounded-full px-5 py-1" }, "Follow", -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      createBaseVNode("div", _hoisted_3$1, [
        createBaseVNode("img", {
          src: `./img/twitterSample/img/avatarImage/${$props.avatarImage}`,
          class: "rounded-full",
          alt: `${$props.name} avatar`
        }, null, 8, _hoisted_4)
      ]),
      createBaseVNode("div", _hoisted_5, [
        createBaseVNode("p", _hoisted_6, toDisplayString($props.name), 1),
        createBaseVNode("p", _hoisted_7, "@" + toDisplayString($props.username), 1)
      ]),
      _hoisted_8
    ])
  ]);
}
var WhoToFollowItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  name: "WhoToFollow",
  components: {
    WhoToFollowItem
  }
};
const _hoisted_1 = { class: "bg-[#15181C] rounded-2xl" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "border-b border-[#2F3336] px-4 py-2 font-extrabold" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Who to follow")
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "font-normal text-[#1DA1F2] text-base px-4 py-2" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Show more")
], -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_who_to_follow_item = resolveComponent("who-to-follow-item");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createVNode(_component_who_to_follow_item, {
      name: "Michael Andreuzza",
      username: "Mike_Andreuzza",
      "avatar-image": "michael.jpg"
    }),
    createVNode(_component_who_to_follow_item, {
      name: "Himanshu Mishra",
      username: "zicsus",
      "avatar-image": "himanshu.png"
    }),
    createVNode(_component_who_to_follow_item, {
      name: "Fernando Herrera",
      username: "Fernando_Her85",
      "avatar-image": "fernando.jpg"
    }),
    createVNode(_component_who_to_follow_item, {
      name: "Vue.js",
      username: "vuejs",
      "avatar-image": "vuejs.jpg"
    }),
    createVNode(_component_who_to_follow_item, {
      name: "Manz",
      username: "Manz",
      "avatar-image": "manz.jpg"
    }),
    createVNode(_component_who_to_follow_item, {
      name: "Adam Wathan",
      username: "adamwathan",
      "avatar-image": "adam.jpg"
    }),
    createVNode(_component_who_to_follow_item, {
      name: "Fernando Villaquir\xE1n",
      username: "fdovillaquiran",
      "avatar-image": "villaquiran.jpg"
    }),
    createVNode(_component_who_to_follow_item, {
      name: "Shruti Balasa",
      username: "shrutibalasa",
      "avatar-image": "shruti.jpg"
    }),
    createVNode(_component_who_to_follow_item, {
      name: "Victor",
      username: "vponamariov",
      "avatar-image": "victor.jpg"
    }),
    createVNode(_component_who_to_follow_item, {
      name: "Juan Andr\xE9s N\xFA\xF1ez",
      username: "juanwmedia",
      "avatar-image": "juan.jpg"
    }),
    createVNode(_component_who_to_follow_item, {
      name: "Simon H\xF8iberg",
      username: "SimonHoiberg",
      "avatar-image": "simon.jpg"
    }),
    createVNode(_component_who_to_follow_item, {
      name: "Pablo Sirera",
      username: "pablosirera",
      "avatar-image": "pablo.jpg"
    }),
    createVNode(_component_who_to_follow_item, {
      name: "Nicol\xE1s Sch\xFCrmann",
      username: "_nasch_",
      "avatar-image": "nicolas.jpg"
    }),
    createVNode(_component_who_to_follow_item, {
      name: "Sustrato Magenta",
      username: "sustratomagenta",
      "avatar-image": "sustrato.png"
    }),
    _hoisted_3
  ]);
}
var WhoToFollow = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { WhoToFollow as default };
