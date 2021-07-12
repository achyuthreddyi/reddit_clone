import { Entity, PrimaryKey, Property } from '@mikro-orm/core'

@Entity()
export class Post {
  @PrimaryKey()
  id!: number

  @Property({ type: 'text' })
  title!: string

  @Property({ type: 'date' })
  createdAt = new Date()

  //  new hook which would get triggered only if required
  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date()
}
