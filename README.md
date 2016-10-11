# GraphQL Compiler

Compiles ```.graphql``` files in Meteor.

```sh
meteor add orionsoft:graphql-compiler
```

In ```Query.graphql```:

```graphql
type Query {
  items: [Item]
}
```

In ```index.js```:

```js
import Query from './Query.graphql'

console.log(Query)
```

Log ```index.js```:
```
type Query {
  items: [Item]
}
```

So now you can write your graphql schema in ```.graphql``` files and them import them as Strings.
