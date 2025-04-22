
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
 * Model cnsl_group
 * 
 */
export type cnsl_group = $Result.DefaultSelection<Prisma.$cnsl_groupPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model app
 * 
 */
export type app = $Result.DefaultSelection<Prisma.$appPayload>
/**
 * Model policy
 * 
 */
export type policy = $Result.DefaultSelection<Prisma.$policyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AccessDurationType: {
  FIXED: 'FIXED',
  INDEFINITE: 'INDEFINITE'
};

export type AccessDurationType = (typeof AccessDurationType)[keyof typeof AccessDurationType]

}

export type AccessDurationType = $Enums.AccessDurationType

export const AccessDurationType: typeof $Enums.AccessDurationType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cnsl_groups
 * const cnsl_groups = await prisma.cnsl_group.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Cnsl_groups
   * const cnsl_groups = await prisma.cnsl_group.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.cnsl_group`: Exposes CRUD operations for the **cnsl_group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cnsl_groups
    * const cnsl_groups = await prisma.cnsl_group.findMany()
    * ```
    */
  get cnsl_group(): Prisma.cnsl_groupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.app`: Exposes CRUD operations for the **app** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apps
    * const apps = await prisma.app.findMany()
    * ```
    */
  get app(): Prisma.appDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.policy`: Exposes CRUD operations for the **policy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Policies
    * const policies = await prisma.policy.findMany()
    * ```
    */
  get policy(): Prisma.policyDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    cnsl_group: 'cnsl_group',
    user: 'user',
    app: 'app',
    policy: 'policy'
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
      modelProps: "cnsl_group" | "user" | "app" | "policy"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      cnsl_group: {
        payload: Prisma.$cnsl_groupPayload<ExtArgs>
        fields: Prisma.cnsl_groupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cnsl_groupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnsl_groupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cnsl_groupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnsl_groupPayload>
          }
          findFirst: {
            args: Prisma.cnsl_groupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnsl_groupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cnsl_groupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnsl_groupPayload>
          }
          findMany: {
            args: Prisma.cnsl_groupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnsl_groupPayload>[]
          }
          create: {
            args: Prisma.cnsl_groupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnsl_groupPayload>
          }
          createMany: {
            args: Prisma.cnsl_groupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cnsl_groupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnsl_groupPayload>[]
          }
          delete: {
            args: Prisma.cnsl_groupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnsl_groupPayload>
          }
          update: {
            args: Prisma.cnsl_groupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnsl_groupPayload>
          }
          deleteMany: {
            args: Prisma.cnsl_groupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cnsl_groupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cnsl_groupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnsl_groupPayload>[]
          }
          upsert: {
            args: Prisma.cnsl_groupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cnsl_groupPayload>
          }
          aggregate: {
            args: Prisma.Cnsl_groupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCnsl_group>
          }
          groupBy: {
            args: Prisma.cnsl_groupGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cnsl_groupGroupByOutputType>[]
          }
          count: {
            args: Prisma.cnsl_groupCountArgs<ExtArgs>
            result: $Utils.Optional<Cnsl_groupCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      app: {
        payload: Prisma.$appPayload<ExtArgs>
        fields: Prisma.appFieldRefs
        operations: {
          findUnique: {
            args: Prisma.appFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.appFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appPayload>
          }
          findFirst: {
            args: Prisma.appFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.appFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appPayload>
          }
          findMany: {
            args: Prisma.appFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appPayload>[]
          }
          create: {
            args: Prisma.appCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appPayload>
          }
          createMany: {
            args: Prisma.appCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.appCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appPayload>[]
          }
          delete: {
            args: Prisma.appDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appPayload>
          }
          update: {
            args: Prisma.appUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appPayload>
          }
          deleteMany: {
            args: Prisma.appDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.appUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.appUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appPayload>[]
          }
          upsert: {
            args: Prisma.appUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appPayload>
          }
          aggregate: {
            args: Prisma.AppAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApp>
          }
          groupBy: {
            args: Prisma.appGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppGroupByOutputType>[]
          }
          count: {
            args: Prisma.appCountArgs<ExtArgs>
            result: $Utils.Optional<AppCountAggregateOutputType> | number
          }
        }
      }
      policy: {
        payload: Prisma.$policyPayload<ExtArgs>
        fields: Prisma.policyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.policyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$policyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.policyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$policyPayload>
          }
          findFirst: {
            args: Prisma.policyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$policyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.policyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$policyPayload>
          }
          findMany: {
            args: Prisma.policyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$policyPayload>[]
          }
          create: {
            args: Prisma.policyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$policyPayload>
          }
          createMany: {
            args: Prisma.policyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.policyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$policyPayload>[]
          }
          delete: {
            args: Prisma.policyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$policyPayload>
          }
          update: {
            args: Prisma.policyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$policyPayload>
          }
          deleteMany: {
            args: Prisma.policyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.policyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.policyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$policyPayload>[]
          }
          upsert: {
            args: Prisma.policyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$policyPayload>
          }
          aggregate: {
            args: Prisma.PolicyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePolicy>
          }
          groupBy: {
            args: Prisma.policyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PolicyGroupByOutputType>[]
          }
          count: {
            args: Prisma.policyCountArgs<ExtArgs>
            result: $Utils.Optional<PolicyCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    cnsl_group?: cnsl_groupOmit
    user?: userOmit
    app?: appOmit
    policy?: policyOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type Cnsl_groupCountOutputType
   */

  export type Cnsl_groupCountOutputType = {
    visiblePolicies: number
    members: number
  }

  export type Cnsl_groupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visiblePolicies?: boolean | Cnsl_groupCountOutputTypeCountVisiblePoliciesArgs
    members?: boolean | Cnsl_groupCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * Cnsl_groupCountOutputType without action
   */
  export type Cnsl_groupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cnsl_groupCountOutputType
     */
    select?: Cnsl_groupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Cnsl_groupCountOutputType without action
   */
  export type Cnsl_groupCountOutputTypeCountVisiblePoliciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: policyWhereInput
  }

  /**
   * Cnsl_groupCountOutputType without action
   */
  export type Cnsl_groupCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ownedApps: number
    reviewingPolicies: number
    visiblePolicies: number
    groups: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedApps?: boolean | UserCountOutputTypeCountOwnedAppsArgs
    reviewingPolicies?: boolean | UserCountOutputTypeCountReviewingPoliciesArgs
    visiblePolicies?: boolean | UserCountOutputTypeCountVisiblePoliciesArgs
    groups?: boolean | UserCountOutputTypeCountGroupsArgs
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
  export type UserCountOutputTypeCountOwnedAppsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewingPoliciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: policyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVisiblePoliciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: policyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cnsl_groupWhereInput
  }


  /**
   * Count Type AppCountOutputType
   */

  export type AppCountOutputType = {
    policies: number
  }

  export type AppCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    policies?: boolean | AppCountOutputTypeCountPoliciesArgs
  }

  // Custom InputTypes
  /**
   * AppCountOutputType without action
   */
  export type AppCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppCountOutputType
     */
    select?: AppCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppCountOutputType without action
   */
  export type AppCountOutputTypeCountPoliciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: policyWhereInput
  }


  /**
   * Count Type PolicyCountOutputType
   */

  export type PolicyCountOutputType = {
    reviewers: number
    visibleGroups: number
    visibleUsers: number
  }

  export type PolicyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewers?: boolean | PolicyCountOutputTypeCountReviewersArgs
    visibleGroups?: boolean | PolicyCountOutputTypeCountVisibleGroupsArgs
    visibleUsers?: boolean | PolicyCountOutputTypeCountVisibleUsersArgs
  }

  // Custom InputTypes
  /**
   * PolicyCountOutputType without action
   */
  export type PolicyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyCountOutputType
     */
    select?: PolicyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PolicyCountOutputType without action
   */
  export type PolicyCountOutputTypeCountReviewersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
  }

  /**
   * PolicyCountOutputType without action
   */
  export type PolicyCountOutputTypeCountVisibleGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cnsl_groupWhereInput
  }

  /**
   * PolicyCountOutputType without action
   */
  export type PolicyCountOutputTypeCountVisibleUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
  }


  /**
   * Models
   */

  /**
   * Model cnsl_group
   */

  export type AggregateCnsl_group = {
    _count: Cnsl_groupCountAggregateOutputType | null
    _min: Cnsl_groupMinAggregateOutputType | null
    _max: Cnsl_groupMaxAggregateOutputType | null
  }

  export type Cnsl_groupMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type Cnsl_groupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type Cnsl_groupCountAggregateOutputType = {
    id: number
    name: number
    description: number
    note: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type Cnsl_groupMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type Cnsl_groupMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type Cnsl_groupCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type Cnsl_groupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cnsl_group to aggregate.
     */
    where?: cnsl_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cnsl_groups to fetch.
     */
    orderBy?: cnsl_groupOrderByWithRelationInput | cnsl_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cnsl_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cnsl_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cnsl_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cnsl_groups
    **/
    _count?: true | Cnsl_groupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cnsl_groupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cnsl_groupMaxAggregateInputType
  }

  export type GetCnsl_groupAggregateType<T extends Cnsl_groupAggregateArgs> = {
        [P in keyof T & keyof AggregateCnsl_group]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCnsl_group[P]>
      : GetScalarType<T[P], AggregateCnsl_group[P]>
  }




  export type cnsl_groupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cnsl_groupWhereInput
    orderBy?: cnsl_groupOrderByWithAggregationInput | cnsl_groupOrderByWithAggregationInput[]
    by: Cnsl_groupScalarFieldEnum[] | Cnsl_groupScalarFieldEnum
    having?: cnsl_groupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cnsl_groupCountAggregateInputType | true
    _min?: Cnsl_groupMinAggregateInputType
    _max?: Cnsl_groupMaxAggregateInputType
  }

  export type Cnsl_groupGroupByOutputType = {
    id: string
    name: string | null
    description: string | null
    note: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: Cnsl_groupCountAggregateOutputType | null
    _min: Cnsl_groupMinAggregateOutputType | null
    _max: Cnsl_groupMaxAggregateOutputType | null
  }

  type GetCnsl_groupGroupByPayload<T extends cnsl_groupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cnsl_groupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cnsl_groupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cnsl_groupGroupByOutputType[P]>
            : GetScalarType<T[P], Cnsl_groupGroupByOutputType[P]>
        }
      >
    >


  export type cnsl_groupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    visiblePolicies?: boolean | cnsl_group$visiblePoliciesArgs<ExtArgs>
    members?: boolean | cnsl_group$membersArgs<ExtArgs>
    _count?: boolean | Cnsl_groupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cnsl_group"]>

  export type cnsl_groupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["cnsl_group"]>

  export type cnsl_groupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["cnsl_group"]>

  export type cnsl_groupSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type cnsl_groupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "note" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["cnsl_group"]>
  export type cnsl_groupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visiblePolicies?: boolean | cnsl_group$visiblePoliciesArgs<ExtArgs>
    members?: boolean | cnsl_group$membersArgs<ExtArgs>
    _count?: boolean | Cnsl_groupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cnsl_groupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type cnsl_groupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $cnsl_groupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cnsl_group"
    objects: {
      visiblePolicies: Prisma.$policyPayload<ExtArgs>[]
      members: Prisma.$userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      description: string | null
      note: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["cnsl_group"]>
    composites: {}
  }

  type cnsl_groupGetPayload<S extends boolean | null | undefined | cnsl_groupDefaultArgs> = $Result.GetResult<Prisma.$cnsl_groupPayload, S>

  type cnsl_groupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cnsl_groupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cnsl_groupCountAggregateInputType | true
    }

  export interface cnsl_groupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cnsl_group'], meta: { name: 'cnsl_group' } }
    /**
     * Find zero or one Cnsl_group that matches the filter.
     * @param {cnsl_groupFindUniqueArgs} args - Arguments to find a Cnsl_group
     * @example
     * // Get one Cnsl_group
     * const cnsl_group = await prisma.cnsl_group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cnsl_groupFindUniqueArgs>(args: SelectSubset<T, cnsl_groupFindUniqueArgs<ExtArgs>>): Prisma__cnsl_groupClient<$Result.GetResult<Prisma.$cnsl_groupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cnsl_group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cnsl_groupFindUniqueOrThrowArgs} args - Arguments to find a Cnsl_group
     * @example
     * // Get one Cnsl_group
     * const cnsl_group = await prisma.cnsl_group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cnsl_groupFindUniqueOrThrowArgs>(args: SelectSubset<T, cnsl_groupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cnsl_groupClient<$Result.GetResult<Prisma.$cnsl_groupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cnsl_group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cnsl_groupFindFirstArgs} args - Arguments to find a Cnsl_group
     * @example
     * // Get one Cnsl_group
     * const cnsl_group = await prisma.cnsl_group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cnsl_groupFindFirstArgs>(args?: SelectSubset<T, cnsl_groupFindFirstArgs<ExtArgs>>): Prisma__cnsl_groupClient<$Result.GetResult<Prisma.$cnsl_groupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cnsl_group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cnsl_groupFindFirstOrThrowArgs} args - Arguments to find a Cnsl_group
     * @example
     * // Get one Cnsl_group
     * const cnsl_group = await prisma.cnsl_group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cnsl_groupFindFirstOrThrowArgs>(args?: SelectSubset<T, cnsl_groupFindFirstOrThrowArgs<ExtArgs>>): Prisma__cnsl_groupClient<$Result.GetResult<Prisma.$cnsl_groupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cnsl_groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cnsl_groupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cnsl_groups
     * const cnsl_groups = await prisma.cnsl_group.findMany()
     * 
     * // Get first 10 Cnsl_groups
     * const cnsl_groups = await prisma.cnsl_group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cnsl_groupWithIdOnly = await prisma.cnsl_group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cnsl_groupFindManyArgs>(args?: SelectSubset<T, cnsl_groupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cnsl_groupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cnsl_group.
     * @param {cnsl_groupCreateArgs} args - Arguments to create a Cnsl_group.
     * @example
     * // Create one Cnsl_group
     * const Cnsl_group = await prisma.cnsl_group.create({
     *   data: {
     *     // ... data to create a Cnsl_group
     *   }
     * })
     * 
     */
    create<T extends cnsl_groupCreateArgs>(args: SelectSubset<T, cnsl_groupCreateArgs<ExtArgs>>): Prisma__cnsl_groupClient<$Result.GetResult<Prisma.$cnsl_groupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cnsl_groups.
     * @param {cnsl_groupCreateManyArgs} args - Arguments to create many Cnsl_groups.
     * @example
     * // Create many Cnsl_groups
     * const cnsl_group = await prisma.cnsl_group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cnsl_groupCreateManyArgs>(args?: SelectSubset<T, cnsl_groupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cnsl_groups and returns the data saved in the database.
     * @param {cnsl_groupCreateManyAndReturnArgs} args - Arguments to create many Cnsl_groups.
     * @example
     * // Create many Cnsl_groups
     * const cnsl_group = await prisma.cnsl_group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cnsl_groups and only return the `id`
     * const cnsl_groupWithIdOnly = await prisma.cnsl_group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cnsl_groupCreateManyAndReturnArgs>(args?: SelectSubset<T, cnsl_groupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cnsl_groupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cnsl_group.
     * @param {cnsl_groupDeleteArgs} args - Arguments to delete one Cnsl_group.
     * @example
     * // Delete one Cnsl_group
     * const Cnsl_group = await prisma.cnsl_group.delete({
     *   where: {
     *     // ... filter to delete one Cnsl_group
     *   }
     * })
     * 
     */
    delete<T extends cnsl_groupDeleteArgs>(args: SelectSubset<T, cnsl_groupDeleteArgs<ExtArgs>>): Prisma__cnsl_groupClient<$Result.GetResult<Prisma.$cnsl_groupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cnsl_group.
     * @param {cnsl_groupUpdateArgs} args - Arguments to update one Cnsl_group.
     * @example
     * // Update one Cnsl_group
     * const cnsl_group = await prisma.cnsl_group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cnsl_groupUpdateArgs>(args: SelectSubset<T, cnsl_groupUpdateArgs<ExtArgs>>): Prisma__cnsl_groupClient<$Result.GetResult<Prisma.$cnsl_groupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cnsl_groups.
     * @param {cnsl_groupDeleteManyArgs} args - Arguments to filter Cnsl_groups to delete.
     * @example
     * // Delete a few Cnsl_groups
     * const { count } = await prisma.cnsl_group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cnsl_groupDeleteManyArgs>(args?: SelectSubset<T, cnsl_groupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cnsl_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cnsl_groupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cnsl_groups
     * const cnsl_group = await prisma.cnsl_group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cnsl_groupUpdateManyArgs>(args: SelectSubset<T, cnsl_groupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cnsl_groups and returns the data updated in the database.
     * @param {cnsl_groupUpdateManyAndReturnArgs} args - Arguments to update many Cnsl_groups.
     * @example
     * // Update many Cnsl_groups
     * const cnsl_group = await prisma.cnsl_group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cnsl_groups and only return the `id`
     * const cnsl_groupWithIdOnly = await prisma.cnsl_group.updateManyAndReturn({
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
    updateManyAndReturn<T extends cnsl_groupUpdateManyAndReturnArgs>(args: SelectSubset<T, cnsl_groupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cnsl_groupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cnsl_group.
     * @param {cnsl_groupUpsertArgs} args - Arguments to update or create a Cnsl_group.
     * @example
     * // Update or create a Cnsl_group
     * const cnsl_group = await prisma.cnsl_group.upsert({
     *   create: {
     *     // ... data to create a Cnsl_group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cnsl_group we want to update
     *   }
     * })
     */
    upsert<T extends cnsl_groupUpsertArgs>(args: SelectSubset<T, cnsl_groupUpsertArgs<ExtArgs>>): Prisma__cnsl_groupClient<$Result.GetResult<Prisma.$cnsl_groupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cnsl_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cnsl_groupCountArgs} args - Arguments to filter Cnsl_groups to count.
     * @example
     * // Count the number of Cnsl_groups
     * const count = await prisma.cnsl_group.count({
     *   where: {
     *     // ... the filter for the Cnsl_groups we want to count
     *   }
     * })
    **/
    count<T extends cnsl_groupCountArgs>(
      args?: Subset<T, cnsl_groupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cnsl_groupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cnsl_group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cnsl_groupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Cnsl_groupAggregateArgs>(args: Subset<T, Cnsl_groupAggregateArgs>): Prisma.PrismaPromise<GetCnsl_groupAggregateType<T>>

    /**
     * Group by Cnsl_group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cnsl_groupGroupByArgs} args - Group by arguments.
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
      T extends cnsl_groupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cnsl_groupGroupByArgs['orderBy'] }
        : { orderBy?: cnsl_groupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cnsl_groupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCnsl_groupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cnsl_group model
   */
  readonly fields: cnsl_groupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cnsl_group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cnsl_groupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    visiblePolicies<T extends cnsl_group$visiblePoliciesArgs<ExtArgs> = {}>(args?: Subset<T, cnsl_group$visiblePoliciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$policyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    members<T extends cnsl_group$membersArgs<ExtArgs> = {}>(args?: Subset<T, cnsl_group$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the cnsl_group model
   */
  interface cnsl_groupFieldRefs {
    readonly id: FieldRef<"cnsl_group", 'String'>
    readonly name: FieldRef<"cnsl_group", 'String'>
    readonly description: FieldRef<"cnsl_group", 'String'>
    readonly note: FieldRef<"cnsl_group", 'String'>
    readonly createdAt: FieldRef<"cnsl_group", 'DateTime'>
    readonly updatedAt: FieldRef<"cnsl_group", 'DateTime'>
    readonly deletedAt: FieldRef<"cnsl_group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cnsl_group findUnique
   */
  export type cnsl_groupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnsl_group
     */
    select?: cnsl_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnsl_group
     */
    omit?: cnsl_groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnsl_groupInclude<ExtArgs> | null
    /**
     * Filter, which cnsl_group to fetch.
     */
    where: cnsl_groupWhereUniqueInput
  }

  /**
   * cnsl_group findUniqueOrThrow
   */
  export type cnsl_groupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnsl_group
     */
    select?: cnsl_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnsl_group
     */
    omit?: cnsl_groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnsl_groupInclude<ExtArgs> | null
    /**
     * Filter, which cnsl_group to fetch.
     */
    where: cnsl_groupWhereUniqueInput
  }

  /**
   * cnsl_group findFirst
   */
  export type cnsl_groupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnsl_group
     */
    select?: cnsl_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnsl_group
     */
    omit?: cnsl_groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnsl_groupInclude<ExtArgs> | null
    /**
     * Filter, which cnsl_group to fetch.
     */
    where?: cnsl_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cnsl_groups to fetch.
     */
    orderBy?: cnsl_groupOrderByWithRelationInput | cnsl_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cnsl_groups.
     */
    cursor?: cnsl_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cnsl_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cnsl_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cnsl_groups.
     */
    distinct?: Cnsl_groupScalarFieldEnum | Cnsl_groupScalarFieldEnum[]
  }

  /**
   * cnsl_group findFirstOrThrow
   */
  export type cnsl_groupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnsl_group
     */
    select?: cnsl_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnsl_group
     */
    omit?: cnsl_groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnsl_groupInclude<ExtArgs> | null
    /**
     * Filter, which cnsl_group to fetch.
     */
    where?: cnsl_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cnsl_groups to fetch.
     */
    orderBy?: cnsl_groupOrderByWithRelationInput | cnsl_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cnsl_groups.
     */
    cursor?: cnsl_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cnsl_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cnsl_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cnsl_groups.
     */
    distinct?: Cnsl_groupScalarFieldEnum | Cnsl_groupScalarFieldEnum[]
  }

  /**
   * cnsl_group findMany
   */
  export type cnsl_groupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnsl_group
     */
    select?: cnsl_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnsl_group
     */
    omit?: cnsl_groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnsl_groupInclude<ExtArgs> | null
    /**
     * Filter, which cnsl_groups to fetch.
     */
    where?: cnsl_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cnsl_groups to fetch.
     */
    orderBy?: cnsl_groupOrderByWithRelationInput | cnsl_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cnsl_groups.
     */
    cursor?: cnsl_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cnsl_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cnsl_groups.
     */
    skip?: number
    distinct?: Cnsl_groupScalarFieldEnum | Cnsl_groupScalarFieldEnum[]
  }

  /**
   * cnsl_group create
   */
  export type cnsl_groupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnsl_group
     */
    select?: cnsl_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnsl_group
     */
    omit?: cnsl_groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnsl_groupInclude<ExtArgs> | null
    /**
     * The data needed to create a cnsl_group.
     */
    data?: XOR<cnsl_groupCreateInput, cnsl_groupUncheckedCreateInput>
  }

  /**
   * cnsl_group createMany
   */
  export type cnsl_groupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cnsl_groups.
     */
    data: cnsl_groupCreateManyInput | cnsl_groupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cnsl_group createManyAndReturn
   */
  export type cnsl_groupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnsl_group
     */
    select?: cnsl_groupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cnsl_group
     */
    omit?: cnsl_groupOmit<ExtArgs> | null
    /**
     * The data used to create many cnsl_groups.
     */
    data: cnsl_groupCreateManyInput | cnsl_groupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cnsl_group update
   */
  export type cnsl_groupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnsl_group
     */
    select?: cnsl_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnsl_group
     */
    omit?: cnsl_groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnsl_groupInclude<ExtArgs> | null
    /**
     * The data needed to update a cnsl_group.
     */
    data: XOR<cnsl_groupUpdateInput, cnsl_groupUncheckedUpdateInput>
    /**
     * Choose, which cnsl_group to update.
     */
    where: cnsl_groupWhereUniqueInput
  }

  /**
   * cnsl_group updateMany
   */
  export type cnsl_groupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cnsl_groups.
     */
    data: XOR<cnsl_groupUpdateManyMutationInput, cnsl_groupUncheckedUpdateManyInput>
    /**
     * Filter which cnsl_groups to update
     */
    where?: cnsl_groupWhereInput
    /**
     * Limit how many cnsl_groups to update.
     */
    limit?: number
  }

  /**
   * cnsl_group updateManyAndReturn
   */
  export type cnsl_groupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnsl_group
     */
    select?: cnsl_groupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cnsl_group
     */
    omit?: cnsl_groupOmit<ExtArgs> | null
    /**
     * The data used to update cnsl_groups.
     */
    data: XOR<cnsl_groupUpdateManyMutationInput, cnsl_groupUncheckedUpdateManyInput>
    /**
     * Filter which cnsl_groups to update
     */
    where?: cnsl_groupWhereInput
    /**
     * Limit how many cnsl_groups to update.
     */
    limit?: number
  }

  /**
   * cnsl_group upsert
   */
  export type cnsl_groupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnsl_group
     */
    select?: cnsl_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnsl_group
     */
    omit?: cnsl_groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnsl_groupInclude<ExtArgs> | null
    /**
     * The filter to search for the cnsl_group to update in case it exists.
     */
    where: cnsl_groupWhereUniqueInput
    /**
     * In case the cnsl_group found by the `where` argument doesn't exist, create a new cnsl_group with this data.
     */
    create: XOR<cnsl_groupCreateInput, cnsl_groupUncheckedCreateInput>
    /**
     * In case the cnsl_group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cnsl_groupUpdateInput, cnsl_groupUncheckedUpdateInput>
  }

  /**
   * cnsl_group delete
   */
  export type cnsl_groupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnsl_group
     */
    select?: cnsl_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnsl_group
     */
    omit?: cnsl_groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnsl_groupInclude<ExtArgs> | null
    /**
     * Filter which cnsl_group to delete.
     */
    where: cnsl_groupWhereUniqueInput
  }

  /**
   * cnsl_group deleteMany
   */
  export type cnsl_groupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cnsl_groups to delete
     */
    where?: cnsl_groupWhereInput
    /**
     * Limit how many cnsl_groups to delete.
     */
    limit?: number
  }

  /**
   * cnsl_group.visiblePolicies
   */
  export type cnsl_group$visiblePoliciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the policy
     */
    select?: policySelect<ExtArgs> | null
    /**
     * Omit specific fields from the policy
     */
    omit?: policyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: policyInclude<ExtArgs> | null
    where?: policyWhereInput
    orderBy?: policyOrderByWithRelationInput | policyOrderByWithRelationInput[]
    cursor?: policyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * cnsl_group.members
   */
  export type cnsl_group$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * cnsl_group without action
   */
  export type cnsl_groupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnsl_group
     */
    select?: cnsl_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnsl_group
     */
    omit?: cnsl_groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnsl_groupInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    avatar: string | null
    title: string | null
    department: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    avatar: string | null
    title: string | null
    department: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    firstName: number
    lastName: number
    avatar: number
    title: number
    department: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    avatar?: true
    title?: true
    department?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    avatar?: true
    title?: true
    department?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    avatar?: true
    title?: true
    department?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
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




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    firstName: string
    lastName: string
    avatar: string | null
    title: string | null
    department: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
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


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    avatar?: boolean
    title?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    ownedApps?: boolean | user$ownedAppsArgs<ExtArgs>
    reviewingPolicies?: boolean | user$reviewingPoliciesArgs<ExtArgs>
    visiblePolicies?: boolean | user$visiblePoliciesArgs<ExtArgs>
    groups?: boolean | user$groupsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    avatar?: boolean
    title?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    avatar?: boolean
    title?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    avatar?: boolean
    title?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "firstName" | "lastName" | "avatar" | "title" | "department" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedApps?: boolean | user$ownedAppsArgs<ExtArgs>
    reviewingPolicies?: boolean | user$reviewingPoliciesArgs<ExtArgs>
    visiblePolicies?: boolean | user$visiblePoliciesArgs<ExtArgs>
    groups?: boolean | user$groupsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      ownedApps: Prisma.$appPayload<ExtArgs>[]
      reviewingPolicies: Prisma.$policyPayload<ExtArgs>[]
      visiblePolicies: Prisma.$policyPayload<ExtArgs>[]
      groups: Prisma.$cnsl_groupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      firstName: string
      lastName: string
      avatar: string | null
      title: string | null
      department: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
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
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ownedApps<T extends user$ownedAppsArgs<ExtArgs> = {}>(args?: Subset<T, user$ownedAppsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewingPolicies<T extends user$reviewingPoliciesArgs<ExtArgs> = {}>(args?: Subset<T, user$reviewingPoliciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$policyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    visiblePolicies<T extends user$visiblePoliciesArgs<ExtArgs> = {}>(args?: Subset<T, user$visiblePoliciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$policyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groups<T extends user$groupsArgs<ExtArgs> = {}>(args?: Subset<T, user$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cnsl_groupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly firstName: FieldRef<"user", 'String'>
    readonly lastName: FieldRef<"user", 'String'>
    readonly avatar: FieldRef<"user", 'String'>
    readonly title: FieldRef<"user", 'String'>
    readonly department: FieldRef<"user", 'String'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
    readonly deletedAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.ownedApps
   */
  export type user$ownedAppsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app
     */
    select?: appSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app
     */
    omit?: appOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appInclude<ExtArgs> | null
    where?: appWhereInput
    orderBy?: appOrderByWithRelationInput | appOrderByWithRelationInput[]
    cursor?: appWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppScalarFieldEnum | AppScalarFieldEnum[]
  }

  /**
   * user.reviewingPolicies
   */
  export type user$reviewingPoliciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the policy
     */
    select?: policySelect<ExtArgs> | null
    /**
     * Omit specific fields from the policy
     */
    omit?: policyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: policyInclude<ExtArgs> | null
    where?: policyWhereInput
    orderBy?: policyOrderByWithRelationInput | policyOrderByWithRelationInput[]
    cursor?: policyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * user.visiblePolicies
   */
  export type user$visiblePoliciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the policy
     */
    select?: policySelect<ExtArgs> | null
    /**
     * Omit specific fields from the policy
     */
    omit?: policyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: policyInclude<ExtArgs> | null
    where?: policyWhereInput
    orderBy?: policyOrderByWithRelationInput | policyOrderByWithRelationInput[]
    cursor?: policyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * user.groups
   */
  export type user$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnsl_group
     */
    select?: cnsl_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnsl_group
     */
    omit?: cnsl_groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnsl_groupInclude<ExtArgs> | null
    where?: cnsl_groupWhereInput
    orderBy?: cnsl_groupOrderByWithRelationInput | cnsl_groupOrderByWithRelationInput[]
    cursor?: cnsl_groupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cnsl_groupScalarFieldEnum | Cnsl_groupScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model app
   */

  export type AggregateApp = {
    _count: AppCountAggregateOutputType | null
    _min: AppMinAggregateOutputType | null
    _max: AppMaxAggregateOutputType | null
  }

  export type AppMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    logo: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    ownerId: string | null
  }

  export type AppMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    logo: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    ownerId: string | null
  }

  export type AppCountAggregateOutputType = {
    id: number
    name: number
    url: number
    logo: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    ownerId: number
    _all: number
  }


  export type AppMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    logo?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    ownerId?: true
  }

  export type AppMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    logo?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    ownerId?: true
  }

  export type AppCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    logo?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    ownerId?: true
    _all?: true
  }

  export type AppAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which app to aggregate.
     */
    where?: appWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apps to fetch.
     */
    orderBy?: appOrderByWithRelationInput | appOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: appWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned apps
    **/
    _count?: true | AppCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppMaxAggregateInputType
  }

  export type GetAppAggregateType<T extends AppAggregateArgs> = {
        [P in keyof T & keyof AggregateApp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApp[P]>
      : GetScalarType<T[P], AggregateApp[P]>
  }




  export type appGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appWhereInput
    orderBy?: appOrderByWithAggregationInput | appOrderByWithAggregationInput[]
    by: AppScalarFieldEnum[] | AppScalarFieldEnum
    having?: appScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppCountAggregateInputType | true
    _min?: AppMinAggregateInputType
    _max?: AppMaxAggregateInputType
  }

  export type AppGroupByOutputType = {
    id: string
    name: string
    url: string | null
    logo: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    ownerId: string | null
    _count: AppCountAggregateOutputType | null
    _min: AppMinAggregateOutputType | null
    _max: AppMaxAggregateOutputType | null
  }

  type GetAppGroupByPayload<T extends appGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppGroupByOutputType[P]>
            : GetScalarType<T[P], AppGroupByOutputType[P]>
        }
      >
    >


  export type appSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    logo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    ownerId?: boolean
    owner?: boolean | app$ownerArgs<ExtArgs>
    policies?: boolean | app$policiesArgs<ExtArgs>
    _count?: boolean | AppCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["app"]>

  export type appSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    logo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    ownerId?: boolean
    owner?: boolean | app$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["app"]>

  export type appSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    logo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    ownerId?: boolean
    owner?: boolean | app$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["app"]>

  export type appSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    logo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    ownerId?: boolean
  }

  export type appOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "logo" | "createdAt" | "updatedAt" | "deletedAt" | "ownerId", ExtArgs["result"]["app"]>
  export type appInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | app$ownerArgs<ExtArgs>
    policies?: boolean | app$policiesArgs<ExtArgs>
    _count?: boolean | AppCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type appIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | app$ownerArgs<ExtArgs>
  }
  export type appIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | app$ownerArgs<ExtArgs>
  }

  export type $appPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "app"
    objects: {
      owner: Prisma.$userPayload<ExtArgs> | null
      policies: Prisma.$policyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      url: string | null
      logo: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      ownerId: string | null
    }, ExtArgs["result"]["app"]>
    composites: {}
  }

  type appGetPayload<S extends boolean | null | undefined | appDefaultArgs> = $Result.GetResult<Prisma.$appPayload, S>

  type appCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<appFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppCountAggregateInputType | true
    }

  export interface appDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['app'], meta: { name: 'app' } }
    /**
     * Find zero or one App that matches the filter.
     * @param {appFindUniqueArgs} args - Arguments to find a App
     * @example
     * // Get one App
     * const app = await prisma.app.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends appFindUniqueArgs>(args: SelectSubset<T, appFindUniqueArgs<ExtArgs>>): Prisma__appClient<$Result.GetResult<Prisma.$appPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one App that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {appFindUniqueOrThrowArgs} args - Arguments to find a App
     * @example
     * // Get one App
     * const app = await prisma.app.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends appFindUniqueOrThrowArgs>(args: SelectSubset<T, appFindUniqueOrThrowArgs<ExtArgs>>): Prisma__appClient<$Result.GetResult<Prisma.$appPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first App that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appFindFirstArgs} args - Arguments to find a App
     * @example
     * // Get one App
     * const app = await prisma.app.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends appFindFirstArgs>(args?: SelectSubset<T, appFindFirstArgs<ExtArgs>>): Prisma__appClient<$Result.GetResult<Prisma.$appPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first App that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appFindFirstOrThrowArgs} args - Arguments to find a App
     * @example
     * // Get one App
     * const app = await prisma.app.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends appFindFirstOrThrowArgs>(args?: SelectSubset<T, appFindFirstOrThrowArgs<ExtArgs>>): Prisma__appClient<$Result.GetResult<Prisma.$appPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Apps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apps
     * const apps = await prisma.app.findMany()
     * 
     * // Get first 10 Apps
     * const apps = await prisma.app.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appWithIdOnly = await prisma.app.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends appFindManyArgs>(args?: SelectSubset<T, appFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a App.
     * @param {appCreateArgs} args - Arguments to create a App.
     * @example
     * // Create one App
     * const App = await prisma.app.create({
     *   data: {
     *     // ... data to create a App
     *   }
     * })
     * 
     */
    create<T extends appCreateArgs>(args: SelectSubset<T, appCreateArgs<ExtArgs>>): Prisma__appClient<$Result.GetResult<Prisma.$appPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Apps.
     * @param {appCreateManyArgs} args - Arguments to create many Apps.
     * @example
     * // Create many Apps
     * const app = await prisma.app.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends appCreateManyArgs>(args?: SelectSubset<T, appCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Apps and returns the data saved in the database.
     * @param {appCreateManyAndReturnArgs} args - Arguments to create many Apps.
     * @example
     * // Create many Apps
     * const app = await prisma.app.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Apps and only return the `id`
     * const appWithIdOnly = await prisma.app.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends appCreateManyAndReturnArgs>(args?: SelectSubset<T, appCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a App.
     * @param {appDeleteArgs} args - Arguments to delete one App.
     * @example
     * // Delete one App
     * const App = await prisma.app.delete({
     *   where: {
     *     // ... filter to delete one App
     *   }
     * })
     * 
     */
    delete<T extends appDeleteArgs>(args: SelectSubset<T, appDeleteArgs<ExtArgs>>): Prisma__appClient<$Result.GetResult<Prisma.$appPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one App.
     * @param {appUpdateArgs} args - Arguments to update one App.
     * @example
     * // Update one App
     * const app = await prisma.app.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends appUpdateArgs>(args: SelectSubset<T, appUpdateArgs<ExtArgs>>): Prisma__appClient<$Result.GetResult<Prisma.$appPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Apps.
     * @param {appDeleteManyArgs} args - Arguments to filter Apps to delete.
     * @example
     * // Delete a few Apps
     * const { count } = await prisma.app.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends appDeleteManyArgs>(args?: SelectSubset<T, appDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apps
     * const app = await prisma.app.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends appUpdateManyArgs>(args: SelectSubset<T, appUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apps and returns the data updated in the database.
     * @param {appUpdateManyAndReturnArgs} args - Arguments to update many Apps.
     * @example
     * // Update many Apps
     * const app = await prisma.app.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Apps and only return the `id`
     * const appWithIdOnly = await prisma.app.updateManyAndReturn({
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
    updateManyAndReturn<T extends appUpdateManyAndReturnArgs>(args: SelectSubset<T, appUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one App.
     * @param {appUpsertArgs} args - Arguments to update or create a App.
     * @example
     * // Update or create a App
     * const app = await prisma.app.upsert({
     *   create: {
     *     // ... data to create a App
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the App we want to update
     *   }
     * })
     */
    upsert<T extends appUpsertArgs>(args: SelectSubset<T, appUpsertArgs<ExtArgs>>): Prisma__appClient<$Result.GetResult<Prisma.$appPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appCountArgs} args - Arguments to filter Apps to count.
     * @example
     * // Count the number of Apps
     * const count = await prisma.app.count({
     *   where: {
     *     // ... the filter for the Apps we want to count
     *   }
     * })
    **/
    count<T extends appCountArgs>(
      args?: Subset<T, appCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a App.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppAggregateArgs>(args: Subset<T, AppAggregateArgs>): Prisma.PrismaPromise<GetAppAggregateType<T>>

    /**
     * Group by App.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appGroupByArgs} args - Group by arguments.
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
      T extends appGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: appGroupByArgs['orderBy'] }
        : { orderBy?: appGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, appGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the app model
   */
  readonly fields: appFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for app.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__appClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends app$ownerArgs<ExtArgs> = {}>(args?: Subset<T, app$ownerArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    policies<T extends app$policiesArgs<ExtArgs> = {}>(args?: Subset<T, app$policiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$policyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the app model
   */
  interface appFieldRefs {
    readonly id: FieldRef<"app", 'String'>
    readonly name: FieldRef<"app", 'String'>
    readonly url: FieldRef<"app", 'String'>
    readonly logo: FieldRef<"app", 'String'>
    readonly createdAt: FieldRef<"app", 'DateTime'>
    readonly updatedAt: FieldRef<"app", 'DateTime'>
    readonly deletedAt: FieldRef<"app", 'DateTime'>
    readonly ownerId: FieldRef<"app", 'String'>
  }
    

  // Custom InputTypes
  /**
   * app findUnique
   */
  export type appFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app
     */
    select?: appSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app
     */
    omit?: appOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appInclude<ExtArgs> | null
    /**
     * Filter, which app to fetch.
     */
    where: appWhereUniqueInput
  }

  /**
   * app findUniqueOrThrow
   */
  export type appFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app
     */
    select?: appSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app
     */
    omit?: appOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appInclude<ExtArgs> | null
    /**
     * Filter, which app to fetch.
     */
    where: appWhereUniqueInput
  }

  /**
   * app findFirst
   */
  export type appFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app
     */
    select?: appSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app
     */
    omit?: appOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appInclude<ExtArgs> | null
    /**
     * Filter, which app to fetch.
     */
    where?: appWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apps to fetch.
     */
    orderBy?: appOrderByWithRelationInput | appOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apps.
     */
    cursor?: appWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apps.
     */
    distinct?: AppScalarFieldEnum | AppScalarFieldEnum[]
  }

  /**
   * app findFirstOrThrow
   */
  export type appFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app
     */
    select?: appSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app
     */
    omit?: appOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appInclude<ExtArgs> | null
    /**
     * Filter, which app to fetch.
     */
    where?: appWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apps to fetch.
     */
    orderBy?: appOrderByWithRelationInput | appOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apps.
     */
    cursor?: appWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apps.
     */
    distinct?: AppScalarFieldEnum | AppScalarFieldEnum[]
  }

  /**
   * app findMany
   */
  export type appFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app
     */
    select?: appSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app
     */
    omit?: appOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appInclude<ExtArgs> | null
    /**
     * Filter, which apps to fetch.
     */
    where?: appWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apps to fetch.
     */
    orderBy?: appOrderByWithRelationInput | appOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing apps.
     */
    cursor?: appWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apps.
     */
    skip?: number
    distinct?: AppScalarFieldEnum | AppScalarFieldEnum[]
  }

  /**
   * app create
   */
  export type appCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app
     */
    select?: appSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app
     */
    omit?: appOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appInclude<ExtArgs> | null
    /**
     * The data needed to create a app.
     */
    data: XOR<appCreateInput, appUncheckedCreateInput>
  }

  /**
   * app createMany
   */
  export type appCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many apps.
     */
    data: appCreateManyInput | appCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * app createManyAndReturn
   */
  export type appCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app
     */
    select?: appSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the app
     */
    omit?: appOmit<ExtArgs> | null
    /**
     * The data used to create many apps.
     */
    data: appCreateManyInput | appCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * app update
   */
  export type appUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app
     */
    select?: appSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app
     */
    omit?: appOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appInclude<ExtArgs> | null
    /**
     * The data needed to update a app.
     */
    data: XOR<appUpdateInput, appUncheckedUpdateInput>
    /**
     * Choose, which app to update.
     */
    where: appWhereUniqueInput
  }

  /**
   * app updateMany
   */
  export type appUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update apps.
     */
    data: XOR<appUpdateManyMutationInput, appUncheckedUpdateManyInput>
    /**
     * Filter which apps to update
     */
    where?: appWhereInput
    /**
     * Limit how many apps to update.
     */
    limit?: number
  }

  /**
   * app updateManyAndReturn
   */
  export type appUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app
     */
    select?: appSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the app
     */
    omit?: appOmit<ExtArgs> | null
    /**
     * The data used to update apps.
     */
    data: XOR<appUpdateManyMutationInput, appUncheckedUpdateManyInput>
    /**
     * Filter which apps to update
     */
    where?: appWhereInput
    /**
     * Limit how many apps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * app upsert
   */
  export type appUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app
     */
    select?: appSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app
     */
    omit?: appOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appInclude<ExtArgs> | null
    /**
     * The filter to search for the app to update in case it exists.
     */
    where: appWhereUniqueInput
    /**
     * In case the app found by the `where` argument doesn't exist, create a new app with this data.
     */
    create: XOR<appCreateInput, appUncheckedCreateInput>
    /**
     * In case the app was found with the provided `where` argument, update it with this data.
     */
    update: XOR<appUpdateInput, appUncheckedUpdateInput>
  }

  /**
   * app delete
   */
  export type appDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app
     */
    select?: appSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app
     */
    omit?: appOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appInclude<ExtArgs> | null
    /**
     * Filter which app to delete.
     */
    where: appWhereUniqueInput
  }

  /**
   * app deleteMany
   */
  export type appDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apps to delete
     */
    where?: appWhereInput
    /**
     * Limit how many apps to delete.
     */
    limit?: number
  }

  /**
   * app.owner
   */
  export type app$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * app.policies
   */
  export type app$policiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the policy
     */
    select?: policySelect<ExtArgs> | null
    /**
     * Omit specific fields from the policy
     */
    omit?: policyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: policyInclude<ExtArgs> | null
    where?: policyWhereInput
    orderBy?: policyOrderByWithRelationInput | policyOrderByWithRelationInput[]
    cursor?: policyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * app without action
   */
  export type appDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app
     */
    select?: appSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app
     */
    omit?: appOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appInclude<ExtArgs> | null
  }


  /**
   * Model policy
   */

  export type AggregatePolicy = {
    _count: PolicyCountAggregateOutputType | null
    _avg: PolicyAvgAggregateOutputType | null
    _sum: PolicySumAggregateOutputType | null
    _min: PolicyMinAggregateOutputType | null
    _max: PolicyMaxAggregateOutputType | null
  }

  export type PolicyAvgAggregateOutputType = {
    accessDurationDays: number | null
  }

  export type PolicySumAggregateOutputType = {
    accessDurationDays: number | null
  }

  export type PolicyMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    appId: string | null
    visibleToEveryone: boolean | null
    accessDurationType: $Enums.AccessDurationType | null
    accessDurationDays: number | null
    useAppOwnerAsReviewer: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PolicyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    appId: string | null
    visibleToEveryone: boolean | null
    accessDurationType: $Enums.AccessDurationType | null
    accessDurationDays: number | null
    useAppOwnerAsReviewer: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PolicyCountAggregateOutputType = {
    id: number
    name: number
    description: number
    appId: number
    visibleToEveryone: number
    accessDurationType: number
    accessDurationDays: number
    useAppOwnerAsReviewer: number
    approvalSteps: number
    revocationSteps: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type PolicyAvgAggregateInputType = {
    accessDurationDays?: true
  }

  export type PolicySumAggregateInputType = {
    accessDurationDays?: true
  }

  export type PolicyMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    appId?: true
    visibleToEveryone?: true
    accessDurationType?: true
    accessDurationDays?: true
    useAppOwnerAsReviewer?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PolicyMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    appId?: true
    visibleToEveryone?: true
    accessDurationType?: true
    accessDurationDays?: true
    useAppOwnerAsReviewer?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PolicyCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    appId?: true
    visibleToEveryone?: true
    accessDurationType?: true
    accessDurationDays?: true
    useAppOwnerAsReviewer?: true
    approvalSteps?: true
    revocationSteps?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type PolicyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which policy to aggregate.
     */
    where?: policyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of policies to fetch.
     */
    orderBy?: policyOrderByWithRelationInput | policyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: policyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned policies
    **/
    _count?: true | PolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PolicyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PolicySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PolicyMaxAggregateInputType
  }

  export type GetPolicyAggregateType<T extends PolicyAggregateArgs> = {
        [P in keyof T & keyof AggregatePolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolicy[P]>
      : GetScalarType<T[P], AggregatePolicy[P]>
  }




  export type policyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: policyWhereInput
    orderBy?: policyOrderByWithAggregationInput | policyOrderByWithAggregationInput[]
    by: PolicyScalarFieldEnum[] | PolicyScalarFieldEnum
    having?: policyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PolicyCountAggregateInputType | true
    _avg?: PolicyAvgAggregateInputType
    _sum?: PolicySumAggregateInputType
    _min?: PolicyMinAggregateInputType
    _max?: PolicyMaxAggregateInputType
  }

  export type PolicyGroupByOutputType = {
    id: string
    name: string | null
    description: string | null
    appId: string
    visibleToEveryone: boolean
    accessDurationType: $Enums.AccessDurationType
    accessDurationDays: number | null
    useAppOwnerAsReviewer: boolean
    approvalSteps: JsonValue
    revocationSteps: JsonValue
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: PolicyCountAggregateOutputType | null
    _avg: PolicyAvgAggregateOutputType | null
    _sum: PolicySumAggregateOutputType | null
    _min: PolicyMinAggregateOutputType | null
    _max: PolicyMaxAggregateOutputType | null
  }

  type GetPolicyGroupByPayload<T extends policyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PolicyGroupByOutputType[P]>
            : GetScalarType<T[P], PolicyGroupByOutputType[P]>
        }
      >
    >


  export type policySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    appId?: boolean
    visibleToEveryone?: boolean
    accessDurationType?: boolean
    accessDurationDays?: boolean
    useAppOwnerAsReviewer?: boolean
    approvalSteps?: boolean
    revocationSteps?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    app?: boolean | appDefaultArgs<ExtArgs>
    reviewers?: boolean | policy$reviewersArgs<ExtArgs>
    visibleGroups?: boolean | policy$visibleGroupsArgs<ExtArgs>
    visibleUsers?: boolean | policy$visibleUsersArgs<ExtArgs>
    _count?: boolean | PolicyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["policy"]>

  export type policySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    appId?: boolean
    visibleToEveryone?: boolean
    accessDurationType?: boolean
    accessDurationDays?: boolean
    useAppOwnerAsReviewer?: boolean
    approvalSteps?: boolean
    revocationSteps?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    app?: boolean | appDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["policy"]>

  export type policySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    appId?: boolean
    visibleToEveryone?: boolean
    accessDurationType?: boolean
    accessDurationDays?: boolean
    useAppOwnerAsReviewer?: boolean
    approvalSteps?: boolean
    revocationSteps?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    app?: boolean | appDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["policy"]>

  export type policySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    appId?: boolean
    visibleToEveryone?: boolean
    accessDurationType?: boolean
    accessDurationDays?: boolean
    useAppOwnerAsReviewer?: boolean
    approvalSteps?: boolean
    revocationSteps?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type policyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "appId" | "visibleToEveryone" | "accessDurationType" | "accessDurationDays" | "useAppOwnerAsReviewer" | "approvalSteps" | "revocationSteps" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["policy"]>
  export type policyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    app?: boolean | appDefaultArgs<ExtArgs>
    reviewers?: boolean | policy$reviewersArgs<ExtArgs>
    visibleGroups?: boolean | policy$visibleGroupsArgs<ExtArgs>
    visibleUsers?: boolean | policy$visibleUsersArgs<ExtArgs>
    _count?: boolean | PolicyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type policyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    app?: boolean | appDefaultArgs<ExtArgs>
  }
  export type policyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    app?: boolean | appDefaultArgs<ExtArgs>
  }

  export type $policyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "policy"
    objects: {
      app: Prisma.$appPayload<ExtArgs>
      reviewers: Prisma.$userPayload<ExtArgs>[]
      visibleGroups: Prisma.$cnsl_groupPayload<ExtArgs>[]
      visibleUsers: Prisma.$userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      description: string | null
      appId: string
      visibleToEveryone: boolean
      accessDurationType: $Enums.AccessDurationType
      accessDurationDays: number | null
      useAppOwnerAsReviewer: boolean
      approvalSteps: Prisma.JsonValue
      revocationSteps: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["policy"]>
    composites: {}
  }

  type policyGetPayload<S extends boolean | null | undefined | policyDefaultArgs> = $Result.GetResult<Prisma.$policyPayload, S>

  type policyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<policyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PolicyCountAggregateInputType | true
    }

  export interface policyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['policy'], meta: { name: 'policy' } }
    /**
     * Find zero or one Policy that matches the filter.
     * @param {policyFindUniqueArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends policyFindUniqueArgs>(args: SelectSubset<T, policyFindUniqueArgs<ExtArgs>>): Prisma__policyClient<$Result.GetResult<Prisma.$policyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Policy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {policyFindUniqueOrThrowArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends policyFindUniqueOrThrowArgs>(args: SelectSubset<T, policyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__policyClient<$Result.GetResult<Prisma.$policyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Policy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {policyFindFirstArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends policyFindFirstArgs>(args?: SelectSubset<T, policyFindFirstArgs<ExtArgs>>): Prisma__policyClient<$Result.GetResult<Prisma.$policyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Policy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {policyFindFirstOrThrowArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends policyFindFirstOrThrowArgs>(args?: SelectSubset<T, policyFindFirstOrThrowArgs<ExtArgs>>): Prisma__policyClient<$Result.GetResult<Prisma.$policyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Policies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {policyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Policies
     * const policies = await prisma.policy.findMany()
     * 
     * // Get first 10 Policies
     * const policies = await prisma.policy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const policyWithIdOnly = await prisma.policy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends policyFindManyArgs>(args?: SelectSubset<T, policyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$policyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Policy.
     * @param {policyCreateArgs} args - Arguments to create a Policy.
     * @example
     * // Create one Policy
     * const Policy = await prisma.policy.create({
     *   data: {
     *     // ... data to create a Policy
     *   }
     * })
     * 
     */
    create<T extends policyCreateArgs>(args: SelectSubset<T, policyCreateArgs<ExtArgs>>): Prisma__policyClient<$Result.GetResult<Prisma.$policyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Policies.
     * @param {policyCreateManyArgs} args - Arguments to create many Policies.
     * @example
     * // Create many Policies
     * const policy = await prisma.policy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends policyCreateManyArgs>(args?: SelectSubset<T, policyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Policies and returns the data saved in the database.
     * @param {policyCreateManyAndReturnArgs} args - Arguments to create many Policies.
     * @example
     * // Create many Policies
     * const policy = await prisma.policy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Policies and only return the `id`
     * const policyWithIdOnly = await prisma.policy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends policyCreateManyAndReturnArgs>(args?: SelectSubset<T, policyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$policyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Policy.
     * @param {policyDeleteArgs} args - Arguments to delete one Policy.
     * @example
     * // Delete one Policy
     * const Policy = await prisma.policy.delete({
     *   where: {
     *     // ... filter to delete one Policy
     *   }
     * })
     * 
     */
    delete<T extends policyDeleteArgs>(args: SelectSubset<T, policyDeleteArgs<ExtArgs>>): Prisma__policyClient<$Result.GetResult<Prisma.$policyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Policy.
     * @param {policyUpdateArgs} args - Arguments to update one Policy.
     * @example
     * // Update one Policy
     * const policy = await prisma.policy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends policyUpdateArgs>(args: SelectSubset<T, policyUpdateArgs<ExtArgs>>): Prisma__policyClient<$Result.GetResult<Prisma.$policyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Policies.
     * @param {policyDeleteManyArgs} args - Arguments to filter Policies to delete.
     * @example
     * // Delete a few Policies
     * const { count } = await prisma.policy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends policyDeleteManyArgs>(args?: SelectSubset<T, policyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {policyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Policies
     * const policy = await prisma.policy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends policyUpdateManyArgs>(args: SelectSubset<T, policyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Policies and returns the data updated in the database.
     * @param {policyUpdateManyAndReturnArgs} args - Arguments to update many Policies.
     * @example
     * // Update many Policies
     * const policy = await prisma.policy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Policies and only return the `id`
     * const policyWithIdOnly = await prisma.policy.updateManyAndReturn({
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
    updateManyAndReturn<T extends policyUpdateManyAndReturnArgs>(args: SelectSubset<T, policyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$policyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Policy.
     * @param {policyUpsertArgs} args - Arguments to update or create a Policy.
     * @example
     * // Update or create a Policy
     * const policy = await prisma.policy.upsert({
     *   create: {
     *     // ... data to create a Policy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Policy we want to update
     *   }
     * })
     */
    upsert<T extends policyUpsertArgs>(args: SelectSubset<T, policyUpsertArgs<ExtArgs>>): Prisma__policyClient<$Result.GetResult<Prisma.$policyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {policyCountArgs} args - Arguments to filter Policies to count.
     * @example
     * // Count the number of Policies
     * const count = await prisma.policy.count({
     *   where: {
     *     // ... the filter for the Policies we want to count
     *   }
     * })
    **/
    count<T extends policyCountArgs>(
      args?: Subset<T, policyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PolicyAggregateArgs>(args: Subset<T, PolicyAggregateArgs>): Prisma.PrismaPromise<GetPolicyAggregateType<T>>

    /**
     * Group by Policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {policyGroupByArgs} args - Group by arguments.
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
      T extends policyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: policyGroupByArgs['orderBy'] }
        : { orderBy?: policyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, policyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the policy model
   */
  readonly fields: policyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for policy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__policyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    app<T extends appDefaultArgs<ExtArgs> = {}>(args?: Subset<T, appDefaultArgs<ExtArgs>>): Prisma__appClient<$Result.GetResult<Prisma.$appPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewers<T extends policy$reviewersArgs<ExtArgs> = {}>(args?: Subset<T, policy$reviewersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    visibleGroups<T extends policy$visibleGroupsArgs<ExtArgs> = {}>(args?: Subset<T, policy$visibleGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cnsl_groupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    visibleUsers<T extends policy$visibleUsersArgs<ExtArgs> = {}>(args?: Subset<T, policy$visibleUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the policy model
   */
  interface policyFieldRefs {
    readonly id: FieldRef<"policy", 'String'>
    readonly name: FieldRef<"policy", 'String'>
    readonly description: FieldRef<"policy", 'String'>
    readonly appId: FieldRef<"policy", 'String'>
    readonly visibleToEveryone: FieldRef<"policy", 'Boolean'>
    readonly accessDurationType: FieldRef<"policy", 'AccessDurationType'>
    readonly accessDurationDays: FieldRef<"policy", 'Int'>
    readonly useAppOwnerAsReviewer: FieldRef<"policy", 'Boolean'>
    readonly approvalSteps: FieldRef<"policy", 'Json'>
    readonly revocationSteps: FieldRef<"policy", 'Json'>
    readonly createdAt: FieldRef<"policy", 'DateTime'>
    readonly updatedAt: FieldRef<"policy", 'DateTime'>
    readonly deletedAt: FieldRef<"policy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * policy findUnique
   */
  export type policyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the policy
     */
    select?: policySelect<ExtArgs> | null
    /**
     * Omit specific fields from the policy
     */
    omit?: policyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: policyInclude<ExtArgs> | null
    /**
     * Filter, which policy to fetch.
     */
    where: policyWhereUniqueInput
  }

  /**
   * policy findUniqueOrThrow
   */
  export type policyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the policy
     */
    select?: policySelect<ExtArgs> | null
    /**
     * Omit specific fields from the policy
     */
    omit?: policyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: policyInclude<ExtArgs> | null
    /**
     * Filter, which policy to fetch.
     */
    where: policyWhereUniqueInput
  }

  /**
   * policy findFirst
   */
  export type policyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the policy
     */
    select?: policySelect<ExtArgs> | null
    /**
     * Omit specific fields from the policy
     */
    omit?: policyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: policyInclude<ExtArgs> | null
    /**
     * Filter, which policy to fetch.
     */
    where?: policyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of policies to fetch.
     */
    orderBy?: policyOrderByWithRelationInput | policyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for policies.
     */
    cursor?: policyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of policies.
     */
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * policy findFirstOrThrow
   */
  export type policyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the policy
     */
    select?: policySelect<ExtArgs> | null
    /**
     * Omit specific fields from the policy
     */
    omit?: policyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: policyInclude<ExtArgs> | null
    /**
     * Filter, which policy to fetch.
     */
    where?: policyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of policies to fetch.
     */
    orderBy?: policyOrderByWithRelationInput | policyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for policies.
     */
    cursor?: policyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of policies.
     */
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * policy findMany
   */
  export type policyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the policy
     */
    select?: policySelect<ExtArgs> | null
    /**
     * Omit specific fields from the policy
     */
    omit?: policyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: policyInclude<ExtArgs> | null
    /**
     * Filter, which policies to fetch.
     */
    where?: policyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of policies to fetch.
     */
    orderBy?: policyOrderByWithRelationInput | policyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing policies.
     */
    cursor?: policyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` policies.
     */
    skip?: number
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * policy create
   */
  export type policyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the policy
     */
    select?: policySelect<ExtArgs> | null
    /**
     * Omit specific fields from the policy
     */
    omit?: policyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: policyInclude<ExtArgs> | null
    /**
     * The data needed to create a policy.
     */
    data: XOR<policyCreateInput, policyUncheckedCreateInput>
  }

  /**
   * policy createMany
   */
  export type policyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many policies.
     */
    data: policyCreateManyInput | policyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * policy createManyAndReturn
   */
  export type policyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the policy
     */
    select?: policySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the policy
     */
    omit?: policyOmit<ExtArgs> | null
    /**
     * The data used to create many policies.
     */
    data: policyCreateManyInput | policyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: policyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * policy update
   */
  export type policyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the policy
     */
    select?: policySelect<ExtArgs> | null
    /**
     * Omit specific fields from the policy
     */
    omit?: policyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: policyInclude<ExtArgs> | null
    /**
     * The data needed to update a policy.
     */
    data: XOR<policyUpdateInput, policyUncheckedUpdateInput>
    /**
     * Choose, which policy to update.
     */
    where: policyWhereUniqueInput
  }

  /**
   * policy updateMany
   */
  export type policyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update policies.
     */
    data: XOR<policyUpdateManyMutationInput, policyUncheckedUpdateManyInput>
    /**
     * Filter which policies to update
     */
    where?: policyWhereInput
    /**
     * Limit how many policies to update.
     */
    limit?: number
  }

  /**
   * policy updateManyAndReturn
   */
  export type policyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the policy
     */
    select?: policySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the policy
     */
    omit?: policyOmit<ExtArgs> | null
    /**
     * The data used to update policies.
     */
    data: XOR<policyUpdateManyMutationInput, policyUncheckedUpdateManyInput>
    /**
     * Filter which policies to update
     */
    where?: policyWhereInput
    /**
     * Limit how many policies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: policyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * policy upsert
   */
  export type policyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the policy
     */
    select?: policySelect<ExtArgs> | null
    /**
     * Omit specific fields from the policy
     */
    omit?: policyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: policyInclude<ExtArgs> | null
    /**
     * The filter to search for the policy to update in case it exists.
     */
    where: policyWhereUniqueInput
    /**
     * In case the policy found by the `where` argument doesn't exist, create a new policy with this data.
     */
    create: XOR<policyCreateInput, policyUncheckedCreateInput>
    /**
     * In case the policy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<policyUpdateInput, policyUncheckedUpdateInput>
  }

  /**
   * policy delete
   */
  export type policyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the policy
     */
    select?: policySelect<ExtArgs> | null
    /**
     * Omit specific fields from the policy
     */
    omit?: policyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: policyInclude<ExtArgs> | null
    /**
     * Filter which policy to delete.
     */
    where: policyWhereUniqueInput
  }

  /**
   * policy deleteMany
   */
  export type policyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which policies to delete
     */
    where?: policyWhereInput
    /**
     * Limit how many policies to delete.
     */
    limit?: number
  }

  /**
   * policy.reviewers
   */
  export type policy$reviewersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * policy.visibleGroups
   */
  export type policy$visibleGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cnsl_group
     */
    select?: cnsl_groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cnsl_group
     */
    omit?: cnsl_groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cnsl_groupInclude<ExtArgs> | null
    where?: cnsl_groupWhereInput
    orderBy?: cnsl_groupOrderByWithRelationInput | cnsl_groupOrderByWithRelationInput[]
    cursor?: cnsl_groupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cnsl_groupScalarFieldEnum | Cnsl_groupScalarFieldEnum[]
  }

  /**
   * policy.visibleUsers
   */
  export type policy$visibleUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * policy without action
   */
  export type policyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the policy
     */
    select?: policySelect<ExtArgs> | null
    /**
     * Omit specific fields from the policy
     */
    omit?: policyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: policyInclude<ExtArgs> | null
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


  export const Cnsl_groupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    note: 'note',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type Cnsl_groupScalarFieldEnum = (typeof Cnsl_groupScalarFieldEnum)[keyof typeof Cnsl_groupScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    avatar: 'avatar',
    title: 'title',
    department: 'department',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AppScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    logo: 'logo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    ownerId: 'ownerId'
  };

  export type AppScalarFieldEnum = (typeof AppScalarFieldEnum)[keyof typeof AppScalarFieldEnum]


  export const PolicyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    appId: 'appId',
    visibleToEveryone: 'visibleToEveryone',
    accessDurationType: 'accessDurationType',
    accessDurationDays: 'accessDurationDays',
    useAppOwnerAsReviewer: 'useAppOwnerAsReviewer',
    approvalSteps: 'approvalSteps',
    revocationSteps: 'revocationSteps',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type PolicyScalarFieldEnum = (typeof PolicyScalarFieldEnum)[keyof typeof PolicyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AccessDurationType'
   */
  export type EnumAccessDurationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccessDurationType'>
    


  /**
   * Reference to a field of type 'AccessDurationType[]'
   */
  export type ListEnumAccessDurationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccessDurationType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type cnsl_groupWhereInput = {
    AND?: cnsl_groupWhereInput | cnsl_groupWhereInput[]
    OR?: cnsl_groupWhereInput[]
    NOT?: cnsl_groupWhereInput | cnsl_groupWhereInput[]
    id?: StringFilter<"cnsl_group"> | string
    name?: StringNullableFilter<"cnsl_group"> | string | null
    description?: StringNullableFilter<"cnsl_group"> | string | null
    note?: StringNullableFilter<"cnsl_group"> | string | null
    createdAt?: DateTimeFilter<"cnsl_group"> | Date | string
    updatedAt?: DateTimeFilter<"cnsl_group"> | Date | string
    deletedAt?: DateTimeNullableFilter<"cnsl_group"> | Date | string | null
    visiblePolicies?: PolicyListRelationFilter
    members?: UserListRelationFilter
  }

  export type cnsl_groupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    visiblePolicies?: policyOrderByRelationAggregateInput
    members?: userOrderByRelationAggregateInput
  }

  export type cnsl_groupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: cnsl_groupWhereInput | cnsl_groupWhereInput[]
    OR?: cnsl_groupWhereInput[]
    NOT?: cnsl_groupWhereInput | cnsl_groupWhereInput[]
    name?: StringNullableFilter<"cnsl_group"> | string | null
    description?: StringNullableFilter<"cnsl_group"> | string | null
    note?: StringNullableFilter<"cnsl_group"> | string | null
    createdAt?: DateTimeFilter<"cnsl_group"> | Date | string
    updatedAt?: DateTimeFilter<"cnsl_group"> | Date | string
    deletedAt?: DateTimeNullableFilter<"cnsl_group"> | Date | string | null
    visiblePolicies?: PolicyListRelationFilter
    members?: UserListRelationFilter
  }, "id">

  export type cnsl_groupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: cnsl_groupCountOrderByAggregateInput
    _max?: cnsl_groupMaxOrderByAggregateInput
    _min?: cnsl_groupMinOrderByAggregateInput
  }

  export type cnsl_groupScalarWhereWithAggregatesInput = {
    AND?: cnsl_groupScalarWhereWithAggregatesInput | cnsl_groupScalarWhereWithAggregatesInput[]
    OR?: cnsl_groupScalarWhereWithAggregatesInput[]
    NOT?: cnsl_groupScalarWhereWithAggregatesInput | cnsl_groupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"cnsl_group"> | string
    name?: StringNullableWithAggregatesFilter<"cnsl_group"> | string | null
    description?: StringNullableWithAggregatesFilter<"cnsl_group"> | string | null
    note?: StringNullableWithAggregatesFilter<"cnsl_group"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"cnsl_group"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"cnsl_group"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"cnsl_group"> | Date | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    firstName?: StringFilter<"user"> | string
    lastName?: StringFilter<"user"> | string
    avatar?: StringNullableFilter<"user"> | string | null
    title?: StringNullableFilter<"user"> | string | null
    department?: StringNullableFilter<"user"> | string | null
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    deletedAt?: DateTimeNullableFilter<"user"> | Date | string | null
    ownedApps?: AppListRelationFilter
    reviewingPolicies?: PolicyListRelationFilter
    visiblePolicies?: PolicyListRelationFilter
    groups?: Cnsl_groupListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    ownedApps?: appOrderByRelationAggregateInput
    reviewingPolicies?: policyOrderByRelationAggregateInput
    visiblePolicies?: policyOrderByRelationAggregateInput
    groups?: cnsl_groupOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    firstName?: StringFilter<"user"> | string
    lastName?: StringFilter<"user"> | string
    avatar?: StringNullableFilter<"user"> | string | null
    title?: StringNullableFilter<"user"> | string | null
    department?: StringNullableFilter<"user"> | string | null
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    deletedAt?: DateTimeNullableFilter<"user"> | Date | string | null
    ownedApps?: AppListRelationFilter
    reviewingPolicies?: PolicyListRelationFilter
    visiblePolicies?: PolicyListRelationFilter
    groups?: Cnsl_groupListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    firstName?: StringWithAggregatesFilter<"user"> | string
    lastName?: StringWithAggregatesFilter<"user"> | string
    avatar?: StringNullableWithAggregatesFilter<"user"> | string | null
    title?: StringNullableWithAggregatesFilter<"user"> | string | null
    department?: StringNullableWithAggregatesFilter<"user"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
  }

  export type appWhereInput = {
    AND?: appWhereInput | appWhereInput[]
    OR?: appWhereInput[]
    NOT?: appWhereInput | appWhereInput[]
    id?: StringFilter<"app"> | string
    name?: StringFilter<"app"> | string
    url?: StringNullableFilter<"app"> | string | null
    logo?: StringNullableFilter<"app"> | string | null
    createdAt?: DateTimeFilter<"app"> | Date | string
    updatedAt?: DateTimeFilter<"app"> | Date | string
    deletedAt?: DateTimeNullableFilter<"app"> | Date | string | null
    ownerId?: StringNullableFilter<"app"> | string | null
    owner?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    policies?: PolicyListRelationFilter
  }

  export type appOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    ownerId?: SortOrderInput | SortOrder
    owner?: userOrderByWithRelationInput
    policies?: policyOrderByRelationAggregateInput
  }

  export type appWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: appWhereInput | appWhereInput[]
    OR?: appWhereInput[]
    NOT?: appWhereInput | appWhereInput[]
    name?: StringFilter<"app"> | string
    url?: StringNullableFilter<"app"> | string | null
    logo?: StringNullableFilter<"app"> | string | null
    createdAt?: DateTimeFilter<"app"> | Date | string
    updatedAt?: DateTimeFilter<"app"> | Date | string
    deletedAt?: DateTimeNullableFilter<"app"> | Date | string | null
    ownerId?: StringNullableFilter<"app"> | string | null
    owner?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    policies?: PolicyListRelationFilter
  }, "id">

  export type appOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    ownerId?: SortOrderInput | SortOrder
    _count?: appCountOrderByAggregateInput
    _max?: appMaxOrderByAggregateInput
    _min?: appMinOrderByAggregateInput
  }

  export type appScalarWhereWithAggregatesInput = {
    AND?: appScalarWhereWithAggregatesInput | appScalarWhereWithAggregatesInput[]
    OR?: appScalarWhereWithAggregatesInput[]
    NOT?: appScalarWhereWithAggregatesInput | appScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"app"> | string
    name?: StringWithAggregatesFilter<"app"> | string
    url?: StringNullableWithAggregatesFilter<"app"> | string | null
    logo?: StringNullableWithAggregatesFilter<"app"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"app"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"app"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"app"> | Date | string | null
    ownerId?: StringNullableWithAggregatesFilter<"app"> | string | null
  }

  export type policyWhereInput = {
    AND?: policyWhereInput | policyWhereInput[]
    OR?: policyWhereInput[]
    NOT?: policyWhereInput | policyWhereInput[]
    id?: StringFilter<"policy"> | string
    name?: StringNullableFilter<"policy"> | string | null
    description?: StringNullableFilter<"policy"> | string | null
    appId?: StringFilter<"policy"> | string
    visibleToEveryone?: BoolFilter<"policy"> | boolean
    accessDurationType?: EnumAccessDurationTypeFilter<"policy"> | $Enums.AccessDurationType
    accessDurationDays?: IntNullableFilter<"policy"> | number | null
    useAppOwnerAsReviewer?: BoolFilter<"policy"> | boolean
    approvalSteps?: JsonFilter<"policy">
    revocationSteps?: JsonFilter<"policy">
    createdAt?: DateTimeFilter<"policy"> | Date | string
    updatedAt?: DateTimeFilter<"policy"> | Date | string
    deletedAt?: DateTimeNullableFilter<"policy"> | Date | string | null
    app?: XOR<AppScalarRelationFilter, appWhereInput>
    reviewers?: UserListRelationFilter
    visibleGroups?: Cnsl_groupListRelationFilter
    visibleUsers?: UserListRelationFilter
  }

  export type policyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    appId?: SortOrder
    visibleToEveryone?: SortOrder
    accessDurationType?: SortOrder
    accessDurationDays?: SortOrderInput | SortOrder
    useAppOwnerAsReviewer?: SortOrder
    approvalSteps?: SortOrder
    revocationSteps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    app?: appOrderByWithRelationInput
    reviewers?: userOrderByRelationAggregateInput
    visibleGroups?: cnsl_groupOrderByRelationAggregateInput
    visibleUsers?: userOrderByRelationAggregateInput
  }

  export type policyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: policyWhereInput | policyWhereInput[]
    OR?: policyWhereInput[]
    NOT?: policyWhereInput | policyWhereInput[]
    name?: StringNullableFilter<"policy"> | string | null
    description?: StringNullableFilter<"policy"> | string | null
    appId?: StringFilter<"policy"> | string
    visibleToEveryone?: BoolFilter<"policy"> | boolean
    accessDurationType?: EnumAccessDurationTypeFilter<"policy"> | $Enums.AccessDurationType
    accessDurationDays?: IntNullableFilter<"policy"> | number | null
    useAppOwnerAsReviewer?: BoolFilter<"policy"> | boolean
    approvalSteps?: JsonFilter<"policy">
    revocationSteps?: JsonFilter<"policy">
    createdAt?: DateTimeFilter<"policy"> | Date | string
    updatedAt?: DateTimeFilter<"policy"> | Date | string
    deletedAt?: DateTimeNullableFilter<"policy"> | Date | string | null
    app?: XOR<AppScalarRelationFilter, appWhereInput>
    reviewers?: UserListRelationFilter
    visibleGroups?: Cnsl_groupListRelationFilter
    visibleUsers?: UserListRelationFilter
  }, "id">

  export type policyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    appId?: SortOrder
    visibleToEveryone?: SortOrder
    accessDurationType?: SortOrder
    accessDurationDays?: SortOrderInput | SortOrder
    useAppOwnerAsReviewer?: SortOrder
    approvalSteps?: SortOrder
    revocationSteps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: policyCountOrderByAggregateInput
    _avg?: policyAvgOrderByAggregateInput
    _max?: policyMaxOrderByAggregateInput
    _min?: policyMinOrderByAggregateInput
    _sum?: policySumOrderByAggregateInput
  }

  export type policyScalarWhereWithAggregatesInput = {
    AND?: policyScalarWhereWithAggregatesInput | policyScalarWhereWithAggregatesInput[]
    OR?: policyScalarWhereWithAggregatesInput[]
    NOT?: policyScalarWhereWithAggregatesInput | policyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"policy"> | string
    name?: StringNullableWithAggregatesFilter<"policy"> | string | null
    description?: StringNullableWithAggregatesFilter<"policy"> | string | null
    appId?: StringWithAggregatesFilter<"policy"> | string
    visibleToEveryone?: BoolWithAggregatesFilter<"policy"> | boolean
    accessDurationType?: EnumAccessDurationTypeWithAggregatesFilter<"policy"> | $Enums.AccessDurationType
    accessDurationDays?: IntNullableWithAggregatesFilter<"policy"> | number | null
    useAppOwnerAsReviewer?: BoolWithAggregatesFilter<"policy"> | boolean
    approvalSteps?: JsonWithAggregatesFilter<"policy">
    revocationSteps?: JsonWithAggregatesFilter<"policy">
    createdAt?: DateTimeWithAggregatesFilter<"policy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"policy"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"policy"> | Date | string | null
  }

  export type cnsl_groupCreateInput = {
    id?: string
    name?: string | null
    description?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    visiblePolicies?: policyCreateNestedManyWithoutVisibleGroupsInput
    members?: userCreateNestedManyWithoutGroupsInput
  }

  export type cnsl_groupUncheckedCreateInput = {
    id?: string
    name?: string | null
    description?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    visiblePolicies?: policyUncheckedCreateNestedManyWithoutVisibleGroupsInput
    members?: userUncheckedCreateNestedManyWithoutGroupsInput
  }

  export type cnsl_groupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visiblePolicies?: policyUpdateManyWithoutVisibleGroupsNestedInput
    members?: userUpdateManyWithoutGroupsNestedInput
  }

  export type cnsl_groupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visiblePolicies?: policyUncheckedUpdateManyWithoutVisibleGroupsNestedInput
    members?: userUncheckedUpdateManyWithoutGroupsNestedInput
  }

  export type cnsl_groupCreateManyInput = {
    id?: string
    name?: string | null
    description?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type cnsl_groupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cnsl_groupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userCreateInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    avatar?: string | null
    title?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ownedApps?: appCreateNestedManyWithoutOwnerInput
    reviewingPolicies?: policyCreateNestedManyWithoutReviewersInput
    visiblePolicies?: policyCreateNestedManyWithoutVisibleUsersInput
    groups?: cnsl_groupCreateNestedManyWithoutMembersInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    avatar?: string | null
    title?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ownedApps?: appUncheckedCreateNestedManyWithoutOwnerInput
    reviewingPolicies?: policyUncheckedCreateNestedManyWithoutReviewersInput
    visiblePolicies?: policyUncheckedCreateNestedManyWithoutVisibleUsersInput
    groups?: cnsl_groupUncheckedCreateNestedManyWithoutMembersInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownedApps?: appUpdateManyWithoutOwnerNestedInput
    reviewingPolicies?: policyUpdateManyWithoutReviewersNestedInput
    visiblePolicies?: policyUpdateManyWithoutVisibleUsersNestedInput
    groups?: cnsl_groupUpdateManyWithoutMembersNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownedApps?: appUncheckedUpdateManyWithoutOwnerNestedInput
    reviewingPolicies?: policyUncheckedUpdateManyWithoutReviewersNestedInput
    visiblePolicies?: policyUncheckedUpdateManyWithoutVisibleUsersNestedInput
    groups?: cnsl_groupUncheckedUpdateManyWithoutMembersNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    avatar?: string | null
    title?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type appCreateInput = {
    id?: string
    name: string
    url?: string | null
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    owner?: userCreateNestedOneWithoutOwnedAppsInput
    policies?: policyCreateNestedManyWithoutAppInput
  }

  export type appUncheckedCreateInput = {
    id?: string
    name: string
    url?: string | null
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ownerId?: string | null
    policies?: policyUncheckedCreateNestedManyWithoutAppInput
  }

  export type appUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: userUpdateOneWithoutOwnedAppsNestedInput
    policies?: policyUpdateManyWithoutAppNestedInput
  }

  export type appUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    policies?: policyUncheckedUpdateManyWithoutAppNestedInput
  }

  export type appCreateManyInput = {
    id?: string
    name: string
    url?: string | null
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ownerId?: string | null
  }

  export type appUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type appUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type policyCreateInput = {
    id?: string
    name?: string | null
    description?: string | null
    visibleToEveryone?: boolean
    accessDurationType: $Enums.AccessDurationType
    accessDurationDays?: number | null
    useAppOwnerAsReviewer?: boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    app: appCreateNestedOneWithoutPoliciesInput
    reviewers?: userCreateNestedManyWithoutReviewingPoliciesInput
    visibleGroups?: cnsl_groupCreateNestedManyWithoutVisiblePoliciesInput
    visibleUsers?: userCreateNestedManyWithoutVisiblePoliciesInput
  }

  export type policyUncheckedCreateInput = {
    id?: string
    name?: string | null
    description?: string | null
    appId: string
    visibleToEveryone?: boolean
    accessDurationType: $Enums.AccessDurationType
    accessDurationDays?: number | null
    useAppOwnerAsReviewer?: boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reviewers?: userUncheckedCreateNestedManyWithoutReviewingPoliciesInput
    visibleGroups?: cnsl_groupUncheckedCreateNestedManyWithoutVisiblePoliciesInput
    visibleUsers?: userUncheckedCreateNestedManyWithoutVisiblePoliciesInput
  }

  export type policyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibleToEveryone?: BoolFieldUpdateOperationsInput | boolean
    accessDurationType?: EnumAccessDurationTypeFieldUpdateOperationsInput | $Enums.AccessDurationType
    accessDurationDays?: NullableIntFieldUpdateOperationsInput | number | null
    useAppOwnerAsReviewer?: BoolFieldUpdateOperationsInput | boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    app?: appUpdateOneRequiredWithoutPoliciesNestedInput
    reviewers?: userUpdateManyWithoutReviewingPoliciesNestedInput
    visibleGroups?: cnsl_groupUpdateManyWithoutVisiblePoliciesNestedInput
    visibleUsers?: userUpdateManyWithoutVisiblePoliciesNestedInput
  }

  export type policyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    appId?: StringFieldUpdateOperationsInput | string
    visibleToEveryone?: BoolFieldUpdateOperationsInput | boolean
    accessDurationType?: EnumAccessDurationTypeFieldUpdateOperationsInput | $Enums.AccessDurationType
    accessDurationDays?: NullableIntFieldUpdateOperationsInput | number | null
    useAppOwnerAsReviewer?: BoolFieldUpdateOperationsInput | boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewers?: userUncheckedUpdateManyWithoutReviewingPoliciesNestedInput
    visibleGroups?: cnsl_groupUncheckedUpdateManyWithoutVisiblePoliciesNestedInput
    visibleUsers?: userUncheckedUpdateManyWithoutVisiblePoliciesNestedInput
  }

  export type policyCreateManyInput = {
    id?: string
    name?: string | null
    description?: string | null
    appId: string
    visibleToEveryone?: boolean
    accessDurationType: $Enums.AccessDurationType
    accessDurationDays?: number | null
    useAppOwnerAsReviewer?: boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type policyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibleToEveryone?: BoolFieldUpdateOperationsInput | boolean
    accessDurationType?: EnumAccessDurationTypeFieldUpdateOperationsInput | $Enums.AccessDurationType
    accessDurationDays?: NullableIntFieldUpdateOperationsInput | number | null
    useAppOwnerAsReviewer?: BoolFieldUpdateOperationsInput | boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type policyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    appId?: StringFieldUpdateOperationsInput | string
    visibleToEveryone?: BoolFieldUpdateOperationsInput | boolean
    accessDurationType?: EnumAccessDurationTypeFieldUpdateOperationsInput | $Enums.AccessDurationType
    accessDurationDays?: NullableIntFieldUpdateOperationsInput | number | null
    useAppOwnerAsReviewer?: BoolFieldUpdateOperationsInput | boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PolicyListRelationFilter = {
    every?: policyWhereInput
    some?: policyWhereInput
    none?: policyWhereInput
  }

  export type UserListRelationFilter = {
    every?: userWhereInput
    some?: userWhereInput
    none?: userWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type policyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cnsl_groupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type cnsl_groupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type cnsl_groupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AppListRelationFilter = {
    every?: appWhereInput
    some?: appWhereInput
    none?: appWhereInput
  }

  export type Cnsl_groupListRelationFilter = {
    every?: cnsl_groupWhereInput
    some?: cnsl_groupWhereInput
    none?: cnsl_groupWhereInput
  }

  export type appOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cnsl_groupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrder
    title?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrder
    title?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrder
    title?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type appCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type appMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type appMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumAccessDurationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessDurationType | EnumAccessDurationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccessDurationType[] | ListEnumAccessDurationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessDurationType[] | ListEnumAccessDurationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessDurationTypeFilter<$PrismaModel> | $Enums.AccessDurationType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AppScalarRelationFilter = {
    is?: appWhereInput
    isNot?: appWhereInput
  }

  export type policyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    appId?: SortOrder
    visibleToEveryone?: SortOrder
    accessDurationType?: SortOrder
    accessDurationDays?: SortOrder
    useAppOwnerAsReviewer?: SortOrder
    approvalSteps?: SortOrder
    revocationSteps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type policyAvgOrderByAggregateInput = {
    accessDurationDays?: SortOrder
  }

  export type policyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    appId?: SortOrder
    visibleToEveryone?: SortOrder
    accessDurationType?: SortOrder
    accessDurationDays?: SortOrder
    useAppOwnerAsReviewer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type policyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    appId?: SortOrder
    visibleToEveryone?: SortOrder
    accessDurationType?: SortOrder
    accessDurationDays?: SortOrder
    useAppOwnerAsReviewer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type policySumOrderByAggregateInput = {
    accessDurationDays?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumAccessDurationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessDurationType | EnumAccessDurationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccessDurationType[] | ListEnumAccessDurationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessDurationType[] | ListEnumAccessDurationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessDurationTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccessDurationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccessDurationTypeFilter<$PrismaModel>
    _max?: NestedEnumAccessDurationTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type policyCreateNestedManyWithoutVisibleGroupsInput = {
    create?: XOR<policyCreateWithoutVisibleGroupsInput, policyUncheckedCreateWithoutVisibleGroupsInput> | policyCreateWithoutVisibleGroupsInput[] | policyUncheckedCreateWithoutVisibleGroupsInput[]
    connectOrCreate?: policyCreateOrConnectWithoutVisibleGroupsInput | policyCreateOrConnectWithoutVisibleGroupsInput[]
    connect?: policyWhereUniqueInput | policyWhereUniqueInput[]
  }

  export type userCreateNestedManyWithoutGroupsInput = {
    create?: XOR<userCreateWithoutGroupsInput, userUncheckedCreateWithoutGroupsInput> | userCreateWithoutGroupsInput[] | userUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: userCreateOrConnectWithoutGroupsInput | userCreateOrConnectWithoutGroupsInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type policyUncheckedCreateNestedManyWithoutVisibleGroupsInput = {
    create?: XOR<policyCreateWithoutVisibleGroupsInput, policyUncheckedCreateWithoutVisibleGroupsInput> | policyCreateWithoutVisibleGroupsInput[] | policyUncheckedCreateWithoutVisibleGroupsInput[]
    connectOrCreate?: policyCreateOrConnectWithoutVisibleGroupsInput | policyCreateOrConnectWithoutVisibleGroupsInput[]
    connect?: policyWhereUniqueInput | policyWhereUniqueInput[]
  }

  export type userUncheckedCreateNestedManyWithoutGroupsInput = {
    create?: XOR<userCreateWithoutGroupsInput, userUncheckedCreateWithoutGroupsInput> | userCreateWithoutGroupsInput[] | userUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: userCreateOrConnectWithoutGroupsInput | userCreateOrConnectWithoutGroupsInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type policyUpdateManyWithoutVisibleGroupsNestedInput = {
    create?: XOR<policyCreateWithoutVisibleGroupsInput, policyUncheckedCreateWithoutVisibleGroupsInput> | policyCreateWithoutVisibleGroupsInput[] | policyUncheckedCreateWithoutVisibleGroupsInput[]
    connectOrCreate?: policyCreateOrConnectWithoutVisibleGroupsInput | policyCreateOrConnectWithoutVisibleGroupsInput[]
    upsert?: policyUpsertWithWhereUniqueWithoutVisibleGroupsInput | policyUpsertWithWhereUniqueWithoutVisibleGroupsInput[]
    set?: policyWhereUniqueInput | policyWhereUniqueInput[]
    disconnect?: policyWhereUniqueInput | policyWhereUniqueInput[]
    delete?: policyWhereUniqueInput | policyWhereUniqueInput[]
    connect?: policyWhereUniqueInput | policyWhereUniqueInput[]
    update?: policyUpdateWithWhereUniqueWithoutVisibleGroupsInput | policyUpdateWithWhereUniqueWithoutVisibleGroupsInput[]
    updateMany?: policyUpdateManyWithWhereWithoutVisibleGroupsInput | policyUpdateManyWithWhereWithoutVisibleGroupsInput[]
    deleteMany?: policyScalarWhereInput | policyScalarWhereInput[]
  }

  export type userUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<userCreateWithoutGroupsInput, userUncheckedCreateWithoutGroupsInput> | userCreateWithoutGroupsInput[] | userUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: userCreateOrConnectWithoutGroupsInput | userCreateOrConnectWithoutGroupsInput[]
    upsert?: userUpsertWithWhereUniqueWithoutGroupsInput | userUpsertWithWhereUniqueWithoutGroupsInput[]
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutGroupsInput | userUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: userUpdateManyWithWhereWithoutGroupsInput | userUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type policyUncheckedUpdateManyWithoutVisibleGroupsNestedInput = {
    create?: XOR<policyCreateWithoutVisibleGroupsInput, policyUncheckedCreateWithoutVisibleGroupsInput> | policyCreateWithoutVisibleGroupsInput[] | policyUncheckedCreateWithoutVisibleGroupsInput[]
    connectOrCreate?: policyCreateOrConnectWithoutVisibleGroupsInput | policyCreateOrConnectWithoutVisibleGroupsInput[]
    upsert?: policyUpsertWithWhereUniqueWithoutVisibleGroupsInput | policyUpsertWithWhereUniqueWithoutVisibleGroupsInput[]
    set?: policyWhereUniqueInput | policyWhereUniqueInput[]
    disconnect?: policyWhereUniqueInput | policyWhereUniqueInput[]
    delete?: policyWhereUniqueInput | policyWhereUniqueInput[]
    connect?: policyWhereUniqueInput | policyWhereUniqueInput[]
    update?: policyUpdateWithWhereUniqueWithoutVisibleGroupsInput | policyUpdateWithWhereUniqueWithoutVisibleGroupsInput[]
    updateMany?: policyUpdateManyWithWhereWithoutVisibleGroupsInput | policyUpdateManyWithWhereWithoutVisibleGroupsInput[]
    deleteMany?: policyScalarWhereInput | policyScalarWhereInput[]
  }

  export type userUncheckedUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<userCreateWithoutGroupsInput, userUncheckedCreateWithoutGroupsInput> | userCreateWithoutGroupsInput[] | userUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: userCreateOrConnectWithoutGroupsInput | userCreateOrConnectWithoutGroupsInput[]
    upsert?: userUpsertWithWhereUniqueWithoutGroupsInput | userUpsertWithWhereUniqueWithoutGroupsInput[]
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutGroupsInput | userUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: userUpdateManyWithWhereWithoutGroupsInput | userUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type appCreateNestedManyWithoutOwnerInput = {
    create?: XOR<appCreateWithoutOwnerInput, appUncheckedCreateWithoutOwnerInput> | appCreateWithoutOwnerInput[] | appUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: appCreateOrConnectWithoutOwnerInput | appCreateOrConnectWithoutOwnerInput[]
    createMany?: appCreateManyOwnerInputEnvelope
    connect?: appWhereUniqueInput | appWhereUniqueInput[]
  }

  export type policyCreateNestedManyWithoutReviewersInput = {
    create?: XOR<policyCreateWithoutReviewersInput, policyUncheckedCreateWithoutReviewersInput> | policyCreateWithoutReviewersInput[] | policyUncheckedCreateWithoutReviewersInput[]
    connectOrCreate?: policyCreateOrConnectWithoutReviewersInput | policyCreateOrConnectWithoutReviewersInput[]
    connect?: policyWhereUniqueInput | policyWhereUniqueInput[]
  }

  export type policyCreateNestedManyWithoutVisibleUsersInput = {
    create?: XOR<policyCreateWithoutVisibleUsersInput, policyUncheckedCreateWithoutVisibleUsersInput> | policyCreateWithoutVisibleUsersInput[] | policyUncheckedCreateWithoutVisibleUsersInput[]
    connectOrCreate?: policyCreateOrConnectWithoutVisibleUsersInput | policyCreateOrConnectWithoutVisibleUsersInput[]
    connect?: policyWhereUniqueInput | policyWhereUniqueInput[]
  }

  export type cnsl_groupCreateNestedManyWithoutMembersInput = {
    create?: XOR<cnsl_groupCreateWithoutMembersInput, cnsl_groupUncheckedCreateWithoutMembersInput> | cnsl_groupCreateWithoutMembersInput[] | cnsl_groupUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: cnsl_groupCreateOrConnectWithoutMembersInput | cnsl_groupCreateOrConnectWithoutMembersInput[]
    connect?: cnsl_groupWhereUniqueInput | cnsl_groupWhereUniqueInput[]
  }

  export type appUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<appCreateWithoutOwnerInput, appUncheckedCreateWithoutOwnerInput> | appCreateWithoutOwnerInput[] | appUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: appCreateOrConnectWithoutOwnerInput | appCreateOrConnectWithoutOwnerInput[]
    createMany?: appCreateManyOwnerInputEnvelope
    connect?: appWhereUniqueInput | appWhereUniqueInput[]
  }

  export type policyUncheckedCreateNestedManyWithoutReviewersInput = {
    create?: XOR<policyCreateWithoutReviewersInput, policyUncheckedCreateWithoutReviewersInput> | policyCreateWithoutReviewersInput[] | policyUncheckedCreateWithoutReviewersInput[]
    connectOrCreate?: policyCreateOrConnectWithoutReviewersInput | policyCreateOrConnectWithoutReviewersInput[]
    connect?: policyWhereUniqueInput | policyWhereUniqueInput[]
  }

  export type policyUncheckedCreateNestedManyWithoutVisibleUsersInput = {
    create?: XOR<policyCreateWithoutVisibleUsersInput, policyUncheckedCreateWithoutVisibleUsersInput> | policyCreateWithoutVisibleUsersInput[] | policyUncheckedCreateWithoutVisibleUsersInput[]
    connectOrCreate?: policyCreateOrConnectWithoutVisibleUsersInput | policyCreateOrConnectWithoutVisibleUsersInput[]
    connect?: policyWhereUniqueInput | policyWhereUniqueInput[]
  }

  export type cnsl_groupUncheckedCreateNestedManyWithoutMembersInput = {
    create?: XOR<cnsl_groupCreateWithoutMembersInput, cnsl_groupUncheckedCreateWithoutMembersInput> | cnsl_groupCreateWithoutMembersInput[] | cnsl_groupUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: cnsl_groupCreateOrConnectWithoutMembersInput | cnsl_groupCreateOrConnectWithoutMembersInput[]
    connect?: cnsl_groupWhereUniqueInput | cnsl_groupWhereUniqueInput[]
  }

  export type appUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<appCreateWithoutOwnerInput, appUncheckedCreateWithoutOwnerInput> | appCreateWithoutOwnerInput[] | appUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: appCreateOrConnectWithoutOwnerInput | appCreateOrConnectWithoutOwnerInput[]
    upsert?: appUpsertWithWhereUniqueWithoutOwnerInput | appUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: appCreateManyOwnerInputEnvelope
    set?: appWhereUniqueInput | appWhereUniqueInput[]
    disconnect?: appWhereUniqueInput | appWhereUniqueInput[]
    delete?: appWhereUniqueInput | appWhereUniqueInput[]
    connect?: appWhereUniqueInput | appWhereUniqueInput[]
    update?: appUpdateWithWhereUniqueWithoutOwnerInput | appUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: appUpdateManyWithWhereWithoutOwnerInput | appUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: appScalarWhereInput | appScalarWhereInput[]
  }

  export type policyUpdateManyWithoutReviewersNestedInput = {
    create?: XOR<policyCreateWithoutReviewersInput, policyUncheckedCreateWithoutReviewersInput> | policyCreateWithoutReviewersInput[] | policyUncheckedCreateWithoutReviewersInput[]
    connectOrCreate?: policyCreateOrConnectWithoutReviewersInput | policyCreateOrConnectWithoutReviewersInput[]
    upsert?: policyUpsertWithWhereUniqueWithoutReviewersInput | policyUpsertWithWhereUniqueWithoutReviewersInput[]
    set?: policyWhereUniqueInput | policyWhereUniqueInput[]
    disconnect?: policyWhereUniqueInput | policyWhereUniqueInput[]
    delete?: policyWhereUniqueInput | policyWhereUniqueInput[]
    connect?: policyWhereUniqueInput | policyWhereUniqueInput[]
    update?: policyUpdateWithWhereUniqueWithoutReviewersInput | policyUpdateWithWhereUniqueWithoutReviewersInput[]
    updateMany?: policyUpdateManyWithWhereWithoutReviewersInput | policyUpdateManyWithWhereWithoutReviewersInput[]
    deleteMany?: policyScalarWhereInput | policyScalarWhereInput[]
  }

  export type policyUpdateManyWithoutVisibleUsersNestedInput = {
    create?: XOR<policyCreateWithoutVisibleUsersInput, policyUncheckedCreateWithoutVisibleUsersInput> | policyCreateWithoutVisibleUsersInput[] | policyUncheckedCreateWithoutVisibleUsersInput[]
    connectOrCreate?: policyCreateOrConnectWithoutVisibleUsersInput | policyCreateOrConnectWithoutVisibleUsersInput[]
    upsert?: policyUpsertWithWhereUniqueWithoutVisibleUsersInput | policyUpsertWithWhereUniqueWithoutVisibleUsersInput[]
    set?: policyWhereUniqueInput | policyWhereUniqueInput[]
    disconnect?: policyWhereUniqueInput | policyWhereUniqueInput[]
    delete?: policyWhereUniqueInput | policyWhereUniqueInput[]
    connect?: policyWhereUniqueInput | policyWhereUniqueInput[]
    update?: policyUpdateWithWhereUniqueWithoutVisibleUsersInput | policyUpdateWithWhereUniqueWithoutVisibleUsersInput[]
    updateMany?: policyUpdateManyWithWhereWithoutVisibleUsersInput | policyUpdateManyWithWhereWithoutVisibleUsersInput[]
    deleteMany?: policyScalarWhereInput | policyScalarWhereInput[]
  }

  export type cnsl_groupUpdateManyWithoutMembersNestedInput = {
    create?: XOR<cnsl_groupCreateWithoutMembersInput, cnsl_groupUncheckedCreateWithoutMembersInput> | cnsl_groupCreateWithoutMembersInput[] | cnsl_groupUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: cnsl_groupCreateOrConnectWithoutMembersInput | cnsl_groupCreateOrConnectWithoutMembersInput[]
    upsert?: cnsl_groupUpsertWithWhereUniqueWithoutMembersInput | cnsl_groupUpsertWithWhereUniqueWithoutMembersInput[]
    set?: cnsl_groupWhereUniqueInput | cnsl_groupWhereUniqueInput[]
    disconnect?: cnsl_groupWhereUniqueInput | cnsl_groupWhereUniqueInput[]
    delete?: cnsl_groupWhereUniqueInput | cnsl_groupWhereUniqueInput[]
    connect?: cnsl_groupWhereUniqueInput | cnsl_groupWhereUniqueInput[]
    update?: cnsl_groupUpdateWithWhereUniqueWithoutMembersInput | cnsl_groupUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: cnsl_groupUpdateManyWithWhereWithoutMembersInput | cnsl_groupUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: cnsl_groupScalarWhereInput | cnsl_groupScalarWhereInput[]
  }

  export type appUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<appCreateWithoutOwnerInput, appUncheckedCreateWithoutOwnerInput> | appCreateWithoutOwnerInput[] | appUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: appCreateOrConnectWithoutOwnerInput | appCreateOrConnectWithoutOwnerInput[]
    upsert?: appUpsertWithWhereUniqueWithoutOwnerInput | appUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: appCreateManyOwnerInputEnvelope
    set?: appWhereUniqueInput | appWhereUniqueInput[]
    disconnect?: appWhereUniqueInput | appWhereUniqueInput[]
    delete?: appWhereUniqueInput | appWhereUniqueInput[]
    connect?: appWhereUniqueInput | appWhereUniqueInput[]
    update?: appUpdateWithWhereUniqueWithoutOwnerInput | appUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: appUpdateManyWithWhereWithoutOwnerInput | appUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: appScalarWhereInput | appScalarWhereInput[]
  }

  export type policyUncheckedUpdateManyWithoutReviewersNestedInput = {
    create?: XOR<policyCreateWithoutReviewersInput, policyUncheckedCreateWithoutReviewersInput> | policyCreateWithoutReviewersInput[] | policyUncheckedCreateWithoutReviewersInput[]
    connectOrCreate?: policyCreateOrConnectWithoutReviewersInput | policyCreateOrConnectWithoutReviewersInput[]
    upsert?: policyUpsertWithWhereUniqueWithoutReviewersInput | policyUpsertWithWhereUniqueWithoutReviewersInput[]
    set?: policyWhereUniqueInput | policyWhereUniqueInput[]
    disconnect?: policyWhereUniqueInput | policyWhereUniqueInput[]
    delete?: policyWhereUniqueInput | policyWhereUniqueInput[]
    connect?: policyWhereUniqueInput | policyWhereUniqueInput[]
    update?: policyUpdateWithWhereUniqueWithoutReviewersInput | policyUpdateWithWhereUniqueWithoutReviewersInput[]
    updateMany?: policyUpdateManyWithWhereWithoutReviewersInput | policyUpdateManyWithWhereWithoutReviewersInput[]
    deleteMany?: policyScalarWhereInput | policyScalarWhereInput[]
  }

  export type policyUncheckedUpdateManyWithoutVisibleUsersNestedInput = {
    create?: XOR<policyCreateWithoutVisibleUsersInput, policyUncheckedCreateWithoutVisibleUsersInput> | policyCreateWithoutVisibleUsersInput[] | policyUncheckedCreateWithoutVisibleUsersInput[]
    connectOrCreate?: policyCreateOrConnectWithoutVisibleUsersInput | policyCreateOrConnectWithoutVisibleUsersInput[]
    upsert?: policyUpsertWithWhereUniqueWithoutVisibleUsersInput | policyUpsertWithWhereUniqueWithoutVisibleUsersInput[]
    set?: policyWhereUniqueInput | policyWhereUniqueInput[]
    disconnect?: policyWhereUniqueInput | policyWhereUniqueInput[]
    delete?: policyWhereUniqueInput | policyWhereUniqueInput[]
    connect?: policyWhereUniqueInput | policyWhereUniqueInput[]
    update?: policyUpdateWithWhereUniqueWithoutVisibleUsersInput | policyUpdateWithWhereUniqueWithoutVisibleUsersInput[]
    updateMany?: policyUpdateManyWithWhereWithoutVisibleUsersInput | policyUpdateManyWithWhereWithoutVisibleUsersInput[]
    deleteMany?: policyScalarWhereInput | policyScalarWhereInput[]
  }

  export type cnsl_groupUncheckedUpdateManyWithoutMembersNestedInput = {
    create?: XOR<cnsl_groupCreateWithoutMembersInput, cnsl_groupUncheckedCreateWithoutMembersInput> | cnsl_groupCreateWithoutMembersInput[] | cnsl_groupUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: cnsl_groupCreateOrConnectWithoutMembersInput | cnsl_groupCreateOrConnectWithoutMembersInput[]
    upsert?: cnsl_groupUpsertWithWhereUniqueWithoutMembersInput | cnsl_groupUpsertWithWhereUniqueWithoutMembersInput[]
    set?: cnsl_groupWhereUniqueInput | cnsl_groupWhereUniqueInput[]
    disconnect?: cnsl_groupWhereUniqueInput | cnsl_groupWhereUniqueInput[]
    delete?: cnsl_groupWhereUniqueInput | cnsl_groupWhereUniqueInput[]
    connect?: cnsl_groupWhereUniqueInput | cnsl_groupWhereUniqueInput[]
    update?: cnsl_groupUpdateWithWhereUniqueWithoutMembersInput | cnsl_groupUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: cnsl_groupUpdateManyWithWhereWithoutMembersInput | cnsl_groupUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: cnsl_groupScalarWhereInput | cnsl_groupScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutOwnedAppsInput = {
    create?: XOR<userCreateWithoutOwnedAppsInput, userUncheckedCreateWithoutOwnedAppsInput>
    connectOrCreate?: userCreateOrConnectWithoutOwnedAppsInput
    connect?: userWhereUniqueInput
  }

  export type policyCreateNestedManyWithoutAppInput = {
    create?: XOR<policyCreateWithoutAppInput, policyUncheckedCreateWithoutAppInput> | policyCreateWithoutAppInput[] | policyUncheckedCreateWithoutAppInput[]
    connectOrCreate?: policyCreateOrConnectWithoutAppInput | policyCreateOrConnectWithoutAppInput[]
    createMany?: policyCreateManyAppInputEnvelope
    connect?: policyWhereUniqueInput | policyWhereUniqueInput[]
  }

  export type policyUncheckedCreateNestedManyWithoutAppInput = {
    create?: XOR<policyCreateWithoutAppInput, policyUncheckedCreateWithoutAppInput> | policyCreateWithoutAppInput[] | policyUncheckedCreateWithoutAppInput[]
    connectOrCreate?: policyCreateOrConnectWithoutAppInput | policyCreateOrConnectWithoutAppInput[]
    createMany?: policyCreateManyAppInputEnvelope
    connect?: policyWhereUniqueInput | policyWhereUniqueInput[]
  }

  export type userUpdateOneWithoutOwnedAppsNestedInput = {
    create?: XOR<userCreateWithoutOwnedAppsInput, userUncheckedCreateWithoutOwnedAppsInput>
    connectOrCreate?: userCreateOrConnectWithoutOwnedAppsInput
    upsert?: userUpsertWithoutOwnedAppsInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutOwnedAppsInput, userUpdateWithoutOwnedAppsInput>, userUncheckedUpdateWithoutOwnedAppsInput>
  }

  export type policyUpdateManyWithoutAppNestedInput = {
    create?: XOR<policyCreateWithoutAppInput, policyUncheckedCreateWithoutAppInput> | policyCreateWithoutAppInput[] | policyUncheckedCreateWithoutAppInput[]
    connectOrCreate?: policyCreateOrConnectWithoutAppInput | policyCreateOrConnectWithoutAppInput[]
    upsert?: policyUpsertWithWhereUniqueWithoutAppInput | policyUpsertWithWhereUniqueWithoutAppInput[]
    createMany?: policyCreateManyAppInputEnvelope
    set?: policyWhereUniqueInput | policyWhereUniqueInput[]
    disconnect?: policyWhereUniqueInput | policyWhereUniqueInput[]
    delete?: policyWhereUniqueInput | policyWhereUniqueInput[]
    connect?: policyWhereUniqueInput | policyWhereUniqueInput[]
    update?: policyUpdateWithWhereUniqueWithoutAppInput | policyUpdateWithWhereUniqueWithoutAppInput[]
    updateMany?: policyUpdateManyWithWhereWithoutAppInput | policyUpdateManyWithWhereWithoutAppInput[]
    deleteMany?: policyScalarWhereInput | policyScalarWhereInput[]
  }

  export type policyUncheckedUpdateManyWithoutAppNestedInput = {
    create?: XOR<policyCreateWithoutAppInput, policyUncheckedCreateWithoutAppInput> | policyCreateWithoutAppInput[] | policyUncheckedCreateWithoutAppInput[]
    connectOrCreate?: policyCreateOrConnectWithoutAppInput | policyCreateOrConnectWithoutAppInput[]
    upsert?: policyUpsertWithWhereUniqueWithoutAppInput | policyUpsertWithWhereUniqueWithoutAppInput[]
    createMany?: policyCreateManyAppInputEnvelope
    set?: policyWhereUniqueInput | policyWhereUniqueInput[]
    disconnect?: policyWhereUniqueInput | policyWhereUniqueInput[]
    delete?: policyWhereUniqueInput | policyWhereUniqueInput[]
    connect?: policyWhereUniqueInput | policyWhereUniqueInput[]
    update?: policyUpdateWithWhereUniqueWithoutAppInput | policyUpdateWithWhereUniqueWithoutAppInput[]
    updateMany?: policyUpdateManyWithWhereWithoutAppInput | policyUpdateManyWithWhereWithoutAppInput[]
    deleteMany?: policyScalarWhereInput | policyScalarWhereInput[]
  }

  export type appCreateNestedOneWithoutPoliciesInput = {
    create?: XOR<appCreateWithoutPoliciesInput, appUncheckedCreateWithoutPoliciesInput>
    connectOrCreate?: appCreateOrConnectWithoutPoliciesInput
    connect?: appWhereUniqueInput
  }

  export type userCreateNestedManyWithoutReviewingPoliciesInput = {
    create?: XOR<userCreateWithoutReviewingPoliciesInput, userUncheckedCreateWithoutReviewingPoliciesInput> | userCreateWithoutReviewingPoliciesInput[] | userUncheckedCreateWithoutReviewingPoliciesInput[]
    connectOrCreate?: userCreateOrConnectWithoutReviewingPoliciesInput | userCreateOrConnectWithoutReviewingPoliciesInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type cnsl_groupCreateNestedManyWithoutVisiblePoliciesInput = {
    create?: XOR<cnsl_groupCreateWithoutVisiblePoliciesInput, cnsl_groupUncheckedCreateWithoutVisiblePoliciesInput> | cnsl_groupCreateWithoutVisiblePoliciesInput[] | cnsl_groupUncheckedCreateWithoutVisiblePoliciesInput[]
    connectOrCreate?: cnsl_groupCreateOrConnectWithoutVisiblePoliciesInput | cnsl_groupCreateOrConnectWithoutVisiblePoliciesInput[]
    connect?: cnsl_groupWhereUniqueInput | cnsl_groupWhereUniqueInput[]
  }

  export type userCreateNestedManyWithoutVisiblePoliciesInput = {
    create?: XOR<userCreateWithoutVisiblePoliciesInput, userUncheckedCreateWithoutVisiblePoliciesInput> | userCreateWithoutVisiblePoliciesInput[] | userUncheckedCreateWithoutVisiblePoliciesInput[]
    connectOrCreate?: userCreateOrConnectWithoutVisiblePoliciesInput | userCreateOrConnectWithoutVisiblePoliciesInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type userUncheckedCreateNestedManyWithoutReviewingPoliciesInput = {
    create?: XOR<userCreateWithoutReviewingPoliciesInput, userUncheckedCreateWithoutReviewingPoliciesInput> | userCreateWithoutReviewingPoliciesInput[] | userUncheckedCreateWithoutReviewingPoliciesInput[]
    connectOrCreate?: userCreateOrConnectWithoutReviewingPoliciesInput | userCreateOrConnectWithoutReviewingPoliciesInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type cnsl_groupUncheckedCreateNestedManyWithoutVisiblePoliciesInput = {
    create?: XOR<cnsl_groupCreateWithoutVisiblePoliciesInput, cnsl_groupUncheckedCreateWithoutVisiblePoliciesInput> | cnsl_groupCreateWithoutVisiblePoliciesInput[] | cnsl_groupUncheckedCreateWithoutVisiblePoliciesInput[]
    connectOrCreate?: cnsl_groupCreateOrConnectWithoutVisiblePoliciesInput | cnsl_groupCreateOrConnectWithoutVisiblePoliciesInput[]
    connect?: cnsl_groupWhereUniqueInput | cnsl_groupWhereUniqueInput[]
  }

  export type userUncheckedCreateNestedManyWithoutVisiblePoliciesInput = {
    create?: XOR<userCreateWithoutVisiblePoliciesInput, userUncheckedCreateWithoutVisiblePoliciesInput> | userCreateWithoutVisiblePoliciesInput[] | userUncheckedCreateWithoutVisiblePoliciesInput[]
    connectOrCreate?: userCreateOrConnectWithoutVisiblePoliciesInput | userCreateOrConnectWithoutVisiblePoliciesInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumAccessDurationTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccessDurationType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type appUpdateOneRequiredWithoutPoliciesNestedInput = {
    create?: XOR<appCreateWithoutPoliciesInput, appUncheckedCreateWithoutPoliciesInput>
    connectOrCreate?: appCreateOrConnectWithoutPoliciesInput
    upsert?: appUpsertWithoutPoliciesInput
    connect?: appWhereUniqueInput
    update?: XOR<XOR<appUpdateToOneWithWhereWithoutPoliciesInput, appUpdateWithoutPoliciesInput>, appUncheckedUpdateWithoutPoliciesInput>
  }

  export type userUpdateManyWithoutReviewingPoliciesNestedInput = {
    create?: XOR<userCreateWithoutReviewingPoliciesInput, userUncheckedCreateWithoutReviewingPoliciesInput> | userCreateWithoutReviewingPoliciesInput[] | userUncheckedCreateWithoutReviewingPoliciesInput[]
    connectOrCreate?: userCreateOrConnectWithoutReviewingPoliciesInput | userCreateOrConnectWithoutReviewingPoliciesInput[]
    upsert?: userUpsertWithWhereUniqueWithoutReviewingPoliciesInput | userUpsertWithWhereUniqueWithoutReviewingPoliciesInput[]
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutReviewingPoliciesInput | userUpdateWithWhereUniqueWithoutReviewingPoliciesInput[]
    updateMany?: userUpdateManyWithWhereWithoutReviewingPoliciesInput | userUpdateManyWithWhereWithoutReviewingPoliciesInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type cnsl_groupUpdateManyWithoutVisiblePoliciesNestedInput = {
    create?: XOR<cnsl_groupCreateWithoutVisiblePoliciesInput, cnsl_groupUncheckedCreateWithoutVisiblePoliciesInput> | cnsl_groupCreateWithoutVisiblePoliciesInput[] | cnsl_groupUncheckedCreateWithoutVisiblePoliciesInput[]
    connectOrCreate?: cnsl_groupCreateOrConnectWithoutVisiblePoliciesInput | cnsl_groupCreateOrConnectWithoutVisiblePoliciesInput[]
    upsert?: cnsl_groupUpsertWithWhereUniqueWithoutVisiblePoliciesInput | cnsl_groupUpsertWithWhereUniqueWithoutVisiblePoliciesInput[]
    set?: cnsl_groupWhereUniqueInput | cnsl_groupWhereUniqueInput[]
    disconnect?: cnsl_groupWhereUniqueInput | cnsl_groupWhereUniqueInput[]
    delete?: cnsl_groupWhereUniqueInput | cnsl_groupWhereUniqueInput[]
    connect?: cnsl_groupWhereUniqueInput | cnsl_groupWhereUniqueInput[]
    update?: cnsl_groupUpdateWithWhereUniqueWithoutVisiblePoliciesInput | cnsl_groupUpdateWithWhereUniqueWithoutVisiblePoliciesInput[]
    updateMany?: cnsl_groupUpdateManyWithWhereWithoutVisiblePoliciesInput | cnsl_groupUpdateManyWithWhereWithoutVisiblePoliciesInput[]
    deleteMany?: cnsl_groupScalarWhereInput | cnsl_groupScalarWhereInput[]
  }

  export type userUpdateManyWithoutVisiblePoliciesNestedInput = {
    create?: XOR<userCreateWithoutVisiblePoliciesInput, userUncheckedCreateWithoutVisiblePoliciesInput> | userCreateWithoutVisiblePoliciesInput[] | userUncheckedCreateWithoutVisiblePoliciesInput[]
    connectOrCreate?: userCreateOrConnectWithoutVisiblePoliciesInput | userCreateOrConnectWithoutVisiblePoliciesInput[]
    upsert?: userUpsertWithWhereUniqueWithoutVisiblePoliciesInput | userUpsertWithWhereUniqueWithoutVisiblePoliciesInput[]
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutVisiblePoliciesInput | userUpdateWithWhereUniqueWithoutVisiblePoliciesInput[]
    updateMany?: userUpdateManyWithWhereWithoutVisiblePoliciesInput | userUpdateManyWithWhereWithoutVisiblePoliciesInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type userUncheckedUpdateManyWithoutReviewingPoliciesNestedInput = {
    create?: XOR<userCreateWithoutReviewingPoliciesInput, userUncheckedCreateWithoutReviewingPoliciesInput> | userCreateWithoutReviewingPoliciesInput[] | userUncheckedCreateWithoutReviewingPoliciesInput[]
    connectOrCreate?: userCreateOrConnectWithoutReviewingPoliciesInput | userCreateOrConnectWithoutReviewingPoliciesInput[]
    upsert?: userUpsertWithWhereUniqueWithoutReviewingPoliciesInput | userUpsertWithWhereUniqueWithoutReviewingPoliciesInput[]
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutReviewingPoliciesInput | userUpdateWithWhereUniqueWithoutReviewingPoliciesInput[]
    updateMany?: userUpdateManyWithWhereWithoutReviewingPoliciesInput | userUpdateManyWithWhereWithoutReviewingPoliciesInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type cnsl_groupUncheckedUpdateManyWithoutVisiblePoliciesNestedInput = {
    create?: XOR<cnsl_groupCreateWithoutVisiblePoliciesInput, cnsl_groupUncheckedCreateWithoutVisiblePoliciesInput> | cnsl_groupCreateWithoutVisiblePoliciesInput[] | cnsl_groupUncheckedCreateWithoutVisiblePoliciesInput[]
    connectOrCreate?: cnsl_groupCreateOrConnectWithoutVisiblePoliciesInput | cnsl_groupCreateOrConnectWithoutVisiblePoliciesInput[]
    upsert?: cnsl_groupUpsertWithWhereUniqueWithoutVisiblePoliciesInput | cnsl_groupUpsertWithWhereUniqueWithoutVisiblePoliciesInput[]
    set?: cnsl_groupWhereUniqueInput | cnsl_groupWhereUniqueInput[]
    disconnect?: cnsl_groupWhereUniqueInput | cnsl_groupWhereUniqueInput[]
    delete?: cnsl_groupWhereUniqueInput | cnsl_groupWhereUniqueInput[]
    connect?: cnsl_groupWhereUniqueInput | cnsl_groupWhereUniqueInput[]
    update?: cnsl_groupUpdateWithWhereUniqueWithoutVisiblePoliciesInput | cnsl_groupUpdateWithWhereUniqueWithoutVisiblePoliciesInput[]
    updateMany?: cnsl_groupUpdateManyWithWhereWithoutVisiblePoliciesInput | cnsl_groupUpdateManyWithWhereWithoutVisiblePoliciesInput[]
    deleteMany?: cnsl_groupScalarWhereInput | cnsl_groupScalarWhereInput[]
  }

  export type userUncheckedUpdateManyWithoutVisiblePoliciesNestedInput = {
    create?: XOR<userCreateWithoutVisiblePoliciesInput, userUncheckedCreateWithoutVisiblePoliciesInput> | userCreateWithoutVisiblePoliciesInput[] | userUncheckedCreateWithoutVisiblePoliciesInput[]
    connectOrCreate?: userCreateOrConnectWithoutVisiblePoliciesInput | userCreateOrConnectWithoutVisiblePoliciesInput[]
    upsert?: userUpsertWithWhereUniqueWithoutVisiblePoliciesInput | userUpsertWithWhereUniqueWithoutVisiblePoliciesInput[]
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutVisiblePoliciesInput | userUpdateWithWhereUniqueWithoutVisiblePoliciesInput[]
    updateMany?: userUpdateManyWithWhereWithoutVisiblePoliciesInput | userUpdateManyWithWhereWithoutVisiblePoliciesInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAccessDurationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessDurationType | EnumAccessDurationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccessDurationType[] | ListEnumAccessDurationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessDurationType[] | ListEnumAccessDurationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessDurationTypeFilter<$PrismaModel> | $Enums.AccessDurationType
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAccessDurationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessDurationType | EnumAccessDurationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccessDurationType[] | ListEnumAccessDurationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessDurationType[] | ListEnumAccessDurationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessDurationTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccessDurationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccessDurationTypeFilter<$PrismaModel>
    _max?: NestedEnumAccessDurationTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type policyCreateWithoutVisibleGroupsInput = {
    id?: string
    name?: string | null
    description?: string | null
    visibleToEveryone?: boolean
    accessDurationType: $Enums.AccessDurationType
    accessDurationDays?: number | null
    useAppOwnerAsReviewer?: boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    app: appCreateNestedOneWithoutPoliciesInput
    reviewers?: userCreateNestedManyWithoutReviewingPoliciesInput
    visibleUsers?: userCreateNestedManyWithoutVisiblePoliciesInput
  }

  export type policyUncheckedCreateWithoutVisibleGroupsInput = {
    id?: string
    name?: string | null
    description?: string | null
    appId: string
    visibleToEveryone?: boolean
    accessDurationType: $Enums.AccessDurationType
    accessDurationDays?: number | null
    useAppOwnerAsReviewer?: boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reviewers?: userUncheckedCreateNestedManyWithoutReviewingPoliciesInput
    visibleUsers?: userUncheckedCreateNestedManyWithoutVisiblePoliciesInput
  }

  export type policyCreateOrConnectWithoutVisibleGroupsInput = {
    where: policyWhereUniqueInput
    create: XOR<policyCreateWithoutVisibleGroupsInput, policyUncheckedCreateWithoutVisibleGroupsInput>
  }

  export type userCreateWithoutGroupsInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    avatar?: string | null
    title?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ownedApps?: appCreateNestedManyWithoutOwnerInput
    reviewingPolicies?: policyCreateNestedManyWithoutReviewersInput
    visiblePolicies?: policyCreateNestedManyWithoutVisibleUsersInput
  }

  export type userUncheckedCreateWithoutGroupsInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    avatar?: string | null
    title?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ownedApps?: appUncheckedCreateNestedManyWithoutOwnerInput
    reviewingPolicies?: policyUncheckedCreateNestedManyWithoutReviewersInput
    visiblePolicies?: policyUncheckedCreateNestedManyWithoutVisibleUsersInput
  }

  export type userCreateOrConnectWithoutGroupsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutGroupsInput, userUncheckedCreateWithoutGroupsInput>
  }

  export type policyUpsertWithWhereUniqueWithoutVisibleGroupsInput = {
    where: policyWhereUniqueInput
    update: XOR<policyUpdateWithoutVisibleGroupsInput, policyUncheckedUpdateWithoutVisibleGroupsInput>
    create: XOR<policyCreateWithoutVisibleGroupsInput, policyUncheckedCreateWithoutVisibleGroupsInput>
  }

  export type policyUpdateWithWhereUniqueWithoutVisibleGroupsInput = {
    where: policyWhereUniqueInput
    data: XOR<policyUpdateWithoutVisibleGroupsInput, policyUncheckedUpdateWithoutVisibleGroupsInput>
  }

  export type policyUpdateManyWithWhereWithoutVisibleGroupsInput = {
    where: policyScalarWhereInput
    data: XOR<policyUpdateManyMutationInput, policyUncheckedUpdateManyWithoutVisibleGroupsInput>
  }

  export type policyScalarWhereInput = {
    AND?: policyScalarWhereInput | policyScalarWhereInput[]
    OR?: policyScalarWhereInput[]
    NOT?: policyScalarWhereInput | policyScalarWhereInput[]
    id?: StringFilter<"policy"> | string
    name?: StringNullableFilter<"policy"> | string | null
    description?: StringNullableFilter<"policy"> | string | null
    appId?: StringFilter<"policy"> | string
    visibleToEveryone?: BoolFilter<"policy"> | boolean
    accessDurationType?: EnumAccessDurationTypeFilter<"policy"> | $Enums.AccessDurationType
    accessDurationDays?: IntNullableFilter<"policy"> | number | null
    useAppOwnerAsReviewer?: BoolFilter<"policy"> | boolean
    approvalSteps?: JsonFilter<"policy">
    revocationSteps?: JsonFilter<"policy">
    createdAt?: DateTimeFilter<"policy"> | Date | string
    updatedAt?: DateTimeFilter<"policy"> | Date | string
    deletedAt?: DateTimeNullableFilter<"policy"> | Date | string | null
  }

  export type userUpsertWithWhereUniqueWithoutGroupsInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutGroupsInput, userUncheckedUpdateWithoutGroupsInput>
    create: XOR<userCreateWithoutGroupsInput, userUncheckedCreateWithoutGroupsInput>
  }

  export type userUpdateWithWhereUniqueWithoutGroupsInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutGroupsInput, userUncheckedUpdateWithoutGroupsInput>
  }

  export type userUpdateManyWithWhereWithoutGroupsInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutGroupsInput>
  }

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[]
    OR?: userScalarWhereInput[]
    NOT?: userScalarWhereInput | userScalarWhereInput[]
    id?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    firstName?: StringFilter<"user"> | string
    lastName?: StringFilter<"user"> | string
    avatar?: StringNullableFilter<"user"> | string | null
    title?: StringNullableFilter<"user"> | string | null
    department?: StringNullableFilter<"user"> | string | null
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    deletedAt?: DateTimeNullableFilter<"user"> | Date | string | null
  }

  export type appCreateWithoutOwnerInput = {
    id?: string
    name: string
    url?: string | null
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    policies?: policyCreateNestedManyWithoutAppInput
  }

  export type appUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    url?: string | null
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    policies?: policyUncheckedCreateNestedManyWithoutAppInput
  }

  export type appCreateOrConnectWithoutOwnerInput = {
    where: appWhereUniqueInput
    create: XOR<appCreateWithoutOwnerInput, appUncheckedCreateWithoutOwnerInput>
  }

  export type appCreateManyOwnerInputEnvelope = {
    data: appCreateManyOwnerInput | appCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type policyCreateWithoutReviewersInput = {
    id?: string
    name?: string | null
    description?: string | null
    visibleToEveryone?: boolean
    accessDurationType: $Enums.AccessDurationType
    accessDurationDays?: number | null
    useAppOwnerAsReviewer?: boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    app: appCreateNestedOneWithoutPoliciesInput
    visibleGroups?: cnsl_groupCreateNestedManyWithoutVisiblePoliciesInput
    visibleUsers?: userCreateNestedManyWithoutVisiblePoliciesInput
  }

  export type policyUncheckedCreateWithoutReviewersInput = {
    id?: string
    name?: string | null
    description?: string | null
    appId: string
    visibleToEveryone?: boolean
    accessDurationType: $Enums.AccessDurationType
    accessDurationDays?: number | null
    useAppOwnerAsReviewer?: boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    visibleGroups?: cnsl_groupUncheckedCreateNestedManyWithoutVisiblePoliciesInput
    visibleUsers?: userUncheckedCreateNestedManyWithoutVisiblePoliciesInput
  }

  export type policyCreateOrConnectWithoutReviewersInput = {
    where: policyWhereUniqueInput
    create: XOR<policyCreateWithoutReviewersInput, policyUncheckedCreateWithoutReviewersInput>
  }

  export type policyCreateWithoutVisibleUsersInput = {
    id?: string
    name?: string | null
    description?: string | null
    visibleToEveryone?: boolean
    accessDurationType: $Enums.AccessDurationType
    accessDurationDays?: number | null
    useAppOwnerAsReviewer?: boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    app: appCreateNestedOneWithoutPoliciesInput
    reviewers?: userCreateNestedManyWithoutReviewingPoliciesInput
    visibleGroups?: cnsl_groupCreateNestedManyWithoutVisiblePoliciesInput
  }

  export type policyUncheckedCreateWithoutVisibleUsersInput = {
    id?: string
    name?: string | null
    description?: string | null
    appId: string
    visibleToEveryone?: boolean
    accessDurationType: $Enums.AccessDurationType
    accessDurationDays?: number | null
    useAppOwnerAsReviewer?: boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reviewers?: userUncheckedCreateNestedManyWithoutReviewingPoliciesInput
    visibleGroups?: cnsl_groupUncheckedCreateNestedManyWithoutVisiblePoliciesInput
  }

  export type policyCreateOrConnectWithoutVisibleUsersInput = {
    where: policyWhereUniqueInput
    create: XOR<policyCreateWithoutVisibleUsersInput, policyUncheckedCreateWithoutVisibleUsersInput>
  }

  export type cnsl_groupCreateWithoutMembersInput = {
    id?: string
    name?: string | null
    description?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    visiblePolicies?: policyCreateNestedManyWithoutVisibleGroupsInput
  }

  export type cnsl_groupUncheckedCreateWithoutMembersInput = {
    id?: string
    name?: string | null
    description?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    visiblePolicies?: policyUncheckedCreateNestedManyWithoutVisibleGroupsInput
  }

  export type cnsl_groupCreateOrConnectWithoutMembersInput = {
    where: cnsl_groupWhereUniqueInput
    create: XOR<cnsl_groupCreateWithoutMembersInput, cnsl_groupUncheckedCreateWithoutMembersInput>
  }

  export type appUpsertWithWhereUniqueWithoutOwnerInput = {
    where: appWhereUniqueInput
    update: XOR<appUpdateWithoutOwnerInput, appUncheckedUpdateWithoutOwnerInput>
    create: XOR<appCreateWithoutOwnerInput, appUncheckedCreateWithoutOwnerInput>
  }

  export type appUpdateWithWhereUniqueWithoutOwnerInput = {
    where: appWhereUniqueInput
    data: XOR<appUpdateWithoutOwnerInput, appUncheckedUpdateWithoutOwnerInput>
  }

  export type appUpdateManyWithWhereWithoutOwnerInput = {
    where: appScalarWhereInput
    data: XOR<appUpdateManyMutationInput, appUncheckedUpdateManyWithoutOwnerInput>
  }

  export type appScalarWhereInput = {
    AND?: appScalarWhereInput | appScalarWhereInput[]
    OR?: appScalarWhereInput[]
    NOT?: appScalarWhereInput | appScalarWhereInput[]
    id?: StringFilter<"app"> | string
    name?: StringFilter<"app"> | string
    url?: StringNullableFilter<"app"> | string | null
    logo?: StringNullableFilter<"app"> | string | null
    createdAt?: DateTimeFilter<"app"> | Date | string
    updatedAt?: DateTimeFilter<"app"> | Date | string
    deletedAt?: DateTimeNullableFilter<"app"> | Date | string | null
    ownerId?: StringNullableFilter<"app"> | string | null
  }

  export type policyUpsertWithWhereUniqueWithoutReviewersInput = {
    where: policyWhereUniqueInput
    update: XOR<policyUpdateWithoutReviewersInput, policyUncheckedUpdateWithoutReviewersInput>
    create: XOR<policyCreateWithoutReviewersInput, policyUncheckedCreateWithoutReviewersInput>
  }

  export type policyUpdateWithWhereUniqueWithoutReviewersInput = {
    where: policyWhereUniqueInput
    data: XOR<policyUpdateWithoutReviewersInput, policyUncheckedUpdateWithoutReviewersInput>
  }

  export type policyUpdateManyWithWhereWithoutReviewersInput = {
    where: policyScalarWhereInput
    data: XOR<policyUpdateManyMutationInput, policyUncheckedUpdateManyWithoutReviewersInput>
  }

  export type policyUpsertWithWhereUniqueWithoutVisibleUsersInput = {
    where: policyWhereUniqueInput
    update: XOR<policyUpdateWithoutVisibleUsersInput, policyUncheckedUpdateWithoutVisibleUsersInput>
    create: XOR<policyCreateWithoutVisibleUsersInput, policyUncheckedCreateWithoutVisibleUsersInput>
  }

  export type policyUpdateWithWhereUniqueWithoutVisibleUsersInput = {
    where: policyWhereUniqueInput
    data: XOR<policyUpdateWithoutVisibleUsersInput, policyUncheckedUpdateWithoutVisibleUsersInput>
  }

  export type policyUpdateManyWithWhereWithoutVisibleUsersInput = {
    where: policyScalarWhereInput
    data: XOR<policyUpdateManyMutationInput, policyUncheckedUpdateManyWithoutVisibleUsersInput>
  }

  export type cnsl_groupUpsertWithWhereUniqueWithoutMembersInput = {
    where: cnsl_groupWhereUniqueInput
    update: XOR<cnsl_groupUpdateWithoutMembersInput, cnsl_groupUncheckedUpdateWithoutMembersInput>
    create: XOR<cnsl_groupCreateWithoutMembersInput, cnsl_groupUncheckedCreateWithoutMembersInput>
  }

  export type cnsl_groupUpdateWithWhereUniqueWithoutMembersInput = {
    where: cnsl_groupWhereUniqueInput
    data: XOR<cnsl_groupUpdateWithoutMembersInput, cnsl_groupUncheckedUpdateWithoutMembersInput>
  }

  export type cnsl_groupUpdateManyWithWhereWithoutMembersInput = {
    where: cnsl_groupScalarWhereInput
    data: XOR<cnsl_groupUpdateManyMutationInput, cnsl_groupUncheckedUpdateManyWithoutMembersInput>
  }

  export type cnsl_groupScalarWhereInput = {
    AND?: cnsl_groupScalarWhereInput | cnsl_groupScalarWhereInput[]
    OR?: cnsl_groupScalarWhereInput[]
    NOT?: cnsl_groupScalarWhereInput | cnsl_groupScalarWhereInput[]
    id?: StringFilter<"cnsl_group"> | string
    name?: StringNullableFilter<"cnsl_group"> | string | null
    description?: StringNullableFilter<"cnsl_group"> | string | null
    note?: StringNullableFilter<"cnsl_group"> | string | null
    createdAt?: DateTimeFilter<"cnsl_group"> | Date | string
    updatedAt?: DateTimeFilter<"cnsl_group"> | Date | string
    deletedAt?: DateTimeNullableFilter<"cnsl_group"> | Date | string | null
  }

  export type userCreateWithoutOwnedAppsInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    avatar?: string | null
    title?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reviewingPolicies?: policyCreateNestedManyWithoutReviewersInput
    visiblePolicies?: policyCreateNestedManyWithoutVisibleUsersInput
    groups?: cnsl_groupCreateNestedManyWithoutMembersInput
  }

  export type userUncheckedCreateWithoutOwnedAppsInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    avatar?: string | null
    title?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reviewingPolicies?: policyUncheckedCreateNestedManyWithoutReviewersInput
    visiblePolicies?: policyUncheckedCreateNestedManyWithoutVisibleUsersInput
    groups?: cnsl_groupUncheckedCreateNestedManyWithoutMembersInput
  }

  export type userCreateOrConnectWithoutOwnedAppsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutOwnedAppsInput, userUncheckedCreateWithoutOwnedAppsInput>
  }

  export type policyCreateWithoutAppInput = {
    id?: string
    name?: string | null
    description?: string | null
    visibleToEveryone?: boolean
    accessDurationType: $Enums.AccessDurationType
    accessDurationDays?: number | null
    useAppOwnerAsReviewer?: boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reviewers?: userCreateNestedManyWithoutReviewingPoliciesInput
    visibleGroups?: cnsl_groupCreateNestedManyWithoutVisiblePoliciesInput
    visibleUsers?: userCreateNestedManyWithoutVisiblePoliciesInput
  }

  export type policyUncheckedCreateWithoutAppInput = {
    id?: string
    name?: string | null
    description?: string | null
    visibleToEveryone?: boolean
    accessDurationType: $Enums.AccessDurationType
    accessDurationDays?: number | null
    useAppOwnerAsReviewer?: boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reviewers?: userUncheckedCreateNestedManyWithoutReviewingPoliciesInput
    visibleGroups?: cnsl_groupUncheckedCreateNestedManyWithoutVisiblePoliciesInput
    visibleUsers?: userUncheckedCreateNestedManyWithoutVisiblePoliciesInput
  }

  export type policyCreateOrConnectWithoutAppInput = {
    where: policyWhereUniqueInput
    create: XOR<policyCreateWithoutAppInput, policyUncheckedCreateWithoutAppInput>
  }

  export type policyCreateManyAppInputEnvelope = {
    data: policyCreateManyAppInput | policyCreateManyAppInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutOwnedAppsInput = {
    update: XOR<userUpdateWithoutOwnedAppsInput, userUncheckedUpdateWithoutOwnedAppsInput>
    create: XOR<userCreateWithoutOwnedAppsInput, userUncheckedCreateWithoutOwnedAppsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutOwnedAppsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutOwnedAppsInput, userUncheckedUpdateWithoutOwnedAppsInput>
  }

  export type userUpdateWithoutOwnedAppsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewingPolicies?: policyUpdateManyWithoutReviewersNestedInput
    visiblePolicies?: policyUpdateManyWithoutVisibleUsersNestedInput
    groups?: cnsl_groupUpdateManyWithoutMembersNestedInput
  }

  export type userUncheckedUpdateWithoutOwnedAppsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewingPolicies?: policyUncheckedUpdateManyWithoutReviewersNestedInput
    visiblePolicies?: policyUncheckedUpdateManyWithoutVisibleUsersNestedInput
    groups?: cnsl_groupUncheckedUpdateManyWithoutMembersNestedInput
  }

  export type policyUpsertWithWhereUniqueWithoutAppInput = {
    where: policyWhereUniqueInput
    update: XOR<policyUpdateWithoutAppInput, policyUncheckedUpdateWithoutAppInput>
    create: XOR<policyCreateWithoutAppInput, policyUncheckedCreateWithoutAppInput>
  }

  export type policyUpdateWithWhereUniqueWithoutAppInput = {
    where: policyWhereUniqueInput
    data: XOR<policyUpdateWithoutAppInput, policyUncheckedUpdateWithoutAppInput>
  }

  export type policyUpdateManyWithWhereWithoutAppInput = {
    where: policyScalarWhereInput
    data: XOR<policyUpdateManyMutationInput, policyUncheckedUpdateManyWithoutAppInput>
  }

  export type appCreateWithoutPoliciesInput = {
    id?: string
    name: string
    url?: string | null
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    owner?: userCreateNestedOneWithoutOwnedAppsInput
  }

  export type appUncheckedCreateWithoutPoliciesInput = {
    id?: string
    name: string
    url?: string | null
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ownerId?: string | null
  }

  export type appCreateOrConnectWithoutPoliciesInput = {
    where: appWhereUniqueInput
    create: XOR<appCreateWithoutPoliciesInput, appUncheckedCreateWithoutPoliciesInput>
  }

  export type userCreateWithoutReviewingPoliciesInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    avatar?: string | null
    title?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ownedApps?: appCreateNestedManyWithoutOwnerInput
    visiblePolicies?: policyCreateNestedManyWithoutVisibleUsersInput
    groups?: cnsl_groupCreateNestedManyWithoutMembersInput
  }

  export type userUncheckedCreateWithoutReviewingPoliciesInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    avatar?: string | null
    title?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ownedApps?: appUncheckedCreateNestedManyWithoutOwnerInput
    visiblePolicies?: policyUncheckedCreateNestedManyWithoutVisibleUsersInput
    groups?: cnsl_groupUncheckedCreateNestedManyWithoutMembersInput
  }

  export type userCreateOrConnectWithoutReviewingPoliciesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutReviewingPoliciesInput, userUncheckedCreateWithoutReviewingPoliciesInput>
  }

  export type cnsl_groupCreateWithoutVisiblePoliciesInput = {
    id?: string
    name?: string | null
    description?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    members?: userCreateNestedManyWithoutGroupsInput
  }

  export type cnsl_groupUncheckedCreateWithoutVisiblePoliciesInput = {
    id?: string
    name?: string | null
    description?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    members?: userUncheckedCreateNestedManyWithoutGroupsInput
  }

  export type cnsl_groupCreateOrConnectWithoutVisiblePoliciesInput = {
    where: cnsl_groupWhereUniqueInput
    create: XOR<cnsl_groupCreateWithoutVisiblePoliciesInput, cnsl_groupUncheckedCreateWithoutVisiblePoliciesInput>
  }

  export type userCreateWithoutVisiblePoliciesInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    avatar?: string | null
    title?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ownedApps?: appCreateNestedManyWithoutOwnerInput
    reviewingPolicies?: policyCreateNestedManyWithoutReviewersInput
    groups?: cnsl_groupCreateNestedManyWithoutMembersInput
  }

  export type userUncheckedCreateWithoutVisiblePoliciesInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    avatar?: string | null
    title?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ownedApps?: appUncheckedCreateNestedManyWithoutOwnerInput
    reviewingPolicies?: policyUncheckedCreateNestedManyWithoutReviewersInput
    groups?: cnsl_groupUncheckedCreateNestedManyWithoutMembersInput
  }

  export type userCreateOrConnectWithoutVisiblePoliciesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutVisiblePoliciesInput, userUncheckedCreateWithoutVisiblePoliciesInput>
  }

  export type appUpsertWithoutPoliciesInput = {
    update: XOR<appUpdateWithoutPoliciesInput, appUncheckedUpdateWithoutPoliciesInput>
    create: XOR<appCreateWithoutPoliciesInput, appUncheckedCreateWithoutPoliciesInput>
    where?: appWhereInput
  }

  export type appUpdateToOneWithWhereWithoutPoliciesInput = {
    where?: appWhereInput
    data: XOR<appUpdateWithoutPoliciesInput, appUncheckedUpdateWithoutPoliciesInput>
  }

  export type appUpdateWithoutPoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: userUpdateOneWithoutOwnedAppsNestedInput
  }

  export type appUncheckedUpdateWithoutPoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUpsertWithWhereUniqueWithoutReviewingPoliciesInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutReviewingPoliciesInput, userUncheckedUpdateWithoutReviewingPoliciesInput>
    create: XOR<userCreateWithoutReviewingPoliciesInput, userUncheckedCreateWithoutReviewingPoliciesInput>
  }

  export type userUpdateWithWhereUniqueWithoutReviewingPoliciesInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutReviewingPoliciesInput, userUncheckedUpdateWithoutReviewingPoliciesInput>
  }

  export type userUpdateManyWithWhereWithoutReviewingPoliciesInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutReviewingPoliciesInput>
  }

  export type cnsl_groupUpsertWithWhereUniqueWithoutVisiblePoliciesInput = {
    where: cnsl_groupWhereUniqueInput
    update: XOR<cnsl_groupUpdateWithoutVisiblePoliciesInput, cnsl_groupUncheckedUpdateWithoutVisiblePoliciesInput>
    create: XOR<cnsl_groupCreateWithoutVisiblePoliciesInput, cnsl_groupUncheckedCreateWithoutVisiblePoliciesInput>
  }

  export type cnsl_groupUpdateWithWhereUniqueWithoutVisiblePoliciesInput = {
    where: cnsl_groupWhereUniqueInput
    data: XOR<cnsl_groupUpdateWithoutVisiblePoliciesInput, cnsl_groupUncheckedUpdateWithoutVisiblePoliciesInput>
  }

  export type cnsl_groupUpdateManyWithWhereWithoutVisiblePoliciesInput = {
    where: cnsl_groupScalarWhereInput
    data: XOR<cnsl_groupUpdateManyMutationInput, cnsl_groupUncheckedUpdateManyWithoutVisiblePoliciesInput>
  }

  export type userUpsertWithWhereUniqueWithoutVisiblePoliciesInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutVisiblePoliciesInput, userUncheckedUpdateWithoutVisiblePoliciesInput>
    create: XOR<userCreateWithoutVisiblePoliciesInput, userUncheckedCreateWithoutVisiblePoliciesInput>
  }

  export type userUpdateWithWhereUniqueWithoutVisiblePoliciesInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutVisiblePoliciesInput, userUncheckedUpdateWithoutVisiblePoliciesInput>
  }

  export type userUpdateManyWithWhereWithoutVisiblePoliciesInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutVisiblePoliciesInput>
  }

  export type policyUpdateWithoutVisibleGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibleToEveryone?: BoolFieldUpdateOperationsInput | boolean
    accessDurationType?: EnumAccessDurationTypeFieldUpdateOperationsInput | $Enums.AccessDurationType
    accessDurationDays?: NullableIntFieldUpdateOperationsInput | number | null
    useAppOwnerAsReviewer?: BoolFieldUpdateOperationsInput | boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    app?: appUpdateOneRequiredWithoutPoliciesNestedInput
    reviewers?: userUpdateManyWithoutReviewingPoliciesNestedInput
    visibleUsers?: userUpdateManyWithoutVisiblePoliciesNestedInput
  }

  export type policyUncheckedUpdateWithoutVisibleGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    appId?: StringFieldUpdateOperationsInput | string
    visibleToEveryone?: BoolFieldUpdateOperationsInput | boolean
    accessDurationType?: EnumAccessDurationTypeFieldUpdateOperationsInput | $Enums.AccessDurationType
    accessDurationDays?: NullableIntFieldUpdateOperationsInput | number | null
    useAppOwnerAsReviewer?: BoolFieldUpdateOperationsInput | boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewers?: userUncheckedUpdateManyWithoutReviewingPoliciesNestedInput
    visibleUsers?: userUncheckedUpdateManyWithoutVisiblePoliciesNestedInput
  }

  export type policyUncheckedUpdateManyWithoutVisibleGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    appId?: StringFieldUpdateOperationsInput | string
    visibleToEveryone?: BoolFieldUpdateOperationsInput | boolean
    accessDurationType?: EnumAccessDurationTypeFieldUpdateOperationsInput | $Enums.AccessDurationType
    accessDurationDays?: NullableIntFieldUpdateOperationsInput | number | null
    useAppOwnerAsReviewer?: BoolFieldUpdateOperationsInput | boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownedApps?: appUpdateManyWithoutOwnerNestedInput
    reviewingPolicies?: policyUpdateManyWithoutReviewersNestedInput
    visiblePolicies?: policyUpdateManyWithoutVisibleUsersNestedInput
  }

  export type userUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownedApps?: appUncheckedUpdateManyWithoutOwnerNestedInput
    reviewingPolicies?: policyUncheckedUpdateManyWithoutReviewersNestedInput
    visiblePolicies?: policyUncheckedUpdateManyWithoutVisibleUsersNestedInput
  }

  export type userUncheckedUpdateManyWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type appCreateManyOwnerInput = {
    id?: string
    name: string
    url?: string | null
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type appUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    policies?: policyUpdateManyWithoutAppNestedInput
  }

  export type appUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    policies?: policyUncheckedUpdateManyWithoutAppNestedInput
  }

  export type appUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type policyUpdateWithoutReviewersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibleToEveryone?: BoolFieldUpdateOperationsInput | boolean
    accessDurationType?: EnumAccessDurationTypeFieldUpdateOperationsInput | $Enums.AccessDurationType
    accessDurationDays?: NullableIntFieldUpdateOperationsInput | number | null
    useAppOwnerAsReviewer?: BoolFieldUpdateOperationsInput | boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    app?: appUpdateOneRequiredWithoutPoliciesNestedInput
    visibleGroups?: cnsl_groupUpdateManyWithoutVisiblePoliciesNestedInput
    visibleUsers?: userUpdateManyWithoutVisiblePoliciesNestedInput
  }

  export type policyUncheckedUpdateWithoutReviewersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    appId?: StringFieldUpdateOperationsInput | string
    visibleToEveryone?: BoolFieldUpdateOperationsInput | boolean
    accessDurationType?: EnumAccessDurationTypeFieldUpdateOperationsInput | $Enums.AccessDurationType
    accessDurationDays?: NullableIntFieldUpdateOperationsInput | number | null
    useAppOwnerAsReviewer?: BoolFieldUpdateOperationsInput | boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visibleGroups?: cnsl_groupUncheckedUpdateManyWithoutVisiblePoliciesNestedInput
    visibleUsers?: userUncheckedUpdateManyWithoutVisiblePoliciesNestedInput
  }

  export type policyUncheckedUpdateManyWithoutReviewersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    appId?: StringFieldUpdateOperationsInput | string
    visibleToEveryone?: BoolFieldUpdateOperationsInput | boolean
    accessDurationType?: EnumAccessDurationTypeFieldUpdateOperationsInput | $Enums.AccessDurationType
    accessDurationDays?: NullableIntFieldUpdateOperationsInput | number | null
    useAppOwnerAsReviewer?: BoolFieldUpdateOperationsInput | boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type policyUpdateWithoutVisibleUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibleToEveryone?: BoolFieldUpdateOperationsInput | boolean
    accessDurationType?: EnumAccessDurationTypeFieldUpdateOperationsInput | $Enums.AccessDurationType
    accessDurationDays?: NullableIntFieldUpdateOperationsInput | number | null
    useAppOwnerAsReviewer?: BoolFieldUpdateOperationsInput | boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    app?: appUpdateOneRequiredWithoutPoliciesNestedInput
    reviewers?: userUpdateManyWithoutReviewingPoliciesNestedInput
    visibleGroups?: cnsl_groupUpdateManyWithoutVisiblePoliciesNestedInput
  }

  export type policyUncheckedUpdateWithoutVisibleUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    appId?: StringFieldUpdateOperationsInput | string
    visibleToEveryone?: BoolFieldUpdateOperationsInput | boolean
    accessDurationType?: EnumAccessDurationTypeFieldUpdateOperationsInput | $Enums.AccessDurationType
    accessDurationDays?: NullableIntFieldUpdateOperationsInput | number | null
    useAppOwnerAsReviewer?: BoolFieldUpdateOperationsInput | boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewers?: userUncheckedUpdateManyWithoutReviewingPoliciesNestedInput
    visibleGroups?: cnsl_groupUncheckedUpdateManyWithoutVisiblePoliciesNestedInput
  }

  export type policyUncheckedUpdateManyWithoutVisibleUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    appId?: StringFieldUpdateOperationsInput | string
    visibleToEveryone?: BoolFieldUpdateOperationsInput | boolean
    accessDurationType?: EnumAccessDurationTypeFieldUpdateOperationsInput | $Enums.AccessDurationType
    accessDurationDays?: NullableIntFieldUpdateOperationsInput | number | null
    useAppOwnerAsReviewer?: BoolFieldUpdateOperationsInput | boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cnsl_groupUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visiblePolicies?: policyUpdateManyWithoutVisibleGroupsNestedInput
  }

  export type cnsl_groupUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visiblePolicies?: policyUncheckedUpdateManyWithoutVisibleGroupsNestedInput
  }

  export type cnsl_groupUncheckedUpdateManyWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type policyCreateManyAppInput = {
    id?: string
    name?: string | null
    description?: string | null
    visibleToEveryone?: boolean
    accessDurationType: $Enums.AccessDurationType
    accessDurationDays?: number | null
    useAppOwnerAsReviewer?: boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type policyUpdateWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibleToEveryone?: BoolFieldUpdateOperationsInput | boolean
    accessDurationType?: EnumAccessDurationTypeFieldUpdateOperationsInput | $Enums.AccessDurationType
    accessDurationDays?: NullableIntFieldUpdateOperationsInput | number | null
    useAppOwnerAsReviewer?: BoolFieldUpdateOperationsInput | boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewers?: userUpdateManyWithoutReviewingPoliciesNestedInput
    visibleGroups?: cnsl_groupUpdateManyWithoutVisiblePoliciesNestedInput
    visibleUsers?: userUpdateManyWithoutVisiblePoliciesNestedInput
  }

  export type policyUncheckedUpdateWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibleToEveryone?: BoolFieldUpdateOperationsInput | boolean
    accessDurationType?: EnumAccessDurationTypeFieldUpdateOperationsInput | $Enums.AccessDurationType
    accessDurationDays?: NullableIntFieldUpdateOperationsInput | number | null
    useAppOwnerAsReviewer?: BoolFieldUpdateOperationsInput | boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewers?: userUncheckedUpdateManyWithoutReviewingPoliciesNestedInput
    visibleGroups?: cnsl_groupUncheckedUpdateManyWithoutVisiblePoliciesNestedInput
    visibleUsers?: userUncheckedUpdateManyWithoutVisiblePoliciesNestedInput
  }

  export type policyUncheckedUpdateManyWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibleToEveryone?: BoolFieldUpdateOperationsInput | boolean
    accessDurationType?: EnumAccessDurationTypeFieldUpdateOperationsInput | $Enums.AccessDurationType
    accessDurationDays?: NullableIntFieldUpdateOperationsInput | number | null
    useAppOwnerAsReviewer?: BoolFieldUpdateOperationsInput | boolean
    approvalSteps?: JsonNullValueInput | InputJsonValue
    revocationSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUpdateWithoutReviewingPoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownedApps?: appUpdateManyWithoutOwnerNestedInput
    visiblePolicies?: policyUpdateManyWithoutVisibleUsersNestedInput
    groups?: cnsl_groupUpdateManyWithoutMembersNestedInput
  }

  export type userUncheckedUpdateWithoutReviewingPoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownedApps?: appUncheckedUpdateManyWithoutOwnerNestedInput
    visiblePolicies?: policyUncheckedUpdateManyWithoutVisibleUsersNestedInput
    groups?: cnsl_groupUncheckedUpdateManyWithoutMembersNestedInput
  }

  export type userUncheckedUpdateManyWithoutReviewingPoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cnsl_groupUpdateWithoutVisiblePoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: userUpdateManyWithoutGroupsNestedInput
  }

  export type cnsl_groupUncheckedUpdateWithoutVisiblePoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: userUncheckedUpdateManyWithoutGroupsNestedInput
  }

  export type cnsl_groupUncheckedUpdateManyWithoutVisiblePoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUpdateWithoutVisiblePoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownedApps?: appUpdateManyWithoutOwnerNestedInput
    reviewingPolicies?: policyUpdateManyWithoutReviewersNestedInput
    groups?: cnsl_groupUpdateManyWithoutMembersNestedInput
  }

  export type userUncheckedUpdateWithoutVisiblePoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownedApps?: appUncheckedUpdateManyWithoutOwnerNestedInput
    reviewingPolicies?: policyUncheckedUpdateManyWithoutReviewersNestedInput
    groups?: cnsl_groupUncheckedUpdateManyWithoutMembersNestedInput
  }

  export type userUncheckedUpdateManyWithoutVisiblePoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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