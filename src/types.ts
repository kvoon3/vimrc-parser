import type { ModeMap } from './constants'

export interface VimKeybinding {
  silent?: boolean
  before: string[]
  after?: string[]
  commands?: string[]
  names?: string[]
}

export type Keybinding = [string, string[], string[], string[], string[], boolean]

export type VimConfig = {
  [key in ModeMap[keyof ModeMap]]?: VimKeybinding[]
}
