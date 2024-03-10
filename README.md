# The Box
The Box is a game where you must complete various missions more and more quickly in order to increase your score. You will have to figure out yourself how to complete the objectives.

## Quickstart

### Create a folder for your project and move to it

### Clone (or fork, or download)

```sh
git clone https://github.com/Tupidix/IM-VR.git .
```

### Install dependencies

```sh
npm ci
```

### Dev

```sh
npm run dev
```

### Build

```sh
npm run build
```

## Notes for local dev on VR headset

1. Check that your development device and your VR headset are connected on **the same network**.

2. Expose you local development:

```sh
npm run dev-expose
```

3. In your VR headset, browse to the local development adress `[ip]:[port]`.

> [!NOTE]  
> The certificate is self-signed, so you will probably have to confirm access to the resource in your browser.

---

# Bugs // not working
I can't take away the Raycaster in VR mode.

Timer always start at 10 (it shouldn't).
