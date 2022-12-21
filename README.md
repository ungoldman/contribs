# contribs

Generate contributing guidelines for a new project.

[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/contribs.svg
[npm-url]: https://www.npmjs.com/package/contribs
[downloads-image]: https://img.shields.io/npm/dm/contribs.svg

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

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) before getting started.

## License

[CC-1.0](LICENSE.md)
