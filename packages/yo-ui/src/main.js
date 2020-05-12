import { version } from '../package.json'
import { packages } from './config.json'

import vueBemCn from 'vue-bem-cn'

const components = {}
const methods = {}
const filters = {}
const directives = {}

packages.map(item => {
  const cptName = item.name.toLowerCase()
  const pkg = require('./components/' + cptName + '/index.js').default
  require('./components/' + cptName + '/' + cptName + '.scss')
  if (!pkg) return
  if (item.type === 'component') {
    if (pkg.name) {
      components[item.name] = pkg
    } else {
      for (let n in pkg) {
        components[n] = pkg[n]
      }
    }
  } else if (item.type === 'method') {
    methods[item.name] = pkg
  } else if (item.type === 'filter') {
    filters[item.name] = pkg
  } else if (item.type === 'directive') {
    directives[item.name] = pkg
  }
})

const install = function (Vue, opts = {}) {
  if (install.installed) return

  Vue.use(vueBemCn)

  for (let cptName in methods) {
    Vue.prototype['$' + cptName.toLowerCase()] = methods[cptName]
  }

  for (let cptName in components) {
    if (components[cptName] && components[cptName].name) {
      Vue.component(components[cptName].name, components[cptName])
    }
  }

  for (let cptName in filters) {
    if (filters[cptName] && filters[cptName].name) {
      Vue.filter(cptName, filters[cptName])
    }
  }

  for (let cptName in directives) {
    if (directives[cptName] && directives[cptName].name) {
      Vue.directive(directives[cptName].name, directives[cptName])
    }
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
const API = {
  version,
  install,
  ...components,
  ...filters,
  ...directives,
  ...methods
}

export default API
