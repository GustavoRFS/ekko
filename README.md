# Ultimate Bravery Client

The idea here is to make a custom client for League, for creating custom games, with custom rules.

This "custom client" controls the League Client via [LCU API](https://riot-api-libraries.readthedocs.io/en/latest/lcu.html), with help of [Needlework.net](https://github.com/BlossomiShymae/Needlework.Net).

Using [Wails](https://github.com/wailsapp/wails) (GO backend + JS/TS frontend)

<p align="left">
<strong>English</strong> | 
<a href="https://github.com/xijaja/wails-template-solid-ts/blob/main/README_ZH.md">中文</a></p>
<h1 align="center">wails-template-solid-ts</h1>

<p align="center">Wails template which includes: Vite, Solid, TypeScript out of the box</p>

## Use this template

```bash
wails init -n my-wails-solid -t https://github.com/xijaja/wails-template-solid-ts
```

## Live Development

Run `wails dev` in the project directory to start it.

If you want to debug in the browser, please enter the `frontend` directory in another terminal, and then execute `npm run dev`, the front-end development server will run on http://localhost:34115.

## Building

To build a redistributable, production mode package, use `wails build`.
