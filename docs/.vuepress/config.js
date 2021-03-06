const path = require("path");
module.exports = {
  base: "/ltcdage-ui/",
  title: "ltcdage UI",
  description: "罗天淳大哥写个组件库试试",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Github", link: "https://github.com/a504075137" },
    ],
    sidebar: [
      {
        title: "开发指南",
        collapsable: true,
        children: ["views/guide/install.md", "views/guide/get-started.md"],
      },
      {
        title: "设计",
        collapsable: true,
        children: ["views/design/color/"],
      },
      {
        title: "组件",
        collapsable: true,
        children: [
          "views/components/basic/",
          "views/components/form/",
          "views/components/navigation/",
          "views/components/notice/",
          "views/components/other/",
        ],
      },
    ],
  },
  scss: {
    //配置 scss 根目录
    includePaths: [path.join(__dirname, "../../style")],
  },
};
