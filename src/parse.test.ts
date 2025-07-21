import { describe, expect, it } from 'vitest'
import { parseCommandString, parseKeyString, parseNameString, parseVimrc } from './parse'

describe('parse', () => {
  it('parse key', () => {
    expect(parseKeyString('d.a.m')).toEqual(['d', 'a', 'm'])
    expect(parseCommandString(':workbench.action.navigateUp')).toBe('workbench.action.navigateUp')
    expect(parseNameString('@Change...>Word_Case')).toEqual(['Change...', 'Word Case'])
  })

  it('vimrc to VS Code Vim config', () => {
    const keybindings: string[] = [
      'nnoremap <leader>.c.i :claude-code.runQuickFix',
      'nmap <c-w>.<c-l> <c-w>.l',
    ]

    expect(parseVimrc(keybindings)).toMatchInlineSnapshot(`
      {
        "normalModeKeyBindings": [
          {
            "after": [
              "<c-w>",
              "l",
            ],
            "before": [
              "<c-w>",
              "<c-l>",
            ],
          },
        ],
        "normalModeKeyBindingsNonRecursive": [
          {
            "before": [
              "<leader>",
              "c",
              "i",
            ],
            "commands": [
              "claude-code.runQuickFix",
            ],
          },
        ],
      }
    `)
  })
})
