import axios from 'axios'

export default class ApiFactory {
  constructor (api = {}, options = {}) {
    this.options = Object.assign({
      timeout: 1500
    }, options || {})
    this.service = axios.create(this.options)
    this._invoke(api)
  }

  _invoke (api = {}) {
    Object.keys(api).forEach(v => {
      let invoke = new ApiInvoke(this, api[v])
      this[v] = (data = {}) => invoke.invalidate(data)
    })
  }

}

class ApiInvoke {
  /**
   *
   * @param factory [ApiFactory]
   * @param face [api interface]
   */
  constructor (factory = ApiFactory, face = {}) {
    this.factory = factory
    this.config = {
      url: face.url || '',
      method: face.method || 'GET',
      headers: face.headers || {}//Object.assign(factory.options.headers || {}, face.headers || {})
    }
    this.invoke()
  }

  invoke () {
    this.request = (function (glob) {
      let method = (glob.config.method || 'get').toUpperCase()
      switch (method) {
        case 'POST':
          return new ApiPost(glob.config)
        default:
          return new ApiGet(glob.config)
      }
    })(this)

  }

  invalidate (data = ApiOptionsBuilder) {
    let glob = this
    return new Promise((resolve, reject) => {
      // 直接调用
      glob.factory.service
        .request(glob.request.do(data))
        .then(resolve)
        .catch(reject)
    })
  }

}

class ApiGet {

  constructor (def = {}) {
    this.def = def
    this.def.headers = Object.assign({
      'Content-Type': 'application/json'
    }, this.def.headers)
  }

  do (data) {
    return Object.assign(this.def, {
      params: data
    })
  }

}

class ApiPost {

  constructor (def = {}) {
    this.def = def
    this.def.headers = Object.assign({
      'Content-Type': 'application/x-www-form-urlencoded'
    }, this.def.headers)
  }

  do (data) {
    return Object.assign(this.def, {
      data: data
    })
  }

}

/**
 * 业务交换
 * 切换传输格式
 */
export class ApiOptionsBuilder {

}
