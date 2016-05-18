const STORAGE_KEY = 'hasty-note'

const CREATE_NOTE = 'CREATE_NOTE'
const LOAD_NOTE = 'LOAD_NOTE'
const CLEAR_LOADED_NOTE_TITLE = 'CLEAR_LOADED_NOTE_TITLE'
const SET_LIST_POS = 'SET_LIST_POS'
const SET_SUGGESTIONS = 'SET_SUGGESTIONS'
const RESET_SUGGESTIONS = 'RESET_SUGGESTIONS'

const INPUT_THRESHOLD = 2
const KEY = {
  UP: 38,
  DOWN: 40,
  ENTER: 13,
  TAB: 9,
  ESC: 27
}

export default {
  STORAGE_KEY,
  CREATE_NOTE,
  LOAD_NOTE,
  CLEAR_LOADED_NOTE_TITLE,
  SET_LIST_POS,
  SET_SUGGESTIONS,
  INPUT_THRESHOLD,
  KEY,
}