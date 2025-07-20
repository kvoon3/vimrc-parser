import { describe, expect, it } from 'vitest'
import { parseVimrc } from './parse'
import { toVimrc } from './toVimrc'

describe('to vimrc', () => {
  it('vim config -> vimrc', () => {
    const configs = {
      'vim.normalModeKeyBindings': [
        {
          before: ['leader', 'c', 'c'],
          names: ['Claude Code', 'run claude'],
          commands: ['claude-code.runClaude'],
        },
        {
          before: ['leader', 'c', 'i'],
          names: ['Claude Code', 'insert at mentioned'],
          commands: ['claude-code.insertAtMentioned'],
        },
        {
          before: ['leader', 'c', 'f'],
          names: ['Claude Code', 'run quick fix'],
          commands: ['claude-code.runQuickFix'],
        },
        {
          before: [
            'leader',
            'v',
          ],
          names: ['paste json as types'],
          commands: [
            'quicktype.pasteJSONAsTypes',
          ],
        },
        {
          before: [
            '<c-s>',
          ],
          commands: [
            'workbench.action.files.save',
          ],
        },
        {
          before: [
            'leader',
            's',
          ],
          names: ['Debug restart'],
          commands: [
            'workbench.action.debug.restart',
          ],
        },
        {
          before: [
            'leader',
            'r',
            'f',
          ],
          commands: [
            'editor.action.refactor',
          ],
        },
        {
          before: [
            'leader',
            'r',
            'n',
          ],
          commands: [
            'editor.action.rename',
          ],
        },
        {
          before: [
            '<c-t>',
          ],
          commands: [
            'autoHide.action.terminal.toggleTerminal',
          ],
        },
        {
          before: [
            'v',
            'a',
            'f',
          ],
          names: ['Select function...'],
          commands: [
            'fastCodeSelector.fn.select',
          ],
        },
        {
          before: [
            'c',
            'a',
            'f',
          ],
          commands: [
            'fastCodeSelector.fn.change',
          ],
        },
        {
          before: [
            'd',
            'a',
            'f',
          ],
          commands: [
            'fastCodeSelector.fn.delete',
          ],
        },
        {
          before: [
            'v',
            'i',
            'f',
          ],
          commands: [
            'fastCodeSelector.fnBody.select',
          ],
        },
        {
          before: [
            'd',
            'i',
            'f',
          ],
          commands: [
            'fastCodeSelector.fnBody.delete',
          ],
        },
        {
          before: [
            'c',
            'i',
            'f',
          ],
          commands: [
            'fastCodeSelector.fnBody.change',
          ],
        },
        {
          before: [
            'v',
            'e',
            'f',
          ],
          commands: [
            'fastCodeSelector.fnReturn.select',
          ],
        },
        {
          before: [
            'd',
            'e',
            'f',
          ],
          commands: [
            'fastCodeSelector.fnReturn.delete',
          ],
        },
        {
          before: [
            'c',
            'e',
            'f',
          ],
          commands: [
            'fastCodeSelector.fnReturn.change',
          ],
        },
        {
          after: [
            'leader',
            'e',
            'n',
          ],
          before: [
            'leader',
            'e',
            'e',
          ],
        },
        {
          after: [
            'leader',
            'w',
            'n',
          ],
          before: [
            'leader',
            'w',
            'w',
          ],
        },
        {
          after: [
            'g',
            'g',
            'V',
            'G',
          ],
          before: [
            'leader',
            'a',
          ],
        },
        {
          before: [
            'K',
          ],
          commands: [
            'lineBreakInsert',
          ],
        },
        {
          before: [
            'leader',
            'o',
          ],
          commands: [
            'workbench.action.openView',
          ],
          names: [
            'Open view',
          ],
        },
        {
          before: [
            '<c-q>',
          ],
          commands: [
            'workbench.action.quickOpenView',
          ],
        },
        {
          after: [
            '<c-w>',
            'h',
          ],
          before: [
            '<c-w>',
            '<c-h>',
          ],
        },
        {
          after: [
            '<c-w>',
            'l',
          ],
          before: [
            '<c-w>',
            '<c-l>',
          ],
        },
        {
          after: [
            '<c-w>',
            'j',
          ],
          before: [
            '<c-w>',
            '<c-j>',
          ],
        },
      ],
      'vim.normalModeKeyBindingsNonRecursive': [
        {
          after: [
            '<c-w>',
            'k',
          ],
          before: [
            '<c-w>',
            '<c-j>',
          ],
        },
        {
          after: [
            '<c-w>',
            'k',
          ],
          before: [
            '<c-w>',
            '<c-k>',
          ],
        },
        {
          before: [
            'g',
            'f',
          ],
          commands: [
            'commandTask.editor.action.goToDeclaration',
          ],
        },
        {
          before: [
            'leader',
            'h',
          ],
          commands: [
            'continue.focusContinueInput',
            // "workbench.action.chat.openEditSession"
          ],
        },
        {
          before: [
            'leader',
            'H',
          ],
          commands: [
            'workbench.action.chat.open',
          ],
        },
        {
          before: [
            'leader',
            'i',
          ],
          commands: [
            'continue.quickEdit',
            // "workbench.action.quickchat.toggle"
            // "inlineChat.startWithCurrentLine"
          ],
        },
        {
          after: [
            'H',
            'z',
            'z',
          ],
          before: [
            'H',
          ],
        },
        {
          after: [
            'L',
            'z',
            'z',
          ],
          before: [
            'L',
          ],
        },
        {
          after: [
            'z',
            'R',
            '<C-u>',
            'z',
            'z',
          ],
          before: [
            '<C-u>',
          ],
        },
        {
          after: [
            'z',
            'R',
            '<C-d>',
            'z',
            'z',
          ],
          before: [
            '<C-d>',
          ],
        },
        {
          after: [
            '<C-f>',
            'z',
            'z',
          ],
          before: [
            '<C-f>',
          ],
        },
        {
          after: [
            '<C-b>',
            'z',
            'z',
          ],
          before: [
            '<C-b>',
          ],
        },
        {
          after: [
            'f',
            '<Enter>',
          ],
          before: [
            '<Enter>',
          ],
        },
        {
          before: [
            '<c-w>',
            'h',
          ],
          commands: [
            'autoHide.action.navigateLeft',
          ],
        },
        {
          before: [
            '<c-w>',
            'l',
          ],
          commands: [
            'autoHide.action.navigateRight',
          ],
        },
        {
          before: [
            '<c-w>',
            '<c-k>',
          ],
          commands: [
            'autoHide.action.navigateUp',
          ],
        },
        {
          before: [
            '<c-w>',
            'j',
          ],
          commands: [
            'autoHide.action.navigateDown',
          ],
        },
        {
          before: [
            'leader',
            'p',
            'g',
          ],
          commands: [
            'workbench.view.scm',
          ],
          names: [
            'Panel',
            'Git Panel',
          ],
        },
        {
          before: [
            'leader',
            'p',
            'e',
          ],
          commands: [
            'workbench.view.extensions',
          ],
          names: [
            'Panel',
            'Extension Panel',
          ],
        },
        {
          before: [
            'leader',
            'l',
          ],
          commands: [
            'editor.action.openLink',
          ],
          names: [
            'Open Link',
          ],
        },
        {
          before: [
            'leader',
            'g',
            'c',
          ],
          commands: [
            'git.openChange',
          ],
          names: [
            'Git',
            'Git Changes',
          ],
        },
        {
          before: [
            'leader',
            'g',
            'r',
          ],
          commands: [
            'git.revertSelectedRanges',
          ],
          names: [
            'Git',
            'Git Revert',
          ],
        },
        {
          before: [
            'leader',
            'g',
            's',
          ],
          commands: [
            'git.stage',
          ],
          names: [
            'Git',
            'Git stage',
          ],
        },
        {
          before: [
            'leader',
            'g',
            'S',
          ],
          commands: [
            'git.unstage',
          ],
          names: [
            'Git',
            'Git stage',
          ],
        },
        {
          before: [
            'g',
            'h',
          ],
          commands: [
            'editor.action.showDefinitionPreviewHover',
          ],
        },
        {
          before: [
            'leader',
            't',
            'n',
          ],
          commands: [
            'todo-tree.goToNext',
          ],
          names: [
            'Todo',
            'Next Todo',
          ],
        },
        {
          before: [
            'leader',
            't',
            'N',
          ],
          commands: [
            'todo-tree.goToPrevious',
          ],
          names: [
            'Todo',
            'Previous Todo',
          ],
        },
        {
          before: [
            'leader',
            't',
            'p',
          ],
          commands: [
            'todo-tree.goToPrevious',
          ],
          names: [
            'Todo',
            'Previous Todo',
          ],
        },
        {
          before: [
            'leader',
            'f',
            'f',
          ],
          commands: [
            'workbench.action.quickTextSearch',
          ],
          names: [
            'Find',
            'Find Text',
          ],
        },
        {
          before: [
            'leader',
            'f',
            's',
          ],
          commands: [
            'workbench.action.gotoSymbol',
          ],
          names: [
            'Find',
            'Find Symbol',
          ],
        },
        {
          before: [
            'leader',
            'p',
          ],
          commands: [
            'workbench.action.quickSwitchWindow',
          ],
          names: [
            'Find',
            'Find Project',
          ],
        },
        {
          before: [
            'leader',
            'leader',
          ],
          commands: [
            'whichKeyConfigGen.show',
          ],
        },
        {
          before: [
            'leader',
            'c',
            'p',
          ],
          commands: [
            'workbench.action.editor.previousChange',
          ],
          names: [
            'Changes',
            'Previous Change',
          ],
        },
        {
          before: [
            'leader',
            'c',
            'N',
          ],
          commands: [
            'workbench.action.editor.previousChange',
          ],
          names: [
            'Changes',
            'Previous Change',
          ],
        },
        {
          before: [
            'leader',
            'c',
            'n',
          ],
          commands: [
            'workbench.action.editor.nextChange',
          ],
          names: [
            'Changes',
            'Next change',
          ],
        },
        {
          before: [
            'leader',
            'e',
            'n',
          ],
          commands: [
            'go-to-next-error.next.error',
          ],
          names: [
            'Errors',
            'Next error',
          ],
        },
        {
          before: [
            'leader',
            'e',
            'N',
          ],
          commands: [
            'go-to-next-error.prev.error',
          ],
          names: [
            'Errors',
            'Previous Error',
          ],
        },
        {
          before: [
            'leader',
            'e',
            'p',
          ],
          commands: [
            'go-to-next-error.prev.error',
          ],
          names: [
            'Errors',
            'Provious Error',
          ],
        },
        {
          before: [
            'leader',
            'w',
            'n',
          ],
          commands: [
            'go-to-next-error.next.warning',
          ],
          names: [
            'Warnings',
            'Next warning',
          ],
        },
        {
          before: [
            'leader',
            'w',
            'N',
          ],
          commands: [
            'go-to-next-error.prev.warning',
          ],
          names: [
            'Warnings',
            'Previous warning',
          ],
        },
        {
          before: [
            'leader',
            'w',
            'p',
          ],
          commands: [
            'go-to-next-error.prev.warning',
          ],
          names: [
            'Warnings',
            'Previous warning',
          ],
        },
        {
          after: [
            'i',
          ],
          before: [
            'i',
          ],
          commands: [
            'kcs.activateSelections',
          ],
          silent: true,
        },
        {
          before: [
            'leader',
            'enter',
          ],
          commands: [
            'kcs.placeInactiveSelection',
          ],
          names: [
            'Insert Cursor',
          ],
        },
        {
          before: [
            'g',
            'p',
            'd',
          ],
          commands: [
            'editor.action.peekDefinition',
          ],
        },
        {
          before: [
            'g',
            'i',
          ],
          commands: [
            'editor.action.goToImplementation',
          ],
        },
        {
          before: [
            'g',
            'p',
            'i',
          ],
          commands: [
            'editor.action.peekImplementation',
          ],
        },
        {
          before: [
            'g',
            'r',
          ],
          commands: [
            'editor.action.referenceSearch.trigger',
          ],
        },
        {
          before: [
            'g',
            't',
          ],
          commands: [
            'editor.action.goToTypeDefinition',
          ],
        },
        {
          before: [
            'g',
            'p',
            't',
          ],
          commands: [
            'editor.action.peekTypeDefinition',
          ],
        },
      ],
      'vim.visualModeKeyBindings': [
        {
          before: [
            '<c-t>',
          ],
          commands: [
            'autoHide.action.terminal.toggleTerminal',
          ],
        },
        {
          before: ['leader', '2'],
          commands: ['claude-code.insertAtMentioned'],
        },
        {
          before: [
            'leader',
            'h',
          ],
          commands: [
            'continue.focusContinueInput',
            // "github.copilot.edits.attachSelection"
          ],
        },
        {
          before: [
            'leader',
            'i',
          ],
          commands: [
            'continue.quickEdit',
            // "workbench.action.quickchat.toggle"
          ],
          names: [
            'Continue Quick Edit',
          ],
        },
      ],
      'vim.visualModeKeyBindingsNonRecursive': [
        {
          before: [
            ']',
          ],
          commands: [
            'tailwind-class-genie.switchClassUp',
          ],
        },
        {
          before: [
            '[',
          ],
          commands: [
            'tailwind-class-genie.switchClassDown',
          ],
        },
        {
          before: [
            'v',
          ],
          commands: [
            'smartClicks.trigger',
          ],
          names: [
            'Smart Select',
          ],
        },
        {
          before: [
            'm',
          ],
          commands: [
            'editor.action.smartSelect.expand',
          ],
        },
        {
          before: [
            ',',
          ],
          commands: [
            'editor.action.smartSelect.shrink',
          ],
        },
        {
          after: [
            'p',
            'g',
            'v',
            'y',
          ],
          before: [
            'p',
          ],
        },
        {
          before: [
            '>',
          ],
          commands: [
            'editor.action.indentLines',
          ],
        },
        {
          before: [
            '<',
          ],
          commands: [
            'editor.action.outdentLines',
          ],
        },
        {
          before: [
            'leader',
            'g',
            's',
          ],
          commands: [
            'git.stageSelectedRanges',
          ],
          names: [
            'Git',
            'Git stage',
          ],
        },
        {
          before: [
            'leader',
            'g',
            'S',
          ],
          commands: [
            'git.unstageSelectedRanges',
          ],
          names: [
            'Git',
            'Git stage',
          ],
        },
        {
          before: [
            'leader',
            'v',
          ],
          commands: [
            'smartClicks.trigger',
          ],
          names: [
            'Smart Select',
          ],
        },
        // issue: https://github.com/VSCodeVim/Vim/issues/3740#issuecomment-1500901565
        {
          before: [
            'g',
            'h',
          ],
          commands: [
            'editor.action.showDefinitionPreviewHover',
          ],
        },
        {
          before: [
            'leader',
            'leader',
          ],
          commands: [
            'whichKeyConfigGen.show',
          ],
        },
        {
          before: [
            'leader',
            'enter',
          ],
          commands: [
            'kcs.placeInactiveSelection',
          ],
          names: [
            'Inactive Selection',
          ],
        },
      ],
      'vim.insertModeKeyBindings': [
        {
          before: [
            '<c-s>',
          ],
          commands: [
            'workbench.action.files.save',
          ],
        },
        {
          before: [
            '<c-l>',
          ],
          commands: [
            'toggleSuggestionDetails',
          ],
        },
      ],
    }

    expect(toVimrc(configs)).toMatchSnapshot('short vim config')

    expect(parseVimrc(toVimrc(configs))).toEqual(configs)
  })
})
