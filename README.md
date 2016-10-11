# GraphQL Compiler

Compiles ```.graphql``` in Meteor.

```
meteor add orionsoft:graphql-compiler
```

```Query.graphql```
```
type Query {
  items: [Item]
}
```

```index.js```
```js
import Query from './Query.graphql'

console.log(Query)
```
```
type Query {
  items: [Item]
}
```

So you can write your graphql schema in ```.graphql``` files and them import them as Strings.
