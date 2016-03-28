# contribs

> Generate contributing guidelines for a new project.

[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/contribs.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/contribs

A tiny terminal program for creating [contributing guidelines](https://help.github.com/articles/setting-guidelines-for-repository-contributors/) for a new open source project.

## Install

```
npm i contribs -g
```

## Usage

The `contribs` command pipes the contents of the `CONTRIBUTING.md` file in this repository to [`stdout`](https://nodejs.org/api/process.html#process_process_stdout).

```
contribs > filename.md

-h,--help      print usage info
-v,--version   print version info
```

### Example

```
contribs > CONTRIBUTING.md
```

You can achieve the same effect as above by copying a random `CONTRIBUTING.md` file from the internet into your project manually (except you can fork and improve this one).

On OS X you can also run `contribs | pbcopy` and you'll get a copy of the contributing guidelines ready to paste anywhere.

## Credit

The contents of this project's `CONTRIBUTING.md` file are drawn from the [OPEN Open Source Project](http://openopensource.org/), [jden](https://github.com/jden)'s [CONTRIBUTING.md](https://github.com/jden/CONTRIBUTING.md) project, and the [Friends](https://github.com/moose-team/friends) and [WebTorrent.app](https://github.com/feross/webtorrent-app/blob/master/CONTRIBUTING.md) contributing guidelines.

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) before getting started.

## License

[CC-1.0](https://creativecommons.org/publicdomain/zero/1.0/)
