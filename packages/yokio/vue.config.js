const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
const MarkdownItContainer = require('markdown-it-container')
const MarkdownItCheckBox = require('markdown-it-task-checkbox')
const MarkdownItDec = require('markdown-it-decorate')
const wrapCustomClass = (render) => {
  return function (...args) {
    return render(...args)
      .replace('<code class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">')
  }
}
const vueMarkdown = {
  raw: true,
  preprocess: (MarkdownIt, source) => {
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">'
    }
    // ```html``` 给这种样式加个class hljs
    MarkdownIt.renderer.rules.fence = wrapCustomClass(
      MarkdownIt.renderer.rules.fence
    )
    // ```code``` 给这种样式加个class code_inline
    const codeInline = MarkdownIt.renderer.rules.code_inline
    MarkdownIt.renderer.rules.code_inline = function (...args) {
      args[0][args[1]].attrJoin('class', 'code_inline')
      return codeInline(...args)
    }
    return source
  },
  use: [
    [
      MarkdownItContainer,
      'title',
      {
        validate: params => params.trim().match(/^title\s*(.*)$/),
        render: function (tokens, idx) {
          if (tokens[idx].nesting === 1) {
            return `<div>
                        <div slot="highlight"></div></div>`
          }
          return '<div><div slot="highlight"></div></div>\n'
        }
      }
    ],
    [
      MarkdownItCheckBox,
      {
        disabled: true
      }
    ],
    [MarkdownItDec]
  ]
}
module.exports = {
  // 修改 src 目录 为 examples 目录
  pages: {
    index: {
      entry: 'examples/docs/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
    mobile: {
      entry: 'examples/demo/main.js',
      template: 'public/mobile.html',
      filename: 'mobile.html'
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    // set svg-sprite-loader
    config.module
      .rule('images')
        .use('url-loader')
          .loader('url-loader')
          .tap(options => Object.assign(options, { limit: 10240 }))
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/svg'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    config.resolve.alias
      .set('@', resolve('examples'))
      .set('@mobile', resolve('examples/demo'))
      .set('@src', resolve('src'))
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options(vueMarkdown)
      
  }
}
