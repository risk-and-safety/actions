# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.3.3](https://github.com/risk-and-safety/platform/compare/github-actions@3.3.2...github-actions@3.3.3) (2021-03-09)


### Bug Fixes

* **deploy:** adding label should not wipe out changelog ([0d9abf9](https://github.com/risk-and-safety/platform/commit/0d9abf95412946d4ae374e1e74bee038861e2dfb))





## [3.3.2](https://github.com/risk-and-safety/platform/compare/github-actions@3.3.1...github-actions@3.3.2) (2021-03-05)


### Bug Fixes

* **deploy:** labeler git diff should use fork point ([f223807](https://github.com/risk-and-safety/platform/commit/f223807ee1f8882a2678a508ded661fc3d7bf997))





## [3.3.1](https://github.com/risk-and-safety/platform/compare/github-actions@3.3.0...github-actions@3.3.1) (2021-03-03)

**Note:** Version bump only for package github-actions





# [3.3.0](https://github.com/risk-and-safety/platform/compare/github-actions@3.2.4...github-actions@3.3.0) (2021-03-02)


### Bug Fixes

* **deploy:** invalid functionName param in lambda-deploy ([31268ae](https://github.com/risk-and-safety/platform/commit/31268aea1596636046c52d5ffe376c6c969aac38))


### Features

* **changelog:** allow skipping GitHub Release/Slack changelog ([1b8bb0f](https://github.com/risk-and-safety/platform/commit/1b8bb0f6cd7dfaf6f46718b05ad470d45a51b4a1))
* **deploy:** check Docker image / S3 zip for file hash match ([133a167](https://github.com/risk-and-safety/platform/commit/133a167980e9a96f9520986509ecd7e34afbf6d9))
* **deploy:** find pkg.json by PR labels ([edd2ba6](https://github.com/risk-and-safety/platform/commit/edd2ba691281b852a5ec9c05a84b89d920b1c2fa))
* **deploy:** reduce Github Actions from 36 to 3 using matrix ([f99504a](https://github.com/risk-and-safety/platform/commit/f99504aea26025318b79ef3fd0e4dbbfa7d676b6))





## [3.2.4](https://github.com/risk-and-safety/platform/compare/github-actions@3.2.3...github-actions@3.2.4) (2021-01-12)


### Bug Fixes

* **deploy:** catch npm publish errors, allow npm and GitHub ([18e9102](https://github.com/risk-and-safety/platform/commit/18e910278eb07e49e166fe3a460a46dcf23c9200))





## [3.2.3](https://github.com/risk-and-safety/platform/compare/github-actions@3.2.2...github-actions@3.2.3) (2021-01-11)

**Note:** Version bump only for package github-actions





## [3.2.2](https://github.com/risk-and-safety/platform/compare/github-actions@3.2.1...github-actions@3.2.2) (2020-12-18)


### Bug Fixes

* **logging:** downgrade middleware to Node12 syntax for printable ([0b8c15a](https://github.com/risk-and-safety/platform/commit/0b8c15a90750add9890868e7296c9879498f577c))





## [3.2.1](https://github.com/risk-and-safety/platform/compare/github-actions@3.2.0...github-actions@3.2.1) (2020-12-18)


### Bug Fixes

* **logging:** bump @rss/common-nodejs for middleware fix ([7e808e2](https://github.com/risk-and-safety/platform/commit/7e808e28d0f2cb2d8af7bdcd8e9bfdfebd8df0ec))





# [3.2.0](https://github.com/risk-and-safety/platform/compare/github-actions@3.1.11...github-actions@3.2.0) (2020-12-18)


### Bug Fixes

* **logging:** bunyan middleware, copy body.user to req.user ([455e656](https://github.com/risk-and-safety/platform/commit/455e656ba0ad0234df1e22e1964deff7d10fca2a))


### Features

* **logging:** trim body.user, response length IN-563, response time PC-284 ([f0e745c](https://github.com/risk-and-safety/platform/commit/f0e745c953c8126106729c31501697a89f238c13))





## [3.1.11](https://github.com/risk-and-safety/platform/compare/github-actions@3.1.10...github-actions@3.1.11) (2020-12-12)


### Bug Fixes

* **node:** bump version to handle security concern ([514a1be](https://github.com/risk-and-safety/platform/commit/514a1be6fc9664585c6ecda200209dd05af0356b))





## [3.1.10](https://github.com/risk-and-safety/platform/compare/github-actions@3.1.9...github-actions@3.1.10) (2020-11-18)

**Note:** Version bump only for package github-actions





## [3.1.9](https://github.com/risk-and-safety/platform/compare/github-actions@3.1.8...github-actions@3.1.9) (2020-11-11)


### Bug Fixes

* **logging:** prevent logging entire req in node 14 ([640176a](https://github.com/risk-and-safety/platform/commit/640176a8a65173c4155086876d032ac6c21e0184))





## [3.1.8](https://github.com/risk-and-safety/platform/compare/github-actions@3.1.7...github-actions@3.1.8) (2020-10-30)

**Note:** Version bump only for package github-actions





## [3.1.7](https://github.com/risk-and-safety/platform/compare/github-actions@3.1.6...github-actions@3.1.7) (2020-10-19)

**Note:** Version bump only for package github-actions





## [3.1.6](https://github.com/risk-and-safety/platform/compare/github-actions@3.1.5...github-actions@3.1.6) (2020-10-16)

**Note:** Version bump only for package github-actions





## [3.1.5](https://github.com/risk-and-safety/platform/compare/github-actions@3.1.4...github-actions@3.1.5) (2020-10-08)

**Note:** Version bump only for package github-actions





## [3.1.4](https://github.com/risk-and-safety/platform/compare/github-actions@3.1.3...github-actions@3.1.4) (2020-10-08)

**Note:** Version bump only for package github-actions





## [3.1.3](https://github.com/risk-and-safety/platform/compare/github-actions@3.1.2...github-actions@3.1.3) (2020-09-29)


### Bug Fixes

* **deploy:** limit Docker prune to <100 ([5cd40e1](https://github.com/risk-and-safety/platform/commit/5cd40e1dff7dce308f8a6ab2408ecb47982435b9))





## [3.1.2](https://github.com/risk-and-safety/platform/compare/github-actions@3.1.1...github-actions@3.1.2) (2020-09-26)


### Bug Fixes

* **deploy:** multiple GH packages of same name ([d98f74c](https://github.com/risk-and-safety/platform/commit/d98f74c84c3c1946b5913bd15417bd25ec7c0778))





## [3.1.1](https://github.com/risk-and-safety/platform/compare/github-actions@3.1.0...github-actions@3.1.1) (2020-09-19)

**Note:** Version bump only for package github-actions





# [3.1.0](https://github.com/risk-and-safety/platform/compare/github-actions@3.0.0...github-actions@3.1.0) (2020-09-18)


### Features

* **github-actions:** output Docker image name(s) when building ([e88e45b](https://github.com/risk-and-safety/platform/commit/e88e45bc5372ab52b88ace5db2f16722485cd308))





# [3.0.0](https://github.com/risk-and-safety/platform/compare/github-actions@2.0.0...github-actions@3.0.0) (2020-09-15)


### Bug Fixes

* **deploy:** check latest image from GitHub ([ecc74f3](https://github.com/risk-and-safety/platform/commit/ecc74f38f39baad3e0392b85ebc7a1347900b203))


### BREAKING CHANGES

* **deploy:** Requires the GITHUB_TOKEN to query for the lastest image





# [2.0.0](https://github.com/risk-and-safety/platform/compare/github-actions@1.5.10...github-actions@2.0.0) (2020-09-05)


### Bug Fixes

* **deploy:** fix docker tag from label ([a4fdfac](https://github.com/risk-and-safety/platform/commit/a4fdfac89269ff443e8a5a31f1f42ddeb8a11814))
* **deploy:** keep orig git commit as tag ([a180f62](https://github.com/risk-and-safety/platform/commit/a180f622f68170e7ac6f9adfd01983f23eae8fd8))
* **deploy:** revert slack api version 5.11 -> 5.10 for breaking change ([abcdd8b](https://github.com/risk-and-safety/platform/commit/abcdd8b615d1f0dfec15e53d11bfe1f09d1aca11))


### Code Refactoring

* **deploy:** kube status should ignore "app not found" error ([c600eca](https://github.com/risk-and-safety/platform/commit/c600ecab5159f4e3a8700bbd87800256b824f3a0))


### Features

* **github-actions:** allow watch hc kube status ([ef5856b](https://github.com/risk-and-safety/platform/commit/ef5856b0c39fa908c7cb0a60ab6bacd93b9ded1b))


### BREAKING CHANGES

* **deploy:** using two fields for app name and docker name instead of "/" in app name





## [1.5.10-dev.7](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.5.10-dev.6...github-actions@1.5.10-dev.7) (2020-03-03)

**Note:** Version bump only for package github-actions





## [1.5.10-dev.6](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.5.10-dev.5...github-actions@1.5.10-dev.6) (2020-03-03)

**Note:** Version bump only for package github-actions





## [1.5.10-dev.5](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.5.10-dev.4...github-actions@1.5.10-dev.5) (2020-03-02)

**Note:** Version bump only for package github-actions





## [1.5.10-dev.4](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.5.10-dev.3...github-actions@1.5.10-dev.4) (2020-03-01)


### Bug Fixes

* **github-actions:** fix docker {env} tagging on build ([f4c622c](https://github.com/risk-and-safety/kube-nodejs/commit/f4c622c49af07ba394573604fbbb1ff17181d82e))
* **github-actions:** lerna-version actions.yml has incorrect main script ([79133d8](https://github.com/risk-and-safety/kube-nodejs/commit/79133d8febaacdae0366b92aa323d0a1b4908e1b))





## [1.5.10-dev.3](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.5.10-dev.2...github-actions@1.5.10-dev.3) (2020-03-01)

**Note:** Version bump only for package github-actions





## [1.5.10-dev.2](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.5.10-dev.1...github-actions@1.5.10-dev.2) (2020-02-29)


### Bug Fixes

* **github-actions:** fix build dir validator ([8a17838](https://github.com/risk-and-safety/kube-nodejs/commit/8a1783813a19ec5fc4e8b4070ae7094f30931c98))





## [1.5.10-dev.1](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.5.9...github-actions@1.5.10-dev.1) (2020-02-29)


### Bug Fixes

* **github-actions:** missing build dir on s3 stage download ([b3af945](https://github.com/risk-and-safety/kube-nodejs/commit/b3af945deefa38b85d337e7ed2c3678311c02d85))





## [1.5.10-dev.0](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.5.9...github-actions@1.5.10-dev.0) (2020-02-29)

**Note:** Version bump only for package github-actions





## [1.5.9](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.5.8...github-actions@1.5.9) (2020-02-29)

**Note:** Version bump only for package github-actions





## [1.5.8](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.5.7...github-actions@1.5.8) (2020-02-28)

**Note:** Version bump only for package github-actions





## [1.5.7](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.5.6...github-actions@1.5.7) (2020-02-28)

**Note:** Version bump only for package github-actions





## [1.5.6](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.5.5...github-actions@1.5.6) (2020-02-28)

**Note:** Version bump only for package github-actions





## [1.5.5](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.5.4...github-actions@1.5.5) (2020-02-28)

**Note:** Version bump only for package github-actions





## [1.5.4](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.5.3...github-actions@1.5.4) (2020-02-28)

**Note:** Version bump only for package github-actions





## [1.5.3](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.5.2...github-actions@1.5.3) (2020-02-28)

**Note:** Version bump only for package github-actions





## [1.5.2](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.5.2-dev.0...github-actions@1.5.2) (2020-02-28)

**Note:** Version bump only for package github-actions





## [1.5.2-dev.0](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.5.1...github-actions@1.5.2-dev.0) (2020-02-28)


### Bug Fixes

* **github-actions:** apply version bumping to dev ([cdd8580](https://github.com/risk-and-safety/kube-nodejs/commit/cdd85808e1ed45b6bb65ebc10bded7fdf94d3431))





## [1.5.1](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.5.0...github-actions@1.5.1) (2020-02-27)

**Note:** Version bump only for package github-actions





# [1.5.0](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.4.9...github-actions@1.5.0) (2020-02-27)


### Bug Fixes

* **github-runner:** allow leading slash on buildDir ([2211bc4](https://github.com/risk-and-safety/kube-nodejs/commit/2211bc411343a7f4690476071a5a764e696a0d30))


### Features

* **github-actions:** add deploy workflow for multiple apps ([01e22c7](https://github.com/risk-and-safety/kube-nodejs/commit/01e22c7476d0851577e1ff6a814e940be1284f8b))





## [1.4.9](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.4.8...github-actions@1.4.9) (2020-02-24)


### Bug Fixes

* **github-actions:** use full path for build dir in actions-release ([ee5fac7](https://github.com/risk-and-safety/kube-nodejs/commit/ee5fac7744af50053f2c5b0832ed5f1271fd8f65))





## [1.4.8](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.4.7...github-actions@1.4.8) (2020-02-24)

**Note:** Version bump only for package github-actions





## [1.4.7](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.4.6...github-actions@1.4.7) (2020-02-24)


### Bug Fixes

* **github-actions:** fix ssh config for actions.git in actions-release ([39e43f1](https://github.com/risk-and-safety/kube-nodejs/commit/39e43f18fa3f1f64934b9141c86cc58c6d2fa0c6))





## [1.4.6](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.4.5...github-actions@1.4.6) (2020-02-24)

**Note:** Version bump only for package github-actions





## [1.4.5](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.4.4...github-actions@1.4.5) (2020-02-24)

**Note:** Version bump only for package github-actions





## [1.4.4](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.4.3...github-actions@1.4.4) (2020-02-24)

**Note:** Version bump only for package github-actions





## [1.4.3](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.4.2...github-actions@1.4.3) (2020-02-24)


### Bug Fixes

* **github-actions:** fix validateRepo for git@ syntax ([97acc04](https://github.com/risk-and-safety/kube-nodejs/commit/97acc042f4a24475c79dc24d77a8ee215ea7e313))





## [1.4.2](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.4.1...github-actions@1.4.2) (2020-02-24)

**Note:** Version bump only for package github-actions





## [1.4.1](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.4.0...github-actions@1.4.1) (2020-02-24)

**Note:** Version bump only for package github-actions





# [1.4.0](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.3.0...github-actions@1.4.0) (2020-02-21)


### Features

* **github-actions:** add action for pushing compiled action to different git repo ([0146f8d](https://github.com/risk-and-safety/kube-nodejs/commit/0146f8d4ed58c45311b4371da6e9cbd99662a39c))





# [1.3.0](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.1.0...github-actions@1.3.0) (2020-02-19)


### Bug Fixes

* **github-actions:** add in missing dependencies for version ./dist/index.js bundle ([ec1ee12](https://github.com/risk-and-safety/kube-nodejs/commit/ec1ee12955edcdd4a68d058c76d3534615dd4437))
* **github-actions:** add missing ".context" to github object ([40808d5](https://github.com/risk-and-safety/kube-nodejs/commit/40808d59341687ef2a2493c8bf541f2658ece246))
* **github-actions:** bump version on merge ([afef243](https://github.com/risk-and-safety/kube-nodejs/commit/afef2437a40f54f7811c92289a6642d2976425fb))
* **github-actions:** fix setting git user.email ([fb604ea](https://github.com/risk-and-safety/kube-nodejs/commit/fb604eafd3e9d08ec534042a01a8a7f352e55d50))
* **github-actions:** fix setting git user.email locally during build ([59f3755](https://github.com/risk-and-safety/kube-nodejs/commit/59f3755adfe43e4b5de5d79964a91e0188307055))
* **github-actions:** fix setting git user.email locally during build ([d5b3a6c](https://github.com/risk-and-safety/kube-nodejs/commit/d5b3a6c6ff69ef62d07b60e9c9e0f6c690367e8e))
* **github-actions:** fix version bump params ([d178ba1](https://github.com/risk-and-safety/kube-nodejs/commit/d178ba15efb3af3526b023b12a4bcb47170a2a09))
* **github-actions:** run trueUpGitHistory if in GitHub Actions ([b0ab4a5](https://github.com/risk-and-safety/kube-nodejs/commit/b0ab4a54127a9c202646dc93fbf0510c74a734b5))
* **github-actions:** run trueUpGitHistory if in GitHub Actions ([e32bab7](https://github.com/risk-and-safety/kube-nodejs/commit/e32bab7fe18fd3568b71cd5f1ab7439aa1dafe57))
* **github-actions:** work around ncc bugs in compile.sh ([b5d97ca](https://github.com/risk-and-safety/kube-nodejs/commit/b5d97cabe976d0c8c4864a851c7b1bc6d1cd065e))


### Features

* **github-actions:** add npm script at root for releasing ([e2bec2a](https://github.com/risk-and-safety/kube-nodejs/commit/e2bec2a5298372b6953251f28a53ee4f50b1f994))
* **release:** add versioning for GitHub Actions ([2e7d868](https://github.com/risk-and-safety/kube-nodejs/commit/2e7d868c875c3f88fbbb31434b08a874d8052af3))





# [1.2.0](https://github.com/risk-and-safety/kube-nodejs/compare/@rss/github-actions@1.1.0...@rss/github-actions@1.2.0) (2020-02-13)


### Bug Fixes

* **github-actions:** add in missing dependencies for version ./dist/index.js bundle ([ec1ee12](https://github.com/risk-and-safety/kube-nodejs/commit/ec1ee12955edcdd4a68d058c76d3534615dd4437))
* **github-actions:** add missing ".context" to github object ([40808d5](https://github.com/risk-and-safety/kube-nodejs/commit/40808d59341687ef2a2493c8bf541f2658ece246))
* **github-actions:** fix setting git user.email ([fb604ea](https://github.com/risk-and-safety/kube-nodejs/commit/fb604eafd3e9d08ec534042a01a8a7f352e55d50))
* **github-actions:** fix setting git user.email locally during build ([59f3755](https://github.com/risk-and-safety/kube-nodejs/commit/59f3755adfe43e4b5de5d79964a91e0188307055))
* **github-actions:** fix setting git user.email locally during build ([d5b3a6c](https://github.com/risk-and-safety/kube-nodejs/commit/d5b3a6c6ff69ef62d07b60e9c9e0f6c690367e8e))
* **github-actions:** fix version bump params ([d178ba1](https://github.com/risk-and-safety/kube-nodejs/commit/d178ba15efb3af3526b023b12a4bcb47170a2a09))


### Features

* **github-actions:** add npm script at root for releasing ([b7b20d2](https://github.com/risk-and-safety/kube-nodejs/commit/b7b20d272c9eb2432e510c1ff42caf937bb894dd))
* **release:** add versioning for GitHub Actions ([2e7d868](https://github.com/risk-and-safety/kube-nodejs/commit/2e7d868c875c3f88fbbb31434b08a874d8052af3))






# 1.1.0 (2020-02-05)


### Bug Fixes

* **release:** add changelog to GitHub releases ([efdce10](https://github.com/risk-and-safety/kube-nodejs/commit/efdce10258697777d287b32179461fbffe7f67ed))


### Features

* **github-actions:** implement docker-build, s3-deploy, kubt-status, lambda-deploy ([dc20719](https://github.com/risk-and-safety/kube-nodejs/commit/dc20719703e9c9549af05634b31bc06f24d881b3))
