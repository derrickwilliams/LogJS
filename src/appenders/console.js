import { LEVELS } from '../levels'
import { create as createAppender } from './appender_factory'

export function ConsoleAppender ({ global }) {
  return createAppender({
    name: 'ConsoleAppender',
    log(...args) {
      return logFn(global, ...args)
    }
  })
}

function logFn (glbl = {} , type, timestamp, message, url, lineNumber) {
  const { console } = glbl
  const fallback = (console && console.log) || function () {}
  const method = getMethod(type, console) || fallback

  const args = []
  args.push(new Date(timestamp))

  if (message !== undefined) args.push(message)
  if (url !== undefined) args.push(url)
  if (lineNumber !== undefined) args.push(lineNumber)
  if (method !== undefined) method.apply(console, args)
}

function getMethod (type, console) {
  const methodMap = {
    [LEVELS.ERROR]: console.error || fallback,
    [LEVELS.WARN]: console.warn || fallback
  }

  return methodMap(type)
}
