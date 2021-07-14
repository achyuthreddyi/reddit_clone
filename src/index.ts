import { MikroORM } from '@mikro-orm/core'
import { __prod__ } from './constants'
// import { Post } from './entities/Post'
import microConfig from './mikro-orm.config'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { HelloResolver, HelloResolver1 } from './resolvers/hello'

const main = async () => {
  const orm = await MikroORM.init(microConfig)
  orm.getMigrator().up()

  const app = express()

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, HelloResolver1],
      validate: false,
    }),
  })
  await apolloServer.start()

  apolloServer.applyMiddleware({ app })

  app.listen(4000, () => {
    console.log('server started at port 4000')
  })
}

main().catch((err) => {
  console.log(err)
})
