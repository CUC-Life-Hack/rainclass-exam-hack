这是 CUC Life Hack 的浏览器 Userscript 外挂的模板项目。
你可以将其克隆到本地以快速开始新的外挂开发。

```shell
mkdir [hack-name] && cd [hack-name]
git clone https://github.com/CUC-Life-Hack/userscript-hack-template.git .
rm -rf .git
# git init
npm i && npm update
```

本模板项目采用 [webpack](https://github.com/webpack/webpack) 配合 [webpack-userscript](
	https://github.com/momocow/webpack-userscript
) 插件来支持模块化的开发风格。

克隆完毕后，请到 `./webpack.config.js` 中配置外挂信息。
