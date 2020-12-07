# vue_app_template

## Project structure

- public (public files for app)
- src (app source code)
  - assets (e.g. images)
  - components (reusable components)
  - plugins (vue plugins)
  - router (view routers)
  - services (services for vuex store actions)
  - store (vuex store and sub-stores)
  - views (views for app)
  - App (main view for app)
  - main(.js) (app entry point)
- Dockerfile (dockerfile for app image)
- package(.json) (npm dependencies and configs)
- README (project description)

---

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

## run with docker simple dev

### build image

```
docker build -t vue_app:simple -f Dockerfile.simple .
```

### run container

```
docker run -d -p 8080:8080 --rm --name vue_app vue_app:simple
```

## run with docker prod ready

### build image

```
docker build -t vue_app:latest -f Dockerfile.prod .
```

### run container

```
docker run -d -p 8080:8080 --rm --name vue_app vue_app:latest
```

---

---

## important dependencies (libs)

- [vue](https://vuejs.org/)
- [vue router](https://router.vuejs.org/)
- [vuex store](https://vuex.vuejs.org/)
- [vuetify](https://vuetifyjs.com/en/)
- [axios](https://github.com/axios/axios)

---

to-do's:

- catch exceptions api calls
- add unit tests
