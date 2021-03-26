import markdownIt from 'markdown-it'

import 'highlight.js/styles/github.css';
import hljs from 'highlight.js'

const highlightPlugin = (md) => {
  const temp = md.renderer.rules.fence.bind(md.renderer.rules)
  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    const token = tokens[idx]
    const code = token.content.trim()
    if (token.info.length > 0) {
      return `<pre><code class="hljs">${hljs.highlightAuto(code, [token.info]).value}</code></pre>`
    }
    return temp(tokens, idx, options, env, slf)
  }
}



const md = new markdownIt({
	html: true,
	breaks: false
})

md.use(highlightPlugin)

export default md