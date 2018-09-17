# vscode-svg-icons

[![The MIT License](https://flat.badgen.net/badge/license/MIT/orange)](http://opensource.org/licenses/MIT)
[![GitHub](https://flat.badgen.net/github/release/idleberg/vscode-svg-icons)](https://github.com/idleberg/vscode-svg-icons/releases)
[![Visual Studio Marketplace](https://vsmarketplacebadge.apphb.com/installs-short/idleberg.svg-icons.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=idleberg.svg-icons)
[![Travis](https://flat.badgen.net/travis/idleberg/vscode-svg-icons)](https://travis-ci.org/idleberg/vscode-svg-icons)
[![David](https://flat.badgen.net/david/dev/idleberg/vscode-svg-icons)](https://david-dm.org/idleberg/vscode-svg-icons?type=dev)

Snippets for popular SVG icons including Octicons, Evil Icons, Open Iconic, SmartIcons Glyphs, and Bytesize ([see details](https://github.com/idleberg/vscode-svg-icons#prefixes)).

This package is also available for [Atom](https://github.com/idleberg/atom-svg-icons) and [Sublime Text](https://github.com/idleberg/sublime-svg-icons)

![Screenshot](https://raw.githubusercontent.com/idleberg/vscode-svg-icons/master/images/screenshot.gif)

*Screenshot nicked from the Sublime Text package, but you get the idea*

## Installation

### Extension Marketplace

Launch Quick Open, paste the following command, and press <kbd>Enter</kbd>

`ext install svg-icons`

### Packaged Extension

Download the package extension from the the [release page](https://github.com/idleberg/vscode-svg-icons/releases) and install it from the command-line:

```bash
$ code --install-extension svg-icons-*.vsix
```

### Clone Repository

Change to your Visual Studio Code extensions directory:

```bash
# Windows
$ cd %USERPROFILE%\.vscode\extensions

# Linux & macOS
$ cd ~/.vscode/extensions/
```

Clone repository as `svg-icons`:

```bash
$ git clone https://github.com/idleberg/vscode-svg-icons svg-icons
```

### Usage

Snippets are limited to the `html`, `blade`, `jsx` and `vue` scopes. Typing the class name of an icon using the designated prefix will complete to a SVG tag for the icon.

### Prefixes

Prefix         | SVG Icons                           | Version
---------------|-------------------------------------|--------
`bi`           | [Bytesize Icons][bi]                | 1.3
`ei`           | [Evil Icons][ei]                    | 1.8.0
`feather`      | [Feather][feather]                  | 4.7.0
`octicon`      | [GitHub Octicons][octicon]          | 6.0.1
`oi`           | [Open Iconic][oi]                   | 1.1.0
`se`           | [Speakemoji][se]                    | -
`si`           | [SmartIcons Glyphs][si]             | 1.1

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)

## Donate

You are welcome to support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/vscode-svg-icons) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`

[bi]: https://github.com/danklammer/bytesize-icons
[ei]: https://github.com/outpunk/evil-icons
[feather]: https://github.com/colebemis/feather
[octicon]: https://github.com/github/octicons
[oi]: https://github.com/iconic/open-iconic
[se]: https://github.com/rizalrenaldi/speakemoji
[si]: https://github.com/frexy/glyph-iconset
