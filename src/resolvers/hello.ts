import { Query, Resolver } from 'type-graphql'

@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello() {
    return 'hello world'
  }
}
export class HelloResolver1 {
  @Query(() => String)
  hello1() {
    return 'hello world'
  }
}
