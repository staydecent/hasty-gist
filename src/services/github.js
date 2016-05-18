import GitHub from 'github-api'

import store from '../store.js'

let state = store.getState()


export default new GitHub({
   token: state.githubToken
})