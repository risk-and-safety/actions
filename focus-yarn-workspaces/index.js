/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 491:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

/* eslint-disable camelcase */
const child_process = __nccwpck_require__(81);
const {
  promises: { readFile, writeFile },
} = __nccwpck_require__(147);
const util = __nccwpck_require__(837);

const exec = util.promisify(child_process.exec);

const findPkgLocations = async (pkgName) => {
  const { stdout } = await exec('yarn workspaces --json info');
  const { data } = JSON.parse(stdout);
  const workspaces = JSON.parse(data);
  const pkg = workspaces[pkgName];

  if (!pkg) {
    throw new Error(`Unable to find package [${pkgName}]`);
  }

  const { location, workspaceDependencies } = pkg;

  return [location, ...workspaceDependencies.map((dep) => workspaces[dep].location)];
};

const updateYarnWorkspaces = async (rootPkgJsonPath, workspaceLocations) => {
  if (!/package.json$/.test(rootPkgJsonPath)) {
    throw new Error(`Invalid package.json path [${rootPkgJsonPath}]`);
  }

  const pkgJsonBuffer = await readFile(rootPkgJsonPath);
  const pkgJson = JSON.parse(pkgJsonBuffer.toString());

  pkgJson.workspaces = workspaceLocations;

  await writeFile(rootPkgJsonPath, JSON.stringify(pkgJson, null, 2));
};

module.exports.findPkgLocations = findPkgLocations;
module.exports.updateYarnWorkspaces = updateYarnWorkspaces;


/***/ }),

/***/ 81:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const { findPkgLocations, updateYarnWorkspaces } = __nccwpck_require__(491);

const run = async () => {
  const pkgName = process.env.INPUT_PACKAGE;
  const rootPackageJson = process.env['INPUT_ROOT-PACKAGE-JSON'] || './package.json';

  const pkgLocations = await findPkgLocations(pkgName);
  await updateYarnWorkspaces(rootPackageJson, pkgLocations);
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

})();

module.exports = __webpack_exports__;
/******/ })()
;