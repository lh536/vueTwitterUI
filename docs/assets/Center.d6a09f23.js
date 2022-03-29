import { _ as _export_sfc, a as __vitePreload } from "./index.0ba555d9.js";
import { d as defineAsyncComponent, b as createElementBlock, e as createBaseVNode, f as createVNode, w as withCtx, r as resolveComponent, o as openBlock } from "./vendor.0cf0f85f.js";
const _sfc_main = {
  name: "Center",
  components: {
    Home: defineAsyncComponent(() => __vitePreload(() => import("./Home.a30afde8.js"), true ? ["assets/Home.a30afde8.js","assets/index.0ba555d9.js","assets/index.6005bbd5.css","assets/vendor.0cf0f85f.js"] : void 0)),
    WhatsHappening: defineAsyncComponent(() => __vitePreload(() => import("./WhatsHappening.76b82c1d.js"), true ? ["assets/WhatsHappening.76b82c1d.js","assets/index.0ba555d9.js","assets/index.6005bbd5.css","assets/vendor.0cf0f85f.js","assets/fabio.22eb2fab.js"] : void 0)),
    TimelineTweet: defineAsyncComponent(() => __vitePreload(() => import("./TimelineTweet.6b4c46dd.js"), true ? ["assets/TimelineTweet.6b4c46dd.js","assets/index.0ba555d9.js","assets/index.6005bbd5.css","assets/vendor.0cf0f85f.js"] : void 0))
  }
};
const _hoisted_1 = { class: "col-span-7 md:col-span-8 lg:col-span-5" };
const _hoisted_2 = { class: "col-span-5 border border-t-0 border-[#2F3336]" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "Hi! \u{1F44B} My name is Fabio Duarte. I'm junior frontend developer. I started studying web development on my own \u{1F4AA} since mid-2020 with paid and free courses, books and of course official documentation of technologies I've learned.", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("p", { class: "leading-snug" }, "Tailwind CSS v3.0 is here \u2014 bringing incredible performance gains, huge workflow improvements, and a seriously ridiculous number of new features.", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("p", { class: "leading-snug" }, "Read the announcement post for all the details \u{1F449}", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_home = resolveComponent("home");
  const _component_whats_happening = resolveComponent("whats-happening");
  const _component_timeline_tweet = resolveComponent("timeline-tweet");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode(_component_home),
      createVNode(_component_whats_happening),
      createVNode(_component_timeline_tweet, {
        "avatar-image": "fabio.jpeg",
        "who-like": "Somebody",
        name: "Fabio Duarte",
        username: "lh536",
        "how-much-time-ago": "2m",
        "tweet-cover": "fabioTweetCover.jpg",
        "tweet-cover-title": "Junior Frontend Developer - Tailwind CSS & VueJS",
        "tweet-cover-description": "Currently I feel very comfortable using Tailwind CSS and VueJS as development tools. Working on a real project would allow me to put my skills into practice and learn more in order to improve myself every day.",
        "tweet-cover-url": "https://lh536.github.io",
        "tweet-cover-url-text": "lh536.github.io"
      }, {
        default: withCtx(() => [
          _hoisted_3
        ]),
        _: 1
      }),
      createVNode(_component_timeline_tweet, {
        "avatar-image": "tailwind.jpg",
        "who-like": "Fabio Duarte",
        name: "Tailwind CSS",
        username: "tailwindcss",
        "how-much-time-ago": "7m",
        "tweet-cover": "tailwindTweetCover.jpg",
        "tweet-cover-title": "Tailwind CSS v3.0 - Tailwind CSS",
        "tweet-cover-description": "Tailwind CSS v3.0 is here \u2014 bringing incredible performance gains, huge workflow improvements, and a seriously ridiculous number of new features.",
        tweetCoverUrl: "https://www.tailwindcss.com/",
        tweetCoverUrlText: "tailwindcss.com"
      }, {
        default: withCtx(() => [
          _hoisted_4,
          _hoisted_5
        ]),
        _: 1
      })
    ])
  ]);
}
var Center = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Center as default };
