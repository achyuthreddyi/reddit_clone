import { MikroORM } from '@mikro-orm/core'
import { __prod__ } from './constants'
import { Post } from './entities/Post'
import { microConfig } from './mikro-orm.config'

// const constants = {
//   entities: [Post],
//   dbName: 'lireddit',
//   host: 'database-1.cfuhjvgitkg3.ap-south-1.rds.amazonaws.com',
//   user: 'postgres',
//   password: 'settlin987',
//   debug: !__prod__,
//   type: 'postgresql',
// } as const
// constants.type
const main = async () => {
  const orm = await MikroORM.init(microConfig)

  //  just creates the instance just similar to the one if we had done using a constructor so the next line is required
  const post = orm.em.create(Post, { title: 'my first post ' })
  await orm.em.persistAndFlush(post)

  console.log('------------ sql2')
  await orm.em.nativeInsert(Post, { title: 'my first p[ost 2' })
}

main().catch((err) => {
  console.log(err)
})
