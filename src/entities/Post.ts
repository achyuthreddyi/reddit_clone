import { Entity, PrimaryKey, Property } from '@mikro-orm/core'

@Entity()
export class Post {
  @PrimaryKey()
  id!: number

  @Property()
  title!: string

  @Property()
  createdAt = new Date()

  //  new hook which would get triggered only if required
  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date()
}
