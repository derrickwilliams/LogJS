import { LEVELS } from '../levels';
import { create as createAppender } from './appender_factory';

export function CorsAppender(global) {
  return createAppender({ name: 'CorsAppender', log: logFn.bind(null, global) });
};

function logFn(global = {}, type, timestamp, message, url, lineNumber) {