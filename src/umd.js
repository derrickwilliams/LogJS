export function umdDefine(name, moduleDefinition, { define, module, global = {} }) {
    // UMD export
  if (typeof define !== 'undefined' && define.amd) {
    define([], () => moduleDefinition);
  }
  // CommonJS
  else if (typeof module !== 'undefined' && module.exports) {
    module.exports = moduleDefinition;
  }
  // Script tag
  else {
    global[name] = moduleDefinition;
  }

}

umdDefine('umdDefine', umdDefine, { define, module, global });