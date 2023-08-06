# JamNext

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Start your backend

nx run json-server:json-server

## Start the SPA app

To start the Vite development server for SPA run `nx serve jam-spa`. Open your browser and navigate to http://localhost:4200/.

## Start the JAM app

To start the Next.js development server run `nx serve jam-next` or `nx serve`. Open your browser and navigate to http://localhost:4200/. Happy coding!

## The course content (branch driven)

- [00-initial](https://github.com/llaszkie/jam-next/tree/00-initial): project structure like generated initially by `nx`
- [01-start](https://github.com/llaszkie/jam-next/tree/01-start): enhancments like: db server, scripts,
- [02-csr](https://github.com/llaszkie/jam-next/tree/02-csr): [jam-spa](https://github.com/llaszkie/jam-spa), application ported as client side rendered app,
- [03-rsc](https://github.com/llaszkie/jam-next/tree/03-rsc): server components introduced for fetching data,
- [04-image](https://github.com/llaszkie/jam-next/tree/04-image): image optimization done with `next/image`,
- [05-site-generation](https://github.com/llaszkie/jam-next/tree/05-site-generation): pre-rendering site markup for known content,
- [06-client-component](https://github.com/llaszkie/jam-next/tree/06-client-component): client features (active links),
- [07-site-export](https://github.com/llaszkie/jam-next/tree/07-site-export): exporting whole site for 100% static hosting,
- [08-unit-testing](https://github.com/llaszkie/jam-next/tree/08-unit-testing): unit testing with Jest

## Generate code

If you happen to use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/plugin-features/use-code-generators).

## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

## Want better Editor Integration?

Have a look at the [Nx Console extensions](https://nx.dev/nx-console). It provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.

## Ready to deploy?

Just run `nx build jam-next` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/core-features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/core-features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)
