import vdomHyperscript from 'virtual-dom/h'
import hyperscriptHook from 'virtual-hyperscript-hook'

const h = hyperscriptHook(vdomHyperscript)

import nextTick from 'next-tick'
import R from 'ramda'
import flyd from 'flyd'

import store from '../store.js'
import {generic} from '../actions.js'
import {
  SET_TOKEN
} from '../consts.js'

export default Login


function Login(state) {
  console.debug('Login', state)

  // Handle text input
  // ----
  const inputStream = flyd.stream()

  // get value from dom event
  const inputValue = flyd.map(ev => ev.target.value, inputStream)


  // Handle form submission
  // ----
  const submitStream = flyd.stream()
  flyd.on(ev => {
    ev.preventDefault()
    store.dispatch(generic(SET_TOKEN, inputValue()))
  }, submitStream)


  // Render our template
  // ----
  const focusHook = (elm) => nextTick(() => elm.focus())

  return <div id="login">
    <form name="github-token" onsubmit={submitStream}>
      <legend>Please enter a <a href="https://github.com/settings/tokens" target="_blank">GitHub token</a>.</legend>
      <input 
        type="text" 
        name="token-input" 
        value={inputValue()}
        oninput={inputStream}
        hook={focusHook} />
    </form>
  </div>
}