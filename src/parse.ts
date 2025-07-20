import type { ModeMap } from './constants'
import type { Keybinding, VimConfig, VimKeybinding } from './types'
import { modeMap } from './constants'

export function parseVimrc(vimrc: (Keybinding | string)[]): VimConfig {
  const result: VimConfig = {}

  for (const item of vimrc) {
    const [mode, before, after, commands, names, silent] = typeof item === 'string'
      ? parseItem(item)
      : item

    const target = modeMap[mode as keyof ModeMap]
    if (!target)
      continue

    if (!result[target])
      result[target] = []

    const config: VimKeybinding = {
      before,
    }

    if (after.length)
      config.after = after

    if (commands.length)
      config.commands = commands

    if (names.length)
      config.names = names

    if (silent)
      config.silent = silent

    result[target].push(config)
  }

  return result
}

export function parseItem(item: string): Keybinding {
  const parts = item.trim().split(/\s+/)

  if (parts.length < 2) {
    throw new Error('Invalid keybinding format: must have at least mode and before')
  }

  const [mode, beforeStr, ...rest] = parts

  const before = parseKeyString(beforeStr)

  const { commands, after, names, silent } = rest.reduce(
    (acc, part) => {
      if (isCommand(part)) {
        acc.commands.push(parseCommandString(part))
      }
      else if (isNames(part)) {
        acc.names.push(...parseNameString(part))
      }
      else if (isArg(part)) {
        if (['-s', '--silent'].includes(part))
          acc.silent = true
      }
      else if (isKey(part)) {
        acc.after.push(...parseKeyString(part))
      }

      return acc
    },
    {
      commands: [] as string[],
      after: [] as string[],
      names: [] as string[],
      silent: false,
    },
  )

  return [mode, before, after, commands, names, silent]
}

export function parseKeyString(keyStr: string): string[] {
  return keyStr.split('.')
}

export function parseCommandString(cmdStr: string): string {
  return cmdStr.slice(1)
}

export function parseNameString(cmdStr: string): string[] {
  return cmdStr.slice(1)?.replaceAll('_', ' ')?.split('>').filter(Boolean)
}

export function isNames(str: string): boolean {
  return str.startsWith('@')
}

export function isCommand(str: string): boolean {
  return str.startsWith(':')
}

export function isArg(str: string): boolean {
  return str.startsWith('-')
}

export function isKey(str: string): boolean {
  return str.length > 0
}
