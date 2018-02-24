# contribs

Generate contributing guidelines for a new project.

[![npm][1]][2]
[![travis][3]][4]
[![standard][5]][6]
[![downloads][7]][2]

[1]: https://img.shields.io/npm/v/contribs.svg?style=flat-square
[2]: https://www.npmjs.com/package/contribs
[3]: https://img.shields.io/travis/ungoldman/contribs/master.svg?style=flat-square
[4]: https://travis-ci.org/ungoldman/contribs
[5]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[6]: http://standardjs.com/
[7]: https://img.shields.io/npm/dm/contribs.svg?style=flat-square

## About

This is a tiny terminal program for creating [contributing guidelines](https://help.github.com/articles/setting-guidelines-for-repository-contributors/) for a new open source project.

## Usage

The `contribs` command pipes the contents of the `CONTRIBUTING.md` file in this repository to [`stdout`](https://nodejs.org/api/process.html#process_process_stdout).

```
npx contribs > filename.md

-h,--help      print usage info
-v,--version   print version info
```

### Example

```
npx contribs > CONTRIBUTING.md
```

You can achieve the same effect as above by copying a random `CONTRIBUTING.md` file from the internet into your project manually (except you can fork and improve this one).

On OS X you can also run `npx contribs | pbcopy` and you'll get a copy of the contributing guidelines ready to paste anywhere.

## Credit

The contents of this project's `CONTRIBUTING.md` file are drawn from [OPEN Open Source Project](http://openopensource.org/), [jden](https://github.com/jden)'s [CONTRIBUTING.md](https://github.com/jden/CONTRIBUTING.md), [Friends](https://github.com/moose-team/friends), [WebTorrent Desktop](https://github.com/feross/webtorrent-desktop/blob/master/CONTRIBUTING.md), and [shigeru](https://github.com/moonglum/shigeru/blob/master/CONTRIBUTING.md).

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) before getting started.

## License

[CC-1.0](LICENSE.md)
