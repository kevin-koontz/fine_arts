import { reactive } from 'vue'
import { FineArt } from "./models/FineArt.js"

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  //NOTE - Below here = not raw template
  /** @type {FineArt[]} */
  finearts: []
})

