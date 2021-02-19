# EcksClone Test Files

This directory contains test files from various languages to test the syntax highlighting
against.

These files aren't meant to run, they likely won't even compile on your system, so don't even
try.

## Things to check

Common programming paradigms should match between languages, for example: a variable in python
should be the same colour as a variable in javascript.

Ensure the colours are fairly similar between light/dark versions

Ensure readability with:

- Low-medium-high display brightness
- Night-light (blue light) filters
- Check colours with an colour accessibility checker

## Regressions

The following are syntax highlighting issues fixed previously that need to be checked
over to ensure the issue reported hasn't resurfaced.

### Issue #3 - Template strings don't format as normal strings

https://github.com/EcksOrg/ecksClone/issues/3

Test against: javascript/templating.js

### Issue #7 - Parentheses inside of a function call are formatted like a string

https://github.com/EcksOrg/ecksClone/issues/7

Test against: python/basic.py

### Issue #9 (light) - JSON colours unreadable on white background

https://github.com/EcksOrg/ecksClone/issues/9

Test against: javascript/json.json & javascript/json_comments.json