# react-vite-boilerplate

React+Vite Boilerplate

## Requirement

- Docker
  - Docker Compose
- VSCode
  - Dev Container Extension

## Usage

### Show Page

```sh
docker compose up -d
```

### Development

#### Server Side

Open `server` directory in Dev Container and

```sh
deno task start
```

#### Client Side

Open `client` directory in Dev Container and

```sh
yarn
yarn dev
```

### Development Tools

#### Server Side

##### Testing

```sh
deno task test
```

#### Client Side

##### Testing

```sh
yarn test
```

##### coverage

```sh
yarn coverage
```

##### Storybook

```sh
yarn storybook
```

##### Template Generator

- Component

```sh
yarn generate:component
```

- Hooks

```sh
yarn generate:hook
```

- Utility Function

```sh
yarn generate:function
```
