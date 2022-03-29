import { _ as _export_sfc } from "./index.0ba555d9.js";
import { o as openBlock, b as createElementBlock, n as normalizeClass, e as createBaseVNode, t as toDisplayString, i as createCommentVNode, F as Fragment, f as createVNode, j as renderSlot, r as resolveComponent } from "./vendor.0cf0f85f.js";
const _sfc_main$1 = {
  name: "SvgTimelineIcon",
  props: {
    icon: {
      type: String,
      required: true,
      default: ""
    },
    customClasses: {
      type: String,
      required: false,
      default: ""
    },
    count: {
      type: Number,
      required: false
    }
  }
};
const _hoisted_1$1 = ["xlink:href"];
const _hoisted_2$1 = {
  key: 0,
  class: "font-light text-base"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    (openBlock(), createElementBlock("svg", {
      role: "img",
      class: normalizeClass([$props.customClasses, "rounded-full group-hover:stroke-current transform duration-300"])
    }, [
      createBaseVNode("use", {
        "xlink:href": `./icons/iconSet.svg#${$props.icon}`
      }, null, 8, _hoisted_1$1)
    ], 2)),
    $props.count ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString($props.count), 1)) : createCommentVNode("", true)
  ], 64);
}
var SvgTimelineIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  name: "TimelineTweet",
  components: {
    SvgTimelineIcon
  },
  props: {
    avatarImage: {
      type: String,
      required: false
    },
    whoLike: {
      type: String,
      required: false
    },
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
    howMuchTimeAgo: {
      type: String,
      required: true,
      default: "1m"
    },
    tweetCover: {
      type: String,
      required: false
    },
    tweetCoverTitle: {
      type: String,
      required: false
    },
    tweetCoverDescription: {
      type: String,
      required: false
    },
    tweetCoverUrl: {
      type: String,
      required: false
    },
    tweetCoverUrlText: {
      type: String,
      required: false
    }
  }
};
const _hoisted_1 = { class: "flex text-white px-4 py-2 space-x-3 border-b border-[#2F3336]" };
const _hoisted_2 = { class: "flex flex-col" };
const _hoisted_3 = { class: "pb-1 self-end text-[#6E767D]" };
const _hoisted_4 = { class: "w-12 h-12 rounded-full" };
const _hoisted_5 = ["src"];
const _hoisted_6 = { class: "flex flex-col" };
const _hoisted_7 = { class: "pb-1 self-start text-sm text-[#6E767D]" };
const _hoisted_8 = { class: "text-base" };
const _hoisted_9 = { class: "flex justify-betwenn items-center space-x-1" };
const _hoisted_10 = { class: "truncate" };
const _hoisted_11 = { class: "font-normal text-[#6E767D]" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", { class: "text-[#6E767D] grow pr-1" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "flex items-center justify-center ml-auto w-10 h-10 rounded-full hover:bg-[#0A1720] hover:text-[#1DA1F2] transform duration-300" }, [
    /* @__PURE__ */ createBaseVNode("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      class: "h-5 w-5",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, [
      /* @__PURE__ */ createBaseVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
      })
    ])
  ])
], -1);
const _hoisted_13 = { class: "font-normal space-y-3" };
const _hoisted_14 = { class: "rounded-2xl border border-[#2F3336]" };
const _hoisted_15 = ["src"];
const _hoisted_16 = { class: "py-3 px-4" };
const _hoisted_17 = { class: "font-normal" };
const _hoisted_18 = { class: "font-normal text-[#6E767D] leading-tight" };
const _hoisted_19 = { class: "flex font-normal text-[#6E767D] pt-1 space-x-1 items-center" };
const _hoisted_20 = { class: "w-5 h-5" };
const _hoisted_21 = ["xlink:href"];
const _hoisted_22 = ["href"];
const _hoisted_23 = { class: "flex justify-around items-center text-[#6E767D] pt-2" };
const _hoisted_24 = { class: "flex items-center hover:text-[#1DA1F2] space-x-1 cursor-pointer" };
const _hoisted_25 = { class: "flex items-center hover:text-[#17BF63] space-x-1 cursor-pointer" };
const _hoisted_26 = { class: "flex items-center text-[#E0245E] space-x-1 cursor-pointer" };
const _hoisted_27 = { class: "hover:text-[#1DA1F2] cursor-pointer" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_svg_timeline_icon = resolveComponent("svg-timeline-icon");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("section", _hoisted_2, [
      createBaseVNode("span", _hoisted_3, [
        createVNode(_component_svg_timeline_icon, {
          icon: "like",
          "custom-classes": "h-4 w-4"
        })
      ]),
      createBaseVNode("div", _hoisted_4, [
        createBaseVNode("img", {
          src: `./img/twitterSample/img/avatarImage/${$props.avatarImage}`,
          class: "rounded-full",
          alt: "Twitter Avatar"
        }, null, 8, _hoisted_5)
      ])
    ]),
    createBaseVNode("section", _hoisted_6, [
      createBaseVNode("span", _hoisted_7, toDisplayString($props.whoLike) + " liked", 1),
      createBaseVNode("article", _hoisted_8, [
        createBaseVNode("div", _hoisted_9, [
          createBaseVNode("span", _hoisted_10, toDisplayString($props.name), 1),
          createBaseVNode("span", _hoisted_11, "@" + toDisplayString($props.username) + " \xB7 " + toDisplayString($props.howMuchTimeAgo), 1),
          _hoisted_12
        ]),
        createBaseVNode("div", _hoisted_13, [
          renderSlot(_ctx.$slots, "default"),
          createBaseVNode("div", _hoisted_14, [
            createBaseVNode("img", {
              class: "rounded-t-2xl",
              src: `./img/twitterSample/img/tweetCover/${$props.tweetCover}`,
              alt: "Tweet Image"
            }, null, 8, _hoisted_15),
            createBaseVNode("div", _hoisted_16, [
              createBaseVNode("span", _hoisted_17, toDisplayString($props.tweetCoverTitle), 1),
              createBaseVNode("div", _hoisted_18, [
                createBaseVNode("p", null, toDisplayString($props.tweetCoverDescription), 1),
                createBaseVNode("div", _hoisted_19, [
                  (openBlock(), createElementBlock("svg", _hoisted_20, [
                    createBaseVNode("use", { "xlink:href": `./icons/iconSet.svg#link` }, null, 8, _hoisted_21)
                  ])),
                  createBaseVNode("a", {
                    href: $props.tweetCoverUrl,
                    target: "_blank"
                  }, toDisplayString($props.tweetCoverUrlText), 9, _hoisted_22)
                ])
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("div", _hoisted_23, [
        createBaseVNode("div", _hoisted_24, [
          createVNode(_component_svg_timeline_icon, {
            icon: "reply",
            "custom-classes": "hover:bg-[#0A1720] w-10 h-10 p-2",
            count: 5
          })
        ]),
        createBaseVNode("div", _hoisted_25, [
          createVNode(_component_svg_timeline_icon, {
            icon: "retweet",
            "custom-classes": "hover:bg-[#091A11] w-10 h-10 p-2",
            count: 12
          })
        ]),
        createBaseVNode("div", _hoisted_26, [
          createVNode(_component_svg_timeline_icon, {
            icon: "like",
            "custom-classes": "hover:bg-[#1E0B11] w-10 h-10 p-2",
            count: 1
          })
        ]),
        createBaseVNode("div", _hoisted_27, [
          createVNode(_component_svg_timeline_icon, {
            icon: "share",
            "custom-classes": "hover:bg-[#0A1720] w-10 h-10 p-2"
          })
        ])
      ])
    ])
  ]);
}
var TimelineTweet = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { TimelineTweet as default };
