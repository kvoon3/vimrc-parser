export type VimMode
  = 'nmap'
    | 'nnoremap'
    | 'imap'
    | 'inoremap'
    | 'vmap'
    | 'vnoremap'

export type VSCodeVimMode
  = 'vim.normalModeKeyBindings'
    | 'vim.normalModeKeyBindingsNonRecursive'
    | 'vim.insertModeKeyBindings'
    | 'vim.insertModeKeyBindingsNonRecursive'
    | 'vim.visualModeKeyBindings'
    | 'vim.visualModeKeyBindingsNonRecursive'

export const modeMap: Record<VimMode, VSCodeVimMode> = {
  nmap: 'vim.normalModeKeyBindings',
  nnoremap: 'vim.normalModeKeyBindingsNonRecursive',
  imap: 'vim.insertModeKeyBindings',
  inoremap: 'vim.insertModeKeyBindingsNonRecursive',
  vmap: 'vim.visualModeKeyBindings',
  vnoremap: 'vim.visualModeKeyBindingsNonRecursive',
} as const

export const reverseModeMap: Record<VSCodeVimMode, VimMode> = {
  'vim.normalModeKeyBindings': 'nmap',
  'vim.normalModeKeyBindingsNonRecursive': 'nnoremap',
  'vim.insertModeKeyBindings': 'imap',
  'vim.insertModeKeyBindingsNonRecursive': 'inoremap',
  'vim.visualModeKeyBindings': 'vmap',
  'vim.visualModeKeyBindingsNonRecursive': 'vnoremap',
} as const

export type ModeMap = typeof modeMap
