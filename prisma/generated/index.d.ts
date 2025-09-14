
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model Preferences
 * 
 */
export type Preferences = $Result.DefaultSelection<Prisma.$PreferencesPayload>
/**
 * Model FavoriteRecipes
 * 
 */
export type FavoriteRecipes = $Result.DefaultSelection<Prisma.$FavoriteRecipesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.preferences`: Exposes CRUD operations for the **Preferences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Preferences
    * const preferences = await prisma.preferences.findMany()
    * ```
    */
  get preferences(): Prisma.PreferencesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favoriteRecipes`: Exposes CRUD operations for the **FavoriteRecipes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FavoriteRecipes
    * const favoriteRecipes = await prisma.favoriteRecipes.findMany()
    * ```
    */
  get favoriteRecipes(): Prisma.FavoriteRecipesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Location: 'Location',
    Preferences: 'Preferences',
    FavoriteRecipes: 'FavoriteRecipes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "location" | "preferences" | "favoriteRecipes"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      Preferences: {
        payload: Prisma.$PreferencesPayload<ExtArgs>
        fields: Prisma.PreferencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PreferencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PreferencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          findFirst: {
            args: Prisma.PreferencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PreferencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          findMany: {
            args: Prisma.PreferencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>[]
          }
          create: {
            args: Prisma.PreferencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          createMany: {
            args: Prisma.PreferencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PreferencesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>[]
          }
          delete: {
            args: Prisma.PreferencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          update: {
            args: Prisma.PreferencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          deleteMany: {
            args: Prisma.PreferencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PreferencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PreferencesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>[]
          }
          upsert: {
            args: Prisma.PreferencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          aggregate: {
            args: Prisma.PreferencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreferences>
          }
          groupBy: {
            args: Prisma.PreferencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreferencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PreferencesCountArgs<ExtArgs>
            result: $Utils.Optional<PreferencesCountAggregateOutputType> | number
          }
        }
      }
      FavoriteRecipes: {
        payload: Prisma.$FavoriteRecipesPayload<ExtArgs>
        fields: Prisma.FavoriteRecipesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteRecipesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRecipesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteRecipesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRecipesPayload>
          }
          findFirst: {
            args: Prisma.FavoriteRecipesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRecipesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteRecipesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRecipesPayload>
          }
          findMany: {
            args: Prisma.FavoriteRecipesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRecipesPayload>[]
          }
          create: {
            args: Prisma.FavoriteRecipesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRecipesPayload>
          }
          createMany: {
            args: Prisma.FavoriteRecipesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteRecipesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRecipesPayload>[]
          }
          delete: {
            args: Prisma.FavoriteRecipesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRecipesPayload>
          }
          update: {
            args: Prisma.FavoriteRecipesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRecipesPayload>
          }
          deleteMany: {
            args: Prisma.FavoriteRecipesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteRecipesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteRecipesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRecipesPayload>[]
          }
          upsert: {
            args: Prisma.FavoriteRecipesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRecipesPayload>
          }
          aggregate: {
            args: Prisma.FavoriteRecipesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavoriteRecipes>
          }
          groupBy: {
            args: Prisma.FavoriteRecipesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteRecipesGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteRecipesCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteRecipesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    location?: LocationOmit
    preferences?: PreferencesOmit
    favoriteRecipes?: FavoriteRecipesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    favoriteRecipes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoriteRecipes?: boolean | UserCountOutputTypeCountFavoriteRecipesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoriteRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteRecipesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    cognitoId: number
    email: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    cognitoId?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    cognitoId?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    cognitoId?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    cognitoId: string
    email: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    email?: boolean
    favoriteRecipes?: boolean | User$favoriteRecipesArgs<ExtArgs>
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    location?: boolean | User$locationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    cognitoId?: boolean
    email?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cognitoId" | "email", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoriteRecipes?: boolean | User$favoriteRecipesArgs<ExtArgs>
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    location?: boolean | User$locationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      favoriteRecipes: Prisma.$FavoriteRecipesPayload<ExtArgs>[]
      preferences: Prisma.$PreferencesPayload<ExtArgs> | null
      location: Prisma.$LocationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cognitoId: string
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    favoriteRecipes<T extends User$favoriteRecipesArgs<ExtArgs> = {}>(args?: Subset<T, User$favoriteRecipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteRecipesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preferences<T extends User$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, User$preferencesArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    location<T extends User$locationArgs<ExtArgs> = {}>(args?: Subset<T, User$locationArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly cognitoId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.favoriteRecipes
   */
  export type User$favoriteRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipes
     */
    select?: FavoriteRecipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRecipes
     */
    omit?: FavoriteRecipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRecipesInclude<ExtArgs> | null
    where?: FavoriteRecipesWhereInput
    orderBy?: FavoriteRecipesOrderByWithRelationInput | FavoriteRecipesOrderByWithRelationInput[]
    cursor?: FavoriteRecipesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteRecipesScalarFieldEnum | FavoriteRecipesScalarFieldEnum[]
  }

  /**
   * User.preferences
   */
  export type User$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    where?: PreferencesWhereInput
  }

  /**
   * User.location
   */
  export type User$locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type LocationSumAggregateOutputType = {
    id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type LocationMinAggregateOutputType = {
    id: number | null
    userCognitoId: string | null
    country: string | null
    city: string | null
    address: string | null
    radius: string | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type LocationMaxAggregateOutputType = {
    id: number | null
    userCognitoId: string | null
    country: string | null
    city: string | null
    address: string | null
    radius: string | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    userCognitoId: number
    country: number
    city: number
    address: number
    radius: number
    latitude: number
    longitude: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type LocationSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    userCognitoId?: true
    country?: true
    city?: true
    address?: true
    radius?: true
    latitude?: true
    longitude?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    userCognitoId?: true
    country?: true
    city?: true
    address?: true
    radius?: true
    latitude?: true
    longitude?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    userCognitoId?: true
    country?: true
    city?: true
    address?: true
    radius?: true
    latitude?: true
    longitude?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: number
    userCognitoId: string
    country: string
    city: string
    address: string
    radius: string
    latitude: Decimal
    longitude: Decimal
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userCognitoId?: boolean
    country?: boolean
    city?: boolean
    address?: boolean
    radius?: boolean
    latitude?: boolean
    longitude?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userCognitoId?: boolean
    country?: boolean
    city?: boolean
    address?: boolean
    radius?: boolean
    latitude?: boolean
    longitude?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userCognitoId?: boolean
    country?: boolean
    city?: boolean
    address?: boolean
    radius?: boolean
    latitude?: boolean
    longitude?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    userCognitoId?: boolean
    country?: boolean
    city?: boolean
    address?: boolean
    radius?: boolean
    latitude?: boolean
    longitude?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userCognitoId" | "country" | "city" | "address" | "radius" | "latitude" | "longitude", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userCognitoId: string
      country: string
      city: string
      address: string
      radius: string
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'Int'>
    readonly userCognitoId: FieldRef<"Location", 'String'>
    readonly country: FieldRef<"Location", 'String'>
    readonly city: FieldRef<"Location", 'String'>
    readonly address: FieldRef<"Location", 'String'>
    readonly radius: FieldRef<"Location", 'String'>
    readonly latitude: FieldRef<"Location", 'Decimal'>
    readonly longitude: FieldRef<"Location", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model Preferences
   */

  export type AggregatePreferences = {
    _count: PreferencesCountAggregateOutputType | null
    _avg: PreferencesAvgAggregateOutputType | null
    _sum: PreferencesSumAggregateOutputType | null
    _min: PreferencesMinAggregateOutputType | null
    _max: PreferencesMaxAggregateOutputType | null
  }

  export type PreferencesAvgAggregateOutputType = {
    id: number | null
  }

  export type PreferencesSumAggregateOutputType = {
    id: number | null
  }

  export type PreferencesMinAggregateOutputType = {
    id: number | null
    userCognitoId: string | null
    vegetarianOnly: boolean | null
    vegan: boolean | null
    pescatarian: boolean | null
    flexitarian: boolean | null
    meatOnly: boolean | null
    glutenFree: boolean | null
    lactoseFree: boolean | null
    dairyFree: boolean | null
    nutFree: boolean | null
    peanutFree: boolean | null
    shellfishFree: boolean | null
    eggFree: boolean | null
    soyFree: boolean | null
    fishFree: boolean | null
    nightshadeFree: boolean | null
    lowCarb: boolean | null
    keto: boolean | null
    paleo: boolean | null
    lowSugar: boolean | null
    lowSalt: boolean | null
    lowFat: boolean | null
    highProtein: boolean | null
    rawFood: boolean | null
    whole30: boolean | null
    diabeticFriendly: boolean | null
    customPreferences: string | null
  }

  export type PreferencesMaxAggregateOutputType = {
    id: number | null
    userCognitoId: string | null
    vegetarianOnly: boolean | null
    vegan: boolean | null
    pescatarian: boolean | null
    flexitarian: boolean | null
    meatOnly: boolean | null
    glutenFree: boolean | null
    lactoseFree: boolean | null
    dairyFree: boolean | null
    nutFree: boolean | null
    peanutFree: boolean | null
    shellfishFree: boolean | null
    eggFree: boolean | null
    soyFree: boolean | null
    fishFree: boolean | null
    nightshadeFree: boolean | null
    lowCarb: boolean | null
    keto: boolean | null
    paleo: boolean | null
    lowSugar: boolean | null
    lowSalt: boolean | null
    lowFat: boolean | null
    highProtein: boolean | null
    rawFood: boolean | null
    whole30: boolean | null
    diabeticFriendly: boolean | null
    customPreferences: string | null
  }

  export type PreferencesCountAggregateOutputType = {
    id: number
    userCognitoId: number
    vegetarianOnly: number
    vegan: number
    pescatarian: number
    flexitarian: number
    meatOnly: number
    glutenFree: number
    lactoseFree: number
    dairyFree: number
    nutFree: number
    peanutFree: number
    shellfishFree: number
    eggFree: number
    soyFree: number
    fishFree: number
    nightshadeFree: number
    lowCarb: number
    keto: number
    paleo: number
    lowSugar: number
    lowSalt: number
    lowFat: number
    highProtein: number
    rawFood: number
    whole30: number
    diabeticFriendly: number
    customPreferences: number
    _all: number
  }


  export type PreferencesAvgAggregateInputType = {
    id?: true
  }

  export type PreferencesSumAggregateInputType = {
    id?: true
  }

  export type PreferencesMinAggregateInputType = {
    id?: true
    userCognitoId?: true
    vegetarianOnly?: true
    vegan?: true
    pescatarian?: true
    flexitarian?: true
    meatOnly?: true
    glutenFree?: true
    lactoseFree?: true
    dairyFree?: true
    nutFree?: true
    peanutFree?: true
    shellfishFree?: true
    eggFree?: true
    soyFree?: true
    fishFree?: true
    nightshadeFree?: true
    lowCarb?: true
    keto?: true
    paleo?: true
    lowSugar?: true
    lowSalt?: true
    lowFat?: true
    highProtein?: true
    rawFood?: true
    whole30?: true
    diabeticFriendly?: true
    customPreferences?: true
  }

  export type PreferencesMaxAggregateInputType = {
    id?: true
    userCognitoId?: true
    vegetarianOnly?: true
    vegan?: true
    pescatarian?: true
    flexitarian?: true
    meatOnly?: true
    glutenFree?: true
    lactoseFree?: true
    dairyFree?: true
    nutFree?: true
    peanutFree?: true
    shellfishFree?: true
    eggFree?: true
    soyFree?: true
    fishFree?: true
    nightshadeFree?: true
    lowCarb?: true
    keto?: true
    paleo?: true
    lowSugar?: true
    lowSalt?: true
    lowFat?: true
    highProtein?: true
    rawFood?: true
    whole30?: true
    diabeticFriendly?: true
    customPreferences?: true
  }

  export type PreferencesCountAggregateInputType = {
    id?: true
    userCognitoId?: true
    vegetarianOnly?: true
    vegan?: true
    pescatarian?: true
    flexitarian?: true
    meatOnly?: true
    glutenFree?: true
    lactoseFree?: true
    dairyFree?: true
    nutFree?: true
    peanutFree?: true
    shellfishFree?: true
    eggFree?: true
    soyFree?: true
    fishFree?: true
    nightshadeFree?: true
    lowCarb?: true
    keto?: true
    paleo?: true
    lowSugar?: true
    lowSalt?: true
    lowFat?: true
    highProtein?: true
    rawFood?: true
    whole30?: true
    diabeticFriendly?: true
    customPreferences?: true
    _all?: true
  }

  export type PreferencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Preferences to aggregate.
     */
    where?: PreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferencesOrderByWithRelationInput | PreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Preferences
    **/
    _count?: true | PreferencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PreferencesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PreferencesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreferencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreferencesMaxAggregateInputType
  }

  export type GetPreferencesAggregateType<T extends PreferencesAggregateArgs> = {
        [P in keyof T & keyof AggregatePreferences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreferences[P]>
      : GetScalarType<T[P], AggregatePreferences[P]>
  }




  export type PreferencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreferencesWhereInput
    orderBy?: PreferencesOrderByWithAggregationInput | PreferencesOrderByWithAggregationInput[]
    by: PreferencesScalarFieldEnum[] | PreferencesScalarFieldEnum
    having?: PreferencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreferencesCountAggregateInputType | true
    _avg?: PreferencesAvgAggregateInputType
    _sum?: PreferencesSumAggregateInputType
    _min?: PreferencesMinAggregateInputType
    _max?: PreferencesMaxAggregateInputType
  }

  export type PreferencesGroupByOutputType = {
    id: number
    userCognitoId: string
    vegetarianOnly: boolean
    vegan: boolean
    pescatarian: boolean
    flexitarian: boolean
    meatOnly: boolean
    glutenFree: boolean
    lactoseFree: boolean
    dairyFree: boolean
    nutFree: boolean
    peanutFree: boolean
    shellfishFree: boolean
    eggFree: boolean
    soyFree: boolean
    fishFree: boolean
    nightshadeFree: boolean
    lowCarb: boolean
    keto: boolean
    paleo: boolean
    lowSugar: boolean
    lowSalt: boolean
    lowFat: boolean
    highProtein: boolean
    rawFood: boolean
    whole30: boolean
    diabeticFriendly: boolean
    customPreferences: string
    _count: PreferencesCountAggregateOutputType | null
    _avg: PreferencesAvgAggregateOutputType | null
    _sum: PreferencesSumAggregateOutputType | null
    _min: PreferencesMinAggregateOutputType | null
    _max: PreferencesMaxAggregateOutputType | null
  }

  type GetPreferencesGroupByPayload<T extends PreferencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreferencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreferencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreferencesGroupByOutputType[P]>
            : GetScalarType<T[P], PreferencesGroupByOutputType[P]>
        }
      >
    >


  export type PreferencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userCognitoId?: boolean
    vegetarianOnly?: boolean
    vegan?: boolean
    pescatarian?: boolean
    flexitarian?: boolean
    meatOnly?: boolean
    glutenFree?: boolean
    lactoseFree?: boolean
    dairyFree?: boolean
    nutFree?: boolean
    peanutFree?: boolean
    shellfishFree?: boolean
    eggFree?: boolean
    soyFree?: boolean
    fishFree?: boolean
    nightshadeFree?: boolean
    lowCarb?: boolean
    keto?: boolean
    paleo?: boolean
    lowSugar?: boolean
    lowSalt?: boolean
    lowFat?: boolean
    highProtein?: boolean
    rawFood?: boolean
    whole30?: boolean
    diabeticFriendly?: boolean
    customPreferences?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preferences"]>

  export type PreferencesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userCognitoId?: boolean
    vegetarianOnly?: boolean
    vegan?: boolean
    pescatarian?: boolean
    flexitarian?: boolean
    meatOnly?: boolean
    glutenFree?: boolean
    lactoseFree?: boolean
    dairyFree?: boolean
    nutFree?: boolean
    peanutFree?: boolean
    shellfishFree?: boolean
    eggFree?: boolean
    soyFree?: boolean
    fishFree?: boolean
    nightshadeFree?: boolean
    lowCarb?: boolean
    keto?: boolean
    paleo?: boolean
    lowSugar?: boolean
    lowSalt?: boolean
    lowFat?: boolean
    highProtein?: boolean
    rawFood?: boolean
    whole30?: boolean
    diabeticFriendly?: boolean
    customPreferences?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preferences"]>

  export type PreferencesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userCognitoId?: boolean
    vegetarianOnly?: boolean
    vegan?: boolean
    pescatarian?: boolean
    flexitarian?: boolean
    meatOnly?: boolean
    glutenFree?: boolean
    lactoseFree?: boolean
    dairyFree?: boolean
    nutFree?: boolean
    peanutFree?: boolean
    shellfishFree?: boolean
    eggFree?: boolean
    soyFree?: boolean
    fishFree?: boolean
    nightshadeFree?: boolean
    lowCarb?: boolean
    keto?: boolean
    paleo?: boolean
    lowSugar?: boolean
    lowSalt?: boolean
    lowFat?: boolean
    highProtein?: boolean
    rawFood?: boolean
    whole30?: boolean
    diabeticFriendly?: boolean
    customPreferences?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preferences"]>

  export type PreferencesSelectScalar = {
    id?: boolean
    userCognitoId?: boolean
    vegetarianOnly?: boolean
    vegan?: boolean
    pescatarian?: boolean
    flexitarian?: boolean
    meatOnly?: boolean
    glutenFree?: boolean
    lactoseFree?: boolean
    dairyFree?: boolean
    nutFree?: boolean
    peanutFree?: boolean
    shellfishFree?: boolean
    eggFree?: boolean
    soyFree?: boolean
    fishFree?: boolean
    nightshadeFree?: boolean
    lowCarb?: boolean
    keto?: boolean
    paleo?: boolean
    lowSugar?: boolean
    lowSalt?: boolean
    lowFat?: boolean
    highProtein?: boolean
    rawFood?: boolean
    whole30?: boolean
    diabeticFriendly?: boolean
    customPreferences?: boolean
  }

  export type PreferencesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userCognitoId" | "vegetarianOnly" | "vegan" | "pescatarian" | "flexitarian" | "meatOnly" | "glutenFree" | "lactoseFree" | "dairyFree" | "nutFree" | "peanutFree" | "shellfishFree" | "eggFree" | "soyFree" | "fishFree" | "nightshadeFree" | "lowCarb" | "keto" | "paleo" | "lowSugar" | "lowSalt" | "lowFat" | "highProtein" | "rawFood" | "whole30" | "diabeticFriendly" | "customPreferences", ExtArgs["result"]["preferences"]>
  export type PreferencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PreferencesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PreferencesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PreferencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Preferences"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userCognitoId: string
      vegetarianOnly: boolean
      vegan: boolean
      pescatarian: boolean
      flexitarian: boolean
      meatOnly: boolean
      glutenFree: boolean
      lactoseFree: boolean
      dairyFree: boolean
      nutFree: boolean
      peanutFree: boolean
      shellfishFree: boolean
      eggFree: boolean
      soyFree: boolean
      fishFree: boolean
      nightshadeFree: boolean
      lowCarb: boolean
      keto: boolean
      paleo: boolean
      lowSugar: boolean
      lowSalt: boolean
      lowFat: boolean
      highProtein: boolean
      rawFood: boolean
      whole30: boolean
      diabeticFriendly: boolean
      customPreferences: string
    }, ExtArgs["result"]["preferences"]>
    composites: {}
  }

  type PreferencesGetPayload<S extends boolean | null | undefined | PreferencesDefaultArgs> = $Result.GetResult<Prisma.$PreferencesPayload, S>

  type PreferencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PreferencesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PreferencesCountAggregateInputType | true
    }

  export interface PreferencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Preferences'], meta: { name: 'Preferences' } }
    /**
     * Find zero or one Preferences that matches the filter.
     * @param {PreferencesFindUniqueArgs} args - Arguments to find a Preferences
     * @example
     * // Get one Preferences
     * const preferences = await prisma.preferences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PreferencesFindUniqueArgs>(args: SelectSubset<T, PreferencesFindUniqueArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Preferences that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PreferencesFindUniqueOrThrowArgs} args - Arguments to find a Preferences
     * @example
     * // Get one Preferences
     * const preferences = await prisma.preferences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PreferencesFindUniqueOrThrowArgs>(args: SelectSubset<T, PreferencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesFindFirstArgs} args - Arguments to find a Preferences
     * @example
     * // Get one Preferences
     * const preferences = await prisma.preferences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PreferencesFindFirstArgs>(args?: SelectSubset<T, PreferencesFindFirstArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preferences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesFindFirstOrThrowArgs} args - Arguments to find a Preferences
     * @example
     * // Get one Preferences
     * const preferences = await prisma.preferences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PreferencesFindFirstOrThrowArgs>(args?: SelectSubset<T, PreferencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Preferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Preferences
     * const preferences = await prisma.preferences.findMany()
     * 
     * // Get first 10 Preferences
     * const preferences = await prisma.preferences.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const preferencesWithIdOnly = await prisma.preferences.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PreferencesFindManyArgs>(args?: SelectSubset<T, PreferencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Preferences.
     * @param {PreferencesCreateArgs} args - Arguments to create a Preferences.
     * @example
     * // Create one Preferences
     * const Preferences = await prisma.preferences.create({
     *   data: {
     *     // ... data to create a Preferences
     *   }
     * })
     * 
     */
    create<T extends PreferencesCreateArgs>(args: SelectSubset<T, PreferencesCreateArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Preferences.
     * @param {PreferencesCreateManyArgs} args - Arguments to create many Preferences.
     * @example
     * // Create many Preferences
     * const preferences = await prisma.preferences.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PreferencesCreateManyArgs>(args?: SelectSubset<T, PreferencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Preferences and returns the data saved in the database.
     * @param {PreferencesCreateManyAndReturnArgs} args - Arguments to create many Preferences.
     * @example
     * // Create many Preferences
     * const preferences = await prisma.preferences.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Preferences and only return the `id`
     * const preferencesWithIdOnly = await prisma.preferences.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PreferencesCreateManyAndReturnArgs>(args?: SelectSubset<T, PreferencesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Preferences.
     * @param {PreferencesDeleteArgs} args - Arguments to delete one Preferences.
     * @example
     * // Delete one Preferences
     * const Preferences = await prisma.preferences.delete({
     *   where: {
     *     // ... filter to delete one Preferences
     *   }
     * })
     * 
     */
    delete<T extends PreferencesDeleteArgs>(args: SelectSubset<T, PreferencesDeleteArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Preferences.
     * @param {PreferencesUpdateArgs} args - Arguments to update one Preferences.
     * @example
     * // Update one Preferences
     * const preferences = await prisma.preferences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PreferencesUpdateArgs>(args: SelectSubset<T, PreferencesUpdateArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Preferences.
     * @param {PreferencesDeleteManyArgs} args - Arguments to filter Preferences to delete.
     * @example
     * // Delete a few Preferences
     * const { count } = await prisma.preferences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PreferencesDeleteManyArgs>(args?: SelectSubset<T, PreferencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Preferences
     * const preferences = await prisma.preferences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PreferencesUpdateManyArgs>(args: SelectSubset<T, PreferencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preferences and returns the data updated in the database.
     * @param {PreferencesUpdateManyAndReturnArgs} args - Arguments to update many Preferences.
     * @example
     * // Update many Preferences
     * const preferences = await prisma.preferences.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Preferences and only return the `id`
     * const preferencesWithIdOnly = await prisma.preferences.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PreferencesUpdateManyAndReturnArgs>(args: SelectSubset<T, PreferencesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Preferences.
     * @param {PreferencesUpsertArgs} args - Arguments to update or create a Preferences.
     * @example
     * // Update or create a Preferences
     * const preferences = await prisma.preferences.upsert({
     *   create: {
     *     // ... data to create a Preferences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Preferences we want to update
     *   }
     * })
     */
    upsert<T extends PreferencesUpsertArgs>(args: SelectSubset<T, PreferencesUpsertArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesCountArgs} args - Arguments to filter Preferences to count.
     * @example
     * // Count the number of Preferences
     * const count = await prisma.preferences.count({
     *   where: {
     *     // ... the filter for the Preferences we want to count
     *   }
     * })
    **/
    count<T extends PreferencesCountArgs>(
      args?: Subset<T, PreferencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreferencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PreferencesAggregateArgs>(args: Subset<T, PreferencesAggregateArgs>): Prisma.PrismaPromise<GetPreferencesAggregateType<T>>

    /**
     * Group by Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PreferencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PreferencesGroupByArgs['orderBy'] }
        : { orderBy?: PreferencesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PreferencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreferencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Preferences model
   */
  readonly fields: PreferencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Preferences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PreferencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Preferences model
   */
  interface PreferencesFieldRefs {
    readonly id: FieldRef<"Preferences", 'Int'>
    readonly userCognitoId: FieldRef<"Preferences", 'String'>
    readonly vegetarianOnly: FieldRef<"Preferences", 'Boolean'>
    readonly vegan: FieldRef<"Preferences", 'Boolean'>
    readonly pescatarian: FieldRef<"Preferences", 'Boolean'>
    readonly flexitarian: FieldRef<"Preferences", 'Boolean'>
    readonly meatOnly: FieldRef<"Preferences", 'Boolean'>
    readonly glutenFree: FieldRef<"Preferences", 'Boolean'>
    readonly lactoseFree: FieldRef<"Preferences", 'Boolean'>
    readonly dairyFree: FieldRef<"Preferences", 'Boolean'>
    readonly nutFree: FieldRef<"Preferences", 'Boolean'>
    readonly peanutFree: FieldRef<"Preferences", 'Boolean'>
    readonly shellfishFree: FieldRef<"Preferences", 'Boolean'>
    readonly eggFree: FieldRef<"Preferences", 'Boolean'>
    readonly soyFree: FieldRef<"Preferences", 'Boolean'>
    readonly fishFree: FieldRef<"Preferences", 'Boolean'>
    readonly nightshadeFree: FieldRef<"Preferences", 'Boolean'>
    readonly lowCarb: FieldRef<"Preferences", 'Boolean'>
    readonly keto: FieldRef<"Preferences", 'Boolean'>
    readonly paleo: FieldRef<"Preferences", 'Boolean'>
    readonly lowSugar: FieldRef<"Preferences", 'Boolean'>
    readonly lowSalt: FieldRef<"Preferences", 'Boolean'>
    readonly lowFat: FieldRef<"Preferences", 'Boolean'>
    readonly highProtein: FieldRef<"Preferences", 'Boolean'>
    readonly rawFood: FieldRef<"Preferences", 'Boolean'>
    readonly whole30: FieldRef<"Preferences", 'Boolean'>
    readonly diabeticFriendly: FieldRef<"Preferences", 'Boolean'>
    readonly customPreferences: FieldRef<"Preferences", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Preferences findUnique
   */
  export type PreferencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where: PreferencesWhereUniqueInput
  }

  /**
   * Preferences findUniqueOrThrow
   */
  export type PreferencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where: PreferencesWhereUniqueInput
  }

  /**
   * Preferences findFirst
   */
  export type PreferencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where?: PreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferencesOrderByWithRelationInput | PreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preferences.
     */
    cursor?: PreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preferences.
     */
    distinct?: PreferencesScalarFieldEnum | PreferencesScalarFieldEnum[]
  }

  /**
   * Preferences findFirstOrThrow
   */
  export type PreferencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where?: PreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferencesOrderByWithRelationInput | PreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preferences.
     */
    cursor?: PreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preferences.
     */
    distinct?: PreferencesScalarFieldEnum | PreferencesScalarFieldEnum[]
  }

  /**
   * Preferences findMany
   */
  export type PreferencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where?: PreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferencesOrderByWithRelationInput | PreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Preferences.
     */
    cursor?: PreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    distinct?: PreferencesScalarFieldEnum | PreferencesScalarFieldEnum[]
  }

  /**
   * Preferences create
   */
  export type PreferencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * The data needed to create a Preferences.
     */
    data: XOR<PreferencesCreateInput, PreferencesUncheckedCreateInput>
  }

  /**
   * Preferences createMany
   */
  export type PreferencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Preferences.
     */
    data: PreferencesCreateManyInput | PreferencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Preferences createManyAndReturn
   */
  export type PreferencesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * The data used to create many Preferences.
     */
    data: PreferencesCreateManyInput | PreferencesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Preferences update
   */
  export type PreferencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * The data needed to update a Preferences.
     */
    data: XOR<PreferencesUpdateInput, PreferencesUncheckedUpdateInput>
    /**
     * Choose, which Preferences to update.
     */
    where: PreferencesWhereUniqueInput
  }

  /**
   * Preferences updateMany
   */
  export type PreferencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Preferences.
     */
    data: XOR<PreferencesUpdateManyMutationInput, PreferencesUncheckedUpdateManyInput>
    /**
     * Filter which Preferences to update
     */
    where?: PreferencesWhereInput
    /**
     * Limit how many Preferences to update.
     */
    limit?: number
  }

  /**
   * Preferences updateManyAndReturn
   */
  export type PreferencesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * The data used to update Preferences.
     */
    data: XOR<PreferencesUpdateManyMutationInput, PreferencesUncheckedUpdateManyInput>
    /**
     * Filter which Preferences to update
     */
    where?: PreferencesWhereInput
    /**
     * Limit how many Preferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Preferences upsert
   */
  export type PreferencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * The filter to search for the Preferences to update in case it exists.
     */
    where: PreferencesWhereUniqueInput
    /**
     * In case the Preferences found by the `where` argument doesn't exist, create a new Preferences with this data.
     */
    create: XOR<PreferencesCreateInput, PreferencesUncheckedCreateInput>
    /**
     * In case the Preferences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PreferencesUpdateInput, PreferencesUncheckedUpdateInput>
  }

  /**
   * Preferences delete
   */
  export type PreferencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * Filter which Preferences to delete.
     */
    where: PreferencesWhereUniqueInput
  }

  /**
   * Preferences deleteMany
   */
  export type PreferencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Preferences to delete
     */
    where?: PreferencesWhereInput
    /**
     * Limit how many Preferences to delete.
     */
    limit?: number
  }

  /**
   * Preferences without action
   */
  export type PreferencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
  }


  /**
   * Model FavoriteRecipes
   */

  export type AggregateFavoriteRecipes = {
    _count: FavoriteRecipesCountAggregateOutputType | null
    _avg: FavoriteRecipesAvgAggregateOutputType | null
    _sum: FavoriteRecipesSumAggregateOutputType | null
    _min: FavoriteRecipesMinAggregateOutputType | null
    _max: FavoriteRecipesMaxAggregateOutputType | null
  }

  export type FavoriteRecipesAvgAggregateOutputType = {
    id: number | null
  }

  export type FavoriteRecipesSumAggregateOutputType = {
    id: number | null
  }

  export type FavoriteRecipesMinAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    content: string | null
    userCognitoId: string | null
  }

  export type FavoriteRecipesMaxAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    content: string | null
    userCognitoId: string | null
  }

  export type FavoriteRecipesCountAggregateOutputType = {
    id: number
    imageUrl: number
    content: number
    userCognitoId: number
    _all: number
  }


  export type FavoriteRecipesAvgAggregateInputType = {
    id?: true
  }

  export type FavoriteRecipesSumAggregateInputType = {
    id?: true
  }

  export type FavoriteRecipesMinAggregateInputType = {
    id?: true
    imageUrl?: true
    content?: true
    userCognitoId?: true
  }

  export type FavoriteRecipesMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    content?: true
    userCognitoId?: true
  }

  export type FavoriteRecipesCountAggregateInputType = {
    id?: true
    imageUrl?: true
    content?: true
    userCognitoId?: true
    _all?: true
  }

  export type FavoriteRecipesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteRecipes to aggregate.
     */
    where?: FavoriteRecipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteRecipes to fetch.
     */
    orderBy?: FavoriteRecipesOrderByWithRelationInput | FavoriteRecipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteRecipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FavoriteRecipes
    **/
    _count?: true | FavoriteRecipesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoriteRecipesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoriteRecipesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteRecipesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteRecipesMaxAggregateInputType
  }

  export type GetFavoriteRecipesAggregateType<T extends FavoriteRecipesAggregateArgs> = {
        [P in keyof T & keyof AggregateFavoriteRecipes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavoriteRecipes[P]>
      : GetScalarType<T[P], AggregateFavoriteRecipes[P]>
  }




  export type FavoriteRecipesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteRecipesWhereInput
    orderBy?: FavoriteRecipesOrderByWithAggregationInput | FavoriteRecipesOrderByWithAggregationInput[]
    by: FavoriteRecipesScalarFieldEnum[] | FavoriteRecipesScalarFieldEnum
    having?: FavoriteRecipesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteRecipesCountAggregateInputType | true
    _avg?: FavoriteRecipesAvgAggregateInputType
    _sum?: FavoriteRecipesSumAggregateInputType
    _min?: FavoriteRecipesMinAggregateInputType
    _max?: FavoriteRecipesMaxAggregateInputType
  }

  export type FavoriteRecipesGroupByOutputType = {
    id: number
    imageUrl: string
    content: string
    userCognitoId: string
    _count: FavoriteRecipesCountAggregateOutputType | null
    _avg: FavoriteRecipesAvgAggregateOutputType | null
    _sum: FavoriteRecipesSumAggregateOutputType | null
    _min: FavoriteRecipesMinAggregateOutputType | null
    _max: FavoriteRecipesMaxAggregateOutputType | null
  }

  type GetFavoriteRecipesGroupByPayload<T extends FavoriteRecipesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteRecipesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteRecipesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteRecipesGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteRecipesGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteRecipesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    content?: boolean
    userCognitoId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteRecipes"]>

  export type FavoriteRecipesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    content?: boolean
    userCognitoId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteRecipes"]>

  export type FavoriteRecipesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    content?: boolean
    userCognitoId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteRecipes"]>

  export type FavoriteRecipesSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    content?: boolean
    userCognitoId?: boolean
  }

  export type FavoriteRecipesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "content" | "userCognitoId", ExtArgs["result"]["favoriteRecipes"]>
  export type FavoriteRecipesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FavoriteRecipesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FavoriteRecipesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FavoriteRecipesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FavoriteRecipes"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imageUrl: string
      content: string
      userCognitoId: string
    }, ExtArgs["result"]["favoriteRecipes"]>
    composites: {}
  }

  type FavoriteRecipesGetPayload<S extends boolean | null | undefined | FavoriteRecipesDefaultArgs> = $Result.GetResult<Prisma.$FavoriteRecipesPayload, S>

  type FavoriteRecipesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteRecipesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteRecipesCountAggregateInputType | true
    }

  export interface FavoriteRecipesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FavoriteRecipes'], meta: { name: 'FavoriteRecipes' } }
    /**
     * Find zero or one FavoriteRecipes that matches the filter.
     * @param {FavoriteRecipesFindUniqueArgs} args - Arguments to find a FavoriteRecipes
     * @example
     * // Get one FavoriteRecipes
     * const favoriteRecipes = await prisma.favoriteRecipes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteRecipesFindUniqueArgs>(args: SelectSubset<T, FavoriteRecipesFindUniqueArgs<ExtArgs>>): Prisma__FavoriteRecipesClient<$Result.GetResult<Prisma.$FavoriteRecipesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FavoriteRecipes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteRecipesFindUniqueOrThrowArgs} args - Arguments to find a FavoriteRecipes
     * @example
     * // Get one FavoriteRecipes
     * const favoriteRecipes = await prisma.favoriteRecipes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteRecipesFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteRecipesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteRecipesClient<$Result.GetResult<Prisma.$FavoriteRecipesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteRecipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRecipesFindFirstArgs} args - Arguments to find a FavoriteRecipes
     * @example
     * // Get one FavoriteRecipes
     * const favoriteRecipes = await prisma.favoriteRecipes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteRecipesFindFirstArgs>(args?: SelectSubset<T, FavoriteRecipesFindFirstArgs<ExtArgs>>): Prisma__FavoriteRecipesClient<$Result.GetResult<Prisma.$FavoriteRecipesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteRecipes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRecipesFindFirstOrThrowArgs} args - Arguments to find a FavoriteRecipes
     * @example
     * // Get one FavoriteRecipes
     * const favoriteRecipes = await prisma.favoriteRecipes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteRecipesFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteRecipesFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteRecipesClient<$Result.GetResult<Prisma.$FavoriteRecipesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FavoriteRecipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRecipesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FavoriteRecipes
     * const favoriteRecipes = await prisma.favoriteRecipes.findMany()
     * 
     * // Get first 10 FavoriteRecipes
     * const favoriteRecipes = await prisma.favoriteRecipes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteRecipesWithIdOnly = await prisma.favoriteRecipes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteRecipesFindManyArgs>(args?: SelectSubset<T, FavoriteRecipesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteRecipesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FavoriteRecipes.
     * @param {FavoriteRecipesCreateArgs} args - Arguments to create a FavoriteRecipes.
     * @example
     * // Create one FavoriteRecipes
     * const FavoriteRecipes = await prisma.favoriteRecipes.create({
     *   data: {
     *     // ... data to create a FavoriteRecipes
     *   }
     * })
     * 
     */
    create<T extends FavoriteRecipesCreateArgs>(args: SelectSubset<T, FavoriteRecipesCreateArgs<ExtArgs>>): Prisma__FavoriteRecipesClient<$Result.GetResult<Prisma.$FavoriteRecipesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FavoriteRecipes.
     * @param {FavoriteRecipesCreateManyArgs} args - Arguments to create many FavoriteRecipes.
     * @example
     * // Create many FavoriteRecipes
     * const favoriteRecipes = await prisma.favoriteRecipes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteRecipesCreateManyArgs>(args?: SelectSubset<T, FavoriteRecipesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FavoriteRecipes and returns the data saved in the database.
     * @param {FavoriteRecipesCreateManyAndReturnArgs} args - Arguments to create many FavoriteRecipes.
     * @example
     * // Create many FavoriteRecipes
     * const favoriteRecipes = await prisma.favoriteRecipes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FavoriteRecipes and only return the `id`
     * const favoriteRecipesWithIdOnly = await prisma.favoriteRecipes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteRecipesCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteRecipesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteRecipesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FavoriteRecipes.
     * @param {FavoriteRecipesDeleteArgs} args - Arguments to delete one FavoriteRecipes.
     * @example
     * // Delete one FavoriteRecipes
     * const FavoriteRecipes = await prisma.favoriteRecipes.delete({
     *   where: {
     *     // ... filter to delete one FavoriteRecipes
     *   }
     * })
     * 
     */
    delete<T extends FavoriteRecipesDeleteArgs>(args: SelectSubset<T, FavoriteRecipesDeleteArgs<ExtArgs>>): Prisma__FavoriteRecipesClient<$Result.GetResult<Prisma.$FavoriteRecipesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FavoriteRecipes.
     * @param {FavoriteRecipesUpdateArgs} args - Arguments to update one FavoriteRecipes.
     * @example
     * // Update one FavoriteRecipes
     * const favoriteRecipes = await prisma.favoriteRecipes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteRecipesUpdateArgs>(args: SelectSubset<T, FavoriteRecipesUpdateArgs<ExtArgs>>): Prisma__FavoriteRecipesClient<$Result.GetResult<Prisma.$FavoriteRecipesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FavoriteRecipes.
     * @param {FavoriteRecipesDeleteManyArgs} args - Arguments to filter FavoriteRecipes to delete.
     * @example
     * // Delete a few FavoriteRecipes
     * const { count } = await prisma.favoriteRecipes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteRecipesDeleteManyArgs>(args?: SelectSubset<T, FavoriteRecipesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteRecipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRecipesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FavoriteRecipes
     * const favoriteRecipes = await prisma.favoriteRecipes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteRecipesUpdateManyArgs>(args: SelectSubset<T, FavoriteRecipesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteRecipes and returns the data updated in the database.
     * @param {FavoriteRecipesUpdateManyAndReturnArgs} args - Arguments to update many FavoriteRecipes.
     * @example
     * // Update many FavoriteRecipes
     * const favoriteRecipes = await prisma.favoriteRecipes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FavoriteRecipes and only return the `id`
     * const favoriteRecipesWithIdOnly = await prisma.favoriteRecipes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FavoriteRecipesUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteRecipesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteRecipesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FavoriteRecipes.
     * @param {FavoriteRecipesUpsertArgs} args - Arguments to update or create a FavoriteRecipes.
     * @example
     * // Update or create a FavoriteRecipes
     * const favoriteRecipes = await prisma.favoriteRecipes.upsert({
     *   create: {
     *     // ... data to create a FavoriteRecipes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FavoriteRecipes we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteRecipesUpsertArgs>(args: SelectSubset<T, FavoriteRecipesUpsertArgs<ExtArgs>>): Prisma__FavoriteRecipesClient<$Result.GetResult<Prisma.$FavoriteRecipesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FavoriteRecipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRecipesCountArgs} args - Arguments to filter FavoriteRecipes to count.
     * @example
     * // Count the number of FavoriteRecipes
     * const count = await prisma.favoriteRecipes.count({
     *   where: {
     *     // ... the filter for the FavoriteRecipes we want to count
     *   }
     * })
    **/
    count<T extends FavoriteRecipesCountArgs>(
      args?: Subset<T, FavoriteRecipesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteRecipesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FavoriteRecipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRecipesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoriteRecipesAggregateArgs>(args: Subset<T, FavoriteRecipesAggregateArgs>): Prisma.PrismaPromise<GetFavoriteRecipesAggregateType<T>>

    /**
     * Group by FavoriteRecipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRecipesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoriteRecipesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteRecipesGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteRecipesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoriteRecipesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteRecipesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FavoriteRecipes model
   */
  readonly fields: FavoriteRecipesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FavoriteRecipes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteRecipesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FavoriteRecipes model
   */
  interface FavoriteRecipesFieldRefs {
    readonly id: FieldRef<"FavoriteRecipes", 'Int'>
    readonly imageUrl: FieldRef<"FavoriteRecipes", 'String'>
    readonly content: FieldRef<"FavoriteRecipes", 'String'>
    readonly userCognitoId: FieldRef<"FavoriteRecipes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FavoriteRecipes findUnique
   */
  export type FavoriteRecipesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipes
     */
    select?: FavoriteRecipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRecipes
     */
    omit?: FavoriteRecipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRecipesInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteRecipes to fetch.
     */
    where: FavoriteRecipesWhereUniqueInput
  }

  /**
   * FavoriteRecipes findUniqueOrThrow
   */
  export type FavoriteRecipesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipes
     */
    select?: FavoriteRecipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRecipes
     */
    omit?: FavoriteRecipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRecipesInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteRecipes to fetch.
     */
    where: FavoriteRecipesWhereUniqueInput
  }

  /**
   * FavoriteRecipes findFirst
   */
  export type FavoriteRecipesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipes
     */
    select?: FavoriteRecipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRecipes
     */
    omit?: FavoriteRecipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRecipesInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteRecipes to fetch.
     */
    where?: FavoriteRecipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteRecipes to fetch.
     */
    orderBy?: FavoriteRecipesOrderByWithRelationInput | FavoriteRecipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteRecipes.
     */
    cursor?: FavoriteRecipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteRecipes.
     */
    distinct?: FavoriteRecipesScalarFieldEnum | FavoriteRecipesScalarFieldEnum[]
  }

  /**
   * FavoriteRecipes findFirstOrThrow
   */
  export type FavoriteRecipesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipes
     */
    select?: FavoriteRecipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRecipes
     */
    omit?: FavoriteRecipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRecipesInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteRecipes to fetch.
     */
    where?: FavoriteRecipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteRecipes to fetch.
     */
    orderBy?: FavoriteRecipesOrderByWithRelationInput | FavoriteRecipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteRecipes.
     */
    cursor?: FavoriteRecipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteRecipes.
     */
    distinct?: FavoriteRecipesScalarFieldEnum | FavoriteRecipesScalarFieldEnum[]
  }

  /**
   * FavoriteRecipes findMany
   */
  export type FavoriteRecipesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipes
     */
    select?: FavoriteRecipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRecipes
     */
    omit?: FavoriteRecipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRecipesInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteRecipes to fetch.
     */
    where?: FavoriteRecipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteRecipes to fetch.
     */
    orderBy?: FavoriteRecipesOrderByWithRelationInput | FavoriteRecipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FavoriteRecipes.
     */
    cursor?: FavoriteRecipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteRecipes.
     */
    skip?: number
    distinct?: FavoriteRecipesScalarFieldEnum | FavoriteRecipesScalarFieldEnum[]
  }

  /**
   * FavoriteRecipes create
   */
  export type FavoriteRecipesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipes
     */
    select?: FavoriteRecipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRecipes
     */
    omit?: FavoriteRecipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRecipesInclude<ExtArgs> | null
    /**
     * The data needed to create a FavoriteRecipes.
     */
    data: XOR<FavoriteRecipesCreateInput, FavoriteRecipesUncheckedCreateInput>
  }

  /**
   * FavoriteRecipes createMany
   */
  export type FavoriteRecipesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FavoriteRecipes.
     */
    data: FavoriteRecipesCreateManyInput | FavoriteRecipesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FavoriteRecipes createManyAndReturn
   */
  export type FavoriteRecipesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipes
     */
    select?: FavoriteRecipesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRecipes
     */
    omit?: FavoriteRecipesOmit<ExtArgs> | null
    /**
     * The data used to create many FavoriteRecipes.
     */
    data: FavoriteRecipesCreateManyInput | FavoriteRecipesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRecipesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FavoriteRecipes update
   */
  export type FavoriteRecipesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipes
     */
    select?: FavoriteRecipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRecipes
     */
    omit?: FavoriteRecipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRecipesInclude<ExtArgs> | null
    /**
     * The data needed to update a FavoriteRecipes.
     */
    data: XOR<FavoriteRecipesUpdateInput, FavoriteRecipesUncheckedUpdateInput>
    /**
     * Choose, which FavoriteRecipes to update.
     */
    where: FavoriteRecipesWhereUniqueInput
  }

  /**
   * FavoriteRecipes updateMany
   */
  export type FavoriteRecipesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FavoriteRecipes.
     */
    data: XOR<FavoriteRecipesUpdateManyMutationInput, FavoriteRecipesUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteRecipes to update
     */
    where?: FavoriteRecipesWhereInput
    /**
     * Limit how many FavoriteRecipes to update.
     */
    limit?: number
  }

  /**
   * FavoriteRecipes updateManyAndReturn
   */
  export type FavoriteRecipesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipes
     */
    select?: FavoriteRecipesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRecipes
     */
    omit?: FavoriteRecipesOmit<ExtArgs> | null
    /**
     * The data used to update FavoriteRecipes.
     */
    data: XOR<FavoriteRecipesUpdateManyMutationInput, FavoriteRecipesUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteRecipes to update
     */
    where?: FavoriteRecipesWhereInput
    /**
     * Limit how many FavoriteRecipes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRecipesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FavoriteRecipes upsert
   */
  export type FavoriteRecipesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipes
     */
    select?: FavoriteRecipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRecipes
     */
    omit?: FavoriteRecipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRecipesInclude<ExtArgs> | null
    /**
     * The filter to search for the FavoriteRecipes to update in case it exists.
     */
    where: FavoriteRecipesWhereUniqueInput
    /**
     * In case the FavoriteRecipes found by the `where` argument doesn't exist, create a new FavoriteRecipes with this data.
     */
    create: XOR<FavoriteRecipesCreateInput, FavoriteRecipesUncheckedCreateInput>
    /**
     * In case the FavoriteRecipes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteRecipesUpdateInput, FavoriteRecipesUncheckedUpdateInput>
  }

  /**
   * FavoriteRecipes delete
   */
  export type FavoriteRecipesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipes
     */
    select?: FavoriteRecipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRecipes
     */
    omit?: FavoriteRecipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRecipesInclude<ExtArgs> | null
    /**
     * Filter which FavoriteRecipes to delete.
     */
    where: FavoriteRecipesWhereUniqueInput
  }

  /**
   * FavoriteRecipes deleteMany
   */
  export type FavoriteRecipesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteRecipes to delete
     */
    where?: FavoriteRecipesWhereInput
    /**
     * Limit how many FavoriteRecipes to delete.
     */
    limit?: number
  }

  /**
   * FavoriteRecipes without action
   */
  export type FavoriteRecipesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipes
     */
    select?: FavoriteRecipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRecipes
     */
    omit?: FavoriteRecipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRecipesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    cognitoId: 'cognitoId',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    userCognitoId: 'userCognitoId',
    country: 'country',
    city: 'city',
    address: 'address',
    radius: 'radius',
    latitude: 'latitude',
    longitude: 'longitude'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const PreferencesScalarFieldEnum: {
    id: 'id',
    userCognitoId: 'userCognitoId',
    vegetarianOnly: 'vegetarianOnly',
    vegan: 'vegan',
    pescatarian: 'pescatarian',
    flexitarian: 'flexitarian',
    meatOnly: 'meatOnly',
    glutenFree: 'glutenFree',
    lactoseFree: 'lactoseFree',
    dairyFree: 'dairyFree',
    nutFree: 'nutFree',
    peanutFree: 'peanutFree',
    shellfishFree: 'shellfishFree',
    eggFree: 'eggFree',
    soyFree: 'soyFree',
    fishFree: 'fishFree',
    nightshadeFree: 'nightshadeFree',
    lowCarb: 'lowCarb',
    keto: 'keto',
    paleo: 'paleo',
    lowSugar: 'lowSugar',
    lowSalt: 'lowSalt',
    lowFat: 'lowFat',
    highProtein: 'highProtein',
    rawFood: 'rawFood',
    whole30: 'whole30',
    diabeticFriendly: 'diabeticFriendly',
    customPreferences: 'customPreferences'
  };

  export type PreferencesScalarFieldEnum = (typeof PreferencesScalarFieldEnum)[keyof typeof PreferencesScalarFieldEnum]


  export const FavoriteRecipesScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    content: 'content',
    userCognitoId: 'userCognitoId'
  };

  export type FavoriteRecipesScalarFieldEnum = (typeof FavoriteRecipesScalarFieldEnum)[keyof typeof FavoriteRecipesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    cognitoId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    favoriteRecipes?: FavoriteRecipesListRelationFilter
    preferences?: XOR<PreferencesNullableScalarRelationFilter, PreferencesWhereInput> | null
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    email?: SortOrder
    favoriteRecipes?: FavoriteRecipesOrderByRelationAggregateInput
    preferences?: PreferencesOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cognitoId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    favoriteRecipes?: FavoriteRecipesListRelationFilter
    preferences?: XOR<PreferencesNullableScalarRelationFilter, PreferencesWhereInput> | null
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
  }, "id" | "cognitoId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    cognitoId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: IntFilter<"Location"> | number
    userCognitoId?: StringFilter<"Location"> | string
    country?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    address?: StringFilter<"Location"> | string
    radius?: StringFilter<"Location"> | string
    latitude?: DecimalFilter<"Location"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Location"> | Decimal | DecimalJsLike | number | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    userCognitoId?: SortOrder
    country?: SortOrder
    city?: SortOrder
    address?: SortOrder
    radius?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userCognitoId?: string
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    country?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    address?: StringFilter<"Location"> | string
    radius?: StringFilter<"Location"> | string
    latitude?: DecimalFilter<"Location"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Location"> | Decimal | DecimalJsLike | number | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userCognitoId">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    userCognitoId?: SortOrder
    country?: SortOrder
    city?: SortOrder
    address?: SortOrder
    radius?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Location"> | number
    userCognitoId?: StringWithAggregatesFilter<"Location"> | string
    country?: StringWithAggregatesFilter<"Location"> | string
    city?: StringWithAggregatesFilter<"Location"> | string
    address?: StringWithAggregatesFilter<"Location"> | string
    radius?: StringWithAggregatesFilter<"Location"> | string
    latitude?: DecimalWithAggregatesFilter<"Location"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"Location"> | Decimal | DecimalJsLike | number | string
  }

  export type PreferencesWhereInput = {
    AND?: PreferencesWhereInput | PreferencesWhereInput[]
    OR?: PreferencesWhereInput[]
    NOT?: PreferencesWhereInput | PreferencesWhereInput[]
    id?: IntFilter<"Preferences"> | number
    userCognitoId?: StringFilter<"Preferences"> | string
    vegetarianOnly?: BoolFilter<"Preferences"> | boolean
    vegan?: BoolFilter<"Preferences"> | boolean
    pescatarian?: BoolFilter<"Preferences"> | boolean
    flexitarian?: BoolFilter<"Preferences"> | boolean
    meatOnly?: BoolFilter<"Preferences"> | boolean
    glutenFree?: BoolFilter<"Preferences"> | boolean
    lactoseFree?: BoolFilter<"Preferences"> | boolean
    dairyFree?: BoolFilter<"Preferences"> | boolean
    nutFree?: BoolFilter<"Preferences"> | boolean
    peanutFree?: BoolFilter<"Preferences"> | boolean
    shellfishFree?: BoolFilter<"Preferences"> | boolean
    eggFree?: BoolFilter<"Preferences"> | boolean
    soyFree?: BoolFilter<"Preferences"> | boolean
    fishFree?: BoolFilter<"Preferences"> | boolean
    nightshadeFree?: BoolFilter<"Preferences"> | boolean
    lowCarb?: BoolFilter<"Preferences"> | boolean
    keto?: BoolFilter<"Preferences"> | boolean
    paleo?: BoolFilter<"Preferences"> | boolean
    lowSugar?: BoolFilter<"Preferences"> | boolean
    lowSalt?: BoolFilter<"Preferences"> | boolean
    lowFat?: BoolFilter<"Preferences"> | boolean
    highProtein?: BoolFilter<"Preferences"> | boolean
    rawFood?: BoolFilter<"Preferences"> | boolean
    whole30?: BoolFilter<"Preferences"> | boolean
    diabeticFriendly?: BoolFilter<"Preferences"> | boolean
    customPreferences?: StringFilter<"Preferences"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PreferencesOrderByWithRelationInput = {
    id?: SortOrder
    userCognitoId?: SortOrder
    vegetarianOnly?: SortOrder
    vegan?: SortOrder
    pescatarian?: SortOrder
    flexitarian?: SortOrder
    meatOnly?: SortOrder
    glutenFree?: SortOrder
    lactoseFree?: SortOrder
    dairyFree?: SortOrder
    nutFree?: SortOrder
    peanutFree?: SortOrder
    shellfishFree?: SortOrder
    eggFree?: SortOrder
    soyFree?: SortOrder
    fishFree?: SortOrder
    nightshadeFree?: SortOrder
    lowCarb?: SortOrder
    keto?: SortOrder
    paleo?: SortOrder
    lowSugar?: SortOrder
    lowSalt?: SortOrder
    lowFat?: SortOrder
    highProtein?: SortOrder
    rawFood?: SortOrder
    whole30?: SortOrder
    diabeticFriendly?: SortOrder
    customPreferences?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PreferencesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userCognitoId?: string
    AND?: PreferencesWhereInput | PreferencesWhereInput[]
    OR?: PreferencesWhereInput[]
    NOT?: PreferencesWhereInput | PreferencesWhereInput[]
    vegetarianOnly?: BoolFilter<"Preferences"> | boolean
    vegan?: BoolFilter<"Preferences"> | boolean
    pescatarian?: BoolFilter<"Preferences"> | boolean
    flexitarian?: BoolFilter<"Preferences"> | boolean
    meatOnly?: BoolFilter<"Preferences"> | boolean
    glutenFree?: BoolFilter<"Preferences"> | boolean
    lactoseFree?: BoolFilter<"Preferences"> | boolean
    dairyFree?: BoolFilter<"Preferences"> | boolean
    nutFree?: BoolFilter<"Preferences"> | boolean
    peanutFree?: BoolFilter<"Preferences"> | boolean
    shellfishFree?: BoolFilter<"Preferences"> | boolean
    eggFree?: BoolFilter<"Preferences"> | boolean
    soyFree?: BoolFilter<"Preferences"> | boolean
    fishFree?: BoolFilter<"Preferences"> | boolean
    nightshadeFree?: BoolFilter<"Preferences"> | boolean
    lowCarb?: BoolFilter<"Preferences"> | boolean
    keto?: BoolFilter<"Preferences"> | boolean
    paleo?: BoolFilter<"Preferences"> | boolean
    lowSugar?: BoolFilter<"Preferences"> | boolean
    lowSalt?: BoolFilter<"Preferences"> | boolean
    lowFat?: BoolFilter<"Preferences"> | boolean
    highProtein?: BoolFilter<"Preferences"> | boolean
    rawFood?: BoolFilter<"Preferences"> | boolean
    whole30?: BoolFilter<"Preferences"> | boolean
    diabeticFriendly?: BoolFilter<"Preferences"> | boolean
    customPreferences?: StringFilter<"Preferences"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userCognitoId">

  export type PreferencesOrderByWithAggregationInput = {
    id?: SortOrder
    userCognitoId?: SortOrder
    vegetarianOnly?: SortOrder
    vegan?: SortOrder
    pescatarian?: SortOrder
    flexitarian?: SortOrder
    meatOnly?: SortOrder
    glutenFree?: SortOrder
    lactoseFree?: SortOrder
    dairyFree?: SortOrder
    nutFree?: SortOrder
    peanutFree?: SortOrder
    shellfishFree?: SortOrder
    eggFree?: SortOrder
    soyFree?: SortOrder
    fishFree?: SortOrder
    nightshadeFree?: SortOrder
    lowCarb?: SortOrder
    keto?: SortOrder
    paleo?: SortOrder
    lowSugar?: SortOrder
    lowSalt?: SortOrder
    lowFat?: SortOrder
    highProtein?: SortOrder
    rawFood?: SortOrder
    whole30?: SortOrder
    diabeticFriendly?: SortOrder
    customPreferences?: SortOrder
    _count?: PreferencesCountOrderByAggregateInput
    _avg?: PreferencesAvgOrderByAggregateInput
    _max?: PreferencesMaxOrderByAggregateInput
    _min?: PreferencesMinOrderByAggregateInput
    _sum?: PreferencesSumOrderByAggregateInput
  }

  export type PreferencesScalarWhereWithAggregatesInput = {
    AND?: PreferencesScalarWhereWithAggregatesInput | PreferencesScalarWhereWithAggregatesInput[]
    OR?: PreferencesScalarWhereWithAggregatesInput[]
    NOT?: PreferencesScalarWhereWithAggregatesInput | PreferencesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Preferences"> | number
    userCognitoId?: StringWithAggregatesFilter<"Preferences"> | string
    vegetarianOnly?: BoolWithAggregatesFilter<"Preferences"> | boolean
    vegan?: BoolWithAggregatesFilter<"Preferences"> | boolean
    pescatarian?: BoolWithAggregatesFilter<"Preferences"> | boolean
    flexitarian?: BoolWithAggregatesFilter<"Preferences"> | boolean
    meatOnly?: BoolWithAggregatesFilter<"Preferences"> | boolean
    glutenFree?: BoolWithAggregatesFilter<"Preferences"> | boolean
    lactoseFree?: BoolWithAggregatesFilter<"Preferences"> | boolean
    dairyFree?: BoolWithAggregatesFilter<"Preferences"> | boolean
    nutFree?: BoolWithAggregatesFilter<"Preferences"> | boolean
    peanutFree?: BoolWithAggregatesFilter<"Preferences"> | boolean
    shellfishFree?: BoolWithAggregatesFilter<"Preferences"> | boolean
    eggFree?: BoolWithAggregatesFilter<"Preferences"> | boolean
    soyFree?: BoolWithAggregatesFilter<"Preferences"> | boolean
    fishFree?: BoolWithAggregatesFilter<"Preferences"> | boolean
    nightshadeFree?: BoolWithAggregatesFilter<"Preferences"> | boolean
    lowCarb?: BoolWithAggregatesFilter<"Preferences"> | boolean
    keto?: BoolWithAggregatesFilter<"Preferences"> | boolean
    paleo?: BoolWithAggregatesFilter<"Preferences"> | boolean
    lowSugar?: BoolWithAggregatesFilter<"Preferences"> | boolean
    lowSalt?: BoolWithAggregatesFilter<"Preferences"> | boolean
    lowFat?: BoolWithAggregatesFilter<"Preferences"> | boolean
    highProtein?: BoolWithAggregatesFilter<"Preferences"> | boolean
    rawFood?: BoolWithAggregatesFilter<"Preferences"> | boolean
    whole30?: BoolWithAggregatesFilter<"Preferences"> | boolean
    diabeticFriendly?: BoolWithAggregatesFilter<"Preferences"> | boolean
    customPreferences?: StringWithAggregatesFilter<"Preferences"> | string
  }

  export type FavoriteRecipesWhereInput = {
    AND?: FavoriteRecipesWhereInput | FavoriteRecipesWhereInput[]
    OR?: FavoriteRecipesWhereInput[]
    NOT?: FavoriteRecipesWhereInput | FavoriteRecipesWhereInput[]
    id?: IntFilter<"FavoriteRecipes"> | number
    imageUrl?: StringFilter<"FavoriteRecipes"> | string
    content?: StringFilter<"FavoriteRecipes"> | string
    userCognitoId?: StringFilter<"FavoriteRecipes"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FavoriteRecipesOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    content?: SortOrder
    userCognitoId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FavoriteRecipesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FavoriteRecipesWhereInput | FavoriteRecipesWhereInput[]
    OR?: FavoriteRecipesWhereInput[]
    NOT?: FavoriteRecipesWhereInput | FavoriteRecipesWhereInput[]
    imageUrl?: StringFilter<"FavoriteRecipes"> | string
    content?: StringFilter<"FavoriteRecipes"> | string
    userCognitoId?: StringFilter<"FavoriteRecipes"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FavoriteRecipesOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    content?: SortOrder
    userCognitoId?: SortOrder
    _count?: FavoriteRecipesCountOrderByAggregateInput
    _avg?: FavoriteRecipesAvgOrderByAggregateInput
    _max?: FavoriteRecipesMaxOrderByAggregateInput
    _min?: FavoriteRecipesMinOrderByAggregateInput
    _sum?: FavoriteRecipesSumOrderByAggregateInput
  }

  export type FavoriteRecipesScalarWhereWithAggregatesInput = {
    AND?: FavoriteRecipesScalarWhereWithAggregatesInput | FavoriteRecipesScalarWhereWithAggregatesInput[]
    OR?: FavoriteRecipesScalarWhereWithAggregatesInput[]
    NOT?: FavoriteRecipesScalarWhereWithAggregatesInput | FavoriteRecipesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FavoriteRecipes"> | number
    imageUrl?: StringWithAggregatesFilter<"FavoriteRecipes"> | string
    content?: StringWithAggregatesFilter<"FavoriteRecipes"> | string
    userCognitoId?: StringWithAggregatesFilter<"FavoriteRecipes"> | string
  }

  export type UserCreateInput = {
    cognitoId: string
    email: string
    favoriteRecipes?: FavoriteRecipesCreateNestedManyWithoutUserInput
    preferences?: PreferencesCreateNestedOneWithoutUserInput
    location?: LocationCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    cognitoId: string
    email: string
    favoriteRecipes?: FavoriteRecipesUncheckedCreateNestedManyWithoutUserInput
    preferences?: PreferencesUncheckedCreateNestedOneWithoutUserInput
    location?: LocationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    favoriteRecipes?: FavoriteRecipesUpdateManyWithoutUserNestedInput
    preferences?: PreferencesUpdateOneWithoutUserNestedInput
    location?: LocationUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    favoriteRecipes?: FavoriteRecipesUncheckedUpdateManyWithoutUserNestedInput
    preferences?: PreferencesUncheckedUpdateOneWithoutUserNestedInput
    location?: LocationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    cognitoId: string
    email: string
  }

  export type UserUpdateManyMutationInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type LocationCreateInput = {
    country: string
    city: string
    address: string
    radius: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: number
    userCognitoId: string
    country: string
    city: string
    address: string
    radius: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
  }

  export type LocationUpdateInput = {
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    radius?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userCognitoId?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    radius?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type LocationCreateManyInput = {
    id?: number
    userCognitoId: string
    country: string
    city: string
    address: string
    radius: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
  }

  export type LocationUpdateManyMutationInput = {
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    radius?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userCognitoId?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    radius?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PreferencesCreateInput = {
    vegetarianOnly?: boolean
    vegan?: boolean
    pescatarian?: boolean
    flexitarian?: boolean
    meatOnly?: boolean
    glutenFree?: boolean
    lactoseFree?: boolean
    dairyFree?: boolean
    nutFree?: boolean
    peanutFree?: boolean
    shellfishFree?: boolean
    eggFree?: boolean
    soyFree?: boolean
    fishFree?: boolean
    nightshadeFree?: boolean
    lowCarb?: boolean
    keto?: boolean
    paleo?: boolean
    lowSugar?: boolean
    lowSalt?: boolean
    lowFat?: boolean
    highProtein?: boolean
    rawFood?: boolean
    whole30?: boolean
    diabeticFriendly?: boolean
    customPreferences: string
    user: UserCreateNestedOneWithoutPreferencesInput
  }

  export type PreferencesUncheckedCreateInput = {
    id?: number
    userCognitoId: string
    vegetarianOnly?: boolean
    vegan?: boolean
    pescatarian?: boolean
    flexitarian?: boolean
    meatOnly?: boolean
    glutenFree?: boolean
    lactoseFree?: boolean
    dairyFree?: boolean
    nutFree?: boolean
    peanutFree?: boolean
    shellfishFree?: boolean
    eggFree?: boolean
    soyFree?: boolean
    fishFree?: boolean
    nightshadeFree?: boolean
    lowCarb?: boolean
    keto?: boolean
    paleo?: boolean
    lowSugar?: boolean
    lowSalt?: boolean
    lowFat?: boolean
    highProtein?: boolean
    rawFood?: boolean
    whole30?: boolean
    diabeticFriendly?: boolean
    customPreferences: string
  }

  export type PreferencesUpdateInput = {
    vegetarianOnly?: BoolFieldUpdateOperationsInput | boolean
    vegan?: BoolFieldUpdateOperationsInput | boolean
    pescatarian?: BoolFieldUpdateOperationsInput | boolean
    flexitarian?: BoolFieldUpdateOperationsInput | boolean
    meatOnly?: BoolFieldUpdateOperationsInput | boolean
    glutenFree?: BoolFieldUpdateOperationsInput | boolean
    lactoseFree?: BoolFieldUpdateOperationsInput | boolean
    dairyFree?: BoolFieldUpdateOperationsInput | boolean
    nutFree?: BoolFieldUpdateOperationsInput | boolean
    peanutFree?: BoolFieldUpdateOperationsInput | boolean
    shellfishFree?: BoolFieldUpdateOperationsInput | boolean
    eggFree?: BoolFieldUpdateOperationsInput | boolean
    soyFree?: BoolFieldUpdateOperationsInput | boolean
    fishFree?: BoolFieldUpdateOperationsInput | boolean
    nightshadeFree?: BoolFieldUpdateOperationsInput | boolean
    lowCarb?: BoolFieldUpdateOperationsInput | boolean
    keto?: BoolFieldUpdateOperationsInput | boolean
    paleo?: BoolFieldUpdateOperationsInput | boolean
    lowSugar?: BoolFieldUpdateOperationsInput | boolean
    lowSalt?: BoolFieldUpdateOperationsInput | boolean
    lowFat?: BoolFieldUpdateOperationsInput | boolean
    highProtein?: BoolFieldUpdateOperationsInput | boolean
    rawFood?: BoolFieldUpdateOperationsInput | boolean
    whole30?: BoolFieldUpdateOperationsInput | boolean
    diabeticFriendly?: BoolFieldUpdateOperationsInput | boolean
    customPreferences?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type PreferencesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userCognitoId?: StringFieldUpdateOperationsInput | string
    vegetarianOnly?: BoolFieldUpdateOperationsInput | boolean
    vegan?: BoolFieldUpdateOperationsInput | boolean
    pescatarian?: BoolFieldUpdateOperationsInput | boolean
    flexitarian?: BoolFieldUpdateOperationsInput | boolean
    meatOnly?: BoolFieldUpdateOperationsInput | boolean
    glutenFree?: BoolFieldUpdateOperationsInput | boolean
    lactoseFree?: BoolFieldUpdateOperationsInput | boolean
    dairyFree?: BoolFieldUpdateOperationsInput | boolean
    nutFree?: BoolFieldUpdateOperationsInput | boolean
    peanutFree?: BoolFieldUpdateOperationsInput | boolean
    shellfishFree?: BoolFieldUpdateOperationsInput | boolean
    eggFree?: BoolFieldUpdateOperationsInput | boolean
    soyFree?: BoolFieldUpdateOperationsInput | boolean
    fishFree?: BoolFieldUpdateOperationsInput | boolean
    nightshadeFree?: BoolFieldUpdateOperationsInput | boolean
    lowCarb?: BoolFieldUpdateOperationsInput | boolean
    keto?: BoolFieldUpdateOperationsInput | boolean
    paleo?: BoolFieldUpdateOperationsInput | boolean
    lowSugar?: BoolFieldUpdateOperationsInput | boolean
    lowSalt?: BoolFieldUpdateOperationsInput | boolean
    lowFat?: BoolFieldUpdateOperationsInput | boolean
    highProtein?: BoolFieldUpdateOperationsInput | boolean
    rawFood?: BoolFieldUpdateOperationsInput | boolean
    whole30?: BoolFieldUpdateOperationsInput | boolean
    diabeticFriendly?: BoolFieldUpdateOperationsInput | boolean
    customPreferences?: StringFieldUpdateOperationsInput | string
  }

  export type PreferencesCreateManyInput = {
    id?: number
    userCognitoId: string
    vegetarianOnly?: boolean
    vegan?: boolean
    pescatarian?: boolean
    flexitarian?: boolean
    meatOnly?: boolean
    glutenFree?: boolean
    lactoseFree?: boolean
    dairyFree?: boolean
    nutFree?: boolean
    peanutFree?: boolean
    shellfishFree?: boolean
    eggFree?: boolean
    soyFree?: boolean
    fishFree?: boolean
    nightshadeFree?: boolean
    lowCarb?: boolean
    keto?: boolean
    paleo?: boolean
    lowSugar?: boolean
    lowSalt?: boolean
    lowFat?: boolean
    highProtein?: boolean
    rawFood?: boolean
    whole30?: boolean
    diabeticFriendly?: boolean
    customPreferences: string
  }

  export type PreferencesUpdateManyMutationInput = {
    vegetarianOnly?: BoolFieldUpdateOperationsInput | boolean
    vegan?: BoolFieldUpdateOperationsInput | boolean
    pescatarian?: BoolFieldUpdateOperationsInput | boolean
    flexitarian?: BoolFieldUpdateOperationsInput | boolean
    meatOnly?: BoolFieldUpdateOperationsInput | boolean
    glutenFree?: BoolFieldUpdateOperationsInput | boolean
    lactoseFree?: BoolFieldUpdateOperationsInput | boolean
    dairyFree?: BoolFieldUpdateOperationsInput | boolean
    nutFree?: BoolFieldUpdateOperationsInput | boolean
    peanutFree?: BoolFieldUpdateOperationsInput | boolean
    shellfishFree?: BoolFieldUpdateOperationsInput | boolean
    eggFree?: BoolFieldUpdateOperationsInput | boolean
    soyFree?: BoolFieldUpdateOperationsInput | boolean
    fishFree?: BoolFieldUpdateOperationsInput | boolean
    nightshadeFree?: BoolFieldUpdateOperationsInput | boolean
    lowCarb?: BoolFieldUpdateOperationsInput | boolean
    keto?: BoolFieldUpdateOperationsInput | boolean
    paleo?: BoolFieldUpdateOperationsInput | boolean
    lowSugar?: BoolFieldUpdateOperationsInput | boolean
    lowSalt?: BoolFieldUpdateOperationsInput | boolean
    lowFat?: BoolFieldUpdateOperationsInput | boolean
    highProtein?: BoolFieldUpdateOperationsInput | boolean
    rawFood?: BoolFieldUpdateOperationsInput | boolean
    whole30?: BoolFieldUpdateOperationsInput | boolean
    diabeticFriendly?: BoolFieldUpdateOperationsInput | boolean
    customPreferences?: StringFieldUpdateOperationsInput | string
  }

  export type PreferencesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userCognitoId?: StringFieldUpdateOperationsInput | string
    vegetarianOnly?: BoolFieldUpdateOperationsInput | boolean
    vegan?: BoolFieldUpdateOperationsInput | boolean
    pescatarian?: BoolFieldUpdateOperationsInput | boolean
    flexitarian?: BoolFieldUpdateOperationsInput | boolean
    meatOnly?: BoolFieldUpdateOperationsInput | boolean
    glutenFree?: BoolFieldUpdateOperationsInput | boolean
    lactoseFree?: BoolFieldUpdateOperationsInput | boolean
    dairyFree?: BoolFieldUpdateOperationsInput | boolean
    nutFree?: BoolFieldUpdateOperationsInput | boolean
    peanutFree?: BoolFieldUpdateOperationsInput | boolean
    shellfishFree?: BoolFieldUpdateOperationsInput | boolean
    eggFree?: BoolFieldUpdateOperationsInput | boolean
    soyFree?: BoolFieldUpdateOperationsInput | boolean
    fishFree?: BoolFieldUpdateOperationsInput | boolean
    nightshadeFree?: BoolFieldUpdateOperationsInput | boolean
    lowCarb?: BoolFieldUpdateOperationsInput | boolean
    keto?: BoolFieldUpdateOperationsInput | boolean
    paleo?: BoolFieldUpdateOperationsInput | boolean
    lowSugar?: BoolFieldUpdateOperationsInput | boolean
    lowSalt?: BoolFieldUpdateOperationsInput | boolean
    lowFat?: BoolFieldUpdateOperationsInput | boolean
    highProtein?: BoolFieldUpdateOperationsInput | boolean
    rawFood?: BoolFieldUpdateOperationsInput | boolean
    whole30?: BoolFieldUpdateOperationsInput | boolean
    diabeticFriendly?: BoolFieldUpdateOperationsInput | boolean
    customPreferences?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteRecipesCreateInput = {
    imageUrl: string
    content: string
    user: UserCreateNestedOneWithoutFavoriteRecipesInput
  }

  export type FavoriteRecipesUncheckedCreateInput = {
    id?: number
    imageUrl: string
    content: string
    userCognitoId: string
  }

  export type FavoriteRecipesUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFavoriteRecipesNestedInput
  }

  export type FavoriteRecipesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userCognitoId?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteRecipesCreateManyInput = {
    id?: number
    imageUrl: string
    content: string
    userCognitoId: string
  }

  export type FavoriteRecipesUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteRecipesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userCognitoId?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FavoriteRecipesListRelationFilter = {
    every?: FavoriteRecipesWhereInput
    some?: FavoriteRecipesWhereInput
    none?: FavoriteRecipesWhereInput
  }

  export type PreferencesNullableScalarRelationFilter = {
    is?: PreferencesWhereInput | null
    isNot?: PreferencesWhereInput | null
  }

  export type LocationNullableScalarRelationFilter = {
    is?: LocationWhereInput | null
    isNot?: LocationWhereInput | null
  }

  export type FavoriteRecipesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    email?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    email?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    userCognitoId?: SortOrder
    country?: SortOrder
    city?: SortOrder
    address?: SortOrder
    radius?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    userCognitoId?: SortOrder
    country?: SortOrder
    city?: SortOrder
    address?: SortOrder
    radius?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    userCognitoId?: SortOrder
    country?: SortOrder
    city?: SortOrder
    address?: SortOrder
    radius?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PreferencesCountOrderByAggregateInput = {
    id?: SortOrder
    userCognitoId?: SortOrder
    vegetarianOnly?: SortOrder
    vegan?: SortOrder
    pescatarian?: SortOrder
    flexitarian?: SortOrder
    meatOnly?: SortOrder
    glutenFree?: SortOrder
    lactoseFree?: SortOrder
    dairyFree?: SortOrder
    nutFree?: SortOrder
    peanutFree?: SortOrder
    shellfishFree?: SortOrder
    eggFree?: SortOrder
    soyFree?: SortOrder
    fishFree?: SortOrder
    nightshadeFree?: SortOrder
    lowCarb?: SortOrder
    keto?: SortOrder
    paleo?: SortOrder
    lowSugar?: SortOrder
    lowSalt?: SortOrder
    lowFat?: SortOrder
    highProtein?: SortOrder
    rawFood?: SortOrder
    whole30?: SortOrder
    diabeticFriendly?: SortOrder
    customPreferences?: SortOrder
  }

  export type PreferencesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PreferencesMaxOrderByAggregateInput = {
    id?: SortOrder
    userCognitoId?: SortOrder
    vegetarianOnly?: SortOrder
    vegan?: SortOrder
    pescatarian?: SortOrder
    flexitarian?: SortOrder
    meatOnly?: SortOrder
    glutenFree?: SortOrder
    lactoseFree?: SortOrder
    dairyFree?: SortOrder
    nutFree?: SortOrder
    peanutFree?: SortOrder
    shellfishFree?: SortOrder
    eggFree?: SortOrder
    soyFree?: SortOrder
    fishFree?: SortOrder
    nightshadeFree?: SortOrder
    lowCarb?: SortOrder
    keto?: SortOrder
    paleo?: SortOrder
    lowSugar?: SortOrder
    lowSalt?: SortOrder
    lowFat?: SortOrder
    highProtein?: SortOrder
    rawFood?: SortOrder
    whole30?: SortOrder
    diabeticFriendly?: SortOrder
    customPreferences?: SortOrder
  }

  export type PreferencesMinOrderByAggregateInput = {
    id?: SortOrder
    userCognitoId?: SortOrder
    vegetarianOnly?: SortOrder
    vegan?: SortOrder
    pescatarian?: SortOrder
    flexitarian?: SortOrder
    meatOnly?: SortOrder
    glutenFree?: SortOrder
    lactoseFree?: SortOrder
    dairyFree?: SortOrder
    nutFree?: SortOrder
    peanutFree?: SortOrder
    shellfishFree?: SortOrder
    eggFree?: SortOrder
    soyFree?: SortOrder
    fishFree?: SortOrder
    nightshadeFree?: SortOrder
    lowCarb?: SortOrder
    keto?: SortOrder
    paleo?: SortOrder
    lowSugar?: SortOrder
    lowSalt?: SortOrder
    lowFat?: SortOrder
    highProtein?: SortOrder
    rawFood?: SortOrder
    whole30?: SortOrder
    diabeticFriendly?: SortOrder
    customPreferences?: SortOrder
  }

  export type PreferencesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FavoriteRecipesCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    content?: SortOrder
    userCognitoId?: SortOrder
  }

  export type FavoriteRecipesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FavoriteRecipesMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    content?: SortOrder
    userCognitoId?: SortOrder
  }

  export type FavoriteRecipesMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    content?: SortOrder
    userCognitoId?: SortOrder
  }

  export type FavoriteRecipesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FavoriteRecipesCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteRecipesCreateWithoutUserInput, FavoriteRecipesUncheckedCreateWithoutUserInput> | FavoriteRecipesCreateWithoutUserInput[] | FavoriteRecipesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteRecipesCreateOrConnectWithoutUserInput | FavoriteRecipesCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteRecipesCreateManyUserInputEnvelope
    connect?: FavoriteRecipesWhereUniqueInput | FavoriteRecipesWhereUniqueInput[]
  }

  export type PreferencesCreateNestedOneWithoutUserInput = {
    create?: XOR<PreferencesCreateWithoutUserInput, PreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: PreferencesCreateOrConnectWithoutUserInput
    connect?: PreferencesWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutUserInput = {
    create?: XOR<LocationCreateWithoutUserInput, LocationUncheckedCreateWithoutUserInput>
    connectOrCreate?: LocationCreateOrConnectWithoutUserInput
    connect?: LocationWhereUniqueInput
  }

  export type FavoriteRecipesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteRecipesCreateWithoutUserInput, FavoriteRecipesUncheckedCreateWithoutUserInput> | FavoriteRecipesCreateWithoutUserInput[] | FavoriteRecipesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteRecipesCreateOrConnectWithoutUserInput | FavoriteRecipesCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteRecipesCreateManyUserInputEnvelope
    connect?: FavoriteRecipesWhereUniqueInput | FavoriteRecipesWhereUniqueInput[]
  }

  export type PreferencesUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PreferencesCreateWithoutUserInput, PreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: PreferencesCreateOrConnectWithoutUserInput
    connect?: PreferencesWhereUniqueInput
  }

  export type LocationUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<LocationCreateWithoutUserInput, LocationUncheckedCreateWithoutUserInput>
    connectOrCreate?: LocationCreateOrConnectWithoutUserInput
    connect?: LocationWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FavoriteRecipesUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteRecipesCreateWithoutUserInput, FavoriteRecipesUncheckedCreateWithoutUserInput> | FavoriteRecipesCreateWithoutUserInput[] | FavoriteRecipesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteRecipesCreateOrConnectWithoutUserInput | FavoriteRecipesCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteRecipesUpsertWithWhereUniqueWithoutUserInput | FavoriteRecipesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteRecipesCreateManyUserInputEnvelope
    set?: FavoriteRecipesWhereUniqueInput | FavoriteRecipesWhereUniqueInput[]
    disconnect?: FavoriteRecipesWhereUniqueInput | FavoriteRecipesWhereUniqueInput[]
    delete?: FavoriteRecipesWhereUniqueInput | FavoriteRecipesWhereUniqueInput[]
    connect?: FavoriteRecipesWhereUniqueInput | FavoriteRecipesWhereUniqueInput[]
    update?: FavoriteRecipesUpdateWithWhereUniqueWithoutUserInput | FavoriteRecipesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteRecipesUpdateManyWithWhereWithoutUserInput | FavoriteRecipesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteRecipesScalarWhereInput | FavoriteRecipesScalarWhereInput[]
  }

  export type PreferencesUpdateOneWithoutUserNestedInput = {
    create?: XOR<PreferencesCreateWithoutUserInput, PreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: PreferencesCreateOrConnectWithoutUserInput
    upsert?: PreferencesUpsertWithoutUserInput
    disconnect?: PreferencesWhereInput | boolean
    delete?: PreferencesWhereInput | boolean
    connect?: PreferencesWhereUniqueInput
    update?: XOR<XOR<PreferencesUpdateToOneWithWhereWithoutUserInput, PreferencesUpdateWithoutUserInput>, PreferencesUncheckedUpdateWithoutUserInput>
  }

  export type LocationUpdateOneWithoutUserNestedInput = {
    create?: XOR<LocationCreateWithoutUserInput, LocationUncheckedCreateWithoutUserInput>
    connectOrCreate?: LocationCreateOrConnectWithoutUserInput
    upsert?: LocationUpsertWithoutUserInput
    disconnect?: LocationWhereInput | boolean
    delete?: LocationWhereInput | boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutUserInput, LocationUpdateWithoutUserInput>, LocationUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FavoriteRecipesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteRecipesCreateWithoutUserInput, FavoriteRecipesUncheckedCreateWithoutUserInput> | FavoriteRecipesCreateWithoutUserInput[] | FavoriteRecipesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteRecipesCreateOrConnectWithoutUserInput | FavoriteRecipesCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteRecipesUpsertWithWhereUniqueWithoutUserInput | FavoriteRecipesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteRecipesCreateManyUserInputEnvelope
    set?: FavoriteRecipesWhereUniqueInput | FavoriteRecipesWhereUniqueInput[]
    disconnect?: FavoriteRecipesWhereUniqueInput | FavoriteRecipesWhereUniqueInput[]
    delete?: FavoriteRecipesWhereUniqueInput | FavoriteRecipesWhereUniqueInput[]
    connect?: FavoriteRecipesWhereUniqueInput | FavoriteRecipesWhereUniqueInput[]
    update?: FavoriteRecipesUpdateWithWhereUniqueWithoutUserInput | FavoriteRecipesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteRecipesUpdateManyWithWhereWithoutUserInput | FavoriteRecipesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteRecipesScalarWhereInput | FavoriteRecipesScalarWhereInput[]
  }

  export type PreferencesUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PreferencesCreateWithoutUserInput, PreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: PreferencesCreateOrConnectWithoutUserInput
    upsert?: PreferencesUpsertWithoutUserInput
    disconnect?: PreferencesWhereInput | boolean
    delete?: PreferencesWhereInput | boolean
    connect?: PreferencesWhereUniqueInput
    update?: XOR<XOR<PreferencesUpdateToOneWithWhereWithoutUserInput, PreferencesUpdateWithoutUserInput>, PreferencesUncheckedUpdateWithoutUserInput>
  }

  export type LocationUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<LocationCreateWithoutUserInput, LocationUncheckedCreateWithoutUserInput>
    connectOrCreate?: LocationCreateOrConnectWithoutUserInput
    upsert?: LocationUpsertWithoutUserInput
    disconnect?: LocationWhereInput | boolean
    delete?: LocationWhereInput | boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutUserInput, LocationUpdateWithoutUserInput>, LocationUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutLocationInput = {
    create?: XOR<UserCreateWithoutLocationInput, UserUncheckedCreateWithoutLocationInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocationInput
    connect?: UserWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutLocationNestedInput = {
    create?: XOR<UserCreateWithoutLocationInput, UserUncheckedCreateWithoutLocationInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocationInput
    upsert?: UserUpsertWithoutLocationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLocationInput, UserUpdateWithoutLocationInput>, UserUncheckedUpdateWithoutLocationInput>
  }

  export type UserCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    upsert?: UserUpsertWithoutPreferencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreferencesInput, UserUpdateWithoutPreferencesInput>, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserCreateNestedOneWithoutFavoriteRecipesInput = {
    create?: XOR<UserCreateWithoutFavoriteRecipesInput, UserUncheckedCreateWithoutFavoriteRecipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteRecipesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoriteRecipesNestedInput = {
    create?: XOR<UserCreateWithoutFavoriteRecipesInput, UserUncheckedCreateWithoutFavoriteRecipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteRecipesInput
    upsert?: UserUpsertWithoutFavoriteRecipesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoriteRecipesInput, UserUpdateWithoutFavoriteRecipesInput>, UserUncheckedUpdateWithoutFavoriteRecipesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FavoriteRecipesCreateWithoutUserInput = {
    imageUrl: string
    content: string
  }

  export type FavoriteRecipesUncheckedCreateWithoutUserInput = {
    id?: number
    imageUrl: string
    content: string
  }

  export type FavoriteRecipesCreateOrConnectWithoutUserInput = {
    where: FavoriteRecipesWhereUniqueInput
    create: XOR<FavoriteRecipesCreateWithoutUserInput, FavoriteRecipesUncheckedCreateWithoutUserInput>
  }

  export type FavoriteRecipesCreateManyUserInputEnvelope = {
    data: FavoriteRecipesCreateManyUserInput | FavoriteRecipesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PreferencesCreateWithoutUserInput = {
    vegetarianOnly?: boolean
    vegan?: boolean
    pescatarian?: boolean
    flexitarian?: boolean
    meatOnly?: boolean
    glutenFree?: boolean
    lactoseFree?: boolean
    dairyFree?: boolean
    nutFree?: boolean
    peanutFree?: boolean
    shellfishFree?: boolean
    eggFree?: boolean
    soyFree?: boolean
    fishFree?: boolean
    nightshadeFree?: boolean
    lowCarb?: boolean
    keto?: boolean
    paleo?: boolean
    lowSugar?: boolean
    lowSalt?: boolean
    lowFat?: boolean
    highProtein?: boolean
    rawFood?: boolean
    whole30?: boolean
    diabeticFriendly?: boolean
    customPreferences: string
  }

  export type PreferencesUncheckedCreateWithoutUserInput = {
    id?: number
    vegetarianOnly?: boolean
    vegan?: boolean
    pescatarian?: boolean
    flexitarian?: boolean
    meatOnly?: boolean
    glutenFree?: boolean
    lactoseFree?: boolean
    dairyFree?: boolean
    nutFree?: boolean
    peanutFree?: boolean
    shellfishFree?: boolean
    eggFree?: boolean
    soyFree?: boolean
    fishFree?: boolean
    nightshadeFree?: boolean
    lowCarb?: boolean
    keto?: boolean
    paleo?: boolean
    lowSugar?: boolean
    lowSalt?: boolean
    lowFat?: boolean
    highProtein?: boolean
    rawFood?: boolean
    whole30?: boolean
    diabeticFriendly?: boolean
    customPreferences: string
  }

  export type PreferencesCreateOrConnectWithoutUserInput = {
    where: PreferencesWhereUniqueInput
    create: XOR<PreferencesCreateWithoutUserInput, PreferencesUncheckedCreateWithoutUserInput>
  }

  export type LocationCreateWithoutUserInput = {
    country: string
    city: string
    address: string
    radius: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
  }

  export type LocationUncheckedCreateWithoutUserInput = {
    id?: number
    country: string
    city: string
    address: string
    radius: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
  }

  export type LocationCreateOrConnectWithoutUserInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutUserInput, LocationUncheckedCreateWithoutUserInput>
  }

  export type FavoriteRecipesUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteRecipesWhereUniqueInput
    update: XOR<FavoriteRecipesUpdateWithoutUserInput, FavoriteRecipesUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteRecipesCreateWithoutUserInput, FavoriteRecipesUncheckedCreateWithoutUserInput>
  }

  export type FavoriteRecipesUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteRecipesWhereUniqueInput
    data: XOR<FavoriteRecipesUpdateWithoutUserInput, FavoriteRecipesUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteRecipesUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteRecipesScalarWhereInput
    data: XOR<FavoriteRecipesUpdateManyMutationInput, FavoriteRecipesUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteRecipesScalarWhereInput = {
    AND?: FavoriteRecipesScalarWhereInput | FavoriteRecipesScalarWhereInput[]
    OR?: FavoriteRecipesScalarWhereInput[]
    NOT?: FavoriteRecipesScalarWhereInput | FavoriteRecipesScalarWhereInput[]
    id?: IntFilter<"FavoriteRecipes"> | number
    imageUrl?: StringFilter<"FavoriteRecipes"> | string
    content?: StringFilter<"FavoriteRecipes"> | string
    userCognitoId?: StringFilter<"FavoriteRecipes"> | string
  }

  export type PreferencesUpsertWithoutUserInput = {
    update: XOR<PreferencesUpdateWithoutUserInput, PreferencesUncheckedUpdateWithoutUserInput>
    create: XOR<PreferencesCreateWithoutUserInput, PreferencesUncheckedCreateWithoutUserInput>
    where?: PreferencesWhereInput
  }

  export type PreferencesUpdateToOneWithWhereWithoutUserInput = {
    where?: PreferencesWhereInput
    data: XOR<PreferencesUpdateWithoutUserInput, PreferencesUncheckedUpdateWithoutUserInput>
  }

  export type PreferencesUpdateWithoutUserInput = {
    vegetarianOnly?: BoolFieldUpdateOperationsInput | boolean
    vegan?: BoolFieldUpdateOperationsInput | boolean
    pescatarian?: BoolFieldUpdateOperationsInput | boolean
    flexitarian?: BoolFieldUpdateOperationsInput | boolean
    meatOnly?: BoolFieldUpdateOperationsInput | boolean
    glutenFree?: BoolFieldUpdateOperationsInput | boolean
    lactoseFree?: BoolFieldUpdateOperationsInput | boolean
    dairyFree?: BoolFieldUpdateOperationsInput | boolean
    nutFree?: BoolFieldUpdateOperationsInput | boolean
    peanutFree?: BoolFieldUpdateOperationsInput | boolean
    shellfishFree?: BoolFieldUpdateOperationsInput | boolean
    eggFree?: BoolFieldUpdateOperationsInput | boolean
    soyFree?: BoolFieldUpdateOperationsInput | boolean
    fishFree?: BoolFieldUpdateOperationsInput | boolean
    nightshadeFree?: BoolFieldUpdateOperationsInput | boolean
    lowCarb?: BoolFieldUpdateOperationsInput | boolean
    keto?: BoolFieldUpdateOperationsInput | boolean
    paleo?: BoolFieldUpdateOperationsInput | boolean
    lowSugar?: BoolFieldUpdateOperationsInput | boolean
    lowSalt?: BoolFieldUpdateOperationsInput | boolean
    lowFat?: BoolFieldUpdateOperationsInput | boolean
    highProtein?: BoolFieldUpdateOperationsInput | boolean
    rawFood?: BoolFieldUpdateOperationsInput | boolean
    whole30?: BoolFieldUpdateOperationsInput | boolean
    diabeticFriendly?: BoolFieldUpdateOperationsInput | boolean
    customPreferences?: StringFieldUpdateOperationsInput | string
  }

  export type PreferencesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    vegetarianOnly?: BoolFieldUpdateOperationsInput | boolean
    vegan?: BoolFieldUpdateOperationsInput | boolean
    pescatarian?: BoolFieldUpdateOperationsInput | boolean
    flexitarian?: BoolFieldUpdateOperationsInput | boolean
    meatOnly?: BoolFieldUpdateOperationsInput | boolean
    glutenFree?: BoolFieldUpdateOperationsInput | boolean
    lactoseFree?: BoolFieldUpdateOperationsInput | boolean
    dairyFree?: BoolFieldUpdateOperationsInput | boolean
    nutFree?: BoolFieldUpdateOperationsInput | boolean
    peanutFree?: BoolFieldUpdateOperationsInput | boolean
    shellfishFree?: BoolFieldUpdateOperationsInput | boolean
    eggFree?: BoolFieldUpdateOperationsInput | boolean
    soyFree?: BoolFieldUpdateOperationsInput | boolean
    fishFree?: BoolFieldUpdateOperationsInput | boolean
    nightshadeFree?: BoolFieldUpdateOperationsInput | boolean
    lowCarb?: BoolFieldUpdateOperationsInput | boolean
    keto?: BoolFieldUpdateOperationsInput | boolean
    paleo?: BoolFieldUpdateOperationsInput | boolean
    lowSugar?: BoolFieldUpdateOperationsInput | boolean
    lowSalt?: BoolFieldUpdateOperationsInput | boolean
    lowFat?: BoolFieldUpdateOperationsInput | boolean
    highProtein?: BoolFieldUpdateOperationsInput | boolean
    rawFood?: BoolFieldUpdateOperationsInput | boolean
    whole30?: BoolFieldUpdateOperationsInput | boolean
    diabeticFriendly?: BoolFieldUpdateOperationsInput | boolean
    customPreferences?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUpsertWithoutUserInput = {
    update: XOR<LocationUpdateWithoutUserInput, LocationUncheckedUpdateWithoutUserInput>
    create: XOR<LocationCreateWithoutUserInput, LocationUncheckedCreateWithoutUserInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutUserInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutUserInput, LocationUncheckedUpdateWithoutUserInput>
  }

  export type LocationUpdateWithoutUserInput = {
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    radius?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type LocationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    radius?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type UserCreateWithoutLocationInput = {
    cognitoId: string
    email: string
    favoriteRecipes?: FavoriteRecipesCreateNestedManyWithoutUserInput
    preferences?: PreferencesCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLocationInput = {
    id?: number
    cognitoId: string
    email: string
    favoriteRecipes?: FavoriteRecipesUncheckedCreateNestedManyWithoutUserInput
    preferences?: PreferencesUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLocationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLocationInput, UserUncheckedCreateWithoutLocationInput>
  }

  export type UserUpsertWithoutLocationInput = {
    update: XOR<UserUpdateWithoutLocationInput, UserUncheckedUpdateWithoutLocationInput>
    create: XOR<UserCreateWithoutLocationInput, UserUncheckedCreateWithoutLocationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLocationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLocationInput, UserUncheckedUpdateWithoutLocationInput>
  }

  export type UserUpdateWithoutLocationInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    favoriteRecipes?: FavoriteRecipesUpdateManyWithoutUserNestedInput
    preferences?: PreferencesUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    favoriteRecipes?: FavoriteRecipesUncheckedUpdateManyWithoutUserNestedInput
    preferences?: PreferencesUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutPreferencesInput = {
    cognitoId: string
    email: string
    favoriteRecipes?: FavoriteRecipesCreateNestedManyWithoutUserInput
    location?: LocationCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPreferencesInput = {
    id?: number
    cognitoId: string
    email: string
    favoriteRecipes?: FavoriteRecipesUncheckedCreateNestedManyWithoutUserInput
    location?: LocationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPreferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
  }

  export type UserUpsertWithoutPreferencesInput = {
    update: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserUpdateWithoutPreferencesInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    favoriteRecipes?: FavoriteRecipesUpdateManyWithoutUserNestedInput
    location?: LocationUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPreferencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    favoriteRecipes?: FavoriteRecipesUncheckedUpdateManyWithoutUserNestedInput
    location?: LocationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutFavoriteRecipesInput = {
    cognitoId: string
    email: string
    preferences?: PreferencesCreateNestedOneWithoutUserInput
    location?: LocationCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoriteRecipesInput = {
    id?: number
    cognitoId: string
    email: string
    preferences?: PreferencesUncheckedCreateNestedOneWithoutUserInput
    location?: LocationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoriteRecipesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoriteRecipesInput, UserUncheckedCreateWithoutFavoriteRecipesInput>
  }

  export type UserUpsertWithoutFavoriteRecipesInput = {
    update: XOR<UserUpdateWithoutFavoriteRecipesInput, UserUncheckedUpdateWithoutFavoriteRecipesInput>
    create: XOR<UserCreateWithoutFavoriteRecipesInput, UserUncheckedCreateWithoutFavoriteRecipesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoriteRecipesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoriteRecipesInput, UserUncheckedUpdateWithoutFavoriteRecipesInput>
  }

  export type UserUpdateWithoutFavoriteRecipesInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    preferences?: PreferencesUpdateOneWithoutUserNestedInput
    location?: LocationUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoriteRecipesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    preferences?: PreferencesUncheckedUpdateOneWithoutUserNestedInput
    location?: LocationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type FavoriteRecipesCreateManyUserInput = {
    id?: number
    imageUrl: string
    content: string
  }

  export type FavoriteRecipesUpdateWithoutUserInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteRecipesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteRecipesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}