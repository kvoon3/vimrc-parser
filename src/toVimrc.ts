import type { VimConfig } from './types'
import { objectEntries } from '@antfu/utils'
import { reverseModeMap } from './constants'

export function toVimrc(config: VimConfig): string[] {
  const keybindings: string[] = []

  for (const [configKey, bindings] of objectEntries(config)) {
    const mode = reverseModeMap[configKey]
    if (!mode || !bindings)
      continue

    for (const binding of bindings) {
      const { before, after = [], commands = [], names, silent } = binding

      const beforeStr = before.join('.')

      keybindings.push([
        mode,
        beforeStr,
        after.join('.'),
        ...commands.map(i => `:${i}`),
        names?.length && `@${names?.join('>').replaceAll(' ', '_')}`,
        silent ? '-s' : false,
      ].filter(Boolean).join(' '))
    }
  }

  return keybindings
}
