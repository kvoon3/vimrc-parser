export type VimMode
  = 'nmap'
    | 'nnoremap'
    | 'imap'
    | 'inoremap'
    | 'vmap'
    | 'vnoremap'

export type VSCodeVimMode
  = 'normalModeKeyBindings'
    | 'normalModeKeyBindingsNonRecursive'
    | 'insertModeKeyBindings'
    | 'insertModeKeyBindingsNonRecursive'
    | 'visualModeKeyBindings'
    | 'visualModeKeyBindingsNonRecursive'

export const modeMap: Record<VimMode, VSCodeVimMode> = {
  nmap: 'normalModeKeyBindings',
  nnoremap: 'normalModeKeyBindingsNonRecursive',
  imap: 'insertModeKeyBindings',
  inoremap: 'insertModeKeyBindingsNonRecursive',
  vmap: 'visualModeKeyBindings',
  vnoremap: 'visualModeKeyBindingsNonRecursive',
} as const

export const reverseModeMap: Record<VSCodeVimMode, VimMode> = {
  normalModeKeyBindings: 'nmap',
  normalModeKeyBindingsNonRecursive: 'nnoremap',
  insertModeKeyBindings: 'imap',
  insertModeKeyBindingsNonRecursive: 'inoremap',
  visualModeKeyBindings: 'vmap',
  visualModeKeyBindingsNonRecursive: 'vnoremap',
} as const

export type ModeMap = typeof modeMap
