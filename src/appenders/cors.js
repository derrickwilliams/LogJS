import { LEVELS } from '../levels'
import { create as createAppender } from './appender_factory'

function setFlushInterval () {
  debugger
  return global.setTimeout
}

function requiredParam (msg) {
  throw new Error(msg)
}

function currentLocation () {
  return global.location
}

function xhrTransmitter () {
  return (entries, cb) => {
    cb(null, entries)
  }
}

function flushBuffer (bfr, transmit, done) => {
  const entries = copyBuffer(bfr)
  resetBuffer(bfr)
  transmit(entries, done)
}

function copyBuffer (buffer) {
  return buffer.slice(0)
}

function resetBuffer (bfr) {
  bfr.length = 0
  return bfr
}

function flushDone (err, entries) {
  console.log('TRANSMITTED', entries.length)
}

export function CorsAppender (params = {}) {
  const {
    remoteUrl = requiredParam('remoteUrl is required'),
    setInterval: flushInterval = setFlushInterval(),
    flushTimeout = 1500,
    transmitLogs = xhrTransmitter()
  } = params

  const buffer = []
  const resetBuffer = buffer => buffer.length = 0

  const cancelFlush = setInterval(flushBuffer, flushTimeout, buffer, transmitLogs, flushDone)

  const appender = createAppender({
    name: 'CorsAppender',
    log: (...args) => bufferEntry(buffer, ...args)
  })

  return appender
}

function bufferEntry (buffer, type, timestamp, message, url, line) {
  buffer.push({ t: type, ts: timestamp, m: message, u: url, l: line })
}

