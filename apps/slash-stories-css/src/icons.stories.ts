import "@axa-fr/design-system-slash-css/dist/common/icons.scss";
import type { Meta, StoryObj } from "@storybook/html";
import "./icons.stories.css?inline";

const meta: Meta = {
  title: "icons",
};

export default meta;

export const Example: StoryObj = {
  render: (args) => {
    const btn = document.createElement("span");

    btn.className = [
      "glyphicon",
      args.iconName ? `glyphicon-${args.iconName}` : "",
    ].join(" ");

    return btn;
  },
  args: {
    iconName: "align-justify",
  },
  argTypes: {},
};

const icons = [
  "adjust",
  "alert",
  "align-center",
  "align-justify",
  "align-left",
  "align-right",
  "all",
  "apple",
  "arrow-collapse-down",
  "arrow-collapse-left",
  "arrow-collapse-right",
  "arrow-collapse-up",
  "arrow-down",
  "arrow-left",
  "arrow-right",
  "arrow-rounded-bottom",
  "arrow-rounded-left",
  "arrow-rounded-right",
  "arrow-rounded-top",
  "arrow-up",
  "arrow-xs-down",
  "arrow-xs-left",
  "arrow-xs-right",
  "arrow-xs-up",
  "arrowthin-down",
  "arrowthin-left",
  "arrowthin-right",
  "arrowthin-up",
  "asterisk",
  "auto",
  "axa-switch",
  "baby-formula",
  "backward",
  "ban-circle",
  "bank",
  "barcode",
  "bed",
  "bell",
  "bishop",
  "bitcoin",
  "blackboard",
  "bold",
  "book",
  "bookmark",
  "briefcase-add",
  "briefcase-cup",
  "briefcase-ok",
  "briefcase-wait",
  "briefcase",
  "bullhorn",
  "calendar",
  "camera",
  "car-compact",
  "car-secure",
  "cd",
  "certificate",
  "chair",
  "check",
  "chevron-down",
  "chevron-left",
  "chevron-right",
  "chevron-up",
  "child",
  "circle-arrow-down",
  "circle-arrow-left",
  "circle-arrow-right",
  "circle-arrow-up",
  "close",
  "cloud-download",
  "cloud-upload",
  "cloud",
  "coffre",
  "cog",
  "collapse-down",
  "collapse-up",
  "comment",
  "compressed",
  "console",
  "copy",
  "copyright-mark",
  "credit-card",
  "cutlery",
  "dashboard",
  "download-alt",
  "download",
  "duplicate",
  "earphone",
  "edit",
  "education",
  "eject",
  "envelope",
  "equalizer",
  "erase",
  "euro-symbol",
  "exclamation-sign",
  "expand",
  "export",
  "eye-close",
  "eye-open",
  "facebook",
  "facetime-video",
  "fast-backward",
  "fast-forward",
  "file-doc",
  "file-pdf",
  "file-xls",
  "file",
  "film",
  "filter",
  "fire",
  "flag",
  "flash",
  "floppy-disk",
  "floppy-open",
  "floppy-remove",
  "floppy-save",
  "floppy-saved",
  "folder-close",
  "folder-open",
  "font",
  "forward",
  "france",
  "fullscreen",
  "gbp",
  "gift",
  "glass",
  "globe",
  "grain",
  "hand-down",
  "hand-left",
  "hand-right",
  "hand-up",
  "hd-video",
  "hdd",
  "header",
  "headphone",
  "heart-empty",
  "heart",
  "home",
  "hourglass",
  "import",
  "imprimer",
  "inbox",
  "indent-left",
  "indent-right",
  "info-sign",
  "instagram",
  "italic",
  "king",
  "knight",
  "lamp",
  "leaf",
  "level-up",
  "link",
  "linkedin-logo",
  "list-alt",
  "list",
  "lock",
  "log-in",
  "log-out",
  "lolly-tasted",
  "lolly",
  "magnet",
  "map-marker",
  "menu-down",
  "menu-hamburger",
  "menu-left",
  "menu-right",
  "menu-up",
  "minus-sign",
  "minus",
  "modal-window",
  "move",
  "music",
  "new-window",
  "object-align-bottom",
  "object-align-horizontal",
  "object-align-left",
  "object-align-right",
  "object-align-top",
  "object-align-vertical",
  "off",
  "oil",
  "ok-circle",
  "ok-sign",
  "ok",
  "open-file",
  "open",
  "option-horizontal",
  "option-vertical",
  "paperclip",
  "paste",
  "pause",
  "pawn",
  "pdf",
  "pencil",
  "phone-alt",
  "phone",
  "picture",
  "plane",
  "play-circle",
  "play",
  "plus-sign",
  "plus",
  "print",
  "pushpin",
  "pushpin2",
  "pushpin3",
  "pushpin4",
  "pushpin5",
  "pushpin6",
  "pushpin7",
  "pushpin8",
  "qrcode",
  "queen",
  "question-sign",
  "random",
  "record",
  "refresh",
  "registration-mark",
  "remove-circle",
  "remove-sign",
  "remove",
  "repeat",
  "reset",
  "resize-full",
  "resize-horizontal",
  "resize-small",
  "resize-vertical",
  "retweet",
  "road",
  "ruble",
  "save-alt",
  "save-file",
  "saved",
  "scale",
  "scissors",
  "screenshot",
  "sd-video",
  "search",
  "seat-belt",
  "send",
  "share-alt",
  "share",
  "shopping-cart",
  "signal",
  "sorting-asc",
  "sorting-desc",
  "sorting",
  "sound-5-1",
  "sound-6-1",
  "sound-7-1",
  "sound-dolby",
  "sound-stereo",
  "star-empty",
  "star",
  "stats",
  "step-backward",
  "step-forward",
  "stop",
  "subscript",
  "subtitles",
  "sunglasses",
  "superscript",
  "tag",
  "tags",
  "task",
  "text-background",
  "text-color",
  "text-height",
  "text-size",
  "text-width",
  "th-large",
  "th-list",
  "th",
  "thumbs-down",
  "thumbs-up",
  "time",
  "tint",
  "tow-truck",
  "towed-car",
  "tower",
  "transfer",
  "trash",
  "tree-conifer",
  "tree-deciduous",
  "twitter-logo-silhouette",
  "uncheck",
  "unlock",
  "upload",
  "usd",
  "user",
  "volume-down",
  "volume-off",
  "volume-up",
  "warning-sign",
  "wrench",
  "xls",
  "yen",
  "youtube-symbol",
  "zoom-in",
  "zoom-out",
];

export const AllIcons: StoryObj = {
  render: () => {
    const container = document.createElement("ul");
    container.className = "icon-list";
    for (const icon of icons) {
      const iconListElement = document.createElement("li");
      const iconElement = document.createElement("span");

      iconElement.className = ["glyphicon", `glyphicon-${icon}`].join(" ");

      const iconName = document.createElement("span");
      iconName.innerText = icon;

      iconListElement.appendChild(iconElement);
      iconListElement.appendChild(iconName);
      container.appendChild(iconListElement);
    }

    return container;
  },
  args: {},
  argTypes: {},
};
