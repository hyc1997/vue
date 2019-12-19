//这是main.js 是我们项目的JS入文件
//1.导入Jquery
import $ from 'jquery' 

$(function () {
  $('li:odd').css('backgroundColor', 'red')
  $('li:even').css('backgroundColor', function () {
    return '#' + 'D97634'
  })
})
// 当我们在 控制台，直接输入 webpack 命令执行的时候，webpack 做了以下几步：  这里配置的项目的入口文件
//  1. 首先，webpack 发现，我们并没有通过命令的形式，给它指定入口和出口
//  2. webpack 就会去 项目的 根目录中，查找一个叫做 `webpack.config.js` 的配置文件
//  3. 当找到配置文件后，webpack 会去解析执行这个 配置文件，当解析执行完配置文件后，就得到了 配置文件中，导出的配置对象
//  4. 当 webpack 拿到 配置对象后，就拿到了 配置对象中，指定的 入口  和 出口，然后进行打包构建；
// 第二部分  在package.json  配置自动执行
 //// 使用 webpack-dev-server 这个工具，来实现自动打包编译的功能
  // 1. 运行 npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
  // 2. 安装完毕后，这个 工具的用法， 和 webpack 命令的用法，完全一样
  // 3. 由于，我们是在项目中，本地安装的 webpack-dev-server ， 所以，无法把它当作 脚本命令，在powershell 终端中直接运行；（只有那些 安装到 全局 -g 的工具，才能在 终端中正常执行）
  // 4. 注意： webpack-dev-server 这个工具，如果想要正常运行，要求，在本地项目中，必须安装 webpack
  // 5. webpack-dev-server 帮我们打包生成的 bundle.js 文件，并没有存放到 实际的 物理磁盘上；而是，直接托管到了 电脑的内存中，所以，我们在 项目根目录中，根本找不到 这个打包好的 bundle.js;
  // 6. 我们可以认为， webpack-dev-server 把打包好的 文件，以一种虚拟的形式，托管到了 咱们项目的 根目录中，虽然我们看不到它，但是，可以认为， 和 dist  src   node_modules  平级，有一个看不见的文件，叫做 bundle.js
 
