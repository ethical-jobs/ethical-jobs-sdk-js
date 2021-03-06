import canUseDom from './canUseDom';
import hasWindowEnv from './hasWindowEnv';

/**
 * Gets best fit env var or returns fallback
 * @param {String} key
 * @param {mixed} defaultValue
 * @return {mixed}
 */
export default function getEnvironmentVariable(key, defaultValue = null) {
  if (canUseDom()) {
    return hasWindowEnv() && window._env_[key] || window[key] || defaultValue;
  }
  return process.env[key] || process.env[`REACT_APP_${key}`] || defaultValue;
}
