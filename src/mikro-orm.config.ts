import { MikroORM } from '@mikro-orm/core'
import { __prod__ } from './constants'
import { Post } from './entities/Post'
import path from 'path'

export default {
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: 'lireddit',
  host: 'database-1.cfuhjvgitkg3.ap-south-1.rds.amazonaws.com',
  user: 'postgres',
  password: 'settlin987',
  debug: !__prod__,
  type: 'postgresql',
} as Parameters<typeof MikroORM.init>[0]
