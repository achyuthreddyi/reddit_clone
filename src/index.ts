import { MikroORM } from '@mikro-orm/core'
import { __prod__ } from './constants'
// import { Post } from './entities/Post'
import microConfig from './mikro-orm.config'
import express from 'express'

const main = async () => {
  const orm = await MikroORM.init(microConfig)
  orm.getMigrator().up()

  const app = express()

  app.get('/', (_, res) => {
    res.send('working')
  })
  app.listen(4000, () => {
    console.log('server started at port 4000')
  })
}

main().catch((err) => {
  console.log(err)
})
