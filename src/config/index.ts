import type { ProcessorConfig } from './processorConfig'
import fs from 'fs'

export const BLACKLIST_CONFIG: IBlackListConfing = getJSON(
  'assets/blacklist-config.json'
)

interface IBlackListConfing {
  blacklistItems: string[]
  argsStringMaxLengthLimit: number
}

function getJSON(filename: string) {
  const data = fs.readFileSync(filename).toString()
  return JSON.parse(data)
}

export function getChainConfig(): ProcessorConfig {
  return require('./chains/atlantis').defaultÏ
}
