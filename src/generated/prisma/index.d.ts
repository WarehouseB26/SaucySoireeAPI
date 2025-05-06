
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
 * Model PizzaStore
 * 
 */
export type PizzaStore = $Result.DefaultSelection<Prisma.$PizzaStorePayload>
/**
 * Model Pizza
 * 
 */
export type Pizza = $Result.DefaultSelection<Prisma.$PizzaPayload>
/**
 * Model Desert
 * 
 */
export type Desert = $Result.DefaultSelection<Prisma.$DesertPayload>
/**
 * Model DesertIngredients
 * 
 */
export type DesertIngredients = $Result.DefaultSelection<Prisma.$DesertIngredientsPayload>
/**
 * Model PizzaIngredient
 * 
 */
export type PizzaIngredient = $Result.DefaultSelection<Prisma.$PizzaIngredientPayload>
/**
 * Model Refreshment
 * 
 */
export type Refreshment = $Result.DefaultSelection<Prisma.$RefreshmentPayload>
/**
 * Model PizzaRating
 * 
 */
export type PizzaRating = $Result.DefaultSelection<Prisma.$PizzaRatingPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderStatus
 * 
 */
export type OrderStatus = $Result.DefaultSelection<Prisma.$OrderStatusPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PizzaStores
 * const pizzaStores = await prisma.pizzaStore.findMany()
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
   * // Fetch zero or more PizzaStores
   * const pizzaStores = await prisma.pizzaStore.findMany()
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
   * `prisma.pizzaStore`: Exposes CRUD operations for the **PizzaStore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PizzaStores
    * const pizzaStores = await prisma.pizzaStore.findMany()
    * ```
    */
  get pizzaStore(): Prisma.PizzaStoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pizza`: Exposes CRUD operations for the **Pizza** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pizzas
    * const pizzas = await prisma.pizza.findMany()
    * ```
    */
  get pizza(): Prisma.PizzaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.desert`: Exposes CRUD operations for the **Desert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deserts
    * const deserts = await prisma.desert.findMany()
    * ```
    */
  get desert(): Prisma.DesertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.desertIngredients`: Exposes CRUD operations for the **DesertIngredients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DesertIngredients
    * const desertIngredients = await prisma.desertIngredients.findMany()
    * ```
    */
  get desertIngredients(): Prisma.DesertIngredientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pizzaIngredient`: Exposes CRUD operations for the **PizzaIngredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PizzaIngredients
    * const pizzaIngredients = await prisma.pizzaIngredient.findMany()
    * ```
    */
  get pizzaIngredient(): Prisma.PizzaIngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshment`: Exposes CRUD operations for the **Refreshment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Refreshments
    * const refreshments = await prisma.refreshment.findMany()
    * ```
    */
  get refreshment(): Prisma.RefreshmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pizzaRating`: Exposes CRUD operations for the **PizzaRating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PizzaRatings
    * const pizzaRatings = await prisma.pizzaRating.findMany()
    * ```
    */
  get pizzaRating(): Prisma.PizzaRatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderStatus`: Exposes CRUD operations for the **OrderStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderStatuses
    * const orderStatuses = await prisma.orderStatus.findMany()
    * ```
    */
  get orderStatus(): Prisma.OrderStatusDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    PizzaStore: 'PizzaStore',
    Pizza: 'Pizza',
    Desert: 'Desert',
    DesertIngredients: 'DesertIngredients',
    PizzaIngredient: 'PizzaIngredient',
    Refreshment: 'Refreshment',
    PizzaRating: 'PizzaRating',
    Order: 'Order',
    OrderStatus: 'OrderStatus'
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
      modelProps: "pizzaStore" | "pizza" | "desert" | "desertIngredients" | "pizzaIngredient" | "refreshment" | "pizzaRating" | "order" | "orderStatus"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PizzaStore: {
        payload: Prisma.$PizzaStorePayload<ExtArgs>
        fields: Prisma.PizzaStoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PizzaStoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaStorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PizzaStoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaStorePayload>
          }
          findFirst: {
            args: Prisma.PizzaStoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaStorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PizzaStoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaStorePayload>
          }
          findMany: {
            args: Prisma.PizzaStoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaStorePayload>[]
          }
          create: {
            args: Prisma.PizzaStoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaStorePayload>
          }
          createMany: {
            args: Prisma.PizzaStoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PizzaStoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaStorePayload>[]
          }
          delete: {
            args: Prisma.PizzaStoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaStorePayload>
          }
          update: {
            args: Prisma.PizzaStoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaStorePayload>
          }
          deleteMany: {
            args: Prisma.PizzaStoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PizzaStoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PizzaStoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaStorePayload>[]
          }
          upsert: {
            args: Prisma.PizzaStoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaStorePayload>
          }
          aggregate: {
            args: Prisma.PizzaStoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePizzaStore>
          }
          groupBy: {
            args: Prisma.PizzaStoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<PizzaStoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.PizzaStoreCountArgs<ExtArgs>
            result: $Utils.Optional<PizzaStoreCountAggregateOutputType> | number
          }
        }
      }
      Pizza: {
        payload: Prisma.$PizzaPayload<ExtArgs>
        fields: Prisma.PizzaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PizzaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PizzaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload>
          }
          findFirst: {
            args: Prisma.PizzaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PizzaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload>
          }
          findMany: {
            args: Prisma.PizzaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload>[]
          }
          create: {
            args: Prisma.PizzaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload>
          }
          createMany: {
            args: Prisma.PizzaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PizzaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload>[]
          }
          delete: {
            args: Prisma.PizzaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload>
          }
          update: {
            args: Prisma.PizzaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload>
          }
          deleteMany: {
            args: Prisma.PizzaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PizzaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PizzaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload>[]
          }
          upsert: {
            args: Prisma.PizzaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload>
          }
          aggregate: {
            args: Prisma.PizzaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePizza>
          }
          groupBy: {
            args: Prisma.PizzaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PizzaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PizzaCountArgs<ExtArgs>
            result: $Utils.Optional<PizzaCountAggregateOutputType> | number
          }
        }
      }
      Desert: {
        payload: Prisma.$DesertPayload<ExtArgs>
        fields: Prisma.DesertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DesertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DesertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesertPayload>
          }
          findFirst: {
            args: Prisma.DesertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DesertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesertPayload>
          }
          findMany: {
            args: Prisma.DesertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesertPayload>[]
          }
          create: {
            args: Prisma.DesertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesertPayload>
          }
          createMany: {
            args: Prisma.DesertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DesertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesertPayload>[]
          }
          delete: {
            args: Prisma.DesertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesertPayload>
          }
          update: {
            args: Prisma.DesertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesertPayload>
          }
          deleteMany: {
            args: Prisma.DesertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DesertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DesertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesertPayload>[]
          }
          upsert: {
            args: Prisma.DesertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesertPayload>
          }
          aggregate: {
            args: Prisma.DesertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDesert>
          }
          groupBy: {
            args: Prisma.DesertGroupByArgs<ExtArgs>
            result: $Utils.Optional<DesertGroupByOutputType>[]
          }
          count: {
            args: Prisma.DesertCountArgs<ExtArgs>
            result: $Utils.Optional<DesertCountAggregateOutputType> | number
          }
        }
      }
      DesertIngredients: {
        payload: Prisma.$DesertIngredientsPayload<ExtArgs>
        fields: Prisma.DesertIngredientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DesertIngredientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesertIngredientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DesertIngredientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesertIngredientsPayload>
          }
          findFirst: {
            args: Prisma.DesertIngredientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesertIngredientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DesertIngredientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesertIngredientsPayload>
          }
          findMany: {
            args: Prisma.DesertIngredientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesertIngredientsPayload>[]
          }
          create: {
            args: Prisma.DesertIngredientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesertIngredientsPayload>
          }
          createMany: {
            args: Prisma.DesertIngredientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DesertIngredientsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesertIngredientsPayload>[]
          }
          delete: {
            args: Prisma.DesertIngredientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesertIngredientsPayload>
          }
          update: {
            args: Prisma.DesertIngredientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesertIngredientsPayload>
          }
          deleteMany: {
            args: Prisma.DesertIngredientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DesertIngredientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DesertIngredientsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesertIngredientsPayload>[]
          }
          upsert: {
            args: Prisma.DesertIngredientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesertIngredientsPayload>
          }
          aggregate: {
            args: Prisma.DesertIngredientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDesertIngredients>
          }
          groupBy: {
            args: Prisma.DesertIngredientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DesertIngredientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DesertIngredientsCountArgs<ExtArgs>
            result: $Utils.Optional<DesertIngredientsCountAggregateOutputType> | number
          }
        }
      }
      PizzaIngredient: {
        payload: Prisma.$PizzaIngredientPayload<ExtArgs>
        fields: Prisma.PizzaIngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PizzaIngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaIngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PizzaIngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaIngredientPayload>
          }
          findFirst: {
            args: Prisma.PizzaIngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaIngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PizzaIngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaIngredientPayload>
          }
          findMany: {
            args: Prisma.PizzaIngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaIngredientPayload>[]
          }
          create: {
            args: Prisma.PizzaIngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaIngredientPayload>
          }
          createMany: {
            args: Prisma.PizzaIngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PizzaIngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaIngredientPayload>[]
          }
          delete: {
            args: Prisma.PizzaIngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaIngredientPayload>
          }
          update: {
            args: Prisma.PizzaIngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaIngredientPayload>
          }
          deleteMany: {
            args: Prisma.PizzaIngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PizzaIngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PizzaIngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaIngredientPayload>[]
          }
          upsert: {
            args: Prisma.PizzaIngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaIngredientPayload>
          }
          aggregate: {
            args: Prisma.PizzaIngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePizzaIngredient>
          }
          groupBy: {
            args: Prisma.PizzaIngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PizzaIngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PizzaIngredientCountArgs<ExtArgs>
            result: $Utils.Optional<PizzaIngredientCountAggregateOutputType> | number
          }
        }
      }
      Refreshment: {
        payload: Prisma.$RefreshmentPayload<ExtArgs>
        fields: Prisma.RefreshmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshmentPayload>
          }
          findFirst: {
            args: Prisma.RefreshmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshmentPayload>
          }
          findMany: {
            args: Prisma.RefreshmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshmentPayload>[]
          }
          create: {
            args: Prisma.RefreshmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshmentPayload>
          }
          createMany: {
            args: Prisma.RefreshmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshmentPayload>[]
          }
          delete: {
            args: Prisma.RefreshmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshmentPayload>
          }
          update: {
            args: Prisma.RefreshmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshmentPayload>
          }
          deleteMany: {
            args: Prisma.RefreshmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshmentPayload>[]
          }
          upsert: {
            args: Prisma.RefreshmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshmentPayload>
          }
          aggregate: {
            args: Prisma.RefreshmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshment>
          }
          groupBy: {
            args: Prisma.RefreshmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshmentCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshmentCountAggregateOutputType> | number
          }
        }
      }
      PizzaRating: {
        payload: Prisma.$PizzaRatingPayload<ExtArgs>
        fields: Prisma.PizzaRatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PizzaRatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaRatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PizzaRatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaRatingPayload>
          }
          findFirst: {
            args: Prisma.PizzaRatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaRatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PizzaRatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaRatingPayload>
          }
          findMany: {
            args: Prisma.PizzaRatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaRatingPayload>[]
          }
          create: {
            args: Prisma.PizzaRatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaRatingPayload>
          }
          createMany: {
            args: Prisma.PizzaRatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PizzaRatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaRatingPayload>[]
          }
          delete: {
            args: Prisma.PizzaRatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaRatingPayload>
          }
          update: {
            args: Prisma.PizzaRatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaRatingPayload>
          }
          deleteMany: {
            args: Prisma.PizzaRatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PizzaRatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PizzaRatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaRatingPayload>[]
          }
          upsert: {
            args: Prisma.PizzaRatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaRatingPayload>
          }
          aggregate: {
            args: Prisma.PizzaRatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePizzaRating>
          }
          groupBy: {
            args: Prisma.PizzaRatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<PizzaRatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.PizzaRatingCountArgs<ExtArgs>
            result: $Utils.Optional<PizzaRatingCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderStatus: {
        payload: Prisma.$OrderStatusPayload<ExtArgs>
        fields: Prisma.OrderStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload>
          }
          findFirst: {
            args: Prisma.OrderStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload>
          }
          findMany: {
            args: Prisma.OrderStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload>[]
          }
          create: {
            args: Prisma.OrderStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload>
          }
          createMany: {
            args: Prisma.OrderStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload>[]
          }
          delete: {
            args: Prisma.OrderStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload>
          }
          update: {
            args: Prisma.OrderStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload>
          }
          deleteMany: {
            args: Prisma.OrderStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload>[]
          }
          upsert: {
            args: Prisma.OrderStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload>
          }
          aggregate: {
            args: Prisma.OrderStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderStatus>
          }
          groupBy: {
            args: Prisma.OrderStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderStatusCountArgs<ExtArgs>
            result: $Utils.Optional<OrderStatusCountAggregateOutputType> | number
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
    pizzaStore?: PizzaStoreOmit
    pizza?: PizzaOmit
    desert?: DesertOmit
    desertIngredients?: DesertIngredientsOmit
    pizzaIngredient?: PizzaIngredientOmit
    refreshment?: RefreshmentOmit
    pizzaRating?: PizzaRatingOmit
    order?: OrderOmit
    orderStatus?: OrderStatusOmit
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
   * Count Type PizzaStoreCountOutputType
   */

  export type PizzaStoreCountOutputType = {
    pizzas: number
  }

  export type PizzaStoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pizzas?: boolean | PizzaStoreCountOutputTypeCountPizzasArgs
  }

  // Custom InputTypes
  /**
   * PizzaStoreCountOutputType without action
   */
  export type PizzaStoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaStoreCountOutputType
     */
    select?: PizzaStoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PizzaStoreCountOutputType without action
   */
  export type PizzaStoreCountOutputTypeCountPizzasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PizzaWhereInput
  }


  /**
   * Count Type PizzaCountOutputType
   */

  export type PizzaCountOutputType = {
    ingredients: number
    ratings: number
    orders: number
  }

  export type PizzaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | PizzaCountOutputTypeCountIngredientsArgs
    ratings?: boolean | PizzaCountOutputTypeCountRatingsArgs
    orders?: boolean | PizzaCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * PizzaCountOutputType without action
   */
  export type PizzaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaCountOutputType
     */
    select?: PizzaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PizzaCountOutputType without action
   */
  export type PizzaCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PizzaIngredientWhereInput
  }

  /**
   * PizzaCountOutputType without action
   */
  export type PizzaCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PizzaRatingWhereInput
  }

  /**
   * PizzaCountOutputType without action
   */
  export type PizzaCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type DesertCountOutputType
   */

  export type DesertCountOutputType = {
    ingredients: number
    orders: number
  }

  export type DesertCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | DesertCountOutputTypeCountIngredientsArgs
    orders?: boolean | DesertCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * DesertCountOutputType without action
   */
  export type DesertCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesertCountOutputType
     */
    select?: DesertCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DesertCountOutputType without action
   */
  export type DesertCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DesertIngredientsWhereInput
  }

  /**
   * DesertCountOutputType without action
   */
  export type DesertCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type DesertIngredientsCountOutputType
   */

  export type DesertIngredientsCountOutputType = {
    deserts: number
  }

  export type DesertIngredientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deserts?: boolean | DesertIngredientsCountOutputTypeCountDesertsArgs
  }

  // Custom InputTypes
  /**
   * DesertIngredientsCountOutputType without action
   */
  export type DesertIngredientsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesertIngredientsCountOutputType
     */
    select?: DesertIngredientsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DesertIngredientsCountOutputType without action
   */
  export type DesertIngredientsCountOutputTypeCountDesertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DesertWhereInput
  }


  /**
   * Count Type PizzaIngredientCountOutputType
   */

  export type PizzaIngredientCountOutputType = {
    pizzas: number
  }

  export type PizzaIngredientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pizzas?: boolean | PizzaIngredientCountOutputTypeCountPizzasArgs
  }

  // Custom InputTypes
  /**
   * PizzaIngredientCountOutputType without action
   */
  export type PizzaIngredientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaIngredientCountOutputType
     */
    select?: PizzaIngredientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PizzaIngredientCountOutputType without action
   */
  export type PizzaIngredientCountOutputTypeCountPizzasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PizzaWhereInput
  }


  /**
   * Count Type RefreshmentCountOutputType
   */

  export type RefreshmentCountOutputType = {
    orders: number
  }

  export type RefreshmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | RefreshmentCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * RefreshmentCountOutputType without action
   */
  export type RefreshmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshmentCountOutputType
     */
    select?: RefreshmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RefreshmentCountOutputType without action
   */
  export type RefreshmentCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    pizzas: number
    deserts: number
    refreshments: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pizzas?: boolean | OrderCountOutputTypeCountPizzasArgs
    deserts?: boolean | OrderCountOutputTypeCountDesertsArgs
    refreshments?: boolean | OrderCountOutputTypeCountRefreshmentsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountPizzasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PizzaWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountDesertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DesertWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountRefreshmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshmentWhereInput
  }


  /**
   * Count Type OrderStatusCountOutputType
   */

  export type OrderStatusCountOutputType = {
    orders: number
  }

  export type OrderStatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | OrderStatusCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * OrderStatusCountOutputType without action
   */
  export type OrderStatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatusCountOutputType
     */
    select?: OrderStatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderStatusCountOutputType without action
   */
  export type OrderStatusCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PizzaStore
   */

  export type AggregatePizzaStore = {
    _count: PizzaStoreCountAggregateOutputType | null
    _avg: PizzaStoreAvgAggregateOutputType | null
    _sum: PizzaStoreSumAggregateOutputType | null
    _min: PizzaStoreMinAggregateOutputType | null
    _max: PizzaStoreMaxAggregateOutputType | null
  }

  export type PizzaStoreAvgAggregateOutputType = {
    storeid: number | null
    phone: number | null
  }

  export type PizzaStoreSumAggregateOutputType = {
    storeid: number | null
    phone: number | null
  }

  export type PizzaStoreMinAggregateOutputType = {
    storeid: number | null
    storeuuid: string | null
    name: string | null
    location: string | null
    phone: number | null
    email: string | null
  }

  export type PizzaStoreMaxAggregateOutputType = {
    storeid: number | null
    storeuuid: string | null
    name: string | null
    location: string | null
    phone: number | null
    email: string | null
  }

  export type PizzaStoreCountAggregateOutputType = {
    storeid: number
    storeuuid: number
    name: number
    location: number
    phone: number
    email: number
    _all: number
  }


  export type PizzaStoreAvgAggregateInputType = {
    storeid?: true
    phone?: true
  }

  export type PizzaStoreSumAggregateInputType = {
    storeid?: true
    phone?: true
  }

  export type PizzaStoreMinAggregateInputType = {
    storeid?: true
    storeuuid?: true
    name?: true
    location?: true
    phone?: true
    email?: true
  }

  export type PizzaStoreMaxAggregateInputType = {
    storeid?: true
    storeuuid?: true
    name?: true
    location?: true
    phone?: true
    email?: true
  }

  export type PizzaStoreCountAggregateInputType = {
    storeid?: true
    storeuuid?: true
    name?: true
    location?: true
    phone?: true
    email?: true
    _all?: true
  }

  export type PizzaStoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PizzaStore to aggregate.
     */
    where?: PizzaStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PizzaStores to fetch.
     */
    orderBy?: PizzaStoreOrderByWithRelationInput | PizzaStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PizzaStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PizzaStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PizzaStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PizzaStores
    **/
    _count?: true | PizzaStoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PizzaStoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PizzaStoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PizzaStoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PizzaStoreMaxAggregateInputType
  }

  export type GetPizzaStoreAggregateType<T extends PizzaStoreAggregateArgs> = {
        [P in keyof T & keyof AggregatePizzaStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePizzaStore[P]>
      : GetScalarType<T[P], AggregatePizzaStore[P]>
  }




  export type PizzaStoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PizzaStoreWhereInput
    orderBy?: PizzaStoreOrderByWithAggregationInput | PizzaStoreOrderByWithAggregationInput[]
    by: PizzaStoreScalarFieldEnum[] | PizzaStoreScalarFieldEnum
    having?: PizzaStoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PizzaStoreCountAggregateInputType | true
    _avg?: PizzaStoreAvgAggregateInputType
    _sum?: PizzaStoreSumAggregateInputType
    _min?: PizzaStoreMinAggregateInputType
    _max?: PizzaStoreMaxAggregateInputType
  }

  export type PizzaStoreGroupByOutputType = {
    storeid: number
    storeuuid: string
    name: string
    location: string
    phone: number
    email: string
    _count: PizzaStoreCountAggregateOutputType | null
    _avg: PizzaStoreAvgAggregateOutputType | null
    _sum: PizzaStoreSumAggregateOutputType | null
    _min: PizzaStoreMinAggregateOutputType | null
    _max: PizzaStoreMaxAggregateOutputType | null
  }

  type GetPizzaStoreGroupByPayload<T extends PizzaStoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PizzaStoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PizzaStoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PizzaStoreGroupByOutputType[P]>
            : GetScalarType<T[P], PizzaStoreGroupByOutputType[P]>
        }
      >
    >


  export type PizzaStoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    storeid?: boolean
    storeuuid?: boolean
    name?: boolean
    location?: boolean
    phone?: boolean
    email?: boolean
    pizzas?: boolean | PizzaStore$pizzasArgs<ExtArgs>
    _count?: boolean | PizzaStoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pizzaStore"]>

  export type PizzaStoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    storeid?: boolean
    storeuuid?: boolean
    name?: boolean
    location?: boolean
    phone?: boolean
    email?: boolean
  }, ExtArgs["result"]["pizzaStore"]>

  export type PizzaStoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    storeid?: boolean
    storeuuid?: boolean
    name?: boolean
    location?: boolean
    phone?: boolean
    email?: boolean
  }, ExtArgs["result"]["pizzaStore"]>

  export type PizzaStoreSelectScalar = {
    storeid?: boolean
    storeuuid?: boolean
    name?: boolean
    location?: boolean
    phone?: boolean
    email?: boolean
  }

  export type PizzaStoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"storeid" | "storeuuid" | "name" | "location" | "phone" | "email", ExtArgs["result"]["pizzaStore"]>
  export type PizzaStoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pizzas?: boolean | PizzaStore$pizzasArgs<ExtArgs>
    _count?: boolean | PizzaStoreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PizzaStoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PizzaStoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PizzaStorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PizzaStore"
    objects: {
      pizzas: Prisma.$PizzaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      storeid: number
      storeuuid: string
      name: string
      location: string
      phone: number
      email: string
    }, ExtArgs["result"]["pizzaStore"]>
    composites: {}
  }

  type PizzaStoreGetPayload<S extends boolean | null | undefined | PizzaStoreDefaultArgs> = $Result.GetResult<Prisma.$PizzaStorePayload, S>

  type PizzaStoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PizzaStoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PizzaStoreCountAggregateInputType | true
    }

  export interface PizzaStoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PizzaStore'], meta: { name: 'PizzaStore' } }
    /**
     * Find zero or one PizzaStore that matches the filter.
     * @param {PizzaStoreFindUniqueArgs} args - Arguments to find a PizzaStore
     * @example
     * // Get one PizzaStore
     * const pizzaStore = await prisma.pizzaStore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PizzaStoreFindUniqueArgs>(args: SelectSubset<T, PizzaStoreFindUniqueArgs<ExtArgs>>): Prisma__PizzaStoreClient<$Result.GetResult<Prisma.$PizzaStorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PizzaStore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PizzaStoreFindUniqueOrThrowArgs} args - Arguments to find a PizzaStore
     * @example
     * // Get one PizzaStore
     * const pizzaStore = await prisma.pizzaStore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PizzaStoreFindUniqueOrThrowArgs>(args: SelectSubset<T, PizzaStoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PizzaStoreClient<$Result.GetResult<Prisma.$PizzaStorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PizzaStore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaStoreFindFirstArgs} args - Arguments to find a PizzaStore
     * @example
     * // Get one PizzaStore
     * const pizzaStore = await prisma.pizzaStore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PizzaStoreFindFirstArgs>(args?: SelectSubset<T, PizzaStoreFindFirstArgs<ExtArgs>>): Prisma__PizzaStoreClient<$Result.GetResult<Prisma.$PizzaStorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PizzaStore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaStoreFindFirstOrThrowArgs} args - Arguments to find a PizzaStore
     * @example
     * // Get one PizzaStore
     * const pizzaStore = await prisma.pizzaStore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PizzaStoreFindFirstOrThrowArgs>(args?: SelectSubset<T, PizzaStoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__PizzaStoreClient<$Result.GetResult<Prisma.$PizzaStorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PizzaStores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaStoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PizzaStores
     * const pizzaStores = await prisma.pizzaStore.findMany()
     * 
     * // Get first 10 PizzaStores
     * const pizzaStores = await prisma.pizzaStore.findMany({ take: 10 })
     * 
     * // Only select the `storeid`
     * const pizzaStoreWithStoreidOnly = await prisma.pizzaStore.findMany({ select: { storeid: true } })
     * 
     */
    findMany<T extends PizzaStoreFindManyArgs>(args?: SelectSubset<T, PizzaStoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaStorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PizzaStore.
     * @param {PizzaStoreCreateArgs} args - Arguments to create a PizzaStore.
     * @example
     * // Create one PizzaStore
     * const PizzaStore = await prisma.pizzaStore.create({
     *   data: {
     *     // ... data to create a PizzaStore
     *   }
     * })
     * 
     */
    create<T extends PizzaStoreCreateArgs>(args: SelectSubset<T, PizzaStoreCreateArgs<ExtArgs>>): Prisma__PizzaStoreClient<$Result.GetResult<Prisma.$PizzaStorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PizzaStores.
     * @param {PizzaStoreCreateManyArgs} args - Arguments to create many PizzaStores.
     * @example
     * // Create many PizzaStores
     * const pizzaStore = await prisma.pizzaStore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PizzaStoreCreateManyArgs>(args?: SelectSubset<T, PizzaStoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PizzaStores and returns the data saved in the database.
     * @param {PizzaStoreCreateManyAndReturnArgs} args - Arguments to create many PizzaStores.
     * @example
     * // Create many PizzaStores
     * const pizzaStore = await prisma.pizzaStore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PizzaStores and only return the `storeid`
     * const pizzaStoreWithStoreidOnly = await prisma.pizzaStore.createManyAndReturn({
     *   select: { storeid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PizzaStoreCreateManyAndReturnArgs>(args?: SelectSubset<T, PizzaStoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaStorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PizzaStore.
     * @param {PizzaStoreDeleteArgs} args - Arguments to delete one PizzaStore.
     * @example
     * // Delete one PizzaStore
     * const PizzaStore = await prisma.pizzaStore.delete({
     *   where: {
     *     // ... filter to delete one PizzaStore
     *   }
     * })
     * 
     */
    delete<T extends PizzaStoreDeleteArgs>(args: SelectSubset<T, PizzaStoreDeleteArgs<ExtArgs>>): Prisma__PizzaStoreClient<$Result.GetResult<Prisma.$PizzaStorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PizzaStore.
     * @param {PizzaStoreUpdateArgs} args - Arguments to update one PizzaStore.
     * @example
     * // Update one PizzaStore
     * const pizzaStore = await prisma.pizzaStore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PizzaStoreUpdateArgs>(args: SelectSubset<T, PizzaStoreUpdateArgs<ExtArgs>>): Prisma__PizzaStoreClient<$Result.GetResult<Prisma.$PizzaStorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PizzaStores.
     * @param {PizzaStoreDeleteManyArgs} args - Arguments to filter PizzaStores to delete.
     * @example
     * // Delete a few PizzaStores
     * const { count } = await prisma.pizzaStore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PizzaStoreDeleteManyArgs>(args?: SelectSubset<T, PizzaStoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PizzaStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaStoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PizzaStores
     * const pizzaStore = await prisma.pizzaStore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PizzaStoreUpdateManyArgs>(args: SelectSubset<T, PizzaStoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PizzaStores and returns the data updated in the database.
     * @param {PizzaStoreUpdateManyAndReturnArgs} args - Arguments to update many PizzaStores.
     * @example
     * // Update many PizzaStores
     * const pizzaStore = await prisma.pizzaStore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PizzaStores and only return the `storeid`
     * const pizzaStoreWithStoreidOnly = await prisma.pizzaStore.updateManyAndReturn({
     *   select: { storeid: true },
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
    updateManyAndReturn<T extends PizzaStoreUpdateManyAndReturnArgs>(args: SelectSubset<T, PizzaStoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaStorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PizzaStore.
     * @param {PizzaStoreUpsertArgs} args - Arguments to update or create a PizzaStore.
     * @example
     * // Update or create a PizzaStore
     * const pizzaStore = await prisma.pizzaStore.upsert({
     *   create: {
     *     // ... data to create a PizzaStore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PizzaStore we want to update
     *   }
     * })
     */
    upsert<T extends PizzaStoreUpsertArgs>(args: SelectSubset<T, PizzaStoreUpsertArgs<ExtArgs>>): Prisma__PizzaStoreClient<$Result.GetResult<Prisma.$PizzaStorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PizzaStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaStoreCountArgs} args - Arguments to filter PizzaStores to count.
     * @example
     * // Count the number of PizzaStores
     * const count = await prisma.pizzaStore.count({
     *   where: {
     *     // ... the filter for the PizzaStores we want to count
     *   }
     * })
    **/
    count<T extends PizzaStoreCountArgs>(
      args?: Subset<T, PizzaStoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PizzaStoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PizzaStore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaStoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PizzaStoreAggregateArgs>(args: Subset<T, PizzaStoreAggregateArgs>): Prisma.PrismaPromise<GetPizzaStoreAggregateType<T>>

    /**
     * Group by PizzaStore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaStoreGroupByArgs} args - Group by arguments.
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
      T extends PizzaStoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PizzaStoreGroupByArgs['orderBy'] }
        : { orderBy?: PizzaStoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PizzaStoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPizzaStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PizzaStore model
   */
  readonly fields: PizzaStoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PizzaStore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PizzaStoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pizzas<T extends PizzaStore$pizzasArgs<ExtArgs> = {}>(args?: Subset<T, PizzaStore$pizzasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PizzaStore model
   */
  interface PizzaStoreFieldRefs {
    readonly storeid: FieldRef<"PizzaStore", 'Int'>
    readonly storeuuid: FieldRef<"PizzaStore", 'String'>
    readonly name: FieldRef<"PizzaStore", 'String'>
    readonly location: FieldRef<"PizzaStore", 'String'>
    readonly phone: FieldRef<"PizzaStore", 'Int'>
    readonly email: FieldRef<"PizzaStore", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PizzaStore findUnique
   */
  export type PizzaStoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaStore
     */
    select?: PizzaStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaStore
     */
    omit?: PizzaStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaStoreInclude<ExtArgs> | null
    /**
     * Filter, which PizzaStore to fetch.
     */
    where: PizzaStoreWhereUniqueInput
  }

  /**
   * PizzaStore findUniqueOrThrow
   */
  export type PizzaStoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaStore
     */
    select?: PizzaStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaStore
     */
    omit?: PizzaStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaStoreInclude<ExtArgs> | null
    /**
     * Filter, which PizzaStore to fetch.
     */
    where: PizzaStoreWhereUniqueInput
  }

  /**
   * PizzaStore findFirst
   */
  export type PizzaStoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaStore
     */
    select?: PizzaStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaStore
     */
    omit?: PizzaStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaStoreInclude<ExtArgs> | null
    /**
     * Filter, which PizzaStore to fetch.
     */
    where?: PizzaStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PizzaStores to fetch.
     */
    orderBy?: PizzaStoreOrderByWithRelationInput | PizzaStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PizzaStores.
     */
    cursor?: PizzaStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PizzaStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PizzaStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PizzaStores.
     */
    distinct?: PizzaStoreScalarFieldEnum | PizzaStoreScalarFieldEnum[]
  }

  /**
   * PizzaStore findFirstOrThrow
   */
  export type PizzaStoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaStore
     */
    select?: PizzaStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaStore
     */
    omit?: PizzaStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaStoreInclude<ExtArgs> | null
    /**
     * Filter, which PizzaStore to fetch.
     */
    where?: PizzaStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PizzaStores to fetch.
     */
    orderBy?: PizzaStoreOrderByWithRelationInput | PizzaStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PizzaStores.
     */
    cursor?: PizzaStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PizzaStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PizzaStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PizzaStores.
     */
    distinct?: PizzaStoreScalarFieldEnum | PizzaStoreScalarFieldEnum[]
  }

  /**
   * PizzaStore findMany
   */
  export type PizzaStoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaStore
     */
    select?: PizzaStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaStore
     */
    omit?: PizzaStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaStoreInclude<ExtArgs> | null
    /**
     * Filter, which PizzaStores to fetch.
     */
    where?: PizzaStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PizzaStores to fetch.
     */
    orderBy?: PizzaStoreOrderByWithRelationInput | PizzaStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PizzaStores.
     */
    cursor?: PizzaStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PizzaStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PizzaStores.
     */
    skip?: number
    distinct?: PizzaStoreScalarFieldEnum | PizzaStoreScalarFieldEnum[]
  }

  /**
   * PizzaStore create
   */
  export type PizzaStoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaStore
     */
    select?: PizzaStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaStore
     */
    omit?: PizzaStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaStoreInclude<ExtArgs> | null
    /**
     * The data needed to create a PizzaStore.
     */
    data: XOR<PizzaStoreCreateInput, PizzaStoreUncheckedCreateInput>
  }

  /**
   * PizzaStore createMany
   */
  export type PizzaStoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PizzaStores.
     */
    data: PizzaStoreCreateManyInput | PizzaStoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PizzaStore createManyAndReturn
   */
  export type PizzaStoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaStore
     */
    select?: PizzaStoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaStore
     */
    omit?: PizzaStoreOmit<ExtArgs> | null
    /**
     * The data used to create many PizzaStores.
     */
    data: PizzaStoreCreateManyInput | PizzaStoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PizzaStore update
   */
  export type PizzaStoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaStore
     */
    select?: PizzaStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaStore
     */
    omit?: PizzaStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaStoreInclude<ExtArgs> | null
    /**
     * The data needed to update a PizzaStore.
     */
    data: XOR<PizzaStoreUpdateInput, PizzaStoreUncheckedUpdateInput>
    /**
     * Choose, which PizzaStore to update.
     */
    where: PizzaStoreWhereUniqueInput
  }

  /**
   * PizzaStore updateMany
   */
  export type PizzaStoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PizzaStores.
     */
    data: XOR<PizzaStoreUpdateManyMutationInput, PizzaStoreUncheckedUpdateManyInput>
    /**
     * Filter which PizzaStores to update
     */
    where?: PizzaStoreWhereInput
    /**
     * Limit how many PizzaStores to update.
     */
    limit?: number
  }

  /**
   * PizzaStore updateManyAndReturn
   */
  export type PizzaStoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaStore
     */
    select?: PizzaStoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaStore
     */
    omit?: PizzaStoreOmit<ExtArgs> | null
    /**
     * The data used to update PizzaStores.
     */
    data: XOR<PizzaStoreUpdateManyMutationInput, PizzaStoreUncheckedUpdateManyInput>
    /**
     * Filter which PizzaStores to update
     */
    where?: PizzaStoreWhereInput
    /**
     * Limit how many PizzaStores to update.
     */
    limit?: number
  }

  /**
   * PizzaStore upsert
   */
  export type PizzaStoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaStore
     */
    select?: PizzaStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaStore
     */
    omit?: PizzaStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaStoreInclude<ExtArgs> | null
    /**
     * The filter to search for the PizzaStore to update in case it exists.
     */
    where: PizzaStoreWhereUniqueInput
    /**
     * In case the PizzaStore found by the `where` argument doesn't exist, create a new PizzaStore with this data.
     */
    create: XOR<PizzaStoreCreateInput, PizzaStoreUncheckedCreateInput>
    /**
     * In case the PizzaStore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PizzaStoreUpdateInput, PizzaStoreUncheckedUpdateInput>
  }

  /**
   * PizzaStore delete
   */
  export type PizzaStoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaStore
     */
    select?: PizzaStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaStore
     */
    omit?: PizzaStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaStoreInclude<ExtArgs> | null
    /**
     * Filter which PizzaStore to delete.
     */
    where: PizzaStoreWhereUniqueInput
  }

  /**
   * PizzaStore deleteMany
   */
  export type PizzaStoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PizzaStores to delete
     */
    where?: PizzaStoreWhereInput
    /**
     * Limit how many PizzaStores to delete.
     */
    limit?: number
  }

  /**
   * PizzaStore.pizzas
   */
  export type PizzaStore$pizzasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    where?: PizzaWhereInput
    orderBy?: PizzaOrderByWithRelationInput | PizzaOrderByWithRelationInput[]
    cursor?: PizzaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PizzaScalarFieldEnum | PizzaScalarFieldEnum[]
  }

  /**
   * PizzaStore without action
   */
  export type PizzaStoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaStore
     */
    select?: PizzaStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaStore
     */
    omit?: PizzaStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaStoreInclude<ExtArgs> | null
  }


  /**
   * Model Pizza
   */

  export type AggregatePizza = {
    _count: PizzaCountAggregateOutputType | null
    _avg: PizzaAvgAggregateOutputType | null
    _sum: PizzaSumAggregateOutputType | null
    _min: PizzaMinAggregateOutputType | null
    _max: PizzaMaxAggregateOutputType | null
  }

  export type PizzaAvgAggregateOutputType = {
    pizzaid: number | null
    price: number | null
    storeId: number | null
  }

  export type PizzaSumAggregateOutputType = {
    pizzaid: number | null
    price: number | null
    storeId: number | null
  }

  export type PizzaMinAggregateOutputType = {
    pizzaid: number | null
    pizzauuid: string | null
    name: string | null
    description: string | null
    price: number | null
    storeId: number | null
  }

  export type PizzaMaxAggregateOutputType = {
    pizzaid: number | null
    pizzauuid: string | null
    name: string | null
    description: string | null
    price: number | null
    storeId: number | null
  }

  export type PizzaCountAggregateOutputType = {
    pizzaid: number
    pizzauuid: number
    name: number
    description: number
    price: number
    storeId: number
    _all: number
  }


  export type PizzaAvgAggregateInputType = {
    pizzaid?: true
    price?: true
    storeId?: true
  }

  export type PizzaSumAggregateInputType = {
    pizzaid?: true
    price?: true
    storeId?: true
  }

  export type PizzaMinAggregateInputType = {
    pizzaid?: true
    pizzauuid?: true
    name?: true
    description?: true
    price?: true
    storeId?: true
  }

  export type PizzaMaxAggregateInputType = {
    pizzaid?: true
    pizzauuid?: true
    name?: true
    description?: true
    price?: true
    storeId?: true
  }

  export type PizzaCountAggregateInputType = {
    pizzaid?: true
    pizzauuid?: true
    name?: true
    description?: true
    price?: true
    storeId?: true
    _all?: true
  }

  export type PizzaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pizza to aggregate.
     */
    where?: PizzaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pizzas to fetch.
     */
    orderBy?: PizzaOrderByWithRelationInput | PizzaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PizzaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pizzas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pizzas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pizzas
    **/
    _count?: true | PizzaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PizzaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PizzaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PizzaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PizzaMaxAggregateInputType
  }

  export type GetPizzaAggregateType<T extends PizzaAggregateArgs> = {
        [P in keyof T & keyof AggregatePizza]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePizza[P]>
      : GetScalarType<T[P], AggregatePizza[P]>
  }




  export type PizzaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PizzaWhereInput
    orderBy?: PizzaOrderByWithAggregationInput | PizzaOrderByWithAggregationInput[]
    by: PizzaScalarFieldEnum[] | PizzaScalarFieldEnum
    having?: PizzaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PizzaCountAggregateInputType | true
    _avg?: PizzaAvgAggregateInputType
    _sum?: PizzaSumAggregateInputType
    _min?: PizzaMinAggregateInputType
    _max?: PizzaMaxAggregateInputType
  }

  export type PizzaGroupByOutputType = {
    pizzaid: number
    pizzauuid: string
    name: string
    description: string
    price: number
    storeId: number
    _count: PizzaCountAggregateOutputType | null
    _avg: PizzaAvgAggregateOutputType | null
    _sum: PizzaSumAggregateOutputType | null
    _min: PizzaMinAggregateOutputType | null
    _max: PizzaMaxAggregateOutputType | null
  }

  type GetPizzaGroupByPayload<T extends PizzaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PizzaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PizzaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PizzaGroupByOutputType[P]>
            : GetScalarType<T[P], PizzaGroupByOutputType[P]>
        }
      >
    >


  export type PizzaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pizzaid?: boolean
    pizzauuid?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    storeId?: boolean
    ingredients?: boolean | Pizza$ingredientsArgs<ExtArgs>
    ratings?: boolean | Pizza$ratingsArgs<ExtArgs>
    store?: boolean | PizzaStoreDefaultArgs<ExtArgs>
    orders?: boolean | Pizza$ordersArgs<ExtArgs>
    _count?: boolean | PizzaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pizza"]>

  export type PizzaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pizzaid?: boolean
    pizzauuid?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    storeId?: boolean
    store?: boolean | PizzaStoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pizza"]>

  export type PizzaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pizzaid?: boolean
    pizzauuid?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    storeId?: boolean
    store?: boolean | PizzaStoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pizza"]>

  export type PizzaSelectScalar = {
    pizzaid?: boolean
    pizzauuid?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    storeId?: boolean
  }

  export type PizzaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pizzaid" | "pizzauuid" | "name" | "description" | "price" | "storeId", ExtArgs["result"]["pizza"]>
  export type PizzaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | Pizza$ingredientsArgs<ExtArgs>
    ratings?: boolean | Pizza$ratingsArgs<ExtArgs>
    store?: boolean | PizzaStoreDefaultArgs<ExtArgs>
    orders?: boolean | Pizza$ordersArgs<ExtArgs>
    _count?: boolean | PizzaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PizzaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | PizzaStoreDefaultArgs<ExtArgs>
  }
  export type PizzaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | PizzaStoreDefaultArgs<ExtArgs>
  }

  export type $PizzaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pizza"
    objects: {
      ingredients: Prisma.$PizzaIngredientPayload<ExtArgs>[]
      ratings: Prisma.$PizzaRatingPayload<ExtArgs>[]
      store: Prisma.$PizzaStorePayload<ExtArgs>
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pizzaid: number
      pizzauuid: string
      name: string
      description: string
      price: number
      storeId: number
    }, ExtArgs["result"]["pizza"]>
    composites: {}
  }

  type PizzaGetPayload<S extends boolean | null | undefined | PizzaDefaultArgs> = $Result.GetResult<Prisma.$PizzaPayload, S>

  type PizzaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PizzaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PizzaCountAggregateInputType | true
    }

  export interface PizzaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pizza'], meta: { name: 'Pizza' } }
    /**
     * Find zero or one Pizza that matches the filter.
     * @param {PizzaFindUniqueArgs} args - Arguments to find a Pizza
     * @example
     * // Get one Pizza
     * const pizza = await prisma.pizza.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PizzaFindUniqueArgs>(args: SelectSubset<T, PizzaFindUniqueArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pizza that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PizzaFindUniqueOrThrowArgs} args - Arguments to find a Pizza
     * @example
     * // Get one Pizza
     * const pizza = await prisma.pizza.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PizzaFindUniqueOrThrowArgs>(args: SelectSubset<T, PizzaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pizza that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaFindFirstArgs} args - Arguments to find a Pizza
     * @example
     * // Get one Pizza
     * const pizza = await prisma.pizza.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PizzaFindFirstArgs>(args?: SelectSubset<T, PizzaFindFirstArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pizza that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaFindFirstOrThrowArgs} args - Arguments to find a Pizza
     * @example
     * // Get one Pizza
     * const pizza = await prisma.pizza.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PizzaFindFirstOrThrowArgs>(args?: SelectSubset<T, PizzaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pizzas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pizzas
     * const pizzas = await prisma.pizza.findMany()
     * 
     * // Get first 10 Pizzas
     * const pizzas = await prisma.pizza.findMany({ take: 10 })
     * 
     * // Only select the `pizzaid`
     * const pizzaWithPizzaidOnly = await prisma.pizza.findMany({ select: { pizzaid: true } })
     * 
     */
    findMany<T extends PizzaFindManyArgs>(args?: SelectSubset<T, PizzaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pizza.
     * @param {PizzaCreateArgs} args - Arguments to create a Pizza.
     * @example
     * // Create one Pizza
     * const Pizza = await prisma.pizza.create({
     *   data: {
     *     // ... data to create a Pizza
     *   }
     * })
     * 
     */
    create<T extends PizzaCreateArgs>(args: SelectSubset<T, PizzaCreateArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pizzas.
     * @param {PizzaCreateManyArgs} args - Arguments to create many Pizzas.
     * @example
     * // Create many Pizzas
     * const pizza = await prisma.pizza.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PizzaCreateManyArgs>(args?: SelectSubset<T, PizzaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pizzas and returns the data saved in the database.
     * @param {PizzaCreateManyAndReturnArgs} args - Arguments to create many Pizzas.
     * @example
     * // Create many Pizzas
     * const pizza = await prisma.pizza.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pizzas and only return the `pizzaid`
     * const pizzaWithPizzaidOnly = await prisma.pizza.createManyAndReturn({
     *   select: { pizzaid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PizzaCreateManyAndReturnArgs>(args?: SelectSubset<T, PizzaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pizza.
     * @param {PizzaDeleteArgs} args - Arguments to delete one Pizza.
     * @example
     * // Delete one Pizza
     * const Pizza = await prisma.pizza.delete({
     *   where: {
     *     // ... filter to delete one Pizza
     *   }
     * })
     * 
     */
    delete<T extends PizzaDeleteArgs>(args: SelectSubset<T, PizzaDeleteArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pizza.
     * @param {PizzaUpdateArgs} args - Arguments to update one Pizza.
     * @example
     * // Update one Pizza
     * const pizza = await prisma.pizza.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PizzaUpdateArgs>(args: SelectSubset<T, PizzaUpdateArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pizzas.
     * @param {PizzaDeleteManyArgs} args - Arguments to filter Pizzas to delete.
     * @example
     * // Delete a few Pizzas
     * const { count } = await prisma.pizza.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PizzaDeleteManyArgs>(args?: SelectSubset<T, PizzaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pizzas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pizzas
     * const pizza = await prisma.pizza.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PizzaUpdateManyArgs>(args: SelectSubset<T, PizzaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pizzas and returns the data updated in the database.
     * @param {PizzaUpdateManyAndReturnArgs} args - Arguments to update many Pizzas.
     * @example
     * // Update many Pizzas
     * const pizza = await prisma.pizza.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pizzas and only return the `pizzaid`
     * const pizzaWithPizzaidOnly = await prisma.pizza.updateManyAndReturn({
     *   select: { pizzaid: true },
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
    updateManyAndReturn<T extends PizzaUpdateManyAndReturnArgs>(args: SelectSubset<T, PizzaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pizza.
     * @param {PizzaUpsertArgs} args - Arguments to update or create a Pizza.
     * @example
     * // Update or create a Pizza
     * const pizza = await prisma.pizza.upsert({
     *   create: {
     *     // ... data to create a Pizza
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pizza we want to update
     *   }
     * })
     */
    upsert<T extends PizzaUpsertArgs>(args: SelectSubset<T, PizzaUpsertArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pizzas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaCountArgs} args - Arguments to filter Pizzas to count.
     * @example
     * // Count the number of Pizzas
     * const count = await prisma.pizza.count({
     *   where: {
     *     // ... the filter for the Pizzas we want to count
     *   }
     * })
    **/
    count<T extends PizzaCountArgs>(
      args?: Subset<T, PizzaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PizzaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pizza.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PizzaAggregateArgs>(args: Subset<T, PizzaAggregateArgs>): Prisma.PrismaPromise<GetPizzaAggregateType<T>>

    /**
     * Group by Pizza.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaGroupByArgs} args - Group by arguments.
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
      T extends PizzaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PizzaGroupByArgs['orderBy'] }
        : { orderBy?: PizzaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PizzaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPizzaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pizza model
   */
  readonly fields: PizzaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pizza.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PizzaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredients<T extends Pizza$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, Pizza$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends Pizza$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, Pizza$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    store<T extends PizzaStoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PizzaStoreDefaultArgs<ExtArgs>>): Prisma__PizzaStoreClient<$Result.GetResult<Prisma.$PizzaStorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orders<T extends Pizza$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Pizza$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pizza model
   */
  interface PizzaFieldRefs {
    readonly pizzaid: FieldRef<"Pizza", 'Int'>
    readonly pizzauuid: FieldRef<"Pizza", 'String'>
    readonly name: FieldRef<"Pizza", 'String'>
    readonly description: FieldRef<"Pizza", 'String'>
    readonly price: FieldRef<"Pizza", 'Float'>
    readonly storeId: FieldRef<"Pizza", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pizza findUnique
   */
  export type PizzaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    /**
     * Filter, which Pizza to fetch.
     */
    where: PizzaWhereUniqueInput
  }

  /**
   * Pizza findUniqueOrThrow
   */
  export type PizzaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    /**
     * Filter, which Pizza to fetch.
     */
    where: PizzaWhereUniqueInput
  }

  /**
   * Pizza findFirst
   */
  export type PizzaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    /**
     * Filter, which Pizza to fetch.
     */
    where?: PizzaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pizzas to fetch.
     */
    orderBy?: PizzaOrderByWithRelationInput | PizzaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pizzas.
     */
    cursor?: PizzaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pizzas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pizzas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pizzas.
     */
    distinct?: PizzaScalarFieldEnum | PizzaScalarFieldEnum[]
  }

  /**
   * Pizza findFirstOrThrow
   */
  export type PizzaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    /**
     * Filter, which Pizza to fetch.
     */
    where?: PizzaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pizzas to fetch.
     */
    orderBy?: PizzaOrderByWithRelationInput | PizzaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pizzas.
     */
    cursor?: PizzaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pizzas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pizzas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pizzas.
     */
    distinct?: PizzaScalarFieldEnum | PizzaScalarFieldEnum[]
  }

  /**
   * Pizza findMany
   */
  export type PizzaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    /**
     * Filter, which Pizzas to fetch.
     */
    where?: PizzaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pizzas to fetch.
     */
    orderBy?: PizzaOrderByWithRelationInput | PizzaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pizzas.
     */
    cursor?: PizzaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pizzas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pizzas.
     */
    skip?: number
    distinct?: PizzaScalarFieldEnum | PizzaScalarFieldEnum[]
  }

  /**
   * Pizza create
   */
  export type PizzaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    /**
     * The data needed to create a Pizza.
     */
    data: XOR<PizzaCreateInput, PizzaUncheckedCreateInput>
  }

  /**
   * Pizza createMany
   */
  export type PizzaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pizzas.
     */
    data: PizzaCreateManyInput | PizzaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pizza createManyAndReturn
   */
  export type PizzaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * The data used to create many Pizzas.
     */
    data: PizzaCreateManyInput | PizzaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pizza update
   */
  export type PizzaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    /**
     * The data needed to update a Pizza.
     */
    data: XOR<PizzaUpdateInput, PizzaUncheckedUpdateInput>
    /**
     * Choose, which Pizza to update.
     */
    where: PizzaWhereUniqueInput
  }

  /**
   * Pizza updateMany
   */
  export type PizzaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pizzas.
     */
    data: XOR<PizzaUpdateManyMutationInput, PizzaUncheckedUpdateManyInput>
    /**
     * Filter which Pizzas to update
     */
    where?: PizzaWhereInput
    /**
     * Limit how many Pizzas to update.
     */
    limit?: number
  }

  /**
   * Pizza updateManyAndReturn
   */
  export type PizzaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * The data used to update Pizzas.
     */
    data: XOR<PizzaUpdateManyMutationInput, PizzaUncheckedUpdateManyInput>
    /**
     * Filter which Pizzas to update
     */
    where?: PizzaWhereInput
    /**
     * Limit how many Pizzas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pizza upsert
   */
  export type PizzaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    /**
     * The filter to search for the Pizza to update in case it exists.
     */
    where: PizzaWhereUniqueInput
    /**
     * In case the Pizza found by the `where` argument doesn't exist, create a new Pizza with this data.
     */
    create: XOR<PizzaCreateInput, PizzaUncheckedCreateInput>
    /**
     * In case the Pizza was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PizzaUpdateInput, PizzaUncheckedUpdateInput>
  }

  /**
   * Pizza delete
   */
  export type PizzaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    /**
     * Filter which Pizza to delete.
     */
    where: PizzaWhereUniqueInput
  }

  /**
   * Pizza deleteMany
   */
  export type PizzaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pizzas to delete
     */
    where?: PizzaWhereInput
    /**
     * Limit how many Pizzas to delete.
     */
    limit?: number
  }

  /**
   * Pizza.ingredients
   */
  export type Pizza$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaIngredient
     */
    select?: PizzaIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaIngredient
     */
    omit?: PizzaIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaIngredientInclude<ExtArgs> | null
    where?: PizzaIngredientWhereInput
    orderBy?: PizzaIngredientOrderByWithRelationInput | PizzaIngredientOrderByWithRelationInput[]
    cursor?: PizzaIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PizzaIngredientScalarFieldEnum | PizzaIngredientScalarFieldEnum[]
  }

  /**
   * Pizza.ratings
   */
  export type Pizza$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaRating
     */
    select?: PizzaRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaRating
     */
    omit?: PizzaRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaRatingInclude<ExtArgs> | null
    where?: PizzaRatingWhereInput
    orderBy?: PizzaRatingOrderByWithRelationInput | PizzaRatingOrderByWithRelationInput[]
    cursor?: PizzaRatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PizzaRatingScalarFieldEnum | PizzaRatingScalarFieldEnum[]
  }

  /**
   * Pizza.orders
   */
  export type Pizza$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Pizza without action
   */
  export type PizzaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
  }


  /**
   * Model Desert
   */

  export type AggregateDesert = {
    _count: DesertCountAggregateOutputType | null
    _avg: DesertAvgAggregateOutputType | null
    _sum: DesertSumAggregateOutputType | null
    _min: DesertMinAggregateOutputType | null
    _max: DesertMaxAggregateOutputType | null
  }

  export type DesertAvgAggregateOutputType = {
    desertid: number | null
    price: number | null
  }

  export type DesertSumAggregateOutputType = {
    desertid: number | null
    price: number | null
  }

  export type DesertMinAggregateOutputType = {
    desertid: number | null
    desertuuid: string | null
    name: string | null
    price: number | null
  }

  export type DesertMaxAggregateOutputType = {
    desertid: number | null
    desertuuid: string | null
    name: string | null
    price: number | null
  }

  export type DesertCountAggregateOutputType = {
    desertid: number
    desertuuid: number
    name: number
    price: number
    _all: number
  }


  export type DesertAvgAggregateInputType = {
    desertid?: true
    price?: true
  }

  export type DesertSumAggregateInputType = {
    desertid?: true
    price?: true
  }

  export type DesertMinAggregateInputType = {
    desertid?: true
    desertuuid?: true
    name?: true
    price?: true
  }

  export type DesertMaxAggregateInputType = {
    desertid?: true
    desertuuid?: true
    name?: true
    price?: true
  }

  export type DesertCountAggregateInputType = {
    desertid?: true
    desertuuid?: true
    name?: true
    price?: true
    _all?: true
  }

  export type DesertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Desert to aggregate.
     */
    where?: DesertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deserts to fetch.
     */
    orderBy?: DesertOrderByWithRelationInput | DesertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DesertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deserts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deserts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deserts
    **/
    _count?: true | DesertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DesertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DesertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DesertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DesertMaxAggregateInputType
  }

  export type GetDesertAggregateType<T extends DesertAggregateArgs> = {
        [P in keyof T & keyof AggregateDesert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDesert[P]>
      : GetScalarType<T[P], AggregateDesert[P]>
  }




  export type DesertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DesertWhereInput
    orderBy?: DesertOrderByWithAggregationInput | DesertOrderByWithAggregationInput[]
    by: DesertScalarFieldEnum[] | DesertScalarFieldEnum
    having?: DesertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DesertCountAggregateInputType | true
    _avg?: DesertAvgAggregateInputType
    _sum?: DesertSumAggregateInputType
    _min?: DesertMinAggregateInputType
    _max?: DesertMaxAggregateInputType
  }

  export type DesertGroupByOutputType = {
    desertid: number
    desertuuid: string
    name: string
    price: number
    _count: DesertCountAggregateOutputType | null
    _avg: DesertAvgAggregateOutputType | null
    _sum: DesertSumAggregateOutputType | null
    _min: DesertMinAggregateOutputType | null
    _max: DesertMaxAggregateOutputType | null
  }

  type GetDesertGroupByPayload<T extends DesertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DesertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DesertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DesertGroupByOutputType[P]>
            : GetScalarType<T[P], DesertGroupByOutputType[P]>
        }
      >
    >


  export type DesertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    desertid?: boolean
    desertuuid?: boolean
    name?: boolean
    price?: boolean
    ingredients?: boolean | Desert$ingredientsArgs<ExtArgs>
    orders?: boolean | Desert$ordersArgs<ExtArgs>
    _count?: boolean | DesertCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["desert"]>

  export type DesertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    desertid?: boolean
    desertuuid?: boolean
    name?: boolean
    price?: boolean
  }, ExtArgs["result"]["desert"]>

  export type DesertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    desertid?: boolean
    desertuuid?: boolean
    name?: boolean
    price?: boolean
  }, ExtArgs["result"]["desert"]>

  export type DesertSelectScalar = {
    desertid?: boolean
    desertuuid?: boolean
    name?: boolean
    price?: boolean
  }

  export type DesertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"desertid" | "desertuuid" | "name" | "price", ExtArgs["result"]["desert"]>
  export type DesertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | Desert$ingredientsArgs<ExtArgs>
    orders?: boolean | Desert$ordersArgs<ExtArgs>
    _count?: boolean | DesertCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DesertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DesertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DesertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Desert"
    objects: {
      ingredients: Prisma.$DesertIngredientsPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      desertid: number
      desertuuid: string
      name: string
      price: number
    }, ExtArgs["result"]["desert"]>
    composites: {}
  }

  type DesertGetPayload<S extends boolean | null | undefined | DesertDefaultArgs> = $Result.GetResult<Prisma.$DesertPayload, S>

  type DesertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DesertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DesertCountAggregateInputType | true
    }

  export interface DesertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Desert'], meta: { name: 'Desert' } }
    /**
     * Find zero or one Desert that matches the filter.
     * @param {DesertFindUniqueArgs} args - Arguments to find a Desert
     * @example
     * // Get one Desert
     * const desert = await prisma.desert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DesertFindUniqueArgs>(args: SelectSubset<T, DesertFindUniqueArgs<ExtArgs>>): Prisma__DesertClient<$Result.GetResult<Prisma.$DesertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Desert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DesertFindUniqueOrThrowArgs} args - Arguments to find a Desert
     * @example
     * // Get one Desert
     * const desert = await prisma.desert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DesertFindUniqueOrThrowArgs>(args: SelectSubset<T, DesertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DesertClient<$Result.GetResult<Prisma.$DesertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Desert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesertFindFirstArgs} args - Arguments to find a Desert
     * @example
     * // Get one Desert
     * const desert = await prisma.desert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DesertFindFirstArgs>(args?: SelectSubset<T, DesertFindFirstArgs<ExtArgs>>): Prisma__DesertClient<$Result.GetResult<Prisma.$DesertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Desert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesertFindFirstOrThrowArgs} args - Arguments to find a Desert
     * @example
     * // Get one Desert
     * const desert = await prisma.desert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DesertFindFirstOrThrowArgs>(args?: SelectSubset<T, DesertFindFirstOrThrowArgs<ExtArgs>>): Prisma__DesertClient<$Result.GetResult<Prisma.$DesertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deserts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deserts
     * const deserts = await prisma.desert.findMany()
     * 
     * // Get first 10 Deserts
     * const deserts = await prisma.desert.findMany({ take: 10 })
     * 
     * // Only select the `desertid`
     * const desertWithDesertidOnly = await prisma.desert.findMany({ select: { desertid: true } })
     * 
     */
    findMany<T extends DesertFindManyArgs>(args?: SelectSubset<T, DesertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Desert.
     * @param {DesertCreateArgs} args - Arguments to create a Desert.
     * @example
     * // Create one Desert
     * const Desert = await prisma.desert.create({
     *   data: {
     *     // ... data to create a Desert
     *   }
     * })
     * 
     */
    create<T extends DesertCreateArgs>(args: SelectSubset<T, DesertCreateArgs<ExtArgs>>): Prisma__DesertClient<$Result.GetResult<Prisma.$DesertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deserts.
     * @param {DesertCreateManyArgs} args - Arguments to create many Deserts.
     * @example
     * // Create many Deserts
     * const desert = await prisma.desert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DesertCreateManyArgs>(args?: SelectSubset<T, DesertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deserts and returns the data saved in the database.
     * @param {DesertCreateManyAndReturnArgs} args - Arguments to create many Deserts.
     * @example
     * // Create many Deserts
     * const desert = await prisma.desert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deserts and only return the `desertid`
     * const desertWithDesertidOnly = await prisma.desert.createManyAndReturn({
     *   select: { desertid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DesertCreateManyAndReturnArgs>(args?: SelectSubset<T, DesertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Desert.
     * @param {DesertDeleteArgs} args - Arguments to delete one Desert.
     * @example
     * // Delete one Desert
     * const Desert = await prisma.desert.delete({
     *   where: {
     *     // ... filter to delete one Desert
     *   }
     * })
     * 
     */
    delete<T extends DesertDeleteArgs>(args: SelectSubset<T, DesertDeleteArgs<ExtArgs>>): Prisma__DesertClient<$Result.GetResult<Prisma.$DesertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Desert.
     * @param {DesertUpdateArgs} args - Arguments to update one Desert.
     * @example
     * // Update one Desert
     * const desert = await prisma.desert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DesertUpdateArgs>(args: SelectSubset<T, DesertUpdateArgs<ExtArgs>>): Prisma__DesertClient<$Result.GetResult<Prisma.$DesertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deserts.
     * @param {DesertDeleteManyArgs} args - Arguments to filter Deserts to delete.
     * @example
     * // Delete a few Deserts
     * const { count } = await prisma.desert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DesertDeleteManyArgs>(args?: SelectSubset<T, DesertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deserts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deserts
     * const desert = await prisma.desert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DesertUpdateManyArgs>(args: SelectSubset<T, DesertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deserts and returns the data updated in the database.
     * @param {DesertUpdateManyAndReturnArgs} args - Arguments to update many Deserts.
     * @example
     * // Update many Deserts
     * const desert = await prisma.desert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deserts and only return the `desertid`
     * const desertWithDesertidOnly = await prisma.desert.updateManyAndReturn({
     *   select: { desertid: true },
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
    updateManyAndReturn<T extends DesertUpdateManyAndReturnArgs>(args: SelectSubset<T, DesertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Desert.
     * @param {DesertUpsertArgs} args - Arguments to update or create a Desert.
     * @example
     * // Update or create a Desert
     * const desert = await prisma.desert.upsert({
     *   create: {
     *     // ... data to create a Desert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Desert we want to update
     *   }
     * })
     */
    upsert<T extends DesertUpsertArgs>(args: SelectSubset<T, DesertUpsertArgs<ExtArgs>>): Prisma__DesertClient<$Result.GetResult<Prisma.$DesertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deserts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesertCountArgs} args - Arguments to filter Deserts to count.
     * @example
     * // Count the number of Deserts
     * const count = await prisma.desert.count({
     *   where: {
     *     // ... the filter for the Deserts we want to count
     *   }
     * })
    **/
    count<T extends DesertCountArgs>(
      args?: Subset<T, DesertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DesertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Desert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DesertAggregateArgs>(args: Subset<T, DesertAggregateArgs>): Prisma.PrismaPromise<GetDesertAggregateType<T>>

    /**
     * Group by Desert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesertGroupByArgs} args - Group by arguments.
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
      T extends DesertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DesertGroupByArgs['orderBy'] }
        : { orderBy?: DesertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DesertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDesertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Desert model
   */
  readonly fields: DesertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Desert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DesertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredients<T extends Desert$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, Desert$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesertIngredientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Desert$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Desert$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Desert model
   */
  interface DesertFieldRefs {
    readonly desertid: FieldRef<"Desert", 'Int'>
    readonly desertuuid: FieldRef<"Desert", 'String'>
    readonly name: FieldRef<"Desert", 'String'>
    readonly price: FieldRef<"Desert", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Desert findUnique
   */
  export type DesertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desert
     */
    select?: DesertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Desert
     */
    omit?: DesertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesertInclude<ExtArgs> | null
    /**
     * Filter, which Desert to fetch.
     */
    where: DesertWhereUniqueInput
  }

  /**
   * Desert findUniqueOrThrow
   */
  export type DesertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desert
     */
    select?: DesertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Desert
     */
    omit?: DesertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesertInclude<ExtArgs> | null
    /**
     * Filter, which Desert to fetch.
     */
    where: DesertWhereUniqueInput
  }

  /**
   * Desert findFirst
   */
  export type DesertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desert
     */
    select?: DesertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Desert
     */
    omit?: DesertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesertInclude<ExtArgs> | null
    /**
     * Filter, which Desert to fetch.
     */
    where?: DesertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deserts to fetch.
     */
    orderBy?: DesertOrderByWithRelationInput | DesertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deserts.
     */
    cursor?: DesertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deserts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deserts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deserts.
     */
    distinct?: DesertScalarFieldEnum | DesertScalarFieldEnum[]
  }

  /**
   * Desert findFirstOrThrow
   */
  export type DesertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desert
     */
    select?: DesertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Desert
     */
    omit?: DesertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesertInclude<ExtArgs> | null
    /**
     * Filter, which Desert to fetch.
     */
    where?: DesertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deserts to fetch.
     */
    orderBy?: DesertOrderByWithRelationInput | DesertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deserts.
     */
    cursor?: DesertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deserts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deserts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deserts.
     */
    distinct?: DesertScalarFieldEnum | DesertScalarFieldEnum[]
  }

  /**
   * Desert findMany
   */
  export type DesertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desert
     */
    select?: DesertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Desert
     */
    omit?: DesertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesertInclude<ExtArgs> | null
    /**
     * Filter, which Deserts to fetch.
     */
    where?: DesertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deserts to fetch.
     */
    orderBy?: DesertOrderByWithRelationInput | DesertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deserts.
     */
    cursor?: DesertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deserts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deserts.
     */
    skip?: number
    distinct?: DesertScalarFieldEnum | DesertScalarFieldEnum[]
  }

  /**
   * Desert create
   */
  export type DesertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desert
     */
    select?: DesertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Desert
     */
    omit?: DesertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesertInclude<ExtArgs> | null
    /**
     * The data needed to create a Desert.
     */
    data: XOR<DesertCreateInput, DesertUncheckedCreateInput>
  }

  /**
   * Desert createMany
   */
  export type DesertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deserts.
     */
    data: DesertCreateManyInput | DesertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Desert createManyAndReturn
   */
  export type DesertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desert
     */
    select?: DesertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Desert
     */
    omit?: DesertOmit<ExtArgs> | null
    /**
     * The data used to create many Deserts.
     */
    data: DesertCreateManyInput | DesertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Desert update
   */
  export type DesertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desert
     */
    select?: DesertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Desert
     */
    omit?: DesertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesertInclude<ExtArgs> | null
    /**
     * The data needed to update a Desert.
     */
    data: XOR<DesertUpdateInput, DesertUncheckedUpdateInput>
    /**
     * Choose, which Desert to update.
     */
    where: DesertWhereUniqueInput
  }

  /**
   * Desert updateMany
   */
  export type DesertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deserts.
     */
    data: XOR<DesertUpdateManyMutationInput, DesertUncheckedUpdateManyInput>
    /**
     * Filter which Deserts to update
     */
    where?: DesertWhereInput
    /**
     * Limit how many Deserts to update.
     */
    limit?: number
  }

  /**
   * Desert updateManyAndReturn
   */
  export type DesertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desert
     */
    select?: DesertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Desert
     */
    omit?: DesertOmit<ExtArgs> | null
    /**
     * The data used to update Deserts.
     */
    data: XOR<DesertUpdateManyMutationInput, DesertUncheckedUpdateManyInput>
    /**
     * Filter which Deserts to update
     */
    where?: DesertWhereInput
    /**
     * Limit how many Deserts to update.
     */
    limit?: number
  }

  /**
   * Desert upsert
   */
  export type DesertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desert
     */
    select?: DesertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Desert
     */
    omit?: DesertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesertInclude<ExtArgs> | null
    /**
     * The filter to search for the Desert to update in case it exists.
     */
    where: DesertWhereUniqueInput
    /**
     * In case the Desert found by the `where` argument doesn't exist, create a new Desert with this data.
     */
    create: XOR<DesertCreateInput, DesertUncheckedCreateInput>
    /**
     * In case the Desert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DesertUpdateInput, DesertUncheckedUpdateInput>
  }

  /**
   * Desert delete
   */
  export type DesertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desert
     */
    select?: DesertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Desert
     */
    omit?: DesertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesertInclude<ExtArgs> | null
    /**
     * Filter which Desert to delete.
     */
    where: DesertWhereUniqueInput
  }

  /**
   * Desert deleteMany
   */
  export type DesertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deserts to delete
     */
    where?: DesertWhereInput
    /**
     * Limit how many Deserts to delete.
     */
    limit?: number
  }

  /**
   * Desert.ingredients
   */
  export type Desert$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesertIngredients
     */
    select?: DesertIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesertIngredients
     */
    omit?: DesertIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesertIngredientsInclude<ExtArgs> | null
    where?: DesertIngredientsWhereInput
    orderBy?: DesertIngredientsOrderByWithRelationInput | DesertIngredientsOrderByWithRelationInput[]
    cursor?: DesertIngredientsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DesertIngredientsScalarFieldEnum | DesertIngredientsScalarFieldEnum[]
  }

  /**
   * Desert.orders
   */
  export type Desert$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Desert without action
   */
  export type DesertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desert
     */
    select?: DesertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Desert
     */
    omit?: DesertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesertInclude<ExtArgs> | null
  }


  /**
   * Model DesertIngredients
   */

  export type AggregateDesertIngredients = {
    _count: DesertIngredientsCountAggregateOutputType | null
    _avg: DesertIngredientsAvgAggregateOutputType | null
    _sum: DesertIngredientsSumAggregateOutputType | null
    _min: DesertIngredientsMinAggregateOutputType | null
    _max: DesertIngredientsMaxAggregateOutputType | null
  }

  export type DesertIngredientsAvgAggregateOutputType = {
    desertingredientid: number | null
  }

  export type DesertIngredientsSumAggregateOutputType = {
    desertingredientid: number | null
  }

  export type DesertIngredientsMinAggregateOutputType = {
    desertingredientid: number | null
    desertingredientuuid: string | null
    name: string | null
  }

  export type DesertIngredientsMaxAggregateOutputType = {
    desertingredientid: number | null
    desertingredientuuid: string | null
    name: string | null
  }

  export type DesertIngredientsCountAggregateOutputType = {
    desertingredientid: number
    desertingredientuuid: number
    name: number
    _all: number
  }


  export type DesertIngredientsAvgAggregateInputType = {
    desertingredientid?: true
  }

  export type DesertIngredientsSumAggregateInputType = {
    desertingredientid?: true
  }

  export type DesertIngredientsMinAggregateInputType = {
    desertingredientid?: true
    desertingredientuuid?: true
    name?: true
  }

  export type DesertIngredientsMaxAggregateInputType = {
    desertingredientid?: true
    desertingredientuuid?: true
    name?: true
  }

  export type DesertIngredientsCountAggregateInputType = {
    desertingredientid?: true
    desertingredientuuid?: true
    name?: true
    _all?: true
  }

  export type DesertIngredientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DesertIngredients to aggregate.
     */
    where?: DesertIngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesertIngredients to fetch.
     */
    orderBy?: DesertIngredientsOrderByWithRelationInput | DesertIngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DesertIngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesertIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesertIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DesertIngredients
    **/
    _count?: true | DesertIngredientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DesertIngredientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DesertIngredientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DesertIngredientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DesertIngredientsMaxAggregateInputType
  }

  export type GetDesertIngredientsAggregateType<T extends DesertIngredientsAggregateArgs> = {
        [P in keyof T & keyof AggregateDesertIngredients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDesertIngredients[P]>
      : GetScalarType<T[P], AggregateDesertIngredients[P]>
  }




  export type DesertIngredientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DesertIngredientsWhereInput
    orderBy?: DesertIngredientsOrderByWithAggregationInput | DesertIngredientsOrderByWithAggregationInput[]
    by: DesertIngredientsScalarFieldEnum[] | DesertIngredientsScalarFieldEnum
    having?: DesertIngredientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DesertIngredientsCountAggregateInputType | true
    _avg?: DesertIngredientsAvgAggregateInputType
    _sum?: DesertIngredientsSumAggregateInputType
    _min?: DesertIngredientsMinAggregateInputType
    _max?: DesertIngredientsMaxAggregateInputType
  }

  export type DesertIngredientsGroupByOutputType = {
    desertingredientid: number
    desertingredientuuid: string
    name: string
    _count: DesertIngredientsCountAggregateOutputType | null
    _avg: DesertIngredientsAvgAggregateOutputType | null
    _sum: DesertIngredientsSumAggregateOutputType | null
    _min: DesertIngredientsMinAggregateOutputType | null
    _max: DesertIngredientsMaxAggregateOutputType | null
  }

  type GetDesertIngredientsGroupByPayload<T extends DesertIngredientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DesertIngredientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DesertIngredientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DesertIngredientsGroupByOutputType[P]>
            : GetScalarType<T[P], DesertIngredientsGroupByOutputType[P]>
        }
      >
    >


  export type DesertIngredientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    desertingredientid?: boolean
    desertingredientuuid?: boolean
    name?: boolean
    deserts?: boolean | DesertIngredients$desertsArgs<ExtArgs>
    _count?: boolean | DesertIngredientsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["desertIngredients"]>

  export type DesertIngredientsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    desertingredientid?: boolean
    desertingredientuuid?: boolean
    name?: boolean
  }, ExtArgs["result"]["desertIngredients"]>

  export type DesertIngredientsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    desertingredientid?: boolean
    desertingredientuuid?: boolean
    name?: boolean
  }, ExtArgs["result"]["desertIngredients"]>

  export type DesertIngredientsSelectScalar = {
    desertingredientid?: boolean
    desertingredientuuid?: boolean
    name?: boolean
  }

  export type DesertIngredientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"desertingredientid" | "desertingredientuuid" | "name", ExtArgs["result"]["desertIngredients"]>
  export type DesertIngredientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deserts?: boolean | DesertIngredients$desertsArgs<ExtArgs>
    _count?: boolean | DesertIngredientsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DesertIngredientsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DesertIngredientsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DesertIngredientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DesertIngredients"
    objects: {
      deserts: Prisma.$DesertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      desertingredientid: number
      desertingredientuuid: string
      name: string
    }, ExtArgs["result"]["desertIngredients"]>
    composites: {}
  }

  type DesertIngredientsGetPayload<S extends boolean | null | undefined | DesertIngredientsDefaultArgs> = $Result.GetResult<Prisma.$DesertIngredientsPayload, S>

  type DesertIngredientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DesertIngredientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DesertIngredientsCountAggregateInputType | true
    }

  export interface DesertIngredientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DesertIngredients'], meta: { name: 'DesertIngredients' } }
    /**
     * Find zero or one DesertIngredients that matches the filter.
     * @param {DesertIngredientsFindUniqueArgs} args - Arguments to find a DesertIngredients
     * @example
     * // Get one DesertIngredients
     * const desertIngredients = await prisma.desertIngredients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DesertIngredientsFindUniqueArgs>(args: SelectSubset<T, DesertIngredientsFindUniqueArgs<ExtArgs>>): Prisma__DesertIngredientsClient<$Result.GetResult<Prisma.$DesertIngredientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DesertIngredients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DesertIngredientsFindUniqueOrThrowArgs} args - Arguments to find a DesertIngredients
     * @example
     * // Get one DesertIngredients
     * const desertIngredients = await prisma.desertIngredients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DesertIngredientsFindUniqueOrThrowArgs>(args: SelectSubset<T, DesertIngredientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DesertIngredientsClient<$Result.GetResult<Prisma.$DesertIngredientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DesertIngredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesertIngredientsFindFirstArgs} args - Arguments to find a DesertIngredients
     * @example
     * // Get one DesertIngredients
     * const desertIngredients = await prisma.desertIngredients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DesertIngredientsFindFirstArgs>(args?: SelectSubset<T, DesertIngredientsFindFirstArgs<ExtArgs>>): Prisma__DesertIngredientsClient<$Result.GetResult<Prisma.$DesertIngredientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DesertIngredients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesertIngredientsFindFirstOrThrowArgs} args - Arguments to find a DesertIngredients
     * @example
     * // Get one DesertIngredients
     * const desertIngredients = await prisma.desertIngredients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DesertIngredientsFindFirstOrThrowArgs>(args?: SelectSubset<T, DesertIngredientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DesertIngredientsClient<$Result.GetResult<Prisma.$DesertIngredientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DesertIngredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesertIngredientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DesertIngredients
     * const desertIngredients = await prisma.desertIngredients.findMany()
     * 
     * // Get first 10 DesertIngredients
     * const desertIngredients = await prisma.desertIngredients.findMany({ take: 10 })
     * 
     * // Only select the `desertingredientid`
     * const desertIngredientsWithDesertingredientidOnly = await prisma.desertIngredients.findMany({ select: { desertingredientid: true } })
     * 
     */
    findMany<T extends DesertIngredientsFindManyArgs>(args?: SelectSubset<T, DesertIngredientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesertIngredientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DesertIngredients.
     * @param {DesertIngredientsCreateArgs} args - Arguments to create a DesertIngredients.
     * @example
     * // Create one DesertIngredients
     * const DesertIngredients = await prisma.desertIngredients.create({
     *   data: {
     *     // ... data to create a DesertIngredients
     *   }
     * })
     * 
     */
    create<T extends DesertIngredientsCreateArgs>(args: SelectSubset<T, DesertIngredientsCreateArgs<ExtArgs>>): Prisma__DesertIngredientsClient<$Result.GetResult<Prisma.$DesertIngredientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DesertIngredients.
     * @param {DesertIngredientsCreateManyArgs} args - Arguments to create many DesertIngredients.
     * @example
     * // Create many DesertIngredients
     * const desertIngredients = await prisma.desertIngredients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DesertIngredientsCreateManyArgs>(args?: SelectSubset<T, DesertIngredientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DesertIngredients and returns the data saved in the database.
     * @param {DesertIngredientsCreateManyAndReturnArgs} args - Arguments to create many DesertIngredients.
     * @example
     * // Create many DesertIngredients
     * const desertIngredients = await prisma.desertIngredients.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DesertIngredients and only return the `desertingredientid`
     * const desertIngredientsWithDesertingredientidOnly = await prisma.desertIngredients.createManyAndReturn({
     *   select: { desertingredientid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DesertIngredientsCreateManyAndReturnArgs>(args?: SelectSubset<T, DesertIngredientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesertIngredientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DesertIngredients.
     * @param {DesertIngredientsDeleteArgs} args - Arguments to delete one DesertIngredients.
     * @example
     * // Delete one DesertIngredients
     * const DesertIngredients = await prisma.desertIngredients.delete({
     *   where: {
     *     // ... filter to delete one DesertIngredients
     *   }
     * })
     * 
     */
    delete<T extends DesertIngredientsDeleteArgs>(args: SelectSubset<T, DesertIngredientsDeleteArgs<ExtArgs>>): Prisma__DesertIngredientsClient<$Result.GetResult<Prisma.$DesertIngredientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DesertIngredients.
     * @param {DesertIngredientsUpdateArgs} args - Arguments to update one DesertIngredients.
     * @example
     * // Update one DesertIngredients
     * const desertIngredients = await prisma.desertIngredients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DesertIngredientsUpdateArgs>(args: SelectSubset<T, DesertIngredientsUpdateArgs<ExtArgs>>): Prisma__DesertIngredientsClient<$Result.GetResult<Prisma.$DesertIngredientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DesertIngredients.
     * @param {DesertIngredientsDeleteManyArgs} args - Arguments to filter DesertIngredients to delete.
     * @example
     * // Delete a few DesertIngredients
     * const { count } = await prisma.desertIngredients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DesertIngredientsDeleteManyArgs>(args?: SelectSubset<T, DesertIngredientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DesertIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesertIngredientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DesertIngredients
     * const desertIngredients = await prisma.desertIngredients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DesertIngredientsUpdateManyArgs>(args: SelectSubset<T, DesertIngredientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DesertIngredients and returns the data updated in the database.
     * @param {DesertIngredientsUpdateManyAndReturnArgs} args - Arguments to update many DesertIngredients.
     * @example
     * // Update many DesertIngredients
     * const desertIngredients = await prisma.desertIngredients.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DesertIngredients and only return the `desertingredientid`
     * const desertIngredientsWithDesertingredientidOnly = await prisma.desertIngredients.updateManyAndReturn({
     *   select: { desertingredientid: true },
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
    updateManyAndReturn<T extends DesertIngredientsUpdateManyAndReturnArgs>(args: SelectSubset<T, DesertIngredientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesertIngredientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DesertIngredients.
     * @param {DesertIngredientsUpsertArgs} args - Arguments to update or create a DesertIngredients.
     * @example
     * // Update or create a DesertIngredients
     * const desertIngredients = await prisma.desertIngredients.upsert({
     *   create: {
     *     // ... data to create a DesertIngredients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DesertIngredients we want to update
     *   }
     * })
     */
    upsert<T extends DesertIngredientsUpsertArgs>(args: SelectSubset<T, DesertIngredientsUpsertArgs<ExtArgs>>): Prisma__DesertIngredientsClient<$Result.GetResult<Prisma.$DesertIngredientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DesertIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesertIngredientsCountArgs} args - Arguments to filter DesertIngredients to count.
     * @example
     * // Count the number of DesertIngredients
     * const count = await prisma.desertIngredients.count({
     *   where: {
     *     // ... the filter for the DesertIngredients we want to count
     *   }
     * })
    **/
    count<T extends DesertIngredientsCountArgs>(
      args?: Subset<T, DesertIngredientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DesertIngredientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DesertIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesertIngredientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DesertIngredientsAggregateArgs>(args: Subset<T, DesertIngredientsAggregateArgs>): Prisma.PrismaPromise<GetDesertIngredientsAggregateType<T>>

    /**
     * Group by DesertIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesertIngredientsGroupByArgs} args - Group by arguments.
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
      T extends DesertIngredientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DesertIngredientsGroupByArgs['orderBy'] }
        : { orderBy?: DesertIngredientsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DesertIngredientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDesertIngredientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DesertIngredients model
   */
  readonly fields: DesertIngredientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DesertIngredients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DesertIngredientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deserts<T extends DesertIngredients$desertsArgs<ExtArgs> = {}>(args?: Subset<T, DesertIngredients$desertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DesertIngredients model
   */
  interface DesertIngredientsFieldRefs {
    readonly desertingredientid: FieldRef<"DesertIngredients", 'Int'>
    readonly desertingredientuuid: FieldRef<"DesertIngredients", 'String'>
    readonly name: FieldRef<"DesertIngredients", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DesertIngredients findUnique
   */
  export type DesertIngredientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesertIngredients
     */
    select?: DesertIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesertIngredients
     */
    omit?: DesertIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesertIngredientsInclude<ExtArgs> | null
    /**
     * Filter, which DesertIngredients to fetch.
     */
    where: DesertIngredientsWhereUniqueInput
  }

  /**
   * DesertIngredients findUniqueOrThrow
   */
  export type DesertIngredientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesertIngredients
     */
    select?: DesertIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesertIngredients
     */
    omit?: DesertIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesertIngredientsInclude<ExtArgs> | null
    /**
     * Filter, which DesertIngredients to fetch.
     */
    where: DesertIngredientsWhereUniqueInput
  }

  /**
   * DesertIngredients findFirst
   */
  export type DesertIngredientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesertIngredients
     */
    select?: DesertIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesertIngredients
     */
    omit?: DesertIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesertIngredientsInclude<ExtArgs> | null
    /**
     * Filter, which DesertIngredients to fetch.
     */
    where?: DesertIngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesertIngredients to fetch.
     */
    orderBy?: DesertIngredientsOrderByWithRelationInput | DesertIngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DesertIngredients.
     */
    cursor?: DesertIngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesertIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesertIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DesertIngredients.
     */
    distinct?: DesertIngredientsScalarFieldEnum | DesertIngredientsScalarFieldEnum[]
  }

  /**
   * DesertIngredients findFirstOrThrow
   */
  export type DesertIngredientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesertIngredients
     */
    select?: DesertIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesertIngredients
     */
    omit?: DesertIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesertIngredientsInclude<ExtArgs> | null
    /**
     * Filter, which DesertIngredients to fetch.
     */
    where?: DesertIngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesertIngredients to fetch.
     */
    orderBy?: DesertIngredientsOrderByWithRelationInput | DesertIngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DesertIngredients.
     */
    cursor?: DesertIngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesertIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesertIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DesertIngredients.
     */
    distinct?: DesertIngredientsScalarFieldEnum | DesertIngredientsScalarFieldEnum[]
  }

  /**
   * DesertIngredients findMany
   */
  export type DesertIngredientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesertIngredients
     */
    select?: DesertIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesertIngredients
     */
    omit?: DesertIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesertIngredientsInclude<ExtArgs> | null
    /**
     * Filter, which DesertIngredients to fetch.
     */
    where?: DesertIngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesertIngredients to fetch.
     */
    orderBy?: DesertIngredientsOrderByWithRelationInput | DesertIngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DesertIngredients.
     */
    cursor?: DesertIngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesertIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesertIngredients.
     */
    skip?: number
    distinct?: DesertIngredientsScalarFieldEnum | DesertIngredientsScalarFieldEnum[]
  }

  /**
   * DesertIngredients create
   */
  export type DesertIngredientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesertIngredients
     */
    select?: DesertIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesertIngredients
     */
    omit?: DesertIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesertIngredientsInclude<ExtArgs> | null
    /**
     * The data needed to create a DesertIngredients.
     */
    data: XOR<DesertIngredientsCreateInput, DesertIngredientsUncheckedCreateInput>
  }

  /**
   * DesertIngredients createMany
   */
  export type DesertIngredientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DesertIngredients.
     */
    data: DesertIngredientsCreateManyInput | DesertIngredientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DesertIngredients createManyAndReturn
   */
  export type DesertIngredientsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesertIngredients
     */
    select?: DesertIngredientsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DesertIngredients
     */
    omit?: DesertIngredientsOmit<ExtArgs> | null
    /**
     * The data used to create many DesertIngredients.
     */
    data: DesertIngredientsCreateManyInput | DesertIngredientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DesertIngredients update
   */
  export type DesertIngredientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesertIngredients
     */
    select?: DesertIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesertIngredients
     */
    omit?: DesertIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesertIngredientsInclude<ExtArgs> | null
    /**
     * The data needed to update a DesertIngredients.
     */
    data: XOR<DesertIngredientsUpdateInput, DesertIngredientsUncheckedUpdateInput>
    /**
     * Choose, which DesertIngredients to update.
     */
    where: DesertIngredientsWhereUniqueInput
  }

  /**
   * DesertIngredients updateMany
   */
  export type DesertIngredientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DesertIngredients.
     */
    data: XOR<DesertIngredientsUpdateManyMutationInput, DesertIngredientsUncheckedUpdateManyInput>
    /**
     * Filter which DesertIngredients to update
     */
    where?: DesertIngredientsWhereInput
    /**
     * Limit how many DesertIngredients to update.
     */
    limit?: number
  }

  /**
   * DesertIngredients updateManyAndReturn
   */
  export type DesertIngredientsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesertIngredients
     */
    select?: DesertIngredientsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DesertIngredients
     */
    omit?: DesertIngredientsOmit<ExtArgs> | null
    /**
     * The data used to update DesertIngredients.
     */
    data: XOR<DesertIngredientsUpdateManyMutationInput, DesertIngredientsUncheckedUpdateManyInput>
    /**
     * Filter which DesertIngredients to update
     */
    where?: DesertIngredientsWhereInput
    /**
     * Limit how many DesertIngredients to update.
     */
    limit?: number
  }

  /**
   * DesertIngredients upsert
   */
  export type DesertIngredientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesertIngredients
     */
    select?: DesertIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesertIngredients
     */
    omit?: DesertIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesertIngredientsInclude<ExtArgs> | null
    /**
     * The filter to search for the DesertIngredients to update in case it exists.
     */
    where: DesertIngredientsWhereUniqueInput
    /**
     * In case the DesertIngredients found by the `where` argument doesn't exist, create a new DesertIngredients with this data.
     */
    create: XOR<DesertIngredientsCreateInput, DesertIngredientsUncheckedCreateInput>
    /**
     * In case the DesertIngredients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DesertIngredientsUpdateInput, DesertIngredientsUncheckedUpdateInput>
  }

  /**
   * DesertIngredients delete
   */
  export type DesertIngredientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesertIngredients
     */
    select?: DesertIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesertIngredients
     */
    omit?: DesertIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesertIngredientsInclude<ExtArgs> | null
    /**
     * Filter which DesertIngredients to delete.
     */
    where: DesertIngredientsWhereUniqueInput
  }

  /**
   * DesertIngredients deleteMany
   */
  export type DesertIngredientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DesertIngredients to delete
     */
    where?: DesertIngredientsWhereInput
    /**
     * Limit how many DesertIngredients to delete.
     */
    limit?: number
  }

  /**
   * DesertIngredients.deserts
   */
  export type DesertIngredients$desertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desert
     */
    select?: DesertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Desert
     */
    omit?: DesertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesertInclude<ExtArgs> | null
    where?: DesertWhereInput
    orderBy?: DesertOrderByWithRelationInput | DesertOrderByWithRelationInput[]
    cursor?: DesertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DesertScalarFieldEnum | DesertScalarFieldEnum[]
  }

  /**
   * DesertIngredients without action
   */
  export type DesertIngredientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesertIngredients
     */
    select?: DesertIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesertIngredients
     */
    omit?: DesertIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesertIngredientsInclude<ExtArgs> | null
  }


  /**
   * Model PizzaIngredient
   */

  export type AggregatePizzaIngredient = {
    _count: PizzaIngredientCountAggregateOutputType | null
    _avg: PizzaIngredientAvgAggregateOutputType | null
    _sum: PizzaIngredientSumAggregateOutputType | null
    _min: PizzaIngredientMinAggregateOutputType | null
    _max: PizzaIngredientMaxAggregateOutputType | null
  }

  export type PizzaIngredientAvgAggregateOutputType = {
    ingredientid: number | null
  }

  export type PizzaIngredientSumAggregateOutputType = {
    ingredientid: number | null
  }

  export type PizzaIngredientMinAggregateOutputType = {
    ingredientid: number | null
    ingredientuuid: string | null
    name: string | null
  }

  export type PizzaIngredientMaxAggregateOutputType = {
    ingredientid: number | null
    ingredientuuid: string | null
    name: string | null
  }

  export type PizzaIngredientCountAggregateOutputType = {
    ingredientid: number
    ingredientuuid: number
    name: number
    _all: number
  }


  export type PizzaIngredientAvgAggregateInputType = {
    ingredientid?: true
  }

  export type PizzaIngredientSumAggregateInputType = {
    ingredientid?: true
  }

  export type PizzaIngredientMinAggregateInputType = {
    ingredientid?: true
    ingredientuuid?: true
    name?: true
  }

  export type PizzaIngredientMaxAggregateInputType = {
    ingredientid?: true
    ingredientuuid?: true
    name?: true
  }

  export type PizzaIngredientCountAggregateInputType = {
    ingredientid?: true
    ingredientuuid?: true
    name?: true
    _all?: true
  }

  export type PizzaIngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PizzaIngredient to aggregate.
     */
    where?: PizzaIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PizzaIngredients to fetch.
     */
    orderBy?: PizzaIngredientOrderByWithRelationInput | PizzaIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PizzaIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PizzaIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PizzaIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PizzaIngredients
    **/
    _count?: true | PizzaIngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PizzaIngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PizzaIngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PizzaIngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PizzaIngredientMaxAggregateInputType
  }

  export type GetPizzaIngredientAggregateType<T extends PizzaIngredientAggregateArgs> = {
        [P in keyof T & keyof AggregatePizzaIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePizzaIngredient[P]>
      : GetScalarType<T[P], AggregatePizzaIngredient[P]>
  }




  export type PizzaIngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PizzaIngredientWhereInput
    orderBy?: PizzaIngredientOrderByWithAggregationInput | PizzaIngredientOrderByWithAggregationInput[]
    by: PizzaIngredientScalarFieldEnum[] | PizzaIngredientScalarFieldEnum
    having?: PizzaIngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PizzaIngredientCountAggregateInputType | true
    _avg?: PizzaIngredientAvgAggregateInputType
    _sum?: PizzaIngredientSumAggregateInputType
    _min?: PizzaIngredientMinAggregateInputType
    _max?: PizzaIngredientMaxAggregateInputType
  }

  export type PizzaIngredientGroupByOutputType = {
    ingredientid: number
    ingredientuuid: string
    name: string
    _count: PizzaIngredientCountAggregateOutputType | null
    _avg: PizzaIngredientAvgAggregateOutputType | null
    _sum: PizzaIngredientSumAggregateOutputType | null
    _min: PizzaIngredientMinAggregateOutputType | null
    _max: PizzaIngredientMaxAggregateOutputType | null
  }

  type GetPizzaIngredientGroupByPayload<T extends PizzaIngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PizzaIngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PizzaIngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PizzaIngredientGroupByOutputType[P]>
            : GetScalarType<T[P], PizzaIngredientGroupByOutputType[P]>
        }
      >
    >


  export type PizzaIngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ingredientid?: boolean
    ingredientuuid?: boolean
    name?: boolean
    pizzas?: boolean | PizzaIngredient$pizzasArgs<ExtArgs>
    _count?: boolean | PizzaIngredientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pizzaIngredient"]>

  export type PizzaIngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ingredientid?: boolean
    ingredientuuid?: boolean
    name?: boolean
  }, ExtArgs["result"]["pizzaIngredient"]>

  export type PizzaIngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ingredientid?: boolean
    ingredientuuid?: boolean
    name?: boolean
  }, ExtArgs["result"]["pizzaIngredient"]>

  export type PizzaIngredientSelectScalar = {
    ingredientid?: boolean
    ingredientuuid?: boolean
    name?: boolean
  }

  export type PizzaIngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ingredientid" | "ingredientuuid" | "name", ExtArgs["result"]["pizzaIngredient"]>
  export type PizzaIngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pizzas?: boolean | PizzaIngredient$pizzasArgs<ExtArgs>
    _count?: boolean | PizzaIngredientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PizzaIngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PizzaIngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PizzaIngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PizzaIngredient"
    objects: {
      pizzas: Prisma.$PizzaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ingredientid: number
      ingredientuuid: string
      name: string
    }, ExtArgs["result"]["pizzaIngredient"]>
    composites: {}
  }

  type PizzaIngredientGetPayload<S extends boolean | null | undefined | PizzaIngredientDefaultArgs> = $Result.GetResult<Prisma.$PizzaIngredientPayload, S>

  type PizzaIngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PizzaIngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PizzaIngredientCountAggregateInputType | true
    }

  export interface PizzaIngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PizzaIngredient'], meta: { name: 'PizzaIngredient' } }
    /**
     * Find zero or one PizzaIngredient that matches the filter.
     * @param {PizzaIngredientFindUniqueArgs} args - Arguments to find a PizzaIngredient
     * @example
     * // Get one PizzaIngredient
     * const pizzaIngredient = await prisma.pizzaIngredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PizzaIngredientFindUniqueArgs>(args: SelectSubset<T, PizzaIngredientFindUniqueArgs<ExtArgs>>): Prisma__PizzaIngredientClient<$Result.GetResult<Prisma.$PizzaIngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PizzaIngredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PizzaIngredientFindUniqueOrThrowArgs} args - Arguments to find a PizzaIngredient
     * @example
     * // Get one PizzaIngredient
     * const pizzaIngredient = await prisma.pizzaIngredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PizzaIngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, PizzaIngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PizzaIngredientClient<$Result.GetResult<Prisma.$PizzaIngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PizzaIngredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaIngredientFindFirstArgs} args - Arguments to find a PizzaIngredient
     * @example
     * // Get one PizzaIngredient
     * const pizzaIngredient = await prisma.pizzaIngredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PizzaIngredientFindFirstArgs>(args?: SelectSubset<T, PizzaIngredientFindFirstArgs<ExtArgs>>): Prisma__PizzaIngredientClient<$Result.GetResult<Prisma.$PizzaIngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PizzaIngredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaIngredientFindFirstOrThrowArgs} args - Arguments to find a PizzaIngredient
     * @example
     * // Get one PizzaIngredient
     * const pizzaIngredient = await prisma.pizzaIngredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PizzaIngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, PizzaIngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PizzaIngredientClient<$Result.GetResult<Prisma.$PizzaIngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PizzaIngredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaIngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PizzaIngredients
     * const pizzaIngredients = await prisma.pizzaIngredient.findMany()
     * 
     * // Get first 10 PizzaIngredients
     * const pizzaIngredients = await prisma.pizzaIngredient.findMany({ take: 10 })
     * 
     * // Only select the `ingredientid`
     * const pizzaIngredientWithIngredientidOnly = await prisma.pizzaIngredient.findMany({ select: { ingredientid: true } })
     * 
     */
    findMany<T extends PizzaIngredientFindManyArgs>(args?: SelectSubset<T, PizzaIngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PizzaIngredient.
     * @param {PizzaIngredientCreateArgs} args - Arguments to create a PizzaIngredient.
     * @example
     * // Create one PizzaIngredient
     * const PizzaIngredient = await prisma.pizzaIngredient.create({
     *   data: {
     *     // ... data to create a PizzaIngredient
     *   }
     * })
     * 
     */
    create<T extends PizzaIngredientCreateArgs>(args: SelectSubset<T, PizzaIngredientCreateArgs<ExtArgs>>): Prisma__PizzaIngredientClient<$Result.GetResult<Prisma.$PizzaIngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PizzaIngredients.
     * @param {PizzaIngredientCreateManyArgs} args - Arguments to create many PizzaIngredients.
     * @example
     * // Create many PizzaIngredients
     * const pizzaIngredient = await prisma.pizzaIngredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PizzaIngredientCreateManyArgs>(args?: SelectSubset<T, PizzaIngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PizzaIngredients and returns the data saved in the database.
     * @param {PizzaIngredientCreateManyAndReturnArgs} args - Arguments to create many PizzaIngredients.
     * @example
     * // Create many PizzaIngredients
     * const pizzaIngredient = await prisma.pizzaIngredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PizzaIngredients and only return the `ingredientid`
     * const pizzaIngredientWithIngredientidOnly = await prisma.pizzaIngredient.createManyAndReturn({
     *   select: { ingredientid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PizzaIngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, PizzaIngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaIngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PizzaIngredient.
     * @param {PizzaIngredientDeleteArgs} args - Arguments to delete one PizzaIngredient.
     * @example
     * // Delete one PizzaIngredient
     * const PizzaIngredient = await prisma.pizzaIngredient.delete({
     *   where: {
     *     // ... filter to delete one PizzaIngredient
     *   }
     * })
     * 
     */
    delete<T extends PizzaIngredientDeleteArgs>(args: SelectSubset<T, PizzaIngredientDeleteArgs<ExtArgs>>): Prisma__PizzaIngredientClient<$Result.GetResult<Prisma.$PizzaIngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PizzaIngredient.
     * @param {PizzaIngredientUpdateArgs} args - Arguments to update one PizzaIngredient.
     * @example
     * // Update one PizzaIngredient
     * const pizzaIngredient = await prisma.pizzaIngredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PizzaIngredientUpdateArgs>(args: SelectSubset<T, PizzaIngredientUpdateArgs<ExtArgs>>): Prisma__PizzaIngredientClient<$Result.GetResult<Prisma.$PizzaIngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PizzaIngredients.
     * @param {PizzaIngredientDeleteManyArgs} args - Arguments to filter PizzaIngredients to delete.
     * @example
     * // Delete a few PizzaIngredients
     * const { count } = await prisma.pizzaIngredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PizzaIngredientDeleteManyArgs>(args?: SelectSubset<T, PizzaIngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PizzaIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaIngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PizzaIngredients
     * const pizzaIngredient = await prisma.pizzaIngredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PizzaIngredientUpdateManyArgs>(args: SelectSubset<T, PizzaIngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PizzaIngredients and returns the data updated in the database.
     * @param {PizzaIngredientUpdateManyAndReturnArgs} args - Arguments to update many PizzaIngredients.
     * @example
     * // Update many PizzaIngredients
     * const pizzaIngredient = await prisma.pizzaIngredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PizzaIngredients and only return the `ingredientid`
     * const pizzaIngredientWithIngredientidOnly = await prisma.pizzaIngredient.updateManyAndReturn({
     *   select: { ingredientid: true },
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
    updateManyAndReturn<T extends PizzaIngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, PizzaIngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaIngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PizzaIngredient.
     * @param {PizzaIngredientUpsertArgs} args - Arguments to update or create a PizzaIngredient.
     * @example
     * // Update or create a PizzaIngredient
     * const pizzaIngredient = await prisma.pizzaIngredient.upsert({
     *   create: {
     *     // ... data to create a PizzaIngredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PizzaIngredient we want to update
     *   }
     * })
     */
    upsert<T extends PizzaIngredientUpsertArgs>(args: SelectSubset<T, PizzaIngredientUpsertArgs<ExtArgs>>): Prisma__PizzaIngredientClient<$Result.GetResult<Prisma.$PizzaIngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PizzaIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaIngredientCountArgs} args - Arguments to filter PizzaIngredients to count.
     * @example
     * // Count the number of PizzaIngredients
     * const count = await prisma.pizzaIngredient.count({
     *   where: {
     *     // ... the filter for the PizzaIngredients we want to count
     *   }
     * })
    **/
    count<T extends PizzaIngredientCountArgs>(
      args?: Subset<T, PizzaIngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PizzaIngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PizzaIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaIngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PizzaIngredientAggregateArgs>(args: Subset<T, PizzaIngredientAggregateArgs>): Prisma.PrismaPromise<GetPizzaIngredientAggregateType<T>>

    /**
     * Group by PizzaIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaIngredientGroupByArgs} args - Group by arguments.
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
      T extends PizzaIngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PizzaIngredientGroupByArgs['orderBy'] }
        : { orderBy?: PizzaIngredientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PizzaIngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPizzaIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PizzaIngredient model
   */
  readonly fields: PizzaIngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PizzaIngredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PizzaIngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pizzas<T extends PizzaIngredient$pizzasArgs<ExtArgs> = {}>(args?: Subset<T, PizzaIngredient$pizzasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PizzaIngredient model
   */
  interface PizzaIngredientFieldRefs {
    readonly ingredientid: FieldRef<"PizzaIngredient", 'Int'>
    readonly ingredientuuid: FieldRef<"PizzaIngredient", 'String'>
    readonly name: FieldRef<"PizzaIngredient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PizzaIngredient findUnique
   */
  export type PizzaIngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaIngredient
     */
    select?: PizzaIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaIngredient
     */
    omit?: PizzaIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaIngredientInclude<ExtArgs> | null
    /**
     * Filter, which PizzaIngredient to fetch.
     */
    where: PizzaIngredientWhereUniqueInput
  }

  /**
   * PizzaIngredient findUniqueOrThrow
   */
  export type PizzaIngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaIngredient
     */
    select?: PizzaIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaIngredient
     */
    omit?: PizzaIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaIngredientInclude<ExtArgs> | null
    /**
     * Filter, which PizzaIngredient to fetch.
     */
    where: PizzaIngredientWhereUniqueInput
  }

  /**
   * PizzaIngredient findFirst
   */
  export type PizzaIngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaIngredient
     */
    select?: PizzaIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaIngredient
     */
    omit?: PizzaIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaIngredientInclude<ExtArgs> | null
    /**
     * Filter, which PizzaIngredient to fetch.
     */
    where?: PizzaIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PizzaIngredients to fetch.
     */
    orderBy?: PizzaIngredientOrderByWithRelationInput | PizzaIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PizzaIngredients.
     */
    cursor?: PizzaIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PizzaIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PizzaIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PizzaIngredients.
     */
    distinct?: PizzaIngredientScalarFieldEnum | PizzaIngredientScalarFieldEnum[]
  }

  /**
   * PizzaIngredient findFirstOrThrow
   */
  export type PizzaIngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaIngredient
     */
    select?: PizzaIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaIngredient
     */
    omit?: PizzaIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaIngredientInclude<ExtArgs> | null
    /**
     * Filter, which PizzaIngredient to fetch.
     */
    where?: PizzaIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PizzaIngredients to fetch.
     */
    orderBy?: PizzaIngredientOrderByWithRelationInput | PizzaIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PizzaIngredients.
     */
    cursor?: PizzaIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PizzaIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PizzaIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PizzaIngredients.
     */
    distinct?: PizzaIngredientScalarFieldEnum | PizzaIngredientScalarFieldEnum[]
  }

  /**
   * PizzaIngredient findMany
   */
  export type PizzaIngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaIngredient
     */
    select?: PizzaIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaIngredient
     */
    omit?: PizzaIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaIngredientInclude<ExtArgs> | null
    /**
     * Filter, which PizzaIngredients to fetch.
     */
    where?: PizzaIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PizzaIngredients to fetch.
     */
    orderBy?: PizzaIngredientOrderByWithRelationInput | PizzaIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PizzaIngredients.
     */
    cursor?: PizzaIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PizzaIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PizzaIngredients.
     */
    skip?: number
    distinct?: PizzaIngredientScalarFieldEnum | PizzaIngredientScalarFieldEnum[]
  }

  /**
   * PizzaIngredient create
   */
  export type PizzaIngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaIngredient
     */
    select?: PizzaIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaIngredient
     */
    omit?: PizzaIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaIngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a PizzaIngredient.
     */
    data: XOR<PizzaIngredientCreateInput, PizzaIngredientUncheckedCreateInput>
  }

  /**
   * PizzaIngredient createMany
   */
  export type PizzaIngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PizzaIngredients.
     */
    data: PizzaIngredientCreateManyInput | PizzaIngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PizzaIngredient createManyAndReturn
   */
  export type PizzaIngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaIngredient
     */
    select?: PizzaIngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaIngredient
     */
    omit?: PizzaIngredientOmit<ExtArgs> | null
    /**
     * The data used to create many PizzaIngredients.
     */
    data: PizzaIngredientCreateManyInput | PizzaIngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PizzaIngredient update
   */
  export type PizzaIngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaIngredient
     */
    select?: PizzaIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaIngredient
     */
    omit?: PizzaIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaIngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a PizzaIngredient.
     */
    data: XOR<PizzaIngredientUpdateInput, PizzaIngredientUncheckedUpdateInput>
    /**
     * Choose, which PizzaIngredient to update.
     */
    where: PizzaIngredientWhereUniqueInput
  }

  /**
   * PizzaIngredient updateMany
   */
  export type PizzaIngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PizzaIngredients.
     */
    data: XOR<PizzaIngredientUpdateManyMutationInput, PizzaIngredientUncheckedUpdateManyInput>
    /**
     * Filter which PizzaIngredients to update
     */
    where?: PizzaIngredientWhereInput
    /**
     * Limit how many PizzaIngredients to update.
     */
    limit?: number
  }

  /**
   * PizzaIngredient updateManyAndReturn
   */
  export type PizzaIngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaIngredient
     */
    select?: PizzaIngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaIngredient
     */
    omit?: PizzaIngredientOmit<ExtArgs> | null
    /**
     * The data used to update PizzaIngredients.
     */
    data: XOR<PizzaIngredientUpdateManyMutationInput, PizzaIngredientUncheckedUpdateManyInput>
    /**
     * Filter which PizzaIngredients to update
     */
    where?: PizzaIngredientWhereInput
    /**
     * Limit how many PizzaIngredients to update.
     */
    limit?: number
  }

  /**
   * PizzaIngredient upsert
   */
  export type PizzaIngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaIngredient
     */
    select?: PizzaIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaIngredient
     */
    omit?: PizzaIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaIngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the PizzaIngredient to update in case it exists.
     */
    where: PizzaIngredientWhereUniqueInput
    /**
     * In case the PizzaIngredient found by the `where` argument doesn't exist, create a new PizzaIngredient with this data.
     */
    create: XOR<PizzaIngredientCreateInput, PizzaIngredientUncheckedCreateInput>
    /**
     * In case the PizzaIngredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PizzaIngredientUpdateInput, PizzaIngredientUncheckedUpdateInput>
  }

  /**
   * PizzaIngredient delete
   */
  export type PizzaIngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaIngredient
     */
    select?: PizzaIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaIngredient
     */
    omit?: PizzaIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaIngredientInclude<ExtArgs> | null
    /**
     * Filter which PizzaIngredient to delete.
     */
    where: PizzaIngredientWhereUniqueInput
  }

  /**
   * PizzaIngredient deleteMany
   */
  export type PizzaIngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PizzaIngredients to delete
     */
    where?: PizzaIngredientWhereInput
    /**
     * Limit how many PizzaIngredients to delete.
     */
    limit?: number
  }

  /**
   * PizzaIngredient.pizzas
   */
  export type PizzaIngredient$pizzasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    where?: PizzaWhereInput
    orderBy?: PizzaOrderByWithRelationInput | PizzaOrderByWithRelationInput[]
    cursor?: PizzaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PizzaScalarFieldEnum | PizzaScalarFieldEnum[]
  }

  /**
   * PizzaIngredient without action
   */
  export type PizzaIngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaIngredient
     */
    select?: PizzaIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaIngredient
     */
    omit?: PizzaIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaIngredientInclude<ExtArgs> | null
  }


  /**
   * Model Refreshment
   */

  export type AggregateRefreshment = {
    _count: RefreshmentCountAggregateOutputType | null
    _avg: RefreshmentAvgAggregateOutputType | null
    _sum: RefreshmentSumAggregateOutputType | null
    _min: RefreshmentMinAggregateOutputType | null
    _max: RefreshmentMaxAggregateOutputType | null
  }

  export type RefreshmentAvgAggregateOutputType = {
    refreshmentid: number | null
    price: number | null
  }

  export type RefreshmentSumAggregateOutputType = {
    refreshmentid: number | null
    price: number | null
  }

  export type RefreshmentMinAggregateOutputType = {
    refreshmentid: number | null
    refreshmentuuid: string | null
    name: string | null
    price: number | null
    size: string | null
  }

  export type RefreshmentMaxAggregateOutputType = {
    refreshmentid: number | null
    refreshmentuuid: string | null
    name: string | null
    price: number | null
    size: string | null
  }

  export type RefreshmentCountAggregateOutputType = {
    refreshmentid: number
    refreshmentuuid: number
    name: number
    price: number
    size: number
    _all: number
  }


  export type RefreshmentAvgAggregateInputType = {
    refreshmentid?: true
    price?: true
  }

  export type RefreshmentSumAggregateInputType = {
    refreshmentid?: true
    price?: true
  }

  export type RefreshmentMinAggregateInputType = {
    refreshmentid?: true
    refreshmentuuid?: true
    name?: true
    price?: true
    size?: true
  }

  export type RefreshmentMaxAggregateInputType = {
    refreshmentid?: true
    refreshmentuuid?: true
    name?: true
    price?: true
    size?: true
  }

  export type RefreshmentCountAggregateInputType = {
    refreshmentid?: true
    refreshmentuuid?: true
    name?: true
    price?: true
    size?: true
    _all?: true
  }

  export type RefreshmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Refreshment to aggregate.
     */
    where?: RefreshmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refreshments to fetch.
     */
    orderBy?: RefreshmentOrderByWithRelationInput | RefreshmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refreshments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refreshments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Refreshments
    **/
    _count?: true | RefreshmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefreshmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefreshmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshmentMaxAggregateInputType
  }

  export type GetRefreshmentAggregateType<T extends RefreshmentAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshment[P]>
      : GetScalarType<T[P], AggregateRefreshment[P]>
  }




  export type RefreshmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshmentWhereInput
    orderBy?: RefreshmentOrderByWithAggregationInput | RefreshmentOrderByWithAggregationInput[]
    by: RefreshmentScalarFieldEnum[] | RefreshmentScalarFieldEnum
    having?: RefreshmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshmentCountAggregateInputType | true
    _avg?: RefreshmentAvgAggregateInputType
    _sum?: RefreshmentSumAggregateInputType
    _min?: RefreshmentMinAggregateInputType
    _max?: RefreshmentMaxAggregateInputType
  }

  export type RefreshmentGroupByOutputType = {
    refreshmentid: number
    refreshmentuuid: string
    name: string
    price: number
    size: string
    _count: RefreshmentCountAggregateOutputType | null
    _avg: RefreshmentAvgAggregateOutputType | null
    _sum: RefreshmentSumAggregateOutputType | null
    _min: RefreshmentMinAggregateOutputType | null
    _max: RefreshmentMaxAggregateOutputType | null
  }

  type GetRefreshmentGroupByPayload<T extends RefreshmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshmentGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshmentGroupByOutputType[P]>
        }
      >
    >


  export type RefreshmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    refreshmentid?: boolean
    refreshmentuuid?: boolean
    name?: boolean
    price?: boolean
    size?: boolean
    orders?: boolean | Refreshment$ordersArgs<ExtArgs>
    _count?: boolean | RefreshmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshment"]>

  export type RefreshmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    refreshmentid?: boolean
    refreshmentuuid?: boolean
    name?: boolean
    price?: boolean
    size?: boolean
  }, ExtArgs["result"]["refreshment"]>

  export type RefreshmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    refreshmentid?: boolean
    refreshmentuuid?: boolean
    name?: boolean
    price?: boolean
    size?: boolean
  }, ExtArgs["result"]["refreshment"]>

  export type RefreshmentSelectScalar = {
    refreshmentid?: boolean
    refreshmentuuid?: boolean
    name?: boolean
    price?: boolean
    size?: boolean
  }

  export type RefreshmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"refreshmentid" | "refreshmentuuid" | "name" | "price" | "size", ExtArgs["result"]["refreshment"]>
  export type RefreshmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Refreshment$ordersArgs<ExtArgs>
    _count?: boolean | RefreshmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RefreshmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RefreshmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RefreshmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Refreshment"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      refreshmentid: number
      refreshmentuuid: string
      name: string
      price: number
      size: string
    }, ExtArgs["result"]["refreshment"]>
    composites: {}
  }

  type RefreshmentGetPayload<S extends boolean | null | undefined | RefreshmentDefaultArgs> = $Result.GetResult<Prisma.$RefreshmentPayload, S>

  type RefreshmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshmentCountAggregateInputType | true
    }

  export interface RefreshmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Refreshment'], meta: { name: 'Refreshment' } }
    /**
     * Find zero or one Refreshment that matches the filter.
     * @param {RefreshmentFindUniqueArgs} args - Arguments to find a Refreshment
     * @example
     * // Get one Refreshment
     * const refreshment = await prisma.refreshment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshmentFindUniqueArgs>(args: SelectSubset<T, RefreshmentFindUniqueArgs<ExtArgs>>): Prisma__RefreshmentClient<$Result.GetResult<Prisma.$RefreshmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Refreshment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshmentFindUniqueOrThrowArgs} args - Arguments to find a Refreshment
     * @example
     * // Get one Refreshment
     * const refreshment = await prisma.refreshment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshmentFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshmentClient<$Result.GetResult<Prisma.$RefreshmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refreshment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshmentFindFirstArgs} args - Arguments to find a Refreshment
     * @example
     * // Get one Refreshment
     * const refreshment = await prisma.refreshment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshmentFindFirstArgs>(args?: SelectSubset<T, RefreshmentFindFirstArgs<ExtArgs>>): Prisma__RefreshmentClient<$Result.GetResult<Prisma.$RefreshmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refreshment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshmentFindFirstOrThrowArgs} args - Arguments to find a Refreshment
     * @example
     * // Get one Refreshment
     * const refreshment = await prisma.refreshment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshmentFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshmentClient<$Result.GetResult<Prisma.$RefreshmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Refreshments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Refreshments
     * const refreshments = await prisma.refreshment.findMany()
     * 
     * // Get first 10 Refreshments
     * const refreshments = await prisma.refreshment.findMany({ take: 10 })
     * 
     * // Only select the `refreshmentid`
     * const refreshmentWithRefreshmentidOnly = await prisma.refreshment.findMany({ select: { refreshmentid: true } })
     * 
     */
    findMany<T extends RefreshmentFindManyArgs>(args?: SelectSubset<T, RefreshmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Refreshment.
     * @param {RefreshmentCreateArgs} args - Arguments to create a Refreshment.
     * @example
     * // Create one Refreshment
     * const Refreshment = await prisma.refreshment.create({
     *   data: {
     *     // ... data to create a Refreshment
     *   }
     * })
     * 
     */
    create<T extends RefreshmentCreateArgs>(args: SelectSubset<T, RefreshmentCreateArgs<ExtArgs>>): Prisma__RefreshmentClient<$Result.GetResult<Prisma.$RefreshmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Refreshments.
     * @param {RefreshmentCreateManyArgs} args - Arguments to create many Refreshments.
     * @example
     * // Create many Refreshments
     * const refreshment = await prisma.refreshment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshmentCreateManyArgs>(args?: SelectSubset<T, RefreshmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Refreshments and returns the data saved in the database.
     * @param {RefreshmentCreateManyAndReturnArgs} args - Arguments to create many Refreshments.
     * @example
     * // Create many Refreshments
     * const refreshment = await prisma.refreshment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Refreshments and only return the `refreshmentid`
     * const refreshmentWithRefreshmentidOnly = await prisma.refreshment.createManyAndReturn({
     *   select: { refreshmentid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshmentCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Refreshment.
     * @param {RefreshmentDeleteArgs} args - Arguments to delete one Refreshment.
     * @example
     * // Delete one Refreshment
     * const Refreshment = await prisma.refreshment.delete({
     *   where: {
     *     // ... filter to delete one Refreshment
     *   }
     * })
     * 
     */
    delete<T extends RefreshmentDeleteArgs>(args: SelectSubset<T, RefreshmentDeleteArgs<ExtArgs>>): Prisma__RefreshmentClient<$Result.GetResult<Prisma.$RefreshmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Refreshment.
     * @param {RefreshmentUpdateArgs} args - Arguments to update one Refreshment.
     * @example
     * // Update one Refreshment
     * const refreshment = await prisma.refreshment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshmentUpdateArgs>(args: SelectSubset<T, RefreshmentUpdateArgs<ExtArgs>>): Prisma__RefreshmentClient<$Result.GetResult<Prisma.$RefreshmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Refreshments.
     * @param {RefreshmentDeleteManyArgs} args - Arguments to filter Refreshments to delete.
     * @example
     * // Delete a few Refreshments
     * const { count } = await prisma.refreshment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshmentDeleteManyArgs>(args?: SelectSubset<T, RefreshmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refreshments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Refreshments
     * const refreshment = await prisma.refreshment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshmentUpdateManyArgs>(args: SelectSubset<T, RefreshmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refreshments and returns the data updated in the database.
     * @param {RefreshmentUpdateManyAndReturnArgs} args - Arguments to update many Refreshments.
     * @example
     * // Update many Refreshments
     * const refreshment = await prisma.refreshment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Refreshments and only return the `refreshmentid`
     * const refreshmentWithRefreshmentidOnly = await prisma.refreshment.updateManyAndReturn({
     *   select: { refreshmentid: true },
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
    updateManyAndReturn<T extends RefreshmentUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Refreshment.
     * @param {RefreshmentUpsertArgs} args - Arguments to update or create a Refreshment.
     * @example
     * // Update or create a Refreshment
     * const refreshment = await prisma.refreshment.upsert({
     *   create: {
     *     // ... data to create a Refreshment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Refreshment we want to update
     *   }
     * })
     */
    upsert<T extends RefreshmentUpsertArgs>(args: SelectSubset<T, RefreshmentUpsertArgs<ExtArgs>>): Prisma__RefreshmentClient<$Result.GetResult<Prisma.$RefreshmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Refreshments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshmentCountArgs} args - Arguments to filter Refreshments to count.
     * @example
     * // Count the number of Refreshments
     * const count = await prisma.refreshment.count({
     *   where: {
     *     // ... the filter for the Refreshments we want to count
     *   }
     * })
    **/
    count<T extends RefreshmentCountArgs>(
      args?: Subset<T, RefreshmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Refreshment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshmentAggregateArgs>(args: Subset<T, RefreshmentAggregateArgs>): Prisma.PrismaPromise<GetRefreshmentAggregateType<T>>

    /**
     * Group by Refreshment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshmentGroupByArgs} args - Group by arguments.
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
      T extends RefreshmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshmentGroupByArgs['orderBy'] }
        : { orderBy?: RefreshmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefreshmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Refreshment model
   */
  readonly fields: RefreshmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Refreshment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Refreshment$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Refreshment$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Refreshment model
   */
  interface RefreshmentFieldRefs {
    readonly refreshmentid: FieldRef<"Refreshment", 'Int'>
    readonly refreshmentuuid: FieldRef<"Refreshment", 'String'>
    readonly name: FieldRef<"Refreshment", 'String'>
    readonly price: FieldRef<"Refreshment", 'Float'>
    readonly size: FieldRef<"Refreshment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Refreshment findUnique
   */
  export type RefreshmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refreshment
     */
    select?: RefreshmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refreshment
     */
    omit?: RefreshmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshmentInclude<ExtArgs> | null
    /**
     * Filter, which Refreshment to fetch.
     */
    where: RefreshmentWhereUniqueInput
  }

  /**
   * Refreshment findUniqueOrThrow
   */
  export type RefreshmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refreshment
     */
    select?: RefreshmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refreshment
     */
    omit?: RefreshmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshmentInclude<ExtArgs> | null
    /**
     * Filter, which Refreshment to fetch.
     */
    where: RefreshmentWhereUniqueInput
  }

  /**
   * Refreshment findFirst
   */
  export type RefreshmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refreshment
     */
    select?: RefreshmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refreshment
     */
    omit?: RefreshmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshmentInclude<ExtArgs> | null
    /**
     * Filter, which Refreshment to fetch.
     */
    where?: RefreshmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refreshments to fetch.
     */
    orderBy?: RefreshmentOrderByWithRelationInput | RefreshmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Refreshments.
     */
    cursor?: RefreshmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refreshments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refreshments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Refreshments.
     */
    distinct?: RefreshmentScalarFieldEnum | RefreshmentScalarFieldEnum[]
  }

  /**
   * Refreshment findFirstOrThrow
   */
  export type RefreshmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refreshment
     */
    select?: RefreshmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refreshment
     */
    omit?: RefreshmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshmentInclude<ExtArgs> | null
    /**
     * Filter, which Refreshment to fetch.
     */
    where?: RefreshmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refreshments to fetch.
     */
    orderBy?: RefreshmentOrderByWithRelationInput | RefreshmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Refreshments.
     */
    cursor?: RefreshmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refreshments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refreshments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Refreshments.
     */
    distinct?: RefreshmentScalarFieldEnum | RefreshmentScalarFieldEnum[]
  }

  /**
   * Refreshment findMany
   */
  export type RefreshmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refreshment
     */
    select?: RefreshmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refreshment
     */
    omit?: RefreshmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshmentInclude<ExtArgs> | null
    /**
     * Filter, which Refreshments to fetch.
     */
    where?: RefreshmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refreshments to fetch.
     */
    orderBy?: RefreshmentOrderByWithRelationInput | RefreshmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Refreshments.
     */
    cursor?: RefreshmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refreshments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refreshments.
     */
    skip?: number
    distinct?: RefreshmentScalarFieldEnum | RefreshmentScalarFieldEnum[]
  }

  /**
   * Refreshment create
   */
  export type RefreshmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refreshment
     */
    select?: RefreshmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refreshment
     */
    omit?: RefreshmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Refreshment.
     */
    data: XOR<RefreshmentCreateInput, RefreshmentUncheckedCreateInput>
  }

  /**
   * Refreshment createMany
   */
  export type RefreshmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Refreshments.
     */
    data: RefreshmentCreateManyInput | RefreshmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Refreshment createManyAndReturn
   */
  export type RefreshmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refreshment
     */
    select?: RefreshmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Refreshment
     */
    omit?: RefreshmentOmit<ExtArgs> | null
    /**
     * The data used to create many Refreshments.
     */
    data: RefreshmentCreateManyInput | RefreshmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Refreshment update
   */
  export type RefreshmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refreshment
     */
    select?: RefreshmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refreshment
     */
    omit?: RefreshmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Refreshment.
     */
    data: XOR<RefreshmentUpdateInput, RefreshmentUncheckedUpdateInput>
    /**
     * Choose, which Refreshment to update.
     */
    where: RefreshmentWhereUniqueInput
  }

  /**
   * Refreshment updateMany
   */
  export type RefreshmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Refreshments.
     */
    data: XOR<RefreshmentUpdateManyMutationInput, RefreshmentUncheckedUpdateManyInput>
    /**
     * Filter which Refreshments to update
     */
    where?: RefreshmentWhereInput
    /**
     * Limit how many Refreshments to update.
     */
    limit?: number
  }

  /**
   * Refreshment updateManyAndReturn
   */
  export type RefreshmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refreshment
     */
    select?: RefreshmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Refreshment
     */
    omit?: RefreshmentOmit<ExtArgs> | null
    /**
     * The data used to update Refreshments.
     */
    data: XOR<RefreshmentUpdateManyMutationInput, RefreshmentUncheckedUpdateManyInput>
    /**
     * Filter which Refreshments to update
     */
    where?: RefreshmentWhereInput
    /**
     * Limit how many Refreshments to update.
     */
    limit?: number
  }

  /**
   * Refreshment upsert
   */
  export type RefreshmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refreshment
     */
    select?: RefreshmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refreshment
     */
    omit?: RefreshmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Refreshment to update in case it exists.
     */
    where: RefreshmentWhereUniqueInput
    /**
     * In case the Refreshment found by the `where` argument doesn't exist, create a new Refreshment with this data.
     */
    create: XOR<RefreshmentCreateInput, RefreshmentUncheckedCreateInput>
    /**
     * In case the Refreshment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshmentUpdateInput, RefreshmentUncheckedUpdateInput>
  }

  /**
   * Refreshment delete
   */
  export type RefreshmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refreshment
     */
    select?: RefreshmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refreshment
     */
    omit?: RefreshmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshmentInclude<ExtArgs> | null
    /**
     * Filter which Refreshment to delete.
     */
    where: RefreshmentWhereUniqueInput
  }

  /**
   * Refreshment deleteMany
   */
  export type RefreshmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Refreshments to delete
     */
    where?: RefreshmentWhereInput
    /**
     * Limit how many Refreshments to delete.
     */
    limit?: number
  }

  /**
   * Refreshment.orders
   */
  export type Refreshment$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Refreshment without action
   */
  export type RefreshmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refreshment
     */
    select?: RefreshmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refreshment
     */
    omit?: RefreshmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshmentInclude<ExtArgs> | null
  }


  /**
   * Model PizzaRating
   */

  export type AggregatePizzaRating = {
    _count: PizzaRatingCountAggregateOutputType | null
    _avg: PizzaRatingAvgAggregateOutputType | null
    _sum: PizzaRatingSumAggregateOutputType | null
    _min: PizzaRatingMinAggregateOutputType | null
    _max: PizzaRatingMaxAggregateOutputType | null
  }

  export type PizzaRatingAvgAggregateOutputType = {
    ratingid: number | null
    score: number | null
    pizzaId: number | null
  }

  export type PizzaRatingSumAggregateOutputType = {
    ratingid: number | null
    score: number | null
    pizzaId: number | null
  }

  export type PizzaRatingMinAggregateOutputType = {
    ratingid: number | null
    ratinguuid: string | null
    score: number | null
    comment: string | null
    pizzaId: number | null
  }

  export type PizzaRatingMaxAggregateOutputType = {
    ratingid: number | null
    ratinguuid: string | null
    score: number | null
    comment: string | null
    pizzaId: number | null
  }

  export type PizzaRatingCountAggregateOutputType = {
    ratingid: number
    ratinguuid: number
    score: number
    comment: number
    pizzaId: number
    _all: number
  }


  export type PizzaRatingAvgAggregateInputType = {
    ratingid?: true
    score?: true
    pizzaId?: true
  }

  export type PizzaRatingSumAggregateInputType = {
    ratingid?: true
    score?: true
    pizzaId?: true
  }

  export type PizzaRatingMinAggregateInputType = {
    ratingid?: true
    ratinguuid?: true
    score?: true
    comment?: true
    pizzaId?: true
  }

  export type PizzaRatingMaxAggregateInputType = {
    ratingid?: true
    ratinguuid?: true
    score?: true
    comment?: true
    pizzaId?: true
  }

  export type PizzaRatingCountAggregateInputType = {
    ratingid?: true
    ratinguuid?: true
    score?: true
    comment?: true
    pizzaId?: true
    _all?: true
  }

  export type PizzaRatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PizzaRating to aggregate.
     */
    where?: PizzaRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PizzaRatings to fetch.
     */
    orderBy?: PizzaRatingOrderByWithRelationInput | PizzaRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PizzaRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PizzaRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PizzaRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PizzaRatings
    **/
    _count?: true | PizzaRatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PizzaRatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PizzaRatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PizzaRatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PizzaRatingMaxAggregateInputType
  }

  export type GetPizzaRatingAggregateType<T extends PizzaRatingAggregateArgs> = {
        [P in keyof T & keyof AggregatePizzaRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePizzaRating[P]>
      : GetScalarType<T[P], AggregatePizzaRating[P]>
  }




  export type PizzaRatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PizzaRatingWhereInput
    orderBy?: PizzaRatingOrderByWithAggregationInput | PizzaRatingOrderByWithAggregationInput[]
    by: PizzaRatingScalarFieldEnum[] | PizzaRatingScalarFieldEnum
    having?: PizzaRatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PizzaRatingCountAggregateInputType | true
    _avg?: PizzaRatingAvgAggregateInputType
    _sum?: PizzaRatingSumAggregateInputType
    _min?: PizzaRatingMinAggregateInputType
    _max?: PizzaRatingMaxAggregateInputType
  }

  export type PizzaRatingGroupByOutputType = {
    ratingid: number
    ratinguuid: string
    score: number
    comment: string | null
    pizzaId: number
    _count: PizzaRatingCountAggregateOutputType | null
    _avg: PizzaRatingAvgAggregateOutputType | null
    _sum: PizzaRatingSumAggregateOutputType | null
    _min: PizzaRatingMinAggregateOutputType | null
    _max: PizzaRatingMaxAggregateOutputType | null
  }

  type GetPizzaRatingGroupByPayload<T extends PizzaRatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PizzaRatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PizzaRatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PizzaRatingGroupByOutputType[P]>
            : GetScalarType<T[P], PizzaRatingGroupByOutputType[P]>
        }
      >
    >


  export type PizzaRatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ratingid?: boolean
    ratinguuid?: boolean
    score?: boolean
    comment?: boolean
    pizzaId?: boolean
    pizza?: boolean | PizzaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pizzaRating"]>

  export type PizzaRatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ratingid?: boolean
    ratinguuid?: boolean
    score?: boolean
    comment?: boolean
    pizzaId?: boolean
    pizza?: boolean | PizzaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pizzaRating"]>

  export type PizzaRatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ratingid?: boolean
    ratinguuid?: boolean
    score?: boolean
    comment?: boolean
    pizzaId?: boolean
    pizza?: boolean | PizzaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pizzaRating"]>

  export type PizzaRatingSelectScalar = {
    ratingid?: boolean
    ratinguuid?: boolean
    score?: boolean
    comment?: boolean
    pizzaId?: boolean
  }

  export type PizzaRatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ratingid" | "ratinguuid" | "score" | "comment" | "pizzaId", ExtArgs["result"]["pizzaRating"]>
  export type PizzaRatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pizza?: boolean | PizzaDefaultArgs<ExtArgs>
  }
  export type PizzaRatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pizza?: boolean | PizzaDefaultArgs<ExtArgs>
  }
  export type PizzaRatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pizza?: boolean | PizzaDefaultArgs<ExtArgs>
  }

  export type $PizzaRatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PizzaRating"
    objects: {
      pizza: Prisma.$PizzaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ratingid: number
      ratinguuid: string
      score: number
      comment: string | null
      pizzaId: number
    }, ExtArgs["result"]["pizzaRating"]>
    composites: {}
  }

  type PizzaRatingGetPayload<S extends boolean | null | undefined | PizzaRatingDefaultArgs> = $Result.GetResult<Prisma.$PizzaRatingPayload, S>

  type PizzaRatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PizzaRatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PizzaRatingCountAggregateInputType | true
    }

  export interface PizzaRatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PizzaRating'], meta: { name: 'PizzaRating' } }
    /**
     * Find zero or one PizzaRating that matches the filter.
     * @param {PizzaRatingFindUniqueArgs} args - Arguments to find a PizzaRating
     * @example
     * // Get one PizzaRating
     * const pizzaRating = await prisma.pizzaRating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PizzaRatingFindUniqueArgs>(args: SelectSubset<T, PizzaRatingFindUniqueArgs<ExtArgs>>): Prisma__PizzaRatingClient<$Result.GetResult<Prisma.$PizzaRatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PizzaRating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PizzaRatingFindUniqueOrThrowArgs} args - Arguments to find a PizzaRating
     * @example
     * // Get one PizzaRating
     * const pizzaRating = await prisma.pizzaRating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PizzaRatingFindUniqueOrThrowArgs>(args: SelectSubset<T, PizzaRatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PizzaRatingClient<$Result.GetResult<Prisma.$PizzaRatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PizzaRating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaRatingFindFirstArgs} args - Arguments to find a PizzaRating
     * @example
     * // Get one PizzaRating
     * const pizzaRating = await prisma.pizzaRating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PizzaRatingFindFirstArgs>(args?: SelectSubset<T, PizzaRatingFindFirstArgs<ExtArgs>>): Prisma__PizzaRatingClient<$Result.GetResult<Prisma.$PizzaRatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PizzaRating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaRatingFindFirstOrThrowArgs} args - Arguments to find a PizzaRating
     * @example
     * // Get one PizzaRating
     * const pizzaRating = await prisma.pizzaRating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PizzaRatingFindFirstOrThrowArgs>(args?: SelectSubset<T, PizzaRatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__PizzaRatingClient<$Result.GetResult<Prisma.$PizzaRatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PizzaRatings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaRatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PizzaRatings
     * const pizzaRatings = await prisma.pizzaRating.findMany()
     * 
     * // Get first 10 PizzaRatings
     * const pizzaRatings = await prisma.pizzaRating.findMany({ take: 10 })
     * 
     * // Only select the `ratingid`
     * const pizzaRatingWithRatingidOnly = await prisma.pizzaRating.findMany({ select: { ratingid: true } })
     * 
     */
    findMany<T extends PizzaRatingFindManyArgs>(args?: SelectSubset<T, PizzaRatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PizzaRating.
     * @param {PizzaRatingCreateArgs} args - Arguments to create a PizzaRating.
     * @example
     * // Create one PizzaRating
     * const PizzaRating = await prisma.pizzaRating.create({
     *   data: {
     *     // ... data to create a PizzaRating
     *   }
     * })
     * 
     */
    create<T extends PizzaRatingCreateArgs>(args: SelectSubset<T, PizzaRatingCreateArgs<ExtArgs>>): Prisma__PizzaRatingClient<$Result.GetResult<Prisma.$PizzaRatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PizzaRatings.
     * @param {PizzaRatingCreateManyArgs} args - Arguments to create many PizzaRatings.
     * @example
     * // Create many PizzaRatings
     * const pizzaRating = await prisma.pizzaRating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PizzaRatingCreateManyArgs>(args?: SelectSubset<T, PizzaRatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PizzaRatings and returns the data saved in the database.
     * @param {PizzaRatingCreateManyAndReturnArgs} args - Arguments to create many PizzaRatings.
     * @example
     * // Create many PizzaRatings
     * const pizzaRating = await prisma.pizzaRating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PizzaRatings and only return the `ratingid`
     * const pizzaRatingWithRatingidOnly = await prisma.pizzaRating.createManyAndReturn({
     *   select: { ratingid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PizzaRatingCreateManyAndReturnArgs>(args?: SelectSubset<T, PizzaRatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaRatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PizzaRating.
     * @param {PizzaRatingDeleteArgs} args - Arguments to delete one PizzaRating.
     * @example
     * // Delete one PizzaRating
     * const PizzaRating = await prisma.pizzaRating.delete({
     *   where: {
     *     // ... filter to delete one PizzaRating
     *   }
     * })
     * 
     */
    delete<T extends PizzaRatingDeleteArgs>(args: SelectSubset<T, PizzaRatingDeleteArgs<ExtArgs>>): Prisma__PizzaRatingClient<$Result.GetResult<Prisma.$PizzaRatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PizzaRating.
     * @param {PizzaRatingUpdateArgs} args - Arguments to update one PizzaRating.
     * @example
     * // Update one PizzaRating
     * const pizzaRating = await prisma.pizzaRating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PizzaRatingUpdateArgs>(args: SelectSubset<T, PizzaRatingUpdateArgs<ExtArgs>>): Prisma__PizzaRatingClient<$Result.GetResult<Prisma.$PizzaRatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PizzaRatings.
     * @param {PizzaRatingDeleteManyArgs} args - Arguments to filter PizzaRatings to delete.
     * @example
     * // Delete a few PizzaRatings
     * const { count } = await prisma.pizzaRating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PizzaRatingDeleteManyArgs>(args?: SelectSubset<T, PizzaRatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PizzaRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaRatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PizzaRatings
     * const pizzaRating = await prisma.pizzaRating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PizzaRatingUpdateManyArgs>(args: SelectSubset<T, PizzaRatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PizzaRatings and returns the data updated in the database.
     * @param {PizzaRatingUpdateManyAndReturnArgs} args - Arguments to update many PizzaRatings.
     * @example
     * // Update many PizzaRatings
     * const pizzaRating = await prisma.pizzaRating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PizzaRatings and only return the `ratingid`
     * const pizzaRatingWithRatingidOnly = await prisma.pizzaRating.updateManyAndReturn({
     *   select: { ratingid: true },
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
    updateManyAndReturn<T extends PizzaRatingUpdateManyAndReturnArgs>(args: SelectSubset<T, PizzaRatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaRatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PizzaRating.
     * @param {PizzaRatingUpsertArgs} args - Arguments to update or create a PizzaRating.
     * @example
     * // Update or create a PizzaRating
     * const pizzaRating = await prisma.pizzaRating.upsert({
     *   create: {
     *     // ... data to create a PizzaRating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PizzaRating we want to update
     *   }
     * })
     */
    upsert<T extends PizzaRatingUpsertArgs>(args: SelectSubset<T, PizzaRatingUpsertArgs<ExtArgs>>): Prisma__PizzaRatingClient<$Result.GetResult<Prisma.$PizzaRatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PizzaRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaRatingCountArgs} args - Arguments to filter PizzaRatings to count.
     * @example
     * // Count the number of PizzaRatings
     * const count = await prisma.pizzaRating.count({
     *   where: {
     *     // ... the filter for the PizzaRatings we want to count
     *   }
     * })
    **/
    count<T extends PizzaRatingCountArgs>(
      args?: Subset<T, PizzaRatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PizzaRatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PizzaRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaRatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PizzaRatingAggregateArgs>(args: Subset<T, PizzaRatingAggregateArgs>): Prisma.PrismaPromise<GetPizzaRatingAggregateType<T>>

    /**
     * Group by PizzaRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaRatingGroupByArgs} args - Group by arguments.
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
      T extends PizzaRatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PizzaRatingGroupByArgs['orderBy'] }
        : { orderBy?: PizzaRatingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PizzaRatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPizzaRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PizzaRating model
   */
  readonly fields: PizzaRatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PizzaRating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PizzaRatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pizza<T extends PizzaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PizzaDefaultArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PizzaRating model
   */
  interface PizzaRatingFieldRefs {
    readonly ratingid: FieldRef<"PizzaRating", 'Int'>
    readonly ratinguuid: FieldRef<"PizzaRating", 'String'>
    readonly score: FieldRef<"PizzaRating", 'Int'>
    readonly comment: FieldRef<"PizzaRating", 'String'>
    readonly pizzaId: FieldRef<"PizzaRating", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PizzaRating findUnique
   */
  export type PizzaRatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaRating
     */
    select?: PizzaRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaRating
     */
    omit?: PizzaRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaRatingInclude<ExtArgs> | null
    /**
     * Filter, which PizzaRating to fetch.
     */
    where: PizzaRatingWhereUniqueInput
  }

  /**
   * PizzaRating findUniqueOrThrow
   */
  export type PizzaRatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaRating
     */
    select?: PizzaRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaRating
     */
    omit?: PizzaRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaRatingInclude<ExtArgs> | null
    /**
     * Filter, which PizzaRating to fetch.
     */
    where: PizzaRatingWhereUniqueInput
  }

  /**
   * PizzaRating findFirst
   */
  export type PizzaRatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaRating
     */
    select?: PizzaRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaRating
     */
    omit?: PizzaRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaRatingInclude<ExtArgs> | null
    /**
     * Filter, which PizzaRating to fetch.
     */
    where?: PizzaRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PizzaRatings to fetch.
     */
    orderBy?: PizzaRatingOrderByWithRelationInput | PizzaRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PizzaRatings.
     */
    cursor?: PizzaRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PizzaRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PizzaRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PizzaRatings.
     */
    distinct?: PizzaRatingScalarFieldEnum | PizzaRatingScalarFieldEnum[]
  }

  /**
   * PizzaRating findFirstOrThrow
   */
  export type PizzaRatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaRating
     */
    select?: PizzaRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaRating
     */
    omit?: PizzaRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaRatingInclude<ExtArgs> | null
    /**
     * Filter, which PizzaRating to fetch.
     */
    where?: PizzaRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PizzaRatings to fetch.
     */
    orderBy?: PizzaRatingOrderByWithRelationInput | PizzaRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PizzaRatings.
     */
    cursor?: PizzaRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PizzaRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PizzaRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PizzaRatings.
     */
    distinct?: PizzaRatingScalarFieldEnum | PizzaRatingScalarFieldEnum[]
  }

  /**
   * PizzaRating findMany
   */
  export type PizzaRatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaRating
     */
    select?: PizzaRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaRating
     */
    omit?: PizzaRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaRatingInclude<ExtArgs> | null
    /**
     * Filter, which PizzaRatings to fetch.
     */
    where?: PizzaRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PizzaRatings to fetch.
     */
    orderBy?: PizzaRatingOrderByWithRelationInput | PizzaRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PizzaRatings.
     */
    cursor?: PizzaRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PizzaRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PizzaRatings.
     */
    skip?: number
    distinct?: PizzaRatingScalarFieldEnum | PizzaRatingScalarFieldEnum[]
  }

  /**
   * PizzaRating create
   */
  export type PizzaRatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaRating
     */
    select?: PizzaRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaRating
     */
    omit?: PizzaRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaRatingInclude<ExtArgs> | null
    /**
     * The data needed to create a PizzaRating.
     */
    data: XOR<PizzaRatingCreateInput, PizzaRatingUncheckedCreateInput>
  }

  /**
   * PizzaRating createMany
   */
  export type PizzaRatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PizzaRatings.
     */
    data: PizzaRatingCreateManyInput | PizzaRatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PizzaRating createManyAndReturn
   */
  export type PizzaRatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaRating
     */
    select?: PizzaRatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaRating
     */
    omit?: PizzaRatingOmit<ExtArgs> | null
    /**
     * The data used to create many PizzaRatings.
     */
    data: PizzaRatingCreateManyInput | PizzaRatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaRatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PizzaRating update
   */
  export type PizzaRatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaRating
     */
    select?: PizzaRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaRating
     */
    omit?: PizzaRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaRatingInclude<ExtArgs> | null
    /**
     * The data needed to update a PizzaRating.
     */
    data: XOR<PizzaRatingUpdateInput, PizzaRatingUncheckedUpdateInput>
    /**
     * Choose, which PizzaRating to update.
     */
    where: PizzaRatingWhereUniqueInput
  }

  /**
   * PizzaRating updateMany
   */
  export type PizzaRatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PizzaRatings.
     */
    data: XOR<PizzaRatingUpdateManyMutationInput, PizzaRatingUncheckedUpdateManyInput>
    /**
     * Filter which PizzaRatings to update
     */
    where?: PizzaRatingWhereInput
    /**
     * Limit how many PizzaRatings to update.
     */
    limit?: number
  }

  /**
   * PizzaRating updateManyAndReturn
   */
  export type PizzaRatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaRating
     */
    select?: PizzaRatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaRating
     */
    omit?: PizzaRatingOmit<ExtArgs> | null
    /**
     * The data used to update PizzaRatings.
     */
    data: XOR<PizzaRatingUpdateManyMutationInput, PizzaRatingUncheckedUpdateManyInput>
    /**
     * Filter which PizzaRatings to update
     */
    where?: PizzaRatingWhereInput
    /**
     * Limit how many PizzaRatings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaRatingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PizzaRating upsert
   */
  export type PizzaRatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaRating
     */
    select?: PizzaRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaRating
     */
    omit?: PizzaRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaRatingInclude<ExtArgs> | null
    /**
     * The filter to search for the PizzaRating to update in case it exists.
     */
    where: PizzaRatingWhereUniqueInput
    /**
     * In case the PizzaRating found by the `where` argument doesn't exist, create a new PizzaRating with this data.
     */
    create: XOR<PizzaRatingCreateInput, PizzaRatingUncheckedCreateInput>
    /**
     * In case the PizzaRating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PizzaRatingUpdateInput, PizzaRatingUncheckedUpdateInput>
  }

  /**
   * PizzaRating delete
   */
  export type PizzaRatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaRating
     */
    select?: PizzaRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaRating
     */
    omit?: PizzaRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaRatingInclude<ExtArgs> | null
    /**
     * Filter which PizzaRating to delete.
     */
    where: PizzaRatingWhereUniqueInput
  }

  /**
   * PizzaRating deleteMany
   */
  export type PizzaRatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PizzaRatings to delete
     */
    where?: PizzaRatingWhereInput
    /**
     * Limit how many PizzaRatings to delete.
     */
    limit?: number
  }

  /**
   * PizzaRating without action
   */
  export type PizzaRatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaRating
     */
    select?: PizzaRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PizzaRating
     */
    omit?: PizzaRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaRatingInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    orderid: number | null
    statusId: number | null
  }

  export type OrderSumAggregateOutputType = {
    orderid: number | null
    statusId: number | null
  }

  export type OrderMinAggregateOutputType = {
    orderid: number | null
    orderuuid: string | null
    date: Date | null
    statusId: number | null
    orderinstructions: string | null
  }

  export type OrderMaxAggregateOutputType = {
    orderid: number | null
    orderuuid: string | null
    date: Date | null
    statusId: number | null
    orderinstructions: string | null
  }

  export type OrderCountAggregateOutputType = {
    orderid: number
    orderuuid: number
    date: number
    statusId: number
    orderinstructions: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    orderid?: true
    statusId?: true
  }

  export type OrderSumAggregateInputType = {
    orderid?: true
    statusId?: true
  }

  export type OrderMinAggregateInputType = {
    orderid?: true
    orderuuid?: true
    date?: true
    statusId?: true
    orderinstructions?: true
  }

  export type OrderMaxAggregateInputType = {
    orderid?: true
    orderuuid?: true
    date?: true
    statusId?: true
    orderinstructions?: true
  }

  export type OrderCountAggregateInputType = {
    orderid?: true
    orderuuid?: true
    date?: true
    statusId?: true
    orderinstructions?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    orderid: number
    orderuuid: string
    date: Date
    statusId: number
    orderinstructions: string
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderid?: boolean
    orderuuid?: boolean
    date?: boolean
    statusId?: boolean
    orderinstructions?: boolean
    pizzas?: boolean | Order$pizzasArgs<ExtArgs>
    deserts?: boolean | Order$desertsArgs<ExtArgs>
    refreshments?: boolean | Order$refreshmentsArgs<ExtArgs>
    status?: boolean | OrderStatusDefaultArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderid?: boolean
    orderuuid?: boolean
    date?: boolean
    statusId?: boolean
    orderinstructions?: boolean
    status?: boolean | OrderStatusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderid?: boolean
    orderuuid?: boolean
    date?: boolean
    statusId?: boolean
    orderinstructions?: boolean
    status?: boolean | OrderStatusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    orderid?: boolean
    orderuuid?: boolean
    date?: boolean
    statusId?: boolean
    orderinstructions?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"orderid" | "orderuuid" | "date" | "statusId" | "orderinstructions", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pizzas?: boolean | Order$pizzasArgs<ExtArgs>
    deserts?: boolean | Order$desertsArgs<ExtArgs>
    refreshments?: boolean | Order$refreshmentsArgs<ExtArgs>
    status?: boolean | OrderStatusDefaultArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    status?: boolean | OrderStatusDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    status?: boolean | OrderStatusDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      pizzas: Prisma.$PizzaPayload<ExtArgs>[]
      deserts: Prisma.$DesertPayload<ExtArgs>[]
      refreshments: Prisma.$RefreshmentPayload<ExtArgs>[]
      status: Prisma.$OrderStatusPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      orderid: number
      orderuuid: string
      date: Date
      statusId: number
      orderinstructions: string
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `orderid`
     * const orderWithOrderidOnly = await prisma.order.findMany({ select: { orderid: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `orderid`
     * const orderWithOrderidOnly = await prisma.order.createManyAndReturn({
     *   select: { orderid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `orderid`
     * const orderWithOrderidOnly = await prisma.order.updateManyAndReturn({
     *   select: { orderid: true },
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pizzas<T extends Order$pizzasArgs<ExtArgs> = {}>(args?: Subset<T, Order$pizzasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deserts<T extends Order$desertsArgs<ExtArgs> = {}>(args?: Subset<T, Order$desertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshments<T extends Order$refreshmentsArgs<ExtArgs> = {}>(args?: Subset<T, Order$refreshmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    status<T extends OrderStatusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderStatusDefaultArgs<ExtArgs>>): Prisma__OrderStatusClient<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly orderid: FieldRef<"Order", 'Int'>
    readonly orderuuid: FieldRef<"Order", 'String'>
    readonly date: FieldRef<"Order", 'DateTime'>
    readonly statusId: FieldRef<"Order", 'Int'>
    readonly orderinstructions: FieldRef<"Order", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.pizzas
   */
  export type Order$pizzasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizza
     */
    omit?: PizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    where?: PizzaWhereInput
    orderBy?: PizzaOrderByWithRelationInput | PizzaOrderByWithRelationInput[]
    cursor?: PizzaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PizzaScalarFieldEnum | PizzaScalarFieldEnum[]
  }

  /**
   * Order.deserts
   */
  export type Order$desertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desert
     */
    select?: DesertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Desert
     */
    omit?: DesertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesertInclude<ExtArgs> | null
    where?: DesertWhereInput
    orderBy?: DesertOrderByWithRelationInput | DesertOrderByWithRelationInput[]
    cursor?: DesertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DesertScalarFieldEnum | DesertScalarFieldEnum[]
  }

  /**
   * Order.refreshments
   */
  export type Order$refreshmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refreshment
     */
    select?: RefreshmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refreshment
     */
    omit?: RefreshmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshmentInclude<ExtArgs> | null
    where?: RefreshmentWhereInput
    orderBy?: RefreshmentOrderByWithRelationInput | RefreshmentOrderByWithRelationInput[]
    cursor?: RefreshmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshmentScalarFieldEnum | RefreshmentScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderStatus
   */

  export type AggregateOrderStatus = {
    _count: OrderStatusCountAggregateOutputType | null
    _avg: OrderStatusAvgAggregateOutputType | null
    _sum: OrderStatusSumAggregateOutputType | null
    _min: OrderStatusMinAggregateOutputType | null
    _max: OrderStatusMaxAggregateOutputType | null
  }

  export type OrderStatusAvgAggregateOutputType = {
    statusid: number | null
  }

  export type OrderStatusSumAggregateOutputType = {
    statusid: number | null
  }

  export type OrderStatusMinAggregateOutputType = {
    statusid: number | null
    name: string | null
  }

  export type OrderStatusMaxAggregateOutputType = {
    statusid: number | null
    name: string | null
  }

  export type OrderStatusCountAggregateOutputType = {
    statusid: number
    name: number
    _all: number
  }


  export type OrderStatusAvgAggregateInputType = {
    statusid?: true
  }

  export type OrderStatusSumAggregateInputType = {
    statusid?: true
  }

  export type OrderStatusMinAggregateInputType = {
    statusid?: true
    name?: true
  }

  export type OrderStatusMaxAggregateInputType = {
    statusid?: true
    name?: true
  }

  export type OrderStatusCountAggregateInputType = {
    statusid?: true
    name?: true
    _all?: true
  }

  export type OrderStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderStatus to aggregate.
     */
    where?: OrderStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStatuses to fetch.
     */
    orderBy?: OrderStatusOrderByWithRelationInput | OrderStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderStatuses
    **/
    _count?: true | OrderStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderStatusMaxAggregateInputType
  }

  export type GetOrderStatusAggregateType<T extends OrderStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderStatus[P]>
      : GetScalarType<T[P], AggregateOrderStatus[P]>
  }




  export type OrderStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderStatusWhereInput
    orderBy?: OrderStatusOrderByWithAggregationInput | OrderStatusOrderByWithAggregationInput[]
    by: OrderStatusScalarFieldEnum[] | OrderStatusScalarFieldEnum
    having?: OrderStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderStatusCountAggregateInputType | true
    _avg?: OrderStatusAvgAggregateInputType
    _sum?: OrderStatusSumAggregateInputType
    _min?: OrderStatusMinAggregateInputType
    _max?: OrderStatusMaxAggregateInputType
  }

  export type OrderStatusGroupByOutputType = {
    statusid: number
    name: string
    _count: OrderStatusCountAggregateOutputType | null
    _avg: OrderStatusAvgAggregateOutputType | null
    _sum: OrderStatusSumAggregateOutputType | null
    _min: OrderStatusMinAggregateOutputType | null
    _max: OrderStatusMaxAggregateOutputType | null
  }

  type GetOrderStatusGroupByPayload<T extends OrderStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderStatusGroupByOutputType[P]>
            : GetScalarType<T[P], OrderStatusGroupByOutputType[P]>
        }
      >
    >


  export type OrderStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    statusid?: boolean
    name?: boolean
    orders?: boolean | OrderStatus$ordersArgs<ExtArgs>
    _count?: boolean | OrderStatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderStatus"]>

  export type OrderStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    statusid?: boolean
    name?: boolean
  }, ExtArgs["result"]["orderStatus"]>

  export type OrderStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    statusid?: boolean
    name?: boolean
  }, ExtArgs["result"]["orderStatus"]>

  export type OrderStatusSelectScalar = {
    statusid?: boolean
    name?: boolean
  }

  export type OrderStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"statusid" | "name", ExtArgs["result"]["orderStatus"]>
  export type OrderStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | OrderStatus$ordersArgs<ExtArgs>
    _count?: boolean | OrderStatusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrderStatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrderStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderStatus"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      statusid: number
      name: string
    }, ExtArgs["result"]["orderStatus"]>
    composites: {}
  }

  type OrderStatusGetPayload<S extends boolean | null | undefined | OrderStatusDefaultArgs> = $Result.GetResult<Prisma.$OrderStatusPayload, S>

  type OrderStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderStatusCountAggregateInputType | true
    }

  export interface OrderStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderStatus'], meta: { name: 'OrderStatus' } }
    /**
     * Find zero or one OrderStatus that matches the filter.
     * @param {OrderStatusFindUniqueArgs} args - Arguments to find a OrderStatus
     * @example
     * // Get one OrderStatus
     * const orderStatus = await prisma.orderStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderStatusFindUniqueArgs>(args: SelectSubset<T, OrderStatusFindUniqueArgs<ExtArgs>>): Prisma__OrderStatusClient<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderStatusFindUniqueOrThrowArgs} args - Arguments to find a OrderStatus
     * @example
     * // Get one OrderStatus
     * const orderStatus = await prisma.orderStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderStatusClient<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusFindFirstArgs} args - Arguments to find a OrderStatus
     * @example
     * // Get one OrderStatus
     * const orderStatus = await prisma.orderStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderStatusFindFirstArgs>(args?: SelectSubset<T, OrderStatusFindFirstArgs<ExtArgs>>): Prisma__OrderStatusClient<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusFindFirstOrThrowArgs} args - Arguments to find a OrderStatus
     * @example
     * // Get one OrderStatus
     * const orderStatus = await prisma.orderStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderStatusClient<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderStatuses
     * const orderStatuses = await prisma.orderStatus.findMany()
     * 
     * // Get first 10 OrderStatuses
     * const orderStatuses = await prisma.orderStatus.findMany({ take: 10 })
     * 
     * // Only select the `statusid`
     * const orderStatusWithStatusidOnly = await prisma.orderStatus.findMany({ select: { statusid: true } })
     * 
     */
    findMany<T extends OrderStatusFindManyArgs>(args?: SelectSubset<T, OrderStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderStatus.
     * @param {OrderStatusCreateArgs} args - Arguments to create a OrderStatus.
     * @example
     * // Create one OrderStatus
     * const OrderStatus = await prisma.orderStatus.create({
     *   data: {
     *     // ... data to create a OrderStatus
     *   }
     * })
     * 
     */
    create<T extends OrderStatusCreateArgs>(args: SelectSubset<T, OrderStatusCreateArgs<ExtArgs>>): Prisma__OrderStatusClient<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderStatuses.
     * @param {OrderStatusCreateManyArgs} args - Arguments to create many OrderStatuses.
     * @example
     * // Create many OrderStatuses
     * const orderStatus = await prisma.orderStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderStatusCreateManyArgs>(args?: SelectSubset<T, OrderStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderStatuses and returns the data saved in the database.
     * @param {OrderStatusCreateManyAndReturnArgs} args - Arguments to create many OrderStatuses.
     * @example
     * // Create many OrderStatuses
     * const orderStatus = await prisma.orderStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderStatuses and only return the `statusid`
     * const orderStatusWithStatusidOnly = await prisma.orderStatus.createManyAndReturn({
     *   select: { statusid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderStatus.
     * @param {OrderStatusDeleteArgs} args - Arguments to delete one OrderStatus.
     * @example
     * // Delete one OrderStatus
     * const OrderStatus = await prisma.orderStatus.delete({
     *   where: {
     *     // ... filter to delete one OrderStatus
     *   }
     * })
     * 
     */
    delete<T extends OrderStatusDeleteArgs>(args: SelectSubset<T, OrderStatusDeleteArgs<ExtArgs>>): Prisma__OrderStatusClient<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderStatus.
     * @param {OrderStatusUpdateArgs} args - Arguments to update one OrderStatus.
     * @example
     * // Update one OrderStatus
     * const orderStatus = await prisma.orderStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderStatusUpdateArgs>(args: SelectSubset<T, OrderStatusUpdateArgs<ExtArgs>>): Prisma__OrderStatusClient<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderStatuses.
     * @param {OrderStatusDeleteManyArgs} args - Arguments to filter OrderStatuses to delete.
     * @example
     * // Delete a few OrderStatuses
     * const { count } = await prisma.orderStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderStatusDeleteManyArgs>(args?: SelectSubset<T, OrderStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderStatuses
     * const orderStatus = await prisma.orderStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderStatusUpdateManyArgs>(args: SelectSubset<T, OrderStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderStatuses and returns the data updated in the database.
     * @param {OrderStatusUpdateManyAndReturnArgs} args - Arguments to update many OrderStatuses.
     * @example
     * // Update many OrderStatuses
     * const orderStatus = await prisma.orderStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderStatuses and only return the `statusid`
     * const orderStatusWithStatusidOnly = await prisma.orderStatus.updateManyAndReturn({
     *   select: { statusid: true },
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
    updateManyAndReturn<T extends OrderStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderStatus.
     * @param {OrderStatusUpsertArgs} args - Arguments to update or create a OrderStatus.
     * @example
     * // Update or create a OrderStatus
     * const orderStatus = await prisma.orderStatus.upsert({
     *   create: {
     *     // ... data to create a OrderStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderStatus we want to update
     *   }
     * })
     */
    upsert<T extends OrderStatusUpsertArgs>(args: SelectSubset<T, OrderStatusUpsertArgs<ExtArgs>>): Prisma__OrderStatusClient<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusCountArgs} args - Arguments to filter OrderStatuses to count.
     * @example
     * // Count the number of OrderStatuses
     * const count = await prisma.orderStatus.count({
     *   where: {
     *     // ... the filter for the OrderStatuses we want to count
     *   }
     * })
    **/
    count<T extends OrderStatusCountArgs>(
      args?: Subset<T, OrderStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderStatusAggregateArgs>(args: Subset<T, OrderStatusAggregateArgs>): Prisma.PrismaPromise<GetOrderStatusAggregateType<T>>

    /**
     * Group by OrderStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusGroupByArgs} args - Group by arguments.
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
      T extends OrderStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderStatusGroupByArgs['orderBy'] }
        : { orderBy?: OrderStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderStatus model
   */
  readonly fields: OrderStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends OrderStatus$ordersArgs<ExtArgs> = {}>(args?: Subset<T, OrderStatus$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the OrderStatus model
   */
  interface OrderStatusFieldRefs {
    readonly statusid: FieldRef<"OrderStatus", 'Int'>
    readonly name: FieldRef<"OrderStatus", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OrderStatus findUnique
   */
  export type OrderStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusInclude<ExtArgs> | null
    /**
     * Filter, which OrderStatus to fetch.
     */
    where: OrderStatusWhereUniqueInput
  }

  /**
   * OrderStatus findUniqueOrThrow
   */
  export type OrderStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusInclude<ExtArgs> | null
    /**
     * Filter, which OrderStatus to fetch.
     */
    where: OrderStatusWhereUniqueInput
  }

  /**
   * OrderStatus findFirst
   */
  export type OrderStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusInclude<ExtArgs> | null
    /**
     * Filter, which OrderStatus to fetch.
     */
    where?: OrderStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStatuses to fetch.
     */
    orderBy?: OrderStatusOrderByWithRelationInput | OrderStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderStatuses.
     */
    cursor?: OrderStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderStatuses.
     */
    distinct?: OrderStatusScalarFieldEnum | OrderStatusScalarFieldEnum[]
  }

  /**
   * OrderStatus findFirstOrThrow
   */
  export type OrderStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusInclude<ExtArgs> | null
    /**
     * Filter, which OrderStatus to fetch.
     */
    where?: OrderStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStatuses to fetch.
     */
    orderBy?: OrderStatusOrderByWithRelationInput | OrderStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderStatuses.
     */
    cursor?: OrderStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderStatuses.
     */
    distinct?: OrderStatusScalarFieldEnum | OrderStatusScalarFieldEnum[]
  }

  /**
   * OrderStatus findMany
   */
  export type OrderStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusInclude<ExtArgs> | null
    /**
     * Filter, which OrderStatuses to fetch.
     */
    where?: OrderStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStatuses to fetch.
     */
    orderBy?: OrderStatusOrderByWithRelationInput | OrderStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderStatuses.
     */
    cursor?: OrderStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStatuses.
     */
    skip?: number
    distinct?: OrderStatusScalarFieldEnum | OrderStatusScalarFieldEnum[]
  }

  /**
   * OrderStatus create
   */
  export type OrderStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderStatus.
     */
    data: XOR<OrderStatusCreateInput, OrderStatusUncheckedCreateInput>
  }

  /**
   * OrderStatus createMany
   */
  export type OrderStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderStatuses.
     */
    data: OrderStatusCreateManyInput | OrderStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderStatus createManyAndReturn
   */
  export type OrderStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * The data used to create many OrderStatuses.
     */
    data: OrderStatusCreateManyInput | OrderStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderStatus update
   */
  export type OrderStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderStatus.
     */
    data: XOR<OrderStatusUpdateInput, OrderStatusUncheckedUpdateInput>
    /**
     * Choose, which OrderStatus to update.
     */
    where: OrderStatusWhereUniqueInput
  }

  /**
   * OrderStatus updateMany
   */
  export type OrderStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderStatuses.
     */
    data: XOR<OrderStatusUpdateManyMutationInput, OrderStatusUncheckedUpdateManyInput>
    /**
     * Filter which OrderStatuses to update
     */
    where?: OrderStatusWhereInput
    /**
     * Limit how many OrderStatuses to update.
     */
    limit?: number
  }

  /**
   * OrderStatus updateManyAndReturn
   */
  export type OrderStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * The data used to update OrderStatuses.
     */
    data: XOR<OrderStatusUpdateManyMutationInput, OrderStatusUncheckedUpdateManyInput>
    /**
     * Filter which OrderStatuses to update
     */
    where?: OrderStatusWhereInput
    /**
     * Limit how many OrderStatuses to update.
     */
    limit?: number
  }

  /**
   * OrderStatus upsert
   */
  export type OrderStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderStatus to update in case it exists.
     */
    where: OrderStatusWhereUniqueInput
    /**
     * In case the OrderStatus found by the `where` argument doesn't exist, create a new OrderStatus with this data.
     */
    create: XOR<OrderStatusCreateInput, OrderStatusUncheckedCreateInput>
    /**
     * In case the OrderStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderStatusUpdateInput, OrderStatusUncheckedUpdateInput>
  }

  /**
   * OrderStatus delete
   */
  export type OrderStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusInclude<ExtArgs> | null
    /**
     * Filter which OrderStatus to delete.
     */
    where: OrderStatusWhereUniqueInput
  }

  /**
   * OrderStatus deleteMany
   */
  export type OrderStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderStatuses to delete
     */
    where?: OrderStatusWhereInput
    /**
     * Limit how many OrderStatuses to delete.
     */
    limit?: number
  }

  /**
   * OrderStatus.orders
   */
  export type OrderStatus$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * OrderStatus without action
   */
  export type OrderStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStatusInclude<ExtArgs> | null
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


  export const PizzaStoreScalarFieldEnum: {
    storeid: 'storeid',
    storeuuid: 'storeuuid',
    name: 'name',
    location: 'location',
    phone: 'phone',
    email: 'email'
  };

  export type PizzaStoreScalarFieldEnum = (typeof PizzaStoreScalarFieldEnum)[keyof typeof PizzaStoreScalarFieldEnum]


  export const PizzaScalarFieldEnum: {
    pizzaid: 'pizzaid',
    pizzauuid: 'pizzauuid',
    name: 'name',
    description: 'description',
    price: 'price',
    storeId: 'storeId'
  };

  export type PizzaScalarFieldEnum = (typeof PizzaScalarFieldEnum)[keyof typeof PizzaScalarFieldEnum]


  export const DesertScalarFieldEnum: {
    desertid: 'desertid',
    desertuuid: 'desertuuid',
    name: 'name',
    price: 'price'
  };

  export type DesertScalarFieldEnum = (typeof DesertScalarFieldEnum)[keyof typeof DesertScalarFieldEnum]


  export const DesertIngredientsScalarFieldEnum: {
    desertingredientid: 'desertingredientid',
    desertingredientuuid: 'desertingredientuuid',
    name: 'name'
  };

  export type DesertIngredientsScalarFieldEnum = (typeof DesertIngredientsScalarFieldEnum)[keyof typeof DesertIngredientsScalarFieldEnum]


  export const PizzaIngredientScalarFieldEnum: {
    ingredientid: 'ingredientid',
    ingredientuuid: 'ingredientuuid',
    name: 'name'
  };

  export type PizzaIngredientScalarFieldEnum = (typeof PizzaIngredientScalarFieldEnum)[keyof typeof PizzaIngredientScalarFieldEnum]


  export const RefreshmentScalarFieldEnum: {
    refreshmentid: 'refreshmentid',
    refreshmentuuid: 'refreshmentuuid',
    name: 'name',
    price: 'price',
    size: 'size'
  };

  export type RefreshmentScalarFieldEnum = (typeof RefreshmentScalarFieldEnum)[keyof typeof RefreshmentScalarFieldEnum]


  export const PizzaRatingScalarFieldEnum: {
    ratingid: 'ratingid',
    ratinguuid: 'ratinguuid',
    score: 'score',
    comment: 'comment',
    pizzaId: 'pizzaId'
  };

  export type PizzaRatingScalarFieldEnum = (typeof PizzaRatingScalarFieldEnum)[keyof typeof PizzaRatingScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    orderid: 'orderid',
    orderuuid: 'orderuuid',
    date: 'date',
    statusId: 'statusId',
    orderinstructions: 'orderinstructions'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderStatusScalarFieldEnum: {
    statusid: 'statusid',
    name: 'name'
  };

  export type OrderStatusScalarFieldEnum = (typeof OrderStatusScalarFieldEnum)[keyof typeof OrderStatusScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type PizzaStoreWhereInput = {
    AND?: PizzaStoreWhereInput | PizzaStoreWhereInput[]
    OR?: PizzaStoreWhereInput[]
    NOT?: PizzaStoreWhereInput | PizzaStoreWhereInput[]
    storeid?: IntFilter<"PizzaStore"> | number
    storeuuid?: StringFilter<"PizzaStore"> | string
    name?: StringFilter<"PizzaStore"> | string
    location?: StringFilter<"PizzaStore"> | string
    phone?: IntFilter<"PizzaStore"> | number
    email?: StringFilter<"PizzaStore"> | string
    pizzas?: PizzaListRelationFilter
  }

  export type PizzaStoreOrderByWithRelationInput = {
    storeid?: SortOrder
    storeuuid?: SortOrder
    name?: SortOrder
    location?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    pizzas?: PizzaOrderByRelationAggregateInput
  }

  export type PizzaStoreWhereUniqueInput = Prisma.AtLeast<{
    storeid?: number
    storeuuid?: string
    AND?: PizzaStoreWhereInput | PizzaStoreWhereInput[]
    OR?: PizzaStoreWhereInput[]
    NOT?: PizzaStoreWhereInput | PizzaStoreWhereInput[]
    name?: StringFilter<"PizzaStore"> | string
    location?: StringFilter<"PizzaStore"> | string
    phone?: IntFilter<"PizzaStore"> | number
    email?: StringFilter<"PizzaStore"> | string
    pizzas?: PizzaListRelationFilter
  }, "storeid" | "storeuuid">

  export type PizzaStoreOrderByWithAggregationInput = {
    storeid?: SortOrder
    storeuuid?: SortOrder
    name?: SortOrder
    location?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    _count?: PizzaStoreCountOrderByAggregateInput
    _avg?: PizzaStoreAvgOrderByAggregateInput
    _max?: PizzaStoreMaxOrderByAggregateInput
    _min?: PizzaStoreMinOrderByAggregateInput
    _sum?: PizzaStoreSumOrderByAggregateInput
  }

  export type PizzaStoreScalarWhereWithAggregatesInput = {
    AND?: PizzaStoreScalarWhereWithAggregatesInput | PizzaStoreScalarWhereWithAggregatesInput[]
    OR?: PizzaStoreScalarWhereWithAggregatesInput[]
    NOT?: PizzaStoreScalarWhereWithAggregatesInput | PizzaStoreScalarWhereWithAggregatesInput[]
    storeid?: IntWithAggregatesFilter<"PizzaStore"> | number
    storeuuid?: StringWithAggregatesFilter<"PizzaStore"> | string
    name?: StringWithAggregatesFilter<"PizzaStore"> | string
    location?: StringWithAggregatesFilter<"PizzaStore"> | string
    phone?: IntWithAggregatesFilter<"PizzaStore"> | number
    email?: StringWithAggregatesFilter<"PizzaStore"> | string
  }

  export type PizzaWhereInput = {
    AND?: PizzaWhereInput | PizzaWhereInput[]
    OR?: PizzaWhereInput[]
    NOT?: PizzaWhereInput | PizzaWhereInput[]
    pizzaid?: IntFilter<"Pizza"> | number
    pizzauuid?: StringFilter<"Pizza"> | string
    name?: StringFilter<"Pizza"> | string
    description?: StringFilter<"Pizza"> | string
    price?: FloatFilter<"Pizza"> | number
    storeId?: IntFilter<"Pizza"> | number
    ingredients?: PizzaIngredientListRelationFilter
    ratings?: PizzaRatingListRelationFilter
    store?: XOR<PizzaStoreScalarRelationFilter, PizzaStoreWhereInput>
    orders?: OrderListRelationFilter
  }

  export type PizzaOrderByWithRelationInput = {
    pizzaid?: SortOrder
    pizzauuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    storeId?: SortOrder
    ingredients?: PizzaIngredientOrderByRelationAggregateInput
    ratings?: PizzaRatingOrderByRelationAggregateInput
    store?: PizzaStoreOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type PizzaWhereUniqueInput = Prisma.AtLeast<{
    pizzaid?: number
    pizzauuid?: string
    AND?: PizzaWhereInput | PizzaWhereInput[]
    OR?: PizzaWhereInput[]
    NOT?: PizzaWhereInput | PizzaWhereInput[]
    name?: StringFilter<"Pizza"> | string
    description?: StringFilter<"Pizza"> | string
    price?: FloatFilter<"Pizza"> | number
    storeId?: IntFilter<"Pizza"> | number
    ingredients?: PizzaIngredientListRelationFilter
    ratings?: PizzaRatingListRelationFilter
    store?: XOR<PizzaStoreScalarRelationFilter, PizzaStoreWhereInput>
    orders?: OrderListRelationFilter
  }, "pizzaid" | "pizzauuid">

  export type PizzaOrderByWithAggregationInput = {
    pizzaid?: SortOrder
    pizzauuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    storeId?: SortOrder
    _count?: PizzaCountOrderByAggregateInput
    _avg?: PizzaAvgOrderByAggregateInput
    _max?: PizzaMaxOrderByAggregateInput
    _min?: PizzaMinOrderByAggregateInput
    _sum?: PizzaSumOrderByAggregateInput
  }

  export type PizzaScalarWhereWithAggregatesInput = {
    AND?: PizzaScalarWhereWithAggregatesInput | PizzaScalarWhereWithAggregatesInput[]
    OR?: PizzaScalarWhereWithAggregatesInput[]
    NOT?: PizzaScalarWhereWithAggregatesInput | PizzaScalarWhereWithAggregatesInput[]
    pizzaid?: IntWithAggregatesFilter<"Pizza"> | number
    pizzauuid?: StringWithAggregatesFilter<"Pizza"> | string
    name?: StringWithAggregatesFilter<"Pizza"> | string
    description?: StringWithAggregatesFilter<"Pizza"> | string
    price?: FloatWithAggregatesFilter<"Pizza"> | number
    storeId?: IntWithAggregatesFilter<"Pizza"> | number
  }

  export type DesertWhereInput = {
    AND?: DesertWhereInput | DesertWhereInput[]
    OR?: DesertWhereInput[]
    NOT?: DesertWhereInput | DesertWhereInput[]
    desertid?: IntFilter<"Desert"> | number
    desertuuid?: StringFilter<"Desert"> | string
    name?: StringFilter<"Desert"> | string
    price?: FloatFilter<"Desert"> | number
    ingredients?: DesertIngredientsListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type DesertOrderByWithRelationInput = {
    desertid?: SortOrder
    desertuuid?: SortOrder
    name?: SortOrder
    price?: SortOrder
    ingredients?: DesertIngredientsOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type DesertWhereUniqueInput = Prisma.AtLeast<{
    desertid?: number
    desertuuid?: string
    AND?: DesertWhereInput | DesertWhereInput[]
    OR?: DesertWhereInput[]
    NOT?: DesertWhereInput | DesertWhereInput[]
    name?: StringFilter<"Desert"> | string
    price?: FloatFilter<"Desert"> | number
    ingredients?: DesertIngredientsListRelationFilter
    orders?: OrderListRelationFilter
  }, "desertid" | "desertuuid">

  export type DesertOrderByWithAggregationInput = {
    desertid?: SortOrder
    desertuuid?: SortOrder
    name?: SortOrder
    price?: SortOrder
    _count?: DesertCountOrderByAggregateInput
    _avg?: DesertAvgOrderByAggregateInput
    _max?: DesertMaxOrderByAggregateInput
    _min?: DesertMinOrderByAggregateInput
    _sum?: DesertSumOrderByAggregateInput
  }

  export type DesertScalarWhereWithAggregatesInput = {
    AND?: DesertScalarWhereWithAggregatesInput | DesertScalarWhereWithAggregatesInput[]
    OR?: DesertScalarWhereWithAggregatesInput[]
    NOT?: DesertScalarWhereWithAggregatesInput | DesertScalarWhereWithAggregatesInput[]
    desertid?: IntWithAggregatesFilter<"Desert"> | number
    desertuuid?: StringWithAggregatesFilter<"Desert"> | string
    name?: StringWithAggregatesFilter<"Desert"> | string
    price?: FloatWithAggregatesFilter<"Desert"> | number
  }

  export type DesertIngredientsWhereInput = {
    AND?: DesertIngredientsWhereInput | DesertIngredientsWhereInput[]
    OR?: DesertIngredientsWhereInput[]
    NOT?: DesertIngredientsWhereInput | DesertIngredientsWhereInput[]
    desertingredientid?: IntFilter<"DesertIngredients"> | number
    desertingredientuuid?: StringFilter<"DesertIngredients"> | string
    name?: StringFilter<"DesertIngredients"> | string
    deserts?: DesertListRelationFilter
  }

  export type DesertIngredientsOrderByWithRelationInput = {
    desertingredientid?: SortOrder
    desertingredientuuid?: SortOrder
    name?: SortOrder
    deserts?: DesertOrderByRelationAggregateInput
  }

  export type DesertIngredientsWhereUniqueInput = Prisma.AtLeast<{
    desertingredientid?: number
    desertingredientuuid?: string
    AND?: DesertIngredientsWhereInput | DesertIngredientsWhereInput[]
    OR?: DesertIngredientsWhereInput[]
    NOT?: DesertIngredientsWhereInput | DesertIngredientsWhereInput[]
    name?: StringFilter<"DesertIngredients"> | string
    deserts?: DesertListRelationFilter
  }, "desertingredientid" | "desertingredientuuid">

  export type DesertIngredientsOrderByWithAggregationInput = {
    desertingredientid?: SortOrder
    desertingredientuuid?: SortOrder
    name?: SortOrder
    _count?: DesertIngredientsCountOrderByAggregateInput
    _avg?: DesertIngredientsAvgOrderByAggregateInput
    _max?: DesertIngredientsMaxOrderByAggregateInput
    _min?: DesertIngredientsMinOrderByAggregateInput
    _sum?: DesertIngredientsSumOrderByAggregateInput
  }

  export type DesertIngredientsScalarWhereWithAggregatesInput = {
    AND?: DesertIngredientsScalarWhereWithAggregatesInput | DesertIngredientsScalarWhereWithAggregatesInput[]
    OR?: DesertIngredientsScalarWhereWithAggregatesInput[]
    NOT?: DesertIngredientsScalarWhereWithAggregatesInput | DesertIngredientsScalarWhereWithAggregatesInput[]
    desertingredientid?: IntWithAggregatesFilter<"DesertIngredients"> | number
    desertingredientuuid?: StringWithAggregatesFilter<"DesertIngredients"> | string
    name?: StringWithAggregatesFilter<"DesertIngredients"> | string
  }

  export type PizzaIngredientWhereInput = {
    AND?: PizzaIngredientWhereInput | PizzaIngredientWhereInput[]
    OR?: PizzaIngredientWhereInput[]
    NOT?: PizzaIngredientWhereInput | PizzaIngredientWhereInput[]
    ingredientid?: IntFilter<"PizzaIngredient"> | number
    ingredientuuid?: StringFilter<"PizzaIngredient"> | string
    name?: StringFilter<"PizzaIngredient"> | string
    pizzas?: PizzaListRelationFilter
  }

  export type PizzaIngredientOrderByWithRelationInput = {
    ingredientid?: SortOrder
    ingredientuuid?: SortOrder
    name?: SortOrder
    pizzas?: PizzaOrderByRelationAggregateInput
  }

  export type PizzaIngredientWhereUniqueInput = Prisma.AtLeast<{
    ingredientid?: number
    ingredientuuid?: string
    AND?: PizzaIngredientWhereInput | PizzaIngredientWhereInput[]
    OR?: PizzaIngredientWhereInput[]
    NOT?: PizzaIngredientWhereInput | PizzaIngredientWhereInput[]
    name?: StringFilter<"PizzaIngredient"> | string
    pizzas?: PizzaListRelationFilter
  }, "ingredientid" | "ingredientuuid">

  export type PizzaIngredientOrderByWithAggregationInput = {
    ingredientid?: SortOrder
    ingredientuuid?: SortOrder
    name?: SortOrder
    _count?: PizzaIngredientCountOrderByAggregateInput
    _avg?: PizzaIngredientAvgOrderByAggregateInput
    _max?: PizzaIngredientMaxOrderByAggregateInput
    _min?: PizzaIngredientMinOrderByAggregateInput
    _sum?: PizzaIngredientSumOrderByAggregateInput
  }

  export type PizzaIngredientScalarWhereWithAggregatesInput = {
    AND?: PizzaIngredientScalarWhereWithAggregatesInput | PizzaIngredientScalarWhereWithAggregatesInput[]
    OR?: PizzaIngredientScalarWhereWithAggregatesInput[]
    NOT?: PizzaIngredientScalarWhereWithAggregatesInput | PizzaIngredientScalarWhereWithAggregatesInput[]
    ingredientid?: IntWithAggregatesFilter<"PizzaIngredient"> | number
    ingredientuuid?: StringWithAggregatesFilter<"PizzaIngredient"> | string
    name?: StringWithAggregatesFilter<"PizzaIngredient"> | string
  }

  export type RefreshmentWhereInput = {
    AND?: RefreshmentWhereInput | RefreshmentWhereInput[]
    OR?: RefreshmentWhereInput[]
    NOT?: RefreshmentWhereInput | RefreshmentWhereInput[]
    refreshmentid?: IntFilter<"Refreshment"> | number
    refreshmentuuid?: StringFilter<"Refreshment"> | string
    name?: StringFilter<"Refreshment"> | string
    price?: FloatFilter<"Refreshment"> | number
    size?: StringFilter<"Refreshment"> | string
    orders?: OrderListRelationFilter
  }

  export type RefreshmentOrderByWithRelationInput = {
    refreshmentid?: SortOrder
    refreshmentuuid?: SortOrder
    name?: SortOrder
    price?: SortOrder
    size?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
  }

  export type RefreshmentWhereUniqueInput = Prisma.AtLeast<{
    refreshmentid?: number
    refreshmentuuid?: string
    AND?: RefreshmentWhereInput | RefreshmentWhereInput[]
    OR?: RefreshmentWhereInput[]
    NOT?: RefreshmentWhereInput | RefreshmentWhereInput[]
    name?: StringFilter<"Refreshment"> | string
    price?: FloatFilter<"Refreshment"> | number
    size?: StringFilter<"Refreshment"> | string
    orders?: OrderListRelationFilter
  }, "refreshmentid" | "refreshmentuuid">

  export type RefreshmentOrderByWithAggregationInput = {
    refreshmentid?: SortOrder
    refreshmentuuid?: SortOrder
    name?: SortOrder
    price?: SortOrder
    size?: SortOrder
    _count?: RefreshmentCountOrderByAggregateInput
    _avg?: RefreshmentAvgOrderByAggregateInput
    _max?: RefreshmentMaxOrderByAggregateInput
    _min?: RefreshmentMinOrderByAggregateInput
    _sum?: RefreshmentSumOrderByAggregateInput
  }

  export type RefreshmentScalarWhereWithAggregatesInput = {
    AND?: RefreshmentScalarWhereWithAggregatesInput | RefreshmentScalarWhereWithAggregatesInput[]
    OR?: RefreshmentScalarWhereWithAggregatesInput[]
    NOT?: RefreshmentScalarWhereWithAggregatesInput | RefreshmentScalarWhereWithAggregatesInput[]
    refreshmentid?: IntWithAggregatesFilter<"Refreshment"> | number
    refreshmentuuid?: StringWithAggregatesFilter<"Refreshment"> | string
    name?: StringWithAggregatesFilter<"Refreshment"> | string
    price?: FloatWithAggregatesFilter<"Refreshment"> | number
    size?: StringWithAggregatesFilter<"Refreshment"> | string
  }

  export type PizzaRatingWhereInput = {
    AND?: PizzaRatingWhereInput | PizzaRatingWhereInput[]
    OR?: PizzaRatingWhereInput[]
    NOT?: PizzaRatingWhereInput | PizzaRatingWhereInput[]
    ratingid?: IntFilter<"PizzaRating"> | number
    ratinguuid?: StringFilter<"PizzaRating"> | string
    score?: IntFilter<"PizzaRating"> | number
    comment?: StringNullableFilter<"PizzaRating"> | string | null
    pizzaId?: IntFilter<"PizzaRating"> | number
    pizza?: XOR<PizzaScalarRelationFilter, PizzaWhereInput>
  }

  export type PizzaRatingOrderByWithRelationInput = {
    ratingid?: SortOrder
    ratinguuid?: SortOrder
    score?: SortOrder
    comment?: SortOrderInput | SortOrder
    pizzaId?: SortOrder
    pizza?: PizzaOrderByWithRelationInput
  }

  export type PizzaRatingWhereUniqueInput = Prisma.AtLeast<{
    ratingid?: number
    ratinguuid?: string
    AND?: PizzaRatingWhereInput | PizzaRatingWhereInput[]
    OR?: PizzaRatingWhereInput[]
    NOT?: PizzaRatingWhereInput | PizzaRatingWhereInput[]
    score?: IntFilter<"PizzaRating"> | number
    comment?: StringNullableFilter<"PizzaRating"> | string | null
    pizzaId?: IntFilter<"PizzaRating"> | number
    pizza?: XOR<PizzaScalarRelationFilter, PizzaWhereInput>
  }, "ratingid" | "ratinguuid">

  export type PizzaRatingOrderByWithAggregationInput = {
    ratingid?: SortOrder
    ratinguuid?: SortOrder
    score?: SortOrder
    comment?: SortOrderInput | SortOrder
    pizzaId?: SortOrder
    _count?: PizzaRatingCountOrderByAggregateInput
    _avg?: PizzaRatingAvgOrderByAggregateInput
    _max?: PizzaRatingMaxOrderByAggregateInput
    _min?: PizzaRatingMinOrderByAggregateInput
    _sum?: PizzaRatingSumOrderByAggregateInput
  }

  export type PizzaRatingScalarWhereWithAggregatesInput = {
    AND?: PizzaRatingScalarWhereWithAggregatesInput | PizzaRatingScalarWhereWithAggregatesInput[]
    OR?: PizzaRatingScalarWhereWithAggregatesInput[]
    NOT?: PizzaRatingScalarWhereWithAggregatesInput | PizzaRatingScalarWhereWithAggregatesInput[]
    ratingid?: IntWithAggregatesFilter<"PizzaRating"> | number
    ratinguuid?: StringWithAggregatesFilter<"PizzaRating"> | string
    score?: IntWithAggregatesFilter<"PizzaRating"> | number
    comment?: StringNullableWithAggregatesFilter<"PizzaRating"> | string | null
    pizzaId?: IntWithAggregatesFilter<"PizzaRating"> | number
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    orderid?: IntFilter<"Order"> | number
    orderuuid?: StringFilter<"Order"> | string
    date?: DateTimeFilter<"Order"> | Date | string
    statusId?: IntFilter<"Order"> | number
    orderinstructions?: StringFilter<"Order"> | string
    pizzas?: PizzaListRelationFilter
    deserts?: DesertListRelationFilter
    refreshments?: RefreshmentListRelationFilter
    status?: XOR<OrderStatusScalarRelationFilter, OrderStatusWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    orderid?: SortOrder
    orderuuid?: SortOrder
    date?: SortOrder
    statusId?: SortOrder
    orderinstructions?: SortOrder
    pizzas?: PizzaOrderByRelationAggregateInput
    deserts?: DesertOrderByRelationAggregateInput
    refreshments?: RefreshmentOrderByRelationAggregateInput
    status?: OrderStatusOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    orderid?: number
    orderuuid?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    date?: DateTimeFilter<"Order"> | Date | string
    statusId?: IntFilter<"Order"> | number
    orderinstructions?: StringFilter<"Order"> | string
    pizzas?: PizzaListRelationFilter
    deserts?: DesertListRelationFilter
    refreshments?: RefreshmentListRelationFilter
    status?: XOR<OrderStatusScalarRelationFilter, OrderStatusWhereInput>
  }, "orderid" | "orderuuid">

  export type OrderOrderByWithAggregationInput = {
    orderid?: SortOrder
    orderuuid?: SortOrder
    date?: SortOrder
    statusId?: SortOrder
    orderinstructions?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    orderid?: IntWithAggregatesFilter<"Order"> | number
    orderuuid?: StringWithAggregatesFilter<"Order"> | string
    date?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    statusId?: IntWithAggregatesFilter<"Order"> | number
    orderinstructions?: StringWithAggregatesFilter<"Order"> | string
  }

  export type OrderStatusWhereInput = {
    AND?: OrderStatusWhereInput | OrderStatusWhereInput[]
    OR?: OrderStatusWhereInput[]
    NOT?: OrderStatusWhereInput | OrderStatusWhereInput[]
    statusid?: IntFilter<"OrderStatus"> | number
    name?: StringFilter<"OrderStatus"> | string
    orders?: OrderListRelationFilter
  }

  export type OrderStatusOrderByWithRelationInput = {
    statusid?: SortOrder
    name?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
  }

  export type OrderStatusWhereUniqueInput = Prisma.AtLeast<{
    statusid?: number
    name?: string
    AND?: OrderStatusWhereInput | OrderStatusWhereInput[]
    OR?: OrderStatusWhereInput[]
    NOT?: OrderStatusWhereInput | OrderStatusWhereInput[]
    orders?: OrderListRelationFilter
  }, "statusid" | "name">

  export type OrderStatusOrderByWithAggregationInput = {
    statusid?: SortOrder
    name?: SortOrder
    _count?: OrderStatusCountOrderByAggregateInput
    _avg?: OrderStatusAvgOrderByAggregateInput
    _max?: OrderStatusMaxOrderByAggregateInput
    _min?: OrderStatusMinOrderByAggregateInput
    _sum?: OrderStatusSumOrderByAggregateInput
  }

  export type OrderStatusScalarWhereWithAggregatesInput = {
    AND?: OrderStatusScalarWhereWithAggregatesInput | OrderStatusScalarWhereWithAggregatesInput[]
    OR?: OrderStatusScalarWhereWithAggregatesInput[]
    NOT?: OrderStatusScalarWhereWithAggregatesInput | OrderStatusScalarWhereWithAggregatesInput[]
    statusid?: IntWithAggregatesFilter<"OrderStatus"> | number
    name?: StringWithAggregatesFilter<"OrderStatus"> | string
  }

  export type PizzaStoreCreateInput = {
    storeuuid?: string
    name: string
    location: string
    phone: number
    email: string
    pizzas?: PizzaCreateNestedManyWithoutStoreInput
  }

  export type PizzaStoreUncheckedCreateInput = {
    storeid?: number
    storeuuid?: string
    name: string
    location: string
    phone: number
    email: string
    pizzas?: PizzaUncheckedCreateNestedManyWithoutStoreInput
  }

  export type PizzaStoreUpdateInput = {
    storeuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    pizzas?: PizzaUpdateManyWithoutStoreNestedInput
  }

  export type PizzaStoreUncheckedUpdateInput = {
    storeid?: IntFieldUpdateOperationsInput | number
    storeuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    pizzas?: PizzaUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type PizzaStoreCreateManyInput = {
    storeid?: number
    storeuuid?: string
    name: string
    location: string
    phone: number
    email: string
  }

  export type PizzaStoreUpdateManyMutationInput = {
    storeuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
  }

  export type PizzaStoreUncheckedUpdateManyInput = {
    storeid?: IntFieldUpdateOperationsInput | number
    storeuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
  }

  export type PizzaCreateInput = {
    pizzauuid?: string
    name: string
    description: string
    price: number
    ingredients?: PizzaIngredientCreateNestedManyWithoutPizzasInput
    ratings?: PizzaRatingCreateNestedManyWithoutPizzaInput
    store: PizzaStoreCreateNestedOneWithoutPizzasInput
    orders?: OrderCreateNestedManyWithoutPizzasInput
  }

  export type PizzaUncheckedCreateInput = {
    pizzaid?: number
    pizzauuid?: string
    name: string
    description: string
    price: number
    storeId: number
    ingredients?: PizzaIngredientUncheckedCreateNestedManyWithoutPizzasInput
    ratings?: PizzaRatingUncheckedCreateNestedManyWithoutPizzaInput
    orders?: OrderUncheckedCreateNestedManyWithoutPizzasInput
  }

  export type PizzaUpdateInput = {
    pizzauuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ingredients?: PizzaIngredientUpdateManyWithoutPizzasNestedInput
    ratings?: PizzaRatingUpdateManyWithoutPizzaNestedInput
    store?: PizzaStoreUpdateOneRequiredWithoutPizzasNestedInput
    orders?: OrderUpdateManyWithoutPizzasNestedInput
  }

  export type PizzaUncheckedUpdateInput = {
    pizzaid?: IntFieldUpdateOperationsInput | number
    pizzauuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    ingredients?: PizzaIngredientUncheckedUpdateManyWithoutPizzasNestedInput
    ratings?: PizzaRatingUncheckedUpdateManyWithoutPizzaNestedInput
    orders?: OrderUncheckedUpdateManyWithoutPizzasNestedInput
  }

  export type PizzaCreateManyInput = {
    pizzaid?: number
    pizzauuid?: string
    name: string
    description: string
    price: number
    storeId: number
  }

  export type PizzaUpdateManyMutationInput = {
    pizzauuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type PizzaUncheckedUpdateManyInput = {
    pizzaid?: IntFieldUpdateOperationsInput | number
    pizzauuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
  }

  export type DesertCreateInput = {
    desertuuid?: string
    name: string
    price: number
    ingredients?: DesertIngredientsCreateNestedManyWithoutDesertsInput
    orders?: OrderCreateNestedManyWithoutDesertsInput
  }

  export type DesertUncheckedCreateInput = {
    desertid?: number
    desertuuid?: string
    name: string
    price: number
    ingredients?: DesertIngredientsUncheckedCreateNestedManyWithoutDesertsInput
    orders?: OrderUncheckedCreateNestedManyWithoutDesertsInput
  }

  export type DesertUpdateInput = {
    desertuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ingredients?: DesertIngredientsUpdateManyWithoutDesertsNestedInput
    orders?: OrderUpdateManyWithoutDesertsNestedInput
  }

  export type DesertUncheckedUpdateInput = {
    desertid?: IntFieldUpdateOperationsInput | number
    desertuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ingredients?: DesertIngredientsUncheckedUpdateManyWithoutDesertsNestedInput
    orders?: OrderUncheckedUpdateManyWithoutDesertsNestedInput
  }

  export type DesertCreateManyInput = {
    desertid?: number
    desertuuid?: string
    name: string
    price: number
  }

  export type DesertUpdateManyMutationInput = {
    desertuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type DesertUncheckedUpdateManyInput = {
    desertid?: IntFieldUpdateOperationsInput | number
    desertuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type DesertIngredientsCreateInput = {
    desertingredientuuid?: string
    name: string
    deserts?: DesertCreateNestedManyWithoutIngredientsInput
  }

  export type DesertIngredientsUncheckedCreateInput = {
    desertingredientid?: number
    desertingredientuuid?: string
    name: string
    deserts?: DesertUncheckedCreateNestedManyWithoutIngredientsInput
  }

  export type DesertIngredientsUpdateInput = {
    desertingredientuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deserts?: DesertUpdateManyWithoutIngredientsNestedInput
  }

  export type DesertIngredientsUncheckedUpdateInput = {
    desertingredientid?: IntFieldUpdateOperationsInput | number
    desertingredientuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deserts?: DesertUncheckedUpdateManyWithoutIngredientsNestedInput
  }

  export type DesertIngredientsCreateManyInput = {
    desertingredientid?: number
    desertingredientuuid?: string
    name: string
  }

  export type DesertIngredientsUpdateManyMutationInput = {
    desertingredientuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DesertIngredientsUncheckedUpdateManyInput = {
    desertingredientid?: IntFieldUpdateOperationsInput | number
    desertingredientuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PizzaIngredientCreateInput = {
    ingredientuuid?: string
    name: string
    pizzas?: PizzaCreateNestedManyWithoutIngredientsInput
  }

  export type PizzaIngredientUncheckedCreateInput = {
    ingredientid?: number
    ingredientuuid?: string
    name: string
    pizzas?: PizzaUncheckedCreateNestedManyWithoutIngredientsInput
  }

  export type PizzaIngredientUpdateInput = {
    ingredientuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pizzas?: PizzaUpdateManyWithoutIngredientsNestedInput
  }

  export type PizzaIngredientUncheckedUpdateInput = {
    ingredientid?: IntFieldUpdateOperationsInput | number
    ingredientuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pizzas?: PizzaUncheckedUpdateManyWithoutIngredientsNestedInput
  }

  export type PizzaIngredientCreateManyInput = {
    ingredientid?: number
    ingredientuuid?: string
    name: string
  }

  export type PizzaIngredientUpdateManyMutationInput = {
    ingredientuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PizzaIngredientUncheckedUpdateManyInput = {
    ingredientid?: IntFieldUpdateOperationsInput | number
    ingredientuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RefreshmentCreateInput = {
    refreshmentuuid?: string
    name: string
    price: number
    size: string
    orders?: OrderCreateNestedManyWithoutRefreshmentsInput
  }

  export type RefreshmentUncheckedCreateInput = {
    refreshmentid?: number
    refreshmentuuid?: string
    name: string
    price: number
    size: string
    orders?: OrderUncheckedCreateNestedManyWithoutRefreshmentsInput
  }

  export type RefreshmentUpdateInput = {
    refreshmentuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutRefreshmentsNestedInput
  }

  export type RefreshmentUncheckedUpdateInput = {
    refreshmentid?: IntFieldUpdateOperationsInput | number
    refreshmentuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutRefreshmentsNestedInput
  }

  export type RefreshmentCreateManyInput = {
    refreshmentid?: number
    refreshmentuuid?: string
    name: string
    price: number
    size: string
  }

  export type RefreshmentUpdateManyMutationInput = {
    refreshmentuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
  }

  export type RefreshmentUncheckedUpdateManyInput = {
    refreshmentid?: IntFieldUpdateOperationsInput | number
    refreshmentuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
  }

  export type PizzaRatingCreateInput = {
    ratinguuid?: string
    score?: number
    comment?: string | null
    pizza: PizzaCreateNestedOneWithoutRatingsInput
  }

  export type PizzaRatingUncheckedCreateInput = {
    ratingid?: number
    ratinguuid?: string
    score?: number
    comment?: string | null
    pizzaId: number
  }

  export type PizzaRatingUpdateInput = {
    ratinguuid?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    pizza?: PizzaUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type PizzaRatingUncheckedUpdateInput = {
    ratingid?: IntFieldUpdateOperationsInput | number
    ratinguuid?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    pizzaId?: IntFieldUpdateOperationsInput | number
  }

  export type PizzaRatingCreateManyInput = {
    ratingid?: number
    ratinguuid?: string
    score?: number
    comment?: string | null
    pizzaId: number
  }

  export type PizzaRatingUpdateManyMutationInput = {
    ratinguuid?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PizzaRatingUncheckedUpdateManyInput = {
    ratingid?: IntFieldUpdateOperationsInput | number
    ratinguuid?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    pizzaId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateInput = {
    orderuuid?: string
    date?: Date | string
    orderinstructions: string
    pizzas?: PizzaCreateNestedManyWithoutOrdersInput
    deserts?: DesertCreateNestedManyWithoutOrdersInput
    refreshments?: RefreshmentCreateNestedManyWithoutOrdersInput
    status: OrderStatusCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    orderid?: number
    orderuuid?: string
    date?: Date | string
    statusId: number
    orderinstructions: string
    pizzas?: PizzaUncheckedCreateNestedManyWithoutOrdersInput
    deserts?: DesertUncheckedCreateNestedManyWithoutOrdersInput
    refreshments?: RefreshmentUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrderUpdateInput = {
    orderuuid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    orderinstructions?: StringFieldUpdateOperationsInput | string
    pizzas?: PizzaUpdateManyWithoutOrdersNestedInput
    deserts?: DesertUpdateManyWithoutOrdersNestedInput
    refreshments?: RefreshmentUpdateManyWithoutOrdersNestedInput
    status?: OrderStatusUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    orderid?: IntFieldUpdateOperationsInput | number
    orderuuid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    statusId?: IntFieldUpdateOperationsInput | number
    orderinstructions?: StringFieldUpdateOperationsInput | string
    pizzas?: PizzaUncheckedUpdateManyWithoutOrdersNestedInput
    deserts?: DesertUncheckedUpdateManyWithoutOrdersNestedInput
    refreshments?: RefreshmentUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type OrderCreateManyInput = {
    orderid?: number
    orderuuid?: string
    date?: Date | string
    statusId: number
    orderinstructions: string
  }

  export type OrderUpdateManyMutationInput = {
    orderuuid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    orderinstructions?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUncheckedUpdateManyInput = {
    orderid?: IntFieldUpdateOperationsInput | number
    orderuuid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    statusId?: IntFieldUpdateOperationsInput | number
    orderinstructions?: StringFieldUpdateOperationsInput | string
  }

  export type OrderStatusCreateInput = {
    name: string
    orders?: OrderCreateNestedManyWithoutStatusInput
  }

  export type OrderStatusUncheckedCreateInput = {
    statusid?: number
    name: string
    orders?: OrderUncheckedCreateNestedManyWithoutStatusInput
  }

  export type OrderStatusUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutStatusNestedInput
  }

  export type OrderStatusUncheckedUpdateInput = {
    statusid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type OrderStatusCreateManyInput = {
    statusid?: number
    name: string
  }

  export type OrderStatusUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OrderStatusUncheckedUpdateManyInput = {
    statusid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
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

  export type PizzaListRelationFilter = {
    every?: PizzaWhereInput
    some?: PizzaWhereInput
    none?: PizzaWhereInput
  }

  export type PizzaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PizzaStoreCountOrderByAggregateInput = {
    storeid?: SortOrder
    storeuuid?: SortOrder
    name?: SortOrder
    location?: SortOrder
    phone?: SortOrder
    email?: SortOrder
  }

  export type PizzaStoreAvgOrderByAggregateInput = {
    storeid?: SortOrder
    phone?: SortOrder
  }

  export type PizzaStoreMaxOrderByAggregateInput = {
    storeid?: SortOrder
    storeuuid?: SortOrder
    name?: SortOrder
    location?: SortOrder
    phone?: SortOrder
    email?: SortOrder
  }

  export type PizzaStoreMinOrderByAggregateInput = {
    storeid?: SortOrder
    storeuuid?: SortOrder
    name?: SortOrder
    location?: SortOrder
    phone?: SortOrder
    email?: SortOrder
  }

  export type PizzaStoreSumOrderByAggregateInput = {
    storeid?: SortOrder
    phone?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PizzaIngredientListRelationFilter = {
    every?: PizzaIngredientWhereInput
    some?: PizzaIngredientWhereInput
    none?: PizzaIngredientWhereInput
  }

  export type PizzaRatingListRelationFilter = {
    every?: PizzaRatingWhereInput
    some?: PizzaRatingWhereInput
    none?: PizzaRatingWhereInput
  }

  export type PizzaStoreScalarRelationFilter = {
    is?: PizzaStoreWhereInput
    isNot?: PizzaStoreWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type PizzaIngredientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PizzaRatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PizzaCountOrderByAggregateInput = {
    pizzaid?: SortOrder
    pizzauuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    storeId?: SortOrder
  }

  export type PizzaAvgOrderByAggregateInput = {
    pizzaid?: SortOrder
    price?: SortOrder
    storeId?: SortOrder
  }

  export type PizzaMaxOrderByAggregateInput = {
    pizzaid?: SortOrder
    pizzauuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    storeId?: SortOrder
  }

  export type PizzaMinOrderByAggregateInput = {
    pizzaid?: SortOrder
    pizzauuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    storeId?: SortOrder
  }

  export type PizzaSumOrderByAggregateInput = {
    pizzaid?: SortOrder
    price?: SortOrder
    storeId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DesertIngredientsListRelationFilter = {
    every?: DesertIngredientsWhereInput
    some?: DesertIngredientsWhereInput
    none?: DesertIngredientsWhereInput
  }

  export type DesertIngredientsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DesertCountOrderByAggregateInput = {
    desertid?: SortOrder
    desertuuid?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type DesertAvgOrderByAggregateInput = {
    desertid?: SortOrder
    price?: SortOrder
  }

  export type DesertMaxOrderByAggregateInput = {
    desertid?: SortOrder
    desertuuid?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type DesertMinOrderByAggregateInput = {
    desertid?: SortOrder
    desertuuid?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type DesertSumOrderByAggregateInput = {
    desertid?: SortOrder
    price?: SortOrder
  }

  export type DesertListRelationFilter = {
    every?: DesertWhereInput
    some?: DesertWhereInput
    none?: DesertWhereInput
  }

  export type DesertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DesertIngredientsCountOrderByAggregateInput = {
    desertingredientid?: SortOrder
    desertingredientuuid?: SortOrder
    name?: SortOrder
  }

  export type DesertIngredientsAvgOrderByAggregateInput = {
    desertingredientid?: SortOrder
  }

  export type DesertIngredientsMaxOrderByAggregateInput = {
    desertingredientid?: SortOrder
    desertingredientuuid?: SortOrder
    name?: SortOrder
  }

  export type DesertIngredientsMinOrderByAggregateInput = {
    desertingredientid?: SortOrder
    desertingredientuuid?: SortOrder
    name?: SortOrder
  }

  export type DesertIngredientsSumOrderByAggregateInput = {
    desertingredientid?: SortOrder
  }

  export type PizzaIngredientCountOrderByAggregateInput = {
    ingredientid?: SortOrder
    ingredientuuid?: SortOrder
    name?: SortOrder
  }

  export type PizzaIngredientAvgOrderByAggregateInput = {
    ingredientid?: SortOrder
  }

  export type PizzaIngredientMaxOrderByAggregateInput = {
    ingredientid?: SortOrder
    ingredientuuid?: SortOrder
    name?: SortOrder
  }

  export type PizzaIngredientMinOrderByAggregateInput = {
    ingredientid?: SortOrder
    ingredientuuid?: SortOrder
    name?: SortOrder
  }

  export type PizzaIngredientSumOrderByAggregateInput = {
    ingredientid?: SortOrder
  }

  export type RefreshmentCountOrderByAggregateInput = {
    refreshmentid?: SortOrder
    refreshmentuuid?: SortOrder
    name?: SortOrder
    price?: SortOrder
    size?: SortOrder
  }

  export type RefreshmentAvgOrderByAggregateInput = {
    refreshmentid?: SortOrder
    price?: SortOrder
  }

  export type RefreshmentMaxOrderByAggregateInput = {
    refreshmentid?: SortOrder
    refreshmentuuid?: SortOrder
    name?: SortOrder
    price?: SortOrder
    size?: SortOrder
  }

  export type RefreshmentMinOrderByAggregateInput = {
    refreshmentid?: SortOrder
    refreshmentuuid?: SortOrder
    name?: SortOrder
    price?: SortOrder
    size?: SortOrder
  }

  export type RefreshmentSumOrderByAggregateInput = {
    refreshmentid?: SortOrder
    price?: SortOrder
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

  export type PizzaScalarRelationFilter = {
    is?: PizzaWhereInput
    isNot?: PizzaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PizzaRatingCountOrderByAggregateInput = {
    ratingid?: SortOrder
    ratinguuid?: SortOrder
    score?: SortOrder
    comment?: SortOrder
    pizzaId?: SortOrder
  }

  export type PizzaRatingAvgOrderByAggregateInput = {
    ratingid?: SortOrder
    score?: SortOrder
    pizzaId?: SortOrder
  }

  export type PizzaRatingMaxOrderByAggregateInput = {
    ratingid?: SortOrder
    ratinguuid?: SortOrder
    score?: SortOrder
    comment?: SortOrder
    pizzaId?: SortOrder
  }

  export type PizzaRatingMinOrderByAggregateInput = {
    ratingid?: SortOrder
    ratinguuid?: SortOrder
    score?: SortOrder
    comment?: SortOrder
    pizzaId?: SortOrder
  }

  export type PizzaRatingSumOrderByAggregateInput = {
    ratingid?: SortOrder
    score?: SortOrder
    pizzaId?: SortOrder
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

  export type RefreshmentListRelationFilter = {
    every?: RefreshmentWhereInput
    some?: RefreshmentWhereInput
    none?: RefreshmentWhereInput
  }

  export type OrderStatusScalarRelationFilter = {
    is?: OrderStatusWhereInput
    isNot?: OrderStatusWhereInput
  }

  export type RefreshmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    orderid?: SortOrder
    orderuuid?: SortOrder
    date?: SortOrder
    statusId?: SortOrder
    orderinstructions?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    orderid?: SortOrder
    statusId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    orderid?: SortOrder
    orderuuid?: SortOrder
    date?: SortOrder
    statusId?: SortOrder
    orderinstructions?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    orderid?: SortOrder
    orderuuid?: SortOrder
    date?: SortOrder
    statusId?: SortOrder
    orderinstructions?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    orderid?: SortOrder
    statusId?: SortOrder
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

  export type OrderStatusCountOrderByAggregateInput = {
    statusid?: SortOrder
    name?: SortOrder
  }

  export type OrderStatusAvgOrderByAggregateInput = {
    statusid?: SortOrder
  }

  export type OrderStatusMaxOrderByAggregateInput = {
    statusid?: SortOrder
    name?: SortOrder
  }

  export type OrderStatusMinOrderByAggregateInput = {
    statusid?: SortOrder
    name?: SortOrder
  }

  export type OrderStatusSumOrderByAggregateInput = {
    statusid?: SortOrder
  }

  export type PizzaCreateNestedManyWithoutStoreInput = {
    create?: XOR<PizzaCreateWithoutStoreInput, PizzaUncheckedCreateWithoutStoreInput> | PizzaCreateWithoutStoreInput[] | PizzaUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: PizzaCreateOrConnectWithoutStoreInput | PizzaCreateOrConnectWithoutStoreInput[]
    createMany?: PizzaCreateManyStoreInputEnvelope
    connect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
  }

  export type PizzaUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<PizzaCreateWithoutStoreInput, PizzaUncheckedCreateWithoutStoreInput> | PizzaCreateWithoutStoreInput[] | PizzaUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: PizzaCreateOrConnectWithoutStoreInput | PizzaCreateOrConnectWithoutStoreInput[]
    createMany?: PizzaCreateManyStoreInputEnvelope
    connect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PizzaUpdateManyWithoutStoreNestedInput = {
    create?: XOR<PizzaCreateWithoutStoreInput, PizzaUncheckedCreateWithoutStoreInput> | PizzaCreateWithoutStoreInput[] | PizzaUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: PizzaCreateOrConnectWithoutStoreInput | PizzaCreateOrConnectWithoutStoreInput[]
    upsert?: PizzaUpsertWithWhereUniqueWithoutStoreInput | PizzaUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: PizzaCreateManyStoreInputEnvelope
    set?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    disconnect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    delete?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    connect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    update?: PizzaUpdateWithWhereUniqueWithoutStoreInput | PizzaUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: PizzaUpdateManyWithWhereWithoutStoreInput | PizzaUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: PizzaScalarWhereInput | PizzaScalarWhereInput[]
  }

  export type PizzaUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<PizzaCreateWithoutStoreInput, PizzaUncheckedCreateWithoutStoreInput> | PizzaCreateWithoutStoreInput[] | PizzaUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: PizzaCreateOrConnectWithoutStoreInput | PizzaCreateOrConnectWithoutStoreInput[]
    upsert?: PizzaUpsertWithWhereUniqueWithoutStoreInput | PizzaUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: PizzaCreateManyStoreInputEnvelope
    set?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    disconnect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    delete?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    connect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    update?: PizzaUpdateWithWhereUniqueWithoutStoreInput | PizzaUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: PizzaUpdateManyWithWhereWithoutStoreInput | PizzaUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: PizzaScalarWhereInput | PizzaScalarWhereInput[]
  }

  export type PizzaIngredientCreateNestedManyWithoutPizzasInput = {
    create?: XOR<PizzaIngredientCreateWithoutPizzasInput, PizzaIngredientUncheckedCreateWithoutPizzasInput> | PizzaIngredientCreateWithoutPizzasInput[] | PizzaIngredientUncheckedCreateWithoutPizzasInput[]
    connectOrCreate?: PizzaIngredientCreateOrConnectWithoutPizzasInput | PizzaIngredientCreateOrConnectWithoutPizzasInput[]
    connect?: PizzaIngredientWhereUniqueInput | PizzaIngredientWhereUniqueInput[]
  }

  export type PizzaRatingCreateNestedManyWithoutPizzaInput = {
    create?: XOR<PizzaRatingCreateWithoutPizzaInput, PizzaRatingUncheckedCreateWithoutPizzaInput> | PizzaRatingCreateWithoutPizzaInput[] | PizzaRatingUncheckedCreateWithoutPizzaInput[]
    connectOrCreate?: PizzaRatingCreateOrConnectWithoutPizzaInput | PizzaRatingCreateOrConnectWithoutPizzaInput[]
    createMany?: PizzaRatingCreateManyPizzaInputEnvelope
    connect?: PizzaRatingWhereUniqueInput | PizzaRatingWhereUniqueInput[]
  }

  export type PizzaStoreCreateNestedOneWithoutPizzasInput = {
    create?: XOR<PizzaStoreCreateWithoutPizzasInput, PizzaStoreUncheckedCreateWithoutPizzasInput>
    connectOrCreate?: PizzaStoreCreateOrConnectWithoutPizzasInput
    connect?: PizzaStoreWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutPizzasInput = {
    create?: XOR<OrderCreateWithoutPizzasInput, OrderUncheckedCreateWithoutPizzasInput> | OrderCreateWithoutPizzasInput[] | OrderUncheckedCreateWithoutPizzasInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPizzasInput | OrderCreateOrConnectWithoutPizzasInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PizzaIngredientUncheckedCreateNestedManyWithoutPizzasInput = {
    create?: XOR<PizzaIngredientCreateWithoutPizzasInput, PizzaIngredientUncheckedCreateWithoutPizzasInput> | PizzaIngredientCreateWithoutPizzasInput[] | PizzaIngredientUncheckedCreateWithoutPizzasInput[]
    connectOrCreate?: PizzaIngredientCreateOrConnectWithoutPizzasInput | PizzaIngredientCreateOrConnectWithoutPizzasInput[]
    connect?: PizzaIngredientWhereUniqueInput | PizzaIngredientWhereUniqueInput[]
  }

  export type PizzaRatingUncheckedCreateNestedManyWithoutPizzaInput = {
    create?: XOR<PizzaRatingCreateWithoutPizzaInput, PizzaRatingUncheckedCreateWithoutPizzaInput> | PizzaRatingCreateWithoutPizzaInput[] | PizzaRatingUncheckedCreateWithoutPizzaInput[]
    connectOrCreate?: PizzaRatingCreateOrConnectWithoutPizzaInput | PizzaRatingCreateOrConnectWithoutPizzaInput[]
    createMany?: PizzaRatingCreateManyPizzaInputEnvelope
    connect?: PizzaRatingWhereUniqueInput | PizzaRatingWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutPizzasInput = {
    create?: XOR<OrderCreateWithoutPizzasInput, OrderUncheckedCreateWithoutPizzasInput> | OrderCreateWithoutPizzasInput[] | OrderUncheckedCreateWithoutPizzasInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPizzasInput | OrderCreateOrConnectWithoutPizzasInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PizzaIngredientUpdateManyWithoutPizzasNestedInput = {
    create?: XOR<PizzaIngredientCreateWithoutPizzasInput, PizzaIngredientUncheckedCreateWithoutPizzasInput> | PizzaIngredientCreateWithoutPizzasInput[] | PizzaIngredientUncheckedCreateWithoutPizzasInput[]
    connectOrCreate?: PizzaIngredientCreateOrConnectWithoutPizzasInput | PizzaIngredientCreateOrConnectWithoutPizzasInput[]
    upsert?: PizzaIngredientUpsertWithWhereUniqueWithoutPizzasInput | PizzaIngredientUpsertWithWhereUniqueWithoutPizzasInput[]
    set?: PizzaIngredientWhereUniqueInput | PizzaIngredientWhereUniqueInput[]
    disconnect?: PizzaIngredientWhereUniqueInput | PizzaIngredientWhereUniqueInput[]
    delete?: PizzaIngredientWhereUniqueInput | PizzaIngredientWhereUniqueInput[]
    connect?: PizzaIngredientWhereUniqueInput | PizzaIngredientWhereUniqueInput[]
    update?: PizzaIngredientUpdateWithWhereUniqueWithoutPizzasInput | PizzaIngredientUpdateWithWhereUniqueWithoutPizzasInput[]
    updateMany?: PizzaIngredientUpdateManyWithWhereWithoutPizzasInput | PizzaIngredientUpdateManyWithWhereWithoutPizzasInput[]
    deleteMany?: PizzaIngredientScalarWhereInput | PizzaIngredientScalarWhereInput[]
  }

  export type PizzaRatingUpdateManyWithoutPizzaNestedInput = {
    create?: XOR<PizzaRatingCreateWithoutPizzaInput, PizzaRatingUncheckedCreateWithoutPizzaInput> | PizzaRatingCreateWithoutPizzaInput[] | PizzaRatingUncheckedCreateWithoutPizzaInput[]
    connectOrCreate?: PizzaRatingCreateOrConnectWithoutPizzaInput | PizzaRatingCreateOrConnectWithoutPizzaInput[]
    upsert?: PizzaRatingUpsertWithWhereUniqueWithoutPizzaInput | PizzaRatingUpsertWithWhereUniqueWithoutPizzaInput[]
    createMany?: PizzaRatingCreateManyPizzaInputEnvelope
    set?: PizzaRatingWhereUniqueInput | PizzaRatingWhereUniqueInput[]
    disconnect?: PizzaRatingWhereUniqueInput | PizzaRatingWhereUniqueInput[]
    delete?: PizzaRatingWhereUniqueInput | PizzaRatingWhereUniqueInput[]
    connect?: PizzaRatingWhereUniqueInput | PizzaRatingWhereUniqueInput[]
    update?: PizzaRatingUpdateWithWhereUniqueWithoutPizzaInput | PizzaRatingUpdateWithWhereUniqueWithoutPizzaInput[]
    updateMany?: PizzaRatingUpdateManyWithWhereWithoutPizzaInput | PizzaRatingUpdateManyWithWhereWithoutPizzaInput[]
    deleteMany?: PizzaRatingScalarWhereInput | PizzaRatingScalarWhereInput[]
  }

  export type PizzaStoreUpdateOneRequiredWithoutPizzasNestedInput = {
    create?: XOR<PizzaStoreCreateWithoutPizzasInput, PizzaStoreUncheckedCreateWithoutPizzasInput>
    connectOrCreate?: PizzaStoreCreateOrConnectWithoutPizzasInput
    upsert?: PizzaStoreUpsertWithoutPizzasInput
    connect?: PizzaStoreWhereUniqueInput
    update?: XOR<XOR<PizzaStoreUpdateToOneWithWhereWithoutPizzasInput, PizzaStoreUpdateWithoutPizzasInput>, PizzaStoreUncheckedUpdateWithoutPizzasInput>
  }

  export type OrderUpdateManyWithoutPizzasNestedInput = {
    create?: XOR<OrderCreateWithoutPizzasInput, OrderUncheckedCreateWithoutPizzasInput> | OrderCreateWithoutPizzasInput[] | OrderUncheckedCreateWithoutPizzasInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPizzasInput | OrderCreateOrConnectWithoutPizzasInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutPizzasInput | OrderUpsertWithWhereUniqueWithoutPizzasInput[]
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutPizzasInput | OrderUpdateWithWhereUniqueWithoutPizzasInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutPizzasInput | OrderUpdateManyWithWhereWithoutPizzasInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PizzaIngredientUncheckedUpdateManyWithoutPizzasNestedInput = {
    create?: XOR<PizzaIngredientCreateWithoutPizzasInput, PizzaIngredientUncheckedCreateWithoutPizzasInput> | PizzaIngredientCreateWithoutPizzasInput[] | PizzaIngredientUncheckedCreateWithoutPizzasInput[]
    connectOrCreate?: PizzaIngredientCreateOrConnectWithoutPizzasInput | PizzaIngredientCreateOrConnectWithoutPizzasInput[]
    upsert?: PizzaIngredientUpsertWithWhereUniqueWithoutPizzasInput | PizzaIngredientUpsertWithWhereUniqueWithoutPizzasInput[]
    set?: PizzaIngredientWhereUniqueInput | PizzaIngredientWhereUniqueInput[]
    disconnect?: PizzaIngredientWhereUniqueInput | PizzaIngredientWhereUniqueInput[]
    delete?: PizzaIngredientWhereUniqueInput | PizzaIngredientWhereUniqueInput[]
    connect?: PizzaIngredientWhereUniqueInput | PizzaIngredientWhereUniqueInput[]
    update?: PizzaIngredientUpdateWithWhereUniqueWithoutPizzasInput | PizzaIngredientUpdateWithWhereUniqueWithoutPizzasInput[]
    updateMany?: PizzaIngredientUpdateManyWithWhereWithoutPizzasInput | PizzaIngredientUpdateManyWithWhereWithoutPizzasInput[]
    deleteMany?: PizzaIngredientScalarWhereInput | PizzaIngredientScalarWhereInput[]
  }

  export type PizzaRatingUncheckedUpdateManyWithoutPizzaNestedInput = {
    create?: XOR<PizzaRatingCreateWithoutPizzaInput, PizzaRatingUncheckedCreateWithoutPizzaInput> | PizzaRatingCreateWithoutPizzaInput[] | PizzaRatingUncheckedCreateWithoutPizzaInput[]
    connectOrCreate?: PizzaRatingCreateOrConnectWithoutPizzaInput | PizzaRatingCreateOrConnectWithoutPizzaInput[]
    upsert?: PizzaRatingUpsertWithWhereUniqueWithoutPizzaInput | PizzaRatingUpsertWithWhereUniqueWithoutPizzaInput[]
    createMany?: PizzaRatingCreateManyPizzaInputEnvelope
    set?: PizzaRatingWhereUniqueInput | PizzaRatingWhereUniqueInput[]
    disconnect?: PizzaRatingWhereUniqueInput | PizzaRatingWhereUniqueInput[]
    delete?: PizzaRatingWhereUniqueInput | PizzaRatingWhereUniqueInput[]
    connect?: PizzaRatingWhereUniqueInput | PizzaRatingWhereUniqueInput[]
    update?: PizzaRatingUpdateWithWhereUniqueWithoutPizzaInput | PizzaRatingUpdateWithWhereUniqueWithoutPizzaInput[]
    updateMany?: PizzaRatingUpdateManyWithWhereWithoutPizzaInput | PizzaRatingUpdateManyWithWhereWithoutPizzaInput[]
    deleteMany?: PizzaRatingScalarWhereInput | PizzaRatingScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutPizzasNestedInput = {
    create?: XOR<OrderCreateWithoutPizzasInput, OrderUncheckedCreateWithoutPizzasInput> | OrderCreateWithoutPizzasInput[] | OrderUncheckedCreateWithoutPizzasInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPizzasInput | OrderCreateOrConnectWithoutPizzasInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutPizzasInput | OrderUpsertWithWhereUniqueWithoutPizzasInput[]
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutPizzasInput | OrderUpdateWithWhereUniqueWithoutPizzasInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutPizzasInput | OrderUpdateManyWithWhereWithoutPizzasInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type DesertIngredientsCreateNestedManyWithoutDesertsInput = {
    create?: XOR<DesertIngredientsCreateWithoutDesertsInput, DesertIngredientsUncheckedCreateWithoutDesertsInput> | DesertIngredientsCreateWithoutDesertsInput[] | DesertIngredientsUncheckedCreateWithoutDesertsInput[]
    connectOrCreate?: DesertIngredientsCreateOrConnectWithoutDesertsInput | DesertIngredientsCreateOrConnectWithoutDesertsInput[]
    connect?: DesertIngredientsWhereUniqueInput | DesertIngredientsWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutDesertsInput = {
    create?: XOR<OrderCreateWithoutDesertsInput, OrderUncheckedCreateWithoutDesertsInput> | OrderCreateWithoutDesertsInput[] | OrderUncheckedCreateWithoutDesertsInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDesertsInput | OrderCreateOrConnectWithoutDesertsInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type DesertIngredientsUncheckedCreateNestedManyWithoutDesertsInput = {
    create?: XOR<DesertIngredientsCreateWithoutDesertsInput, DesertIngredientsUncheckedCreateWithoutDesertsInput> | DesertIngredientsCreateWithoutDesertsInput[] | DesertIngredientsUncheckedCreateWithoutDesertsInput[]
    connectOrCreate?: DesertIngredientsCreateOrConnectWithoutDesertsInput | DesertIngredientsCreateOrConnectWithoutDesertsInput[]
    connect?: DesertIngredientsWhereUniqueInput | DesertIngredientsWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutDesertsInput = {
    create?: XOR<OrderCreateWithoutDesertsInput, OrderUncheckedCreateWithoutDesertsInput> | OrderCreateWithoutDesertsInput[] | OrderUncheckedCreateWithoutDesertsInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDesertsInput | OrderCreateOrConnectWithoutDesertsInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type DesertIngredientsUpdateManyWithoutDesertsNestedInput = {
    create?: XOR<DesertIngredientsCreateWithoutDesertsInput, DesertIngredientsUncheckedCreateWithoutDesertsInput> | DesertIngredientsCreateWithoutDesertsInput[] | DesertIngredientsUncheckedCreateWithoutDesertsInput[]
    connectOrCreate?: DesertIngredientsCreateOrConnectWithoutDesertsInput | DesertIngredientsCreateOrConnectWithoutDesertsInput[]
    upsert?: DesertIngredientsUpsertWithWhereUniqueWithoutDesertsInput | DesertIngredientsUpsertWithWhereUniqueWithoutDesertsInput[]
    set?: DesertIngredientsWhereUniqueInput | DesertIngredientsWhereUniqueInput[]
    disconnect?: DesertIngredientsWhereUniqueInput | DesertIngredientsWhereUniqueInput[]
    delete?: DesertIngredientsWhereUniqueInput | DesertIngredientsWhereUniqueInput[]
    connect?: DesertIngredientsWhereUniqueInput | DesertIngredientsWhereUniqueInput[]
    update?: DesertIngredientsUpdateWithWhereUniqueWithoutDesertsInput | DesertIngredientsUpdateWithWhereUniqueWithoutDesertsInput[]
    updateMany?: DesertIngredientsUpdateManyWithWhereWithoutDesertsInput | DesertIngredientsUpdateManyWithWhereWithoutDesertsInput[]
    deleteMany?: DesertIngredientsScalarWhereInput | DesertIngredientsScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutDesertsNestedInput = {
    create?: XOR<OrderCreateWithoutDesertsInput, OrderUncheckedCreateWithoutDesertsInput> | OrderCreateWithoutDesertsInput[] | OrderUncheckedCreateWithoutDesertsInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDesertsInput | OrderCreateOrConnectWithoutDesertsInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutDesertsInput | OrderUpsertWithWhereUniqueWithoutDesertsInput[]
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutDesertsInput | OrderUpdateWithWhereUniqueWithoutDesertsInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutDesertsInput | OrderUpdateManyWithWhereWithoutDesertsInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type DesertIngredientsUncheckedUpdateManyWithoutDesertsNestedInput = {
    create?: XOR<DesertIngredientsCreateWithoutDesertsInput, DesertIngredientsUncheckedCreateWithoutDesertsInput> | DesertIngredientsCreateWithoutDesertsInput[] | DesertIngredientsUncheckedCreateWithoutDesertsInput[]
    connectOrCreate?: DesertIngredientsCreateOrConnectWithoutDesertsInput | DesertIngredientsCreateOrConnectWithoutDesertsInput[]
    upsert?: DesertIngredientsUpsertWithWhereUniqueWithoutDesertsInput | DesertIngredientsUpsertWithWhereUniqueWithoutDesertsInput[]
    set?: DesertIngredientsWhereUniqueInput | DesertIngredientsWhereUniqueInput[]
    disconnect?: DesertIngredientsWhereUniqueInput | DesertIngredientsWhereUniqueInput[]
    delete?: DesertIngredientsWhereUniqueInput | DesertIngredientsWhereUniqueInput[]
    connect?: DesertIngredientsWhereUniqueInput | DesertIngredientsWhereUniqueInput[]
    update?: DesertIngredientsUpdateWithWhereUniqueWithoutDesertsInput | DesertIngredientsUpdateWithWhereUniqueWithoutDesertsInput[]
    updateMany?: DesertIngredientsUpdateManyWithWhereWithoutDesertsInput | DesertIngredientsUpdateManyWithWhereWithoutDesertsInput[]
    deleteMany?: DesertIngredientsScalarWhereInput | DesertIngredientsScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutDesertsNestedInput = {
    create?: XOR<OrderCreateWithoutDesertsInput, OrderUncheckedCreateWithoutDesertsInput> | OrderCreateWithoutDesertsInput[] | OrderUncheckedCreateWithoutDesertsInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDesertsInput | OrderCreateOrConnectWithoutDesertsInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutDesertsInput | OrderUpsertWithWhereUniqueWithoutDesertsInput[]
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutDesertsInput | OrderUpdateWithWhereUniqueWithoutDesertsInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutDesertsInput | OrderUpdateManyWithWhereWithoutDesertsInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type DesertCreateNestedManyWithoutIngredientsInput = {
    create?: XOR<DesertCreateWithoutIngredientsInput, DesertUncheckedCreateWithoutIngredientsInput> | DesertCreateWithoutIngredientsInput[] | DesertUncheckedCreateWithoutIngredientsInput[]
    connectOrCreate?: DesertCreateOrConnectWithoutIngredientsInput | DesertCreateOrConnectWithoutIngredientsInput[]
    connect?: DesertWhereUniqueInput | DesertWhereUniqueInput[]
  }

  export type DesertUncheckedCreateNestedManyWithoutIngredientsInput = {
    create?: XOR<DesertCreateWithoutIngredientsInput, DesertUncheckedCreateWithoutIngredientsInput> | DesertCreateWithoutIngredientsInput[] | DesertUncheckedCreateWithoutIngredientsInput[]
    connectOrCreate?: DesertCreateOrConnectWithoutIngredientsInput | DesertCreateOrConnectWithoutIngredientsInput[]
    connect?: DesertWhereUniqueInput | DesertWhereUniqueInput[]
  }

  export type DesertUpdateManyWithoutIngredientsNestedInput = {
    create?: XOR<DesertCreateWithoutIngredientsInput, DesertUncheckedCreateWithoutIngredientsInput> | DesertCreateWithoutIngredientsInput[] | DesertUncheckedCreateWithoutIngredientsInput[]
    connectOrCreate?: DesertCreateOrConnectWithoutIngredientsInput | DesertCreateOrConnectWithoutIngredientsInput[]
    upsert?: DesertUpsertWithWhereUniqueWithoutIngredientsInput | DesertUpsertWithWhereUniqueWithoutIngredientsInput[]
    set?: DesertWhereUniqueInput | DesertWhereUniqueInput[]
    disconnect?: DesertWhereUniqueInput | DesertWhereUniqueInput[]
    delete?: DesertWhereUniqueInput | DesertWhereUniqueInput[]
    connect?: DesertWhereUniqueInput | DesertWhereUniqueInput[]
    update?: DesertUpdateWithWhereUniqueWithoutIngredientsInput | DesertUpdateWithWhereUniqueWithoutIngredientsInput[]
    updateMany?: DesertUpdateManyWithWhereWithoutIngredientsInput | DesertUpdateManyWithWhereWithoutIngredientsInput[]
    deleteMany?: DesertScalarWhereInput | DesertScalarWhereInput[]
  }

  export type DesertUncheckedUpdateManyWithoutIngredientsNestedInput = {
    create?: XOR<DesertCreateWithoutIngredientsInput, DesertUncheckedCreateWithoutIngredientsInput> | DesertCreateWithoutIngredientsInput[] | DesertUncheckedCreateWithoutIngredientsInput[]
    connectOrCreate?: DesertCreateOrConnectWithoutIngredientsInput | DesertCreateOrConnectWithoutIngredientsInput[]
    upsert?: DesertUpsertWithWhereUniqueWithoutIngredientsInput | DesertUpsertWithWhereUniqueWithoutIngredientsInput[]
    set?: DesertWhereUniqueInput | DesertWhereUniqueInput[]
    disconnect?: DesertWhereUniqueInput | DesertWhereUniqueInput[]
    delete?: DesertWhereUniqueInput | DesertWhereUniqueInput[]
    connect?: DesertWhereUniqueInput | DesertWhereUniqueInput[]
    update?: DesertUpdateWithWhereUniqueWithoutIngredientsInput | DesertUpdateWithWhereUniqueWithoutIngredientsInput[]
    updateMany?: DesertUpdateManyWithWhereWithoutIngredientsInput | DesertUpdateManyWithWhereWithoutIngredientsInput[]
    deleteMany?: DesertScalarWhereInput | DesertScalarWhereInput[]
  }

  export type PizzaCreateNestedManyWithoutIngredientsInput = {
    create?: XOR<PizzaCreateWithoutIngredientsInput, PizzaUncheckedCreateWithoutIngredientsInput> | PizzaCreateWithoutIngredientsInput[] | PizzaUncheckedCreateWithoutIngredientsInput[]
    connectOrCreate?: PizzaCreateOrConnectWithoutIngredientsInput | PizzaCreateOrConnectWithoutIngredientsInput[]
    connect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
  }

  export type PizzaUncheckedCreateNestedManyWithoutIngredientsInput = {
    create?: XOR<PizzaCreateWithoutIngredientsInput, PizzaUncheckedCreateWithoutIngredientsInput> | PizzaCreateWithoutIngredientsInput[] | PizzaUncheckedCreateWithoutIngredientsInput[]
    connectOrCreate?: PizzaCreateOrConnectWithoutIngredientsInput | PizzaCreateOrConnectWithoutIngredientsInput[]
    connect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
  }

  export type PizzaUpdateManyWithoutIngredientsNestedInput = {
    create?: XOR<PizzaCreateWithoutIngredientsInput, PizzaUncheckedCreateWithoutIngredientsInput> | PizzaCreateWithoutIngredientsInput[] | PizzaUncheckedCreateWithoutIngredientsInput[]
    connectOrCreate?: PizzaCreateOrConnectWithoutIngredientsInput | PizzaCreateOrConnectWithoutIngredientsInput[]
    upsert?: PizzaUpsertWithWhereUniqueWithoutIngredientsInput | PizzaUpsertWithWhereUniqueWithoutIngredientsInput[]
    set?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    disconnect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    delete?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    connect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    update?: PizzaUpdateWithWhereUniqueWithoutIngredientsInput | PizzaUpdateWithWhereUniqueWithoutIngredientsInput[]
    updateMany?: PizzaUpdateManyWithWhereWithoutIngredientsInput | PizzaUpdateManyWithWhereWithoutIngredientsInput[]
    deleteMany?: PizzaScalarWhereInput | PizzaScalarWhereInput[]
  }

  export type PizzaUncheckedUpdateManyWithoutIngredientsNestedInput = {
    create?: XOR<PizzaCreateWithoutIngredientsInput, PizzaUncheckedCreateWithoutIngredientsInput> | PizzaCreateWithoutIngredientsInput[] | PizzaUncheckedCreateWithoutIngredientsInput[]
    connectOrCreate?: PizzaCreateOrConnectWithoutIngredientsInput | PizzaCreateOrConnectWithoutIngredientsInput[]
    upsert?: PizzaUpsertWithWhereUniqueWithoutIngredientsInput | PizzaUpsertWithWhereUniqueWithoutIngredientsInput[]
    set?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    disconnect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    delete?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    connect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    update?: PizzaUpdateWithWhereUniqueWithoutIngredientsInput | PizzaUpdateWithWhereUniqueWithoutIngredientsInput[]
    updateMany?: PizzaUpdateManyWithWhereWithoutIngredientsInput | PizzaUpdateManyWithWhereWithoutIngredientsInput[]
    deleteMany?: PizzaScalarWhereInput | PizzaScalarWhereInput[]
  }

  export type OrderCreateNestedManyWithoutRefreshmentsInput = {
    create?: XOR<OrderCreateWithoutRefreshmentsInput, OrderUncheckedCreateWithoutRefreshmentsInput> | OrderCreateWithoutRefreshmentsInput[] | OrderUncheckedCreateWithoutRefreshmentsInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRefreshmentsInput | OrderCreateOrConnectWithoutRefreshmentsInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutRefreshmentsInput = {
    create?: XOR<OrderCreateWithoutRefreshmentsInput, OrderUncheckedCreateWithoutRefreshmentsInput> | OrderCreateWithoutRefreshmentsInput[] | OrderUncheckedCreateWithoutRefreshmentsInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRefreshmentsInput | OrderCreateOrConnectWithoutRefreshmentsInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUpdateManyWithoutRefreshmentsNestedInput = {
    create?: XOR<OrderCreateWithoutRefreshmentsInput, OrderUncheckedCreateWithoutRefreshmentsInput> | OrderCreateWithoutRefreshmentsInput[] | OrderUncheckedCreateWithoutRefreshmentsInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRefreshmentsInput | OrderCreateOrConnectWithoutRefreshmentsInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutRefreshmentsInput | OrderUpsertWithWhereUniqueWithoutRefreshmentsInput[]
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutRefreshmentsInput | OrderUpdateWithWhereUniqueWithoutRefreshmentsInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutRefreshmentsInput | OrderUpdateManyWithWhereWithoutRefreshmentsInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutRefreshmentsNestedInput = {
    create?: XOR<OrderCreateWithoutRefreshmentsInput, OrderUncheckedCreateWithoutRefreshmentsInput> | OrderCreateWithoutRefreshmentsInput[] | OrderUncheckedCreateWithoutRefreshmentsInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRefreshmentsInput | OrderCreateOrConnectWithoutRefreshmentsInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutRefreshmentsInput | OrderUpsertWithWhereUniqueWithoutRefreshmentsInput[]
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutRefreshmentsInput | OrderUpdateWithWhereUniqueWithoutRefreshmentsInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutRefreshmentsInput | OrderUpdateManyWithWhereWithoutRefreshmentsInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PizzaCreateNestedOneWithoutRatingsInput = {
    create?: XOR<PizzaCreateWithoutRatingsInput, PizzaUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: PizzaCreateOrConnectWithoutRatingsInput
    connect?: PizzaWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PizzaUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<PizzaCreateWithoutRatingsInput, PizzaUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: PizzaCreateOrConnectWithoutRatingsInput
    upsert?: PizzaUpsertWithoutRatingsInput
    connect?: PizzaWhereUniqueInput
    update?: XOR<XOR<PizzaUpdateToOneWithWhereWithoutRatingsInput, PizzaUpdateWithoutRatingsInput>, PizzaUncheckedUpdateWithoutRatingsInput>
  }

  export type PizzaCreateNestedManyWithoutOrdersInput = {
    create?: XOR<PizzaCreateWithoutOrdersInput, PizzaUncheckedCreateWithoutOrdersInput> | PizzaCreateWithoutOrdersInput[] | PizzaUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: PizzaCreateOrConnectWithoutOrdersInput | PizzaCreateOrConnectWithoutOrdersInput[]
    connect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
  }

  export type DesertCreateNestedManyWithoutOrdersInput = {
    create?: XOR<DesertCreateWithoutOrdersInput, DesertUncheckedCreateWithoutOrdersInput> | DesertCreateWithoutOrdersInput[] | DesertUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: DesertCreateOrConnectWithoutOrdersInput | DesertCreateOrConnectWithoutOrdersInput[]
    connect?: DesertWhereUniqueInput | DesertWhereUniqueInput[]
  }

  export type RefreshmentCreateNestedManyWithoutOrdersInput = {
    create?: XOR<RefreshmentCreateWithoutOrdersInput, RefreshmentUncheckedCreateWithoutOrdersInput> | RefreshmentCreateWithoutOrdersInput[] | RefreshmentUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: RefreshmentCreateOrConnectWithoutOrdersInput | RefreshmentCreateOrConnectWithoutOrdersInput[]
    connect?: RefreshmentWhereUniqueInput | RefreshmentWhereUniqueInput[]
  }

  export type OrderStatusCreateNestedOneWithoutOrdersInput = {
    create?: XOR<OrderStatusCreateWithoutOrdersInput, OrderStatusUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: OrderStatusCreateOrConnectWithoutOrdersInput
    connect?: OrderStatusWhereUniqueInput
  }

  export type PizzaUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<PizzaCreateWithoutOrdersInput, PizzaUncheckedCreateWithoutOrdersInput> | PizzaCreateWithoutOrdersInput[] | PizzaUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: PizzaCreateOrConnectWithoutOrdersInput | PizzaCreateOrConnectWithoutOrdersInput[]
    connect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
  }

  export type DesertUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<DesertCreateWithoutOrdersInput, DesertUncheckedCreateWithoutOrdersInput> | DesertCreateWithoutOrdersInput[] | DesertUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: DesertCreateOrConnectWithoutOrdersInput | DesertCreateOrConnectWithoutOrdersInput[]
    connect?: DesertWhereUniqueInput | DesertWhereUniqueInput[]
  }

  export type RefreshmentUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<RefreshmentCreateWithoutOrdersInput, RefreshmentUncheckedCreateWithoutOrdersInput> | RefreshmentCreateWithoutOrdersInput[] | RefreshmentUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: RefreshmentCreateOrConnectWithoutOrdersInput | RefreshmentCreateOrConnectWithoutOrdersInput[]
    connect?: RefreshmentWhereUniqueInput | RefreshmentWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PizzaUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<PizzaCreateWithoutOrdersInput, PizzaUncheckedCreateWithoutOrdersInput> | PizzaCreateWithoutOrdersInput[] | PizzaUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: PizzaCreateOrConnectWithoutOrdersInput | PizzaCreateOrConnectWithoutOrdersInput[]
    upsert?: PizzaUpsertWithWhereUniqueWithoutOrdersInput | PizzaUpsertWithWhereUniqueWithoutOrdersInput[]
    set?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    disconnect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    delete?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    connect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    update?: PizzaUpdateWithWhereUniqueWithoutOrdersInput | PizzaUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: PizzaUpdateManyWithWhereWithoutOrdersInput | PizzaUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: PizzaScalarWhereInput | PizzaScalarWhereInput[]
  }

  export type DesertUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<DesertCreateWithoutOrdersInput, DesertUncheckedCreateWithoutOrdersInput> | DesertCreateWithoutOrdersInput[] | DesertUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: DesertCreateOrConnectWithoutOrdersInput | DesertCreateOrConnectWithoutOrdersInput[]
    upsert?: DesertUpsertWithWhereUniqueWithoutOrdersInput | DesertUpsertWithWhereUniqueWithoutOrdersInput[]
    set?: DesertWhereUniqueInput | DesertWhereUniqueInput[]
    disconnect?: DesertWhereUniqueInput | DesertWhereUniqueInput[]
    delete?: DesertWhereUniqueInput | DesertWhereUniqueInput[]
    connect?: DesertWhereUniqueInput | DesertWhereUniqueInput[]
    update?: DesertUpdateWithWhereUniqueWithoutOrdersInput | DesertUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: DesertUpdateManyWithWhereWithoutOrdersInput | DesertUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: DesertScalarWhereInput | DesertScalarWhereInput[]
  }

  export type RefreshmentUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<RefreshmentCreateWithoutOrdersInput, RefreshmentUncheckedCreateWithoutOrdersInput> | RefreshmentCreateWithoutOrdersInput[] | RefreshmentUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: RefreshmentCreateOrConnectWithoutOrdersInput | RefreshmentCreateOrConnectWithoutOrdersInput[]
    upsert?: RefreshmentUpsertWithWhereUniqueWithoutOrdersInput | RefreshmentUpsertWithWhereUniqueWithoutOrdersInput[]
    set?: RefreshmentWhereUniqueInput | RefreshmentWhereUniqueInput[]
    disconnect?: RefreshmentWhereUniqueInput | RefreshmentWhereUniqueInput[]
    delete?: RefreshmentWhereUniqueInput | RefreshmentWhereUniqueInput[]
    connect?: RefreshmentWhereUniqueInput | RefreshmentWhereUniqueInput[]
    update?: RefreshmentUpdateWithWhereUniqueWithoutOrdersInput | RefreshmentUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: RefreshmentUpdateManyWithWhereWithoutOrdersInput | RefreshmentUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: RefreshmentScalarWhereInput | RefreshmentScalarWhereInput[]
  }

  export type OrderStatusUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<OrderStatusCreateWithoutOrdersInput, OrderStatusUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: OrderStatusCreateOrConnectWithoutOrdersInput
    upsert?: OrderStatusUpsertWithoutOrdersInput
    connect?: OrderStatusWhereUniqueInput
    update?: XOR<XOR<OrderStatusUpdateToOneWithWhereWithoutOrdersInput, OrderStatusUpdateWithoutOrdersInput>, OrderStatusUncheckedUpdateWithoutOrdersInput>
  }

  export type PizzaUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<PizzaCreateWithoutOrdersInput, PizzaUncheckedCreateWithoutOrdersInput> | PizzaCreateWithoutOrdersInput[] | PizzaUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: PizzaCreateOrConnectWithoutOrdersInput | PizzaCreateOrConnectWithoutOrdersInput[]
    upsert?: PizzaUpsertWithWhereUniqueWithoutOrdersInput | PizzaUpsertWithWhereUniqueWithoutOrdersInput[]
    set?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    disconnect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    delete?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    connect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    update?: PizzaUpdateWithWhereUniqueWithoutOrdersInput | PizzaUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: PizzaUpdateManyWithWhereWithoutOrdersInput | PizzaUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: PizzaScalarWhereInput | PizzaScalarWhereInput[]
  }

  export type DesertUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<DesertCreateWithoutOrdersInput, DesertUncheckedCreateWithoutOrdersInput> | DesertCreateWithoutOrdersInput[] | DesertUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: DesertCreateOrConnectWithoutOrdersInput | DesertCreateOrConnectWithoutOrdersInput[]
    upsert?: DesertUpsertWithWhereUniqueWithoutOrdersInput | DesertUpsertWithWhereUniqueWithoutOrdersInput[]
    set?: DesertWhereUniqueInput | DesertWhereUniqueInput[]
    disconnect?: DesertWhereUniqueInput | DesertWhereUniqueInput[]
    delete?: DesertWhereUniqueInput | DesertWhereUniqueInput[]
    connect?: DesertWhereUniqueInput | DesertWhereUniqueInput[]
    update?: DesertUpdateWithWhereUniqueWithoutOrdersInput | DesertUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: DesertUpdateManyWithWhereWithoutOrdersInput | DesertUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: DesertScalarWhereInput | DesertScalarWhereInput[]
  }

  export type RefreshmentUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<RefreshmentCreateWithoutOrdersInput, RefreshmentUncheckedCreateWithoutOrdersInput> | RefreshmentCreateWithoutOrdersInput[] | RefreshmentUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: RefreshmentCreateOrConnectWithoutOrdersInput | RefreshmentCreateOrConnectWithoutOrdersInput[]
    upsert?: RefreshmentUpsertWithWhereUniqueWithoutOrdersInput | RefreshmentUpsertWithWhereUniqueWithoutOrdersInput[]
    set?: RefreshmentWhereUniqueInput | RefreshmentWhereUniqueInput[]
    disconnect?: RefreshmentWhereUniqueInput | RefreshmentWhereUniqueInput[]
    delete?: RefreshmentWhereUniqueInput | RefreshmentWhereUniqueInput[]
    connect?: RefreshmentWhereUniqueInput | RefreshmentWhereUniqueInput[]
    update?: RefreshmentUpdateWithWhereUniqueWithoutOrdersInput | RefreshmentUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: RefreshmentUpdateManyWithWhereWithoutOrdersInput | RefreshmentUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: RefreshmentScalarWhereInput | RefreshmentScalarWhereInput[]
  }

  export type OrderCreateNestedManyWithoutStatusInput = {
    create?: XOR<OrderCreateWithoutStatusInput, OrderUncheckedCreateWithoutStatusInput> | OrderCreateWithoutStatusInput[] | OrderUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutStatusInput | OrderCreateOrConnectWithoutStatusInput[]
    createMany?: OrderCreateManyStatusInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<OrderCreateWithoutStatusInput, OrderUncheckedCreateWithoutStatusInput> | OrderCreateWithoutStatusInput[] | OrderUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutStatusInput | OrderCreateOrConnectWithoutStatusInput[]
    createMany?: OrderCreateManyStatusInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUpdateManyWithoutStatusNestedInput = {
    create?: XOR<OrderCreateWithoutStatusInput, OrderUncheckedCreateWithoutStatusInput> | OrderCreateWithoutStatusInput[] | OrderUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutStatusInput | OrderCreateOrConnectWithoutStatusInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutStatusInput | OrderUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: OrderCreateManyStatusInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutStatusInput | OrderUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutStatusInput | OrderUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<OrderCreateWithoutStatusInput, OrderUncheckedCreateWithoutStatusInput> | OrderCreateWithoutStatusInput[] | OrderUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutStatusInput | OrderCreateOrConnectWithoutStatusInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutStatusInput | OrderUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: OrderCreateManyStatusInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutStatusInput | OrderUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutStatusInput | OrderUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type PizzaCreateWithoutStoreInput = {
    pizzauuid?: string
    name: string
    description: string
    price: number
    ingredients?: PizzaIngredientCreateNestedManyWithoutPizzasInput
    ratings?: PizzaRatingCreateNestedManyWithoutPizzaInput
    orders?: OrderCreateNestedManyWithoutPizzasInput
  }

  export type PizzaUncheckedCreateWithoutStoreInput = {
    pizzaid?: number
    pizzauuid?: string
    name: string
    description: string
    price: number
    ingredients?: PizzaIngredientUncheckedCreateNestedManyWithoutPizzasInput
    ratings?: PizzaRatingUncheckedCreateNestedManyWithoutPizzaInput
    orders?: OrderUncheckedCreateNestedManyWithoutPizzasInput
  }

  export type PizzaCreateOrConnectWithoutStoreInput = {
    where: PizzaWhereUniqueInput
    create: XOR<PizzaCreateWithoutStoreInput, PizzaUncheckedCreateWithoutStoreInput>
  }

  export type PizzaCreateManyStoreInputEnvelope = {
    data: PizzaCreateManyStoreInput | PizzaCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type PizzaUpsertWithWhereUniqueWithoutStoreInput = {
    where: PizzaWhereUniqueInput
    update: XOR<PizzaUpdateWithoutStoreInput, PizzaUncheckedUpdateWithoutStoreInput>
    create: XOR<PizzaCreateWithoutStoreInput, PizzaUncheckedCreateWithoutStoreInput>
  }

  export type PizzaUpdateWithWhereUniqueWithoutStoreInput = {
    where: PizzaWhereUniqueInput
    data: XOR<PizzaUpdateWithoutStoreInput, PizzaUncheckedUpdateWithoutStoreInput>
  }

  export type PizzaUpdateManyWithWhereWithoutStoreInput = {
    where: PizzaScalarWhereInput
    data: XOR<PizzaUpdateManyMutationInput, PizzaUncheckedUpdateManyWithoutStoreInput>
  }

  export type PizzaScalarWhereInput = {
    AND?: PizzaScalarWhereInput | PizzaScalarWhereInput[]
    OR?: PizzaScalarWhereInput[]
    NOT?: PizzaScalarWhereInput | PizzaScalarWhereInput[]
    pizzaid?: IntFilter<"Pizza"> | number
    pizzauuid?: StringFilter<"Pizza"> | string
    name?: StringFilter<"Pizza"> | string
    description?: StringFilter<"Pizza"> | string
    price?: FloatFilter<"Pizza"> | number
    storeId?: IntFilter<"Pizza"> | number
  }

  export type PizzaIngredientCreateWithoutPizzasInput = {
    ingredientuuid?: string
    name: string
  }

  export type PizzaIngredientUncheckedCreateWithoutPizzasInput = {
    ingredientid?: number
    ingredientuuid?: string
    name: string
  }

  export type PizzaIngredientCreateOrConnectWithoutPizzasInput = {
    where: PizzaIngredientWhereUniqueInput
    create: XOR<PizzaIngredientCreateWithoutPizzasInput, PizzaIngredientUncheckedCreateWithoutPizzasInput>
  }

  export type PizzaRatingCreateWithoutPizzaInput = {
    ratinguuid?: string
    score?: number
    comment?: string | null
  }

  export type PizzaRatingUncheckedCreateWithoutPizzaInput = {
    ratingid?: number
    ratinguuid?: string
    score?: number
    comment?: string | null
  }

  export type PizzaRatingCreateOrConnectWithoutPizzaInput = {
    where: PizzaRatingWhereUniqueInput
    create: XOR<PizzaRatingCreateWithoutPizzaInput, PizzaRatingUncheckedCreateWithoutPizzaInput>
  }

  export type PizzaRatingCreateManyPizzaInputEnvelope = {
    data: PizzaRatingCreateManyPizzaInput | PizzaRatingCreateManyPizzaInput[]
    skipDuplicates?: boolean
  }

  export type PizzaStoreCreateWithoutPizzasInput = {
    storeuuid?: string
    name: string
    location: string
    phone: number
    email: string
  }

  export type PizzaStoreUncheckedCreateWithoutPizzasInput = {
    storeid?: number
    storeuuid?: string
    name: string
    location: string
    phone: number
    email: string
  }

  export type PizzaStoreCreateOrConnectWithoutPizzasInput = {
    where: PizzaStoreWhereUniqueInput
    create: XOR<PizzaStoreCreateWithoutPizzasInput, PizzaStoreUncheckedCreateWithoutPizzasInput>
  }

  export type OrderCreateWithoutPizzasInput = {
    orderuuid?: string
    date?: Date | string
    orderinstructions: string
    deserts?: DesertCreateNestedManyWithoutOrdersInput
    refreshments?: RefreshmentCreateNestedManyWithoutOrdersInput
    status: OrderStatusCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutPizzasInput = {
    orderid?: number
    orderuuid?: string
    date?: Date | string
    statusId: number
    orderinstructions: string
    deserts?: DesertUncheckedCreateNestedManyWithoutOrdersInput
    refreshments?: RefreshmentUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrderCreateOrConnectWithoutPizzasInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPizzasInput, OrderUncheckedCreateWithoutPizzasInput>
  }

  export type PizzaIngredientUpsertWithWhereUniqueWithoutPizzasInput = {
    where: PizzaIngredientWhereUniqueInput
    update: XOR<PizzaIngredientUpdateWithoutPizzasInput, PizzaIngredientUncheckedUpdateWithoutPizzasInput>
    create: XOR<PizzaIngredientCreateWithoutPizzasInput, PizzaIngredientUncheckedCreateWithoutPizzasInput>
  }

  export type PizzaIngredientUpdateWithWhereUniqueWithoutPizzasInput = {
    where: PizzaIngredientWhereUniqueInput
    data: XOR<PizzaIngredientUpdateWithoutPizzasInput, PizzaIngredientUncheckedUpdateWithoutPizzasInput>
  }

  export type PizzaIngredientUpdateManyWithWhereWithoutPizzasInput = {
    where: PizzaIngredientScalarWhereInput
    data: XOR<PizzaIngredientUpdateManyMutationInput, PizzaIngredientUncheckedUpdateManyWithoutPizzasInput>
  }

  export type PizzaIngredientScalarWhereInput = {
    AND?: PizzaIngredientScalarWhereInput | PizzaIngredientScalarWhereInput[]
    OR?: PizzaIngredientScalarWhereInput[]
    NOT?: PizzaIngredientScalarWhereInput | PizzaIngredientScalarWhereInput[]
    ingredientid?: IntFilter<"PizzaIngredient"> | number
    ingredientuuid?: StringFilter<"PizzaIngredient"> | string
    name?: StringFilter<"PizzaIngredient"> | string
  }

  export type PizzaRatingUpsertWithWhereUniqueWithoutPizzaInput = {
    where: PizzaRatingWhereUniqueInput
    update: XOR<PizzaRatingUpdateWithoutPizzaInput, PizzaRatingUncheckedUpdateWithoutPizzaInput>
    create: XOR<PizzaRatingCreateWithoutPizzaInput, PizzaRatingUncheckedCreateWithoutPizzaInput>
  }

  export type PizzaRatingUpdateWithWhereUniqueWithoutPizzaInput = {
    where: PizzaRatingWhereUniqueInput
    data: XOR<PizzaRatingUpdateWithoutPizzaInput, PizzaRatingUncheckedUpdateWithoutPizzaInput>
  }

  export type PizzaRatingUpdateManyWithWhereWithoutPizzaInput = {
    where: PizzaRatingScalarWhereInput
    data: XOR<PizzaRatingUpdateManyMutationInput, PizzaRatingUncheckedUpdateManyWithoutPizzaInput>
  }

  export type PizzaRatingScalarWhereInput = {
    AND?: PizzaRatingScalarWhereInput | PizzaRatingScalarWhereInput[]
    OR?: PizzaRatingScalarWhereInput[]
    NOT?: PizzaRatingScalarWhereInput | PizzaRatingScalarWhereInput[]
    ratingid?: IntFilter<"PizzaRating"> | number
    ratinguuid?: StringFilter<"PizzaRating"> | string
    score?: IntFilter<"PizzaRating"> | number
    comment?: StringNullableFilter<"PizzaRating"> | string | null
    pizzaId?: IntFilter<"PizzaRating"> | number
  }

  export type PizzaStoreUpsertWithoutPizzasInput = {
    update: XOR<PizzaStoreUpdateWithoutPizzasInput, PizzaStoreUncheckedUpdateWithoutPizzasInput>
    create: XOR<PizzaStoreCreateWithoutPizzasInput, PizzaStoreUncheckedCreateWithoutPizzasInput>
    where?: PizzaStoreWhereInput
  }

  export type PizzaStoreUpdateToOneWithWhereWithoutPizzasInput = {
    where?: PizzaStoreWhereInput
    data: XOR<PizzaStoreUpdateWithoutPizzasInput, PizzaStoreUncheckedUpdateWithoutPizzasInput>
  }

  export type PizzaStoreUpdateWithoutPizzasInput = {
    storeuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
  }

  export type PizzaStoreUncheckedUpdateWithoutPizzasInput = {
    storeid?: IntFieldUpdateOperationsInput | number
    storeuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUpsertWithWhereUniqueWithoutPizzasInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutPizzasInput, OrderUncheckedUpdateWithoutPizzasInput>
    create: XOR<OrderCreateWithoutPizzasInput, OrderUncheckedCreateWithoutPizzasInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutPizzasInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutPizzasInput, OrderUncheckedUpdateWithoutPizzasInput>
  }

  export type OrderUpdateManyWithWhereWithoutPizzasInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutPizzasInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    orderid?: IntFilter<"Order"> | number
    orderuuid?: StringFilter<"Order"> | string
    date?: DateTimeFilter<"Order"> | Date | string
    statusId?: IntFilter<"Order"> | number
    orderinstructions?: StringFilter<"Order"> | string
  }

  export type DesertIngredientsCreateWithoutDesertsInput = {
    desertingredientuuid?: string
    name: string
  }

  export type DesertIngredientsUncheckedCreateWithoutDesertsInput = {
    desertingredientid?: number
    desertingredientuuid?: string
    name: string
  }

  export type DesertIngredientsCreateOrConnectWithoutDesertsInput = {
    where: DesertIngredientsWhereUniqueInput
    create: XOR<DesertIngredientsCreateWithoutDesertsInput, DesertIngredientsUncheckedCreateWithoutDesertsInput>
  }

  export type OrderCreateWithoutDesertsInput = {
    orderuuid?: string
    date?: Date | string
    orderinstructions: string
    pizzas?: PizzaCreateNestedManyWithoutOrdersInput
    refreshments?: RefreshmentCreateNestedManyWithoutOrdersInput
    status: OrderStatusCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutDesertsInput = {
    orderid?: number
    orderuuid?: string
    date?: Date | string
    statusId: number
    orderinstructions: string
    pizzas?: PizzaUncheckedCreateNestedManyWithoutOrdersInput
    refreshments?: RefreshmentUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrderCreateOrConnectWithoutDesertsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutDesertsInput, OrderUncheckedCreateWithoutDesertsInput>
  }

  export type DesertIngredientsUpsertWithWhereUniqueWithoutDesertsInput = {
    where: DesertIngredientsWhereUniqueInput
    update: XOR<DesertIngredientsUpdateWithoutDesertsInput, DesertIngredientsUncheckedUpdateWithoutDesertsInput>
    create: XOR<DesertIngredientsCreateWithoutDesertsInput, DesertIngredientsUncheckedCreateWithoutDesertsInput>
  }

  export type DesertIngredientsUpdateWithWhereUniqueWithoutDesertsInput = {
    where: DesertIngredientsWhereUniqueInput
    data: XOR<DesertIngredientsUpdateWithoutDesertsInput, DesertIngredientsUncheckedUpdateWithoutDesertsInput>
  }

  export type DesertIngredientsUpdateManyWithWhereWithoutDesertsInput = {
    where: DesertIngredientsScalarWhereInput
    data: XOR<DesertIngredientsUpdateManyMutationInput, DesertIngredientsUncheckedUpdateManyWithoutDesertsInput>
  }

  export type DesertIngredientsScalarWhereInput = {
    AND?: DesertIngredientsScalarWhereInput | DesertIngredientsScalarWhereInput[]
    OR?: DesertIngredientsScalarWhereInput[]
    NOT?: DesertIngredientsScalarWhereInput | DesertIngredientsScalarWhereInput[]
    desertingredientid?: IntFilter<"DesertIngredients"> | number
    desertingredientuuid?: StringFilter<"DesertIngredients"> | string
    name?: StringFilter<"DesertIngredients"> | string
  }

  export type OrderUpsertWithWhereUniqueWithoutDesertsInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutDesertsInput, OrderUncheckedUpdateWithoutDesertsInput>
    create: XOR<OrderCreateWithoutDesertsInput, OrderUncheckedCreateWithoutDesertsInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutDesertsInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutDesertsInput, OrderUncheckedUpdateWithoutDesertsInput>
  }

  export type OrderUpdateManyWithWhereWithoutDesertsInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutDesertsInput>
  }

  export type DesertCreateWithoutIngredientsInput = {
    desertuuid?: string
    name: string
    price: number
    orders?: OrderCreateNestedManyWithoutDesertsInput
  }

  export type DesertUncheckedCreateWithoutIngredientsInput = {
    desertid?: number
    desertuuid?: string
    name: string
    price: number
    orders?: OrderUncheckedCreateNestedManyWithoutDesertsInput
  }

  export type DesertCreateOrConnectWithoutIngredientsInput = {
    where: DesertWhereUniqueInput
    create: XOR<DesertCreateWithoutIngredientsInput, DesertUncheckedCreateWithoutIngredientsInput>
  }

  export type DesertUpsertWithWhereUniqueWithoutIngredientsInput = {
    where: DesertWhereUniqueInput
    update: XOR<DesertUpdateWithoutIngredientsInput, DesertUncheckedUpdateWithoutIngredientsInput>
    create: XOR<DesertCreateWithoutIngredientsInput, DesertUncheckedCreateWithoutIngredientsInput>
  }

  export type DesertUpdateWithWhereUniqueWithoutIngredientsInput = {
    where: DesertWhereUniqueInput
    data: XOR<DesertUpdateWithoutIngredientsInput, DesertUncheckedUpdateWithoutIngredientsInput>
  }

  export type DesertUpdateManyWithWhereWithoutIngredientsInput = {
    where: DesertScalarWhereInput
    data: XOR<DesertUpdateManyMutationInput, DesertUncheckedUpdateManyWithoutIngredientsInput>
  }

  export type DesertScalarWhereInput = {
    AND?: DesertScalarWhereInput | DesertScalarWhereInput[]
    OR?: DesertScalarWhereInput[]
    NOT?: DesertScalarWhereInput | DesertScalarWhereInput[]
    desertid?: IntFilter<"Desert"> | number
    desertuuid?: StringFilter<"Desert"> | string
    name?: StringFilter<"Desert"> | string
    price?: FloatFilter<"Desert"> | number
  }

  export type PizzaCreateWithoutIngredientsInput = {
    pizzauuid?: string
    name: string
    description: string
    price: number
    ratings?: PizzaRatingCreateNestedManyWithoutPizzaInput
    store: PizzaStoreCreateNestedOneWithoutPizzasInput
    orders?: OrderCreateNestedManyWithoutPizzasInput
  }

  export type PizzaUncheckedCreateWithoutIngredientsInput = {
    pizzaid?: number
    pizzauuid?: string
    name: string
    description: string
    price: number
    storeId: number
    ratings?: PizzaRatingUncheckedCreateNestedManyWithoutPizzaInput
    orders?: OrderUncheckedCreateNestedManyWithoutPizzasInput
  }

  export type PizzaCreateOrConnectWithoutIngredientsInput = {
    where: PizzaWhereUniqueInput
    create: XOR<PizzaCreateWithoutIngredientsInput, PizzaUncheckedCreateWithoutIngredientsInput>
  }

  export type PizzaUpsertWithWhereUniqueWithoutIngredientsInput = {
    where: PizzaWhereUniqueInput
    update: XOR<PizzaUpdateWithoutIngredientsInput, PizzaUncheckedUpdateWithoutIngredientsInput>
    create: XOR<PizzaCreateWithoutIngredientsInput, PizzaUncheckedCreateWithoutIngredientsInput>
  }

  export type PizzaUpdateWithWhereUniqueWithoutIngredientsInput = {
    where: PizzaWhereUniqueInput
    data: XOR<PizzaUpdateWithoutIngredientsInput, PizzaUncheckedUpdateWithoutIngredientsInput>
  }

  export type PizzaUpdateManyWithWhereWithoutIngredientsInput = {
    where: PizzaScalarWhereInput
    data: XOR<PizzaUpdateManyMutationInput, PizzaUncheckedUpdateManyWithoutIngredientsInput>
  }

  export type OrderCreateWithoutRefreshmentsInput = {
    orderuuid?: string
    date?: Date | string
    orderinstructions: string
    pizzas?: PizzaCreateNestedManyWithoutOrdersInput
    deserts?: DesertCreateNestedManyWithoutOrdersInput
    status: OrderStatusCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutRefreshmentsInput = {
    orderid?: number
    orderuuid?: string
    date?: Date | string
    statusId: number
    orderinstructions: string
    pizzas?: PizzaUncheckedCreateNestedManyWithoutOrdersInput
    deserts?: DesertUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrderCreateOrConnectWithoutRefreshmentsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutRefreshmentsInput, OrderUncheckedCreateWithoutRefreshmentsInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutRefreshmentsInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutRefreshmentsInput, OrderUncheckedUpdateWithoutRefreshmentsInput>
    create: XOR<OrderCreateWithoutRefreshmentsInput, OrderUncheckedCreateWithoutRefreshmentsInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutRefreshmentsInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutRefreshmentsInput, OrderUncheckedUpdateWithoutRefreshmentsInput>
  }

  export type OrderUpdateManyWithWhereWithoutRefreshmentsInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutRefreshmentsInput>
  }

  export type PizzaCreateWithoutRatingsInput = {
    pizzauuid?: string
    name: string
    description: string
    price: number
    ingredients?: PizzaIngredientCreateNestedManyWithoutPizzasInput
    store: PizzaStoreCreateNestedOneWithoutPizzasInput
    orders?: OrderCreateNestedManyWithoutPizzasInput
  }

  export type PizzaUncheckedCreateWithoutRatingsInput = {
    pizzaid?: number
    pizzauuid?: string
    name: string
    description: string
    price: number
    storeId: number
    ingredients?: PizzaIngredientUncheckedCreateNestedManyWithoutPizzasInput
    orders?: OrderUncheckedCreateNestedManyWithoutPizzasInput
  }

  export type PizzaCreateOrConnectWithoutRatingsInput = {
    where: PizzaWhereUniqueInput
    create: XOR<PizzaCreateWithoutRatingsInput, PizzaUncheckedCreateWithoutRatingsInput>
  }

  export type PizzaUpsertWithoutRatingsInput = {
    update: XOR<PizzaUpdateWithoutRatingsInput, PizzaUncheckedUpdateWithoutRatingsInput>
    create: XOR<PizzaCreateWithoutRatingsInput, PizzaUncheckedCreateWithoutRatingsInput>
    where?: PizzaWhereInput
  }

  export type PizzaUpdateToOneWithWhereWithoutRatingsInput = {
    where?: PizzaWhereInput
    data: XOR<PizzaUpdateWithoutRatingsInput, PizzaUncheckedUpdateWithoutRatingsInput>
  }

  export type PizzaUpdateWithoutRatingsInput = {
    pizzauuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ingredients?: PizzaIngredientUpdateManyWithoutPizzasNestedInput
    store?: PizzaStoreUpdateOneRequiredWithoutPizzasNestedInput
    orders?: OrderUpdateManyWithoutPizzasNestedInput
  }

  export type PizzaUncheckedUpdateWithoutRatingsInput = {
    pizzaid?: IntFieldUpdateOperationsInput | number
    pizzauuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    ingredients?: PizzaIngredientUncheckedUpdateManyWithoutPizzasNestedInput
    orders?: OrderUncheckedUpdateManyWithoutPizzasNestedInput
  }

  export type PizzaCreateWithoutOrdersInput = {
    pizzauuid?: string
    name: string
    description: string
    price: number
    ingredients?: PizzaIngredientCreateNestedManyWithoutPizzasInput
    ratings?: PizzaRatingCreateNestedManyWithoutPizzaInput
    store: PizzaStoreCreateNestedOneWithoutPizzasInput
  }

  export type PizzaUncheckedCreateWithoutOrdersInput = {
    pizzaid?: number
    pizzauuid?: string
    name: string
    description: string
    price: number
    storeId: number
    ingredients?: PizzaIngredientUncheckedCreateNestedManyWithoutPizzasInput
    ratings?: PizzaRatingUncheckedCreateNestedManyWithoutPizzaInput
  }

  export type PizzaCreateOrConnectWithoutOrdersInput = {
    where: PizzaWhereUniqueInput
    create: XOR<PizzaCreateWithoutOrdersInput, PizzaUncheckedCreateWithoutOrdersInput>
  }

  export type DesertCreateWithoutOrdersInput = {
    desertuuid?: string
    name: string
    price: number
    ingredients?: DesertIngredientsCreateNestedManyWithoutDesertsInput
  }

  export type DesertUncheckedCreateWithoutOrdersInput = {
    desertid?: number
    desertuuid?: string
    name: string
    price: number
    ingredients?: DesertIngredientsUncheckedCreateNestedManyWithoutDesertsInput
  }

  export type DesertCreateOrConnectWithoutOrdersInput = {
    where: DesertWhereUniqueInput
    create: XOR<DesertCreateWithoutOrdersInput, DesertUncheckedCreateWithoutOrdersInput>
  }

  export type RefreshmentCreateWithoutOrdersInput = {
    refreshmentuuid?: string
    name: string
    price: number
    size: string
  }

  export type RefreshmentUncheckedCreateWithoutOrdersInput = {
    refreshmentid?: number
    refreshmentuuid?: string
    name: string
    price: number
    size: string
  }

  export type RefreshmentCreateOrConnectWithoutOrdersInput = {
    where: RefreshmentWhereUniqueInput
    create: XOR<RefreshmentCreateWithoutOrdersInput, RefreshmentUncheckedCreateWithoutOrdersInput>
  }

  export type OrderStatusCreateWithoutOrdersInput = {
    name: string
  }

  export type OrderStatusUncheckedCreateWithoutOrdersInput = {
    statusid?: number
    name: string
  }

  export type OrderStatusCreateOrConnectWithoutOrdersInput = {
    where: OrderStatusWhereUniqueInput
    create: XOR<OrderStatusCreateWithoutOrdersInput, OrderStatusUncheckedCreateWithoutOrdersInput>
  }

  export type PizzaUpsertWithWhereUniqueWithoutOrdersInput = {
    where: PizzaWhereUniqueInput
    update: XOR<PizzaUpdateWithoutOrdersInput, PizzaUncheckedUpdateWithoutOrdersInput>
    create: XOR<PizzaCreateWithoutOrdersInput, PizzaUncheckedCreateWithoutOrdersInput>
  }

  export type PizzaUpdateWithWhereUniqueWithoutOrdersInput = {
    where: PizzaWhereUniqueInput
    data: XOR<PizzaUpdateWithoutOrdersInput, PizzaUncheckedUpdateWithoutOrdersInput>
  }

  export type PizzaUpdateManyWithWhereWithoutOrdersInput = {
    where: PizzaScalarWhereInput
    data: XOR<PizzaUpdateManyMutationInput, PizzaUncheckedUpdateManyWithoutOrdersInput>
  }

  export type DesertUpsertWithWhereUniqueWithoutOrdersInput = {
    where: DesertWhereUniqueInput
    update: XOR<DesertUpdateWithoutOrdersInput, DesertUncheckedUpdateWithoutOrdersInput>
    create: XOR<DesertCreateWithoutOrdersInput, DesertUncheckedCreateWithoutOrdersInput>
  }

  export type DesertUpdateWithWhereUniqueWithoutOrdersInput = {
    where: DesertWhereUniqueInput
    data: XOR<DesertUpdateWithoutOrdersInput, DesertUncheckedUpdateWithoutOrdersInput>
  }

  export type DesertUpdateManyWithWhereWithoutOrdersInput = {
    where: DesertScalarWhereInput
    data: XOR<DesertUpdateManyMutationInput, DesertUncheckedUpdateManyWithoutOrdersInput>
  }

  export type RefreshmentUpsertWithWhereUniqueWithoutOrdersInput = {
    where: RefreshmentWhereUniqueInput
    update: XOR<RefreshmentUpdateWithoutOrdersInput, RefreshmentUncheckedUpdateWithoutOrdersInput>
    create: XOR<RefreshmentCreateWithoutOrdersInput, RefreshmentUncheckedCreateWithoutOrdersInput>
  }

  export type RefreshmentUpdateWithWhereUniqueWithoutOrdersInput = {
    where: RefreshmentWhereUniqueInput
    data: XOR<RefreshmentUpdateWithoutOrdersInput, RefreshmentUncheckedUpdateWithoutOrdersInput>
  }

  export type RefreshmentUpdateManyWithWhereWithoutOrdersInput = {
    where: RefreshmentScalarWhereInput
    data: XOR<RefreshmentUpdateManyMutationInput, RefreshmentUncheckedUpdateManyWithoutOrdersInput>
  }

  export type RefreshmentScalarWhereInput = {
    AND?: RefreshmentScalarWhereInput | RefreshmentScalarWhereInput[]
    OR?: RefreshmentScalarWhereInput[]
    NOT?: RefreshmentScalarWhereInput | RefreshmentScalarWhereInput[]
    refreshmentid?: IntFilter<"Refreshment"> | number
    refreshmentuuid?: StringFilter<"Refreshment"> | string
    name?: StringFilter<"Refreshment"> | string
    price?: FloatFilter<"Refreshment"> | number
    size?: StringFilter<"Refreshment"> | string
  }

  export type OrderStatusUpsertWithoutOrdersInput = {
    update: XOR<OrderStatusUpdateWithoutOrdersInput, OrderStatusUncheckedUpdateWithoutOrdersInput>
    create: XOR<OrderStatusCreateWithoutOrdersInput, OrderStatusUncheckedCreateWithoutOrdersInput>
    where?: OrderStatusWhereInput
  }

  export type OrderStatusUpdateToOneWithWhereWithoutOrdersInput = {
    where?: OrderStatusWhereInput
    data: XOR<OrderStatusUpdateWithoutOrdersInput, OrderStatusUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderStatusUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OrderStatusUncheckedUpdateWithoutOrdersInput = {
    statusid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OrderCreateWithoutStatusInput = {
    orderuuid?: string
    date?: Date | string
    orderinstructions: string
    pizzas?: PizzaCreateNestedManyWithoutOrdersInput
    deserts?: DesertCreateNestedManyWithoutOrdersInput
    refreshments?: RefreshmentCreateNestedManyWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutStatusInput = {
    orderid?: number
    orderuuid?: string
    date?: Date | string
    orderinstructions: string
    pizzas?: PizzaUncheckedCreateNestedManyWithoutOrdersInput
    deserts?: DesertUncheckedCreateNestedManyWithoutOrdersInput
    refreshments?: RefreshmentUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrderCreateOrConnectWithoutStatusInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutStatusInput, OrderUncheckedCreateWithoutStatusInput>
  }

  export type OrderCreateManyStatusInputEnvelope = {
    data: OrderCreateManyStatusInput | OrderCreateManyStatusInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutStatusInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutStatusInput, OrderUncheckedUpdateWithoutStatusInput>
    create: XOR<OrderCreateWithoutStatusInput, OrderUncheckedCreateWithoutStatusInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutStatusInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutStatusInput, OrderUncheckedUpdateWithoutStatusInput>
  }

  export type OrderUpdateManyWithWhereWithoutStatusInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutStatusInput>
  }

  export type PizzaCreateManyStoreInput = {
    pizzaid?: number
    pizzauuid?: string
    name: string
    description: string
    price: number
  }

  export type PizzaUpdateWithoutStoreInput = {
    pizzauuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ingredients?: PizzaIngredientUpdateManyWithoutPizzasNestedInput
    ratings?: PizzaRatingUpdateManyWithoutPizzaNestedInput
    orders?: OrderUpdateManyWithoutPizzasNestedInput
  }

  export type PizzaUncheckedUpdateWithoutStoreInput = {
    pizzaid?: IntFieldUpdateOperationsInput | number
    pizzauuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ingredients?: PizzaIngredientUncheckedUpdateManyWithoutPizzasNestedInput
    ratings?: PizzaRatingUncheckedUpdateManyWithoutPizzaNestedInput
    orders?: OrderUncheckedUpdateManyWithoutPizzasNestedInput
  }

  export type PizzaUncheckedUpdateManyWithoutStoreInput = {
    pizzaid?: IntFieldUpdateOperationsInput | number
    pizzauuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type PizzaRatingCreateManyPizzaInput = {
    ratingid?: number
    ratinguuid?: string
    score?: number
    comment?: string | null
  }

  export type PizzaIngredientUpdateWithoutPizzasInput = {
    ingredientuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PizzaIngredientUncheckedUpdateWithoutPizzasInput = {
    ingredientid?: IntFieldUpdateOperationsInput | number
    ingredientuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PizzaIngredientUncheckedUpdateManyWithoutPizzasInput = {
    ingredientid?: IntFieldUpdateOperationsInput | number
    ingredientuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PizzaRatingUpdateWithoutPizzaInput = {
    ratinguuid?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PizzaRatingUncheckedUpdateWithoutPizzaInput = {
    ratingid?: IntFieldUpdateOperationsInput | number
    ratinguuid?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PizzaRatingUncheckedUpdateManyWithoutPizzaInput = {
    ratingid?: IntFieldUpdateOperationsInput | number
    ratinguuid?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderUpdateWithoutPizzasInput = {
    orderuuid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    orderinstructions?: StringFieldUpdateOperationsInput | string
    deserts?: DesertUpdateManyWithoutOrdersNestedInput
    refreshments?: RefreshmentUpdateManyWithoutOrdersNestedInput
    status?: OrderStatusUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutPizzasInput = {
    orderid?: IntFieldUpdateOperationsInput | number
    orderuuid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    statusId?: IntFieldUpdateOperationsInput | number
    orderinstructions?: StringFieldUpdateOperationsInput | string
    deserts?: DesertUncheckedUpdateManyWithoutOrdersNestedInput
    refreshments?: RefreshmentUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutPizzasInput = {
    orderid?: IntFieldUpdateOperationsInput | number
    orderuuid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    statusId?: IntFieldUpdateOperationsInput | number
    orderinstructions?: StringFieldUpdateOperationsInput | string
  }

  export type DesertIngredientsUpdateWithoutDesertsInput = {
    desertingredientuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DesertIngredientsUncheckedUpdateWithoutDesertsInput = {
    desertingredientid?: IntFieldUpdateOperationsInput | number
    desertingredientuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DesertIngredientsUncheckedUpdateManyWithoutDesertsInput = {
    desertingredientid?: IntFieldUpdateOperationsInput | number
    desertingredientuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUpdateWithoutDesertsInput = {
    orderuuid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    orderinstructions?: StringFieldUpdateOperationsInput | string
    pizzas?: PizzaUpdateManyWithoutOrdersNestedInput
    refreshments?: RefreshmentUpdateManyWithoutOrdersNestedInput
    status?: OrderStatusUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutDesertsInput = {
    orderid?: IntFieldUpdateOperationsInput | number
    orderuuid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    statusId?: IntFieldUpdateOperationsInput | number
    orderinstructions?: StringFieldUpdateOperationsInput | string
    pizzas?: PizzaUncheckedUpdateManyWithoutOrdersNestedInput
    refreshments?: RefreshmentUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutDesertsInput = {
    orderid?: IntFieldUpdateOperationsInput | number
    orderuuid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    statusId?: IntFieldUpdateOperationsInput | number
    orderinstructions?: StringFieldUpdateOperationsInput | string
  }

  export type DesertUpdateWithoutIngredientsInput = {
    desertuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    orders?: OrderUpdateManyWithoutDesertsNestedInput
  }

  export type DesertUncheckedUpdateWithoutIngredientsInput = {
    desertid?: IntFieldUpdateOperationsInput | number
    desertuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    orders?: OrderUncheckedUpdateManyWithoutDesertsNestedInput
  }

  export type DesertUncheckedUpdateManyWithoutIngredientsInput = {
    desertid?: IntFieldUpdateOperationsInput | number
    desertuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type PizzaUpdateWithoutIngredientsInput = {
    pizzauuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ratings?: PizzaRatingUpdateManyWithoutPizzaNestedInput
    store?: PizzaStoreUpdateOneRequiredWithoutPizzasNestedInput
    orders?: OrderUpdateManyWithoutPizzasNestedInput
  }

  export type PizzaUncheckedUpdateWithoutIngredientsInput = {
    pizzaid?: IntFieldUpdateOperationsInput | number
    pizzauuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    ratings?: PizzaRatingUncheckedUpdateManyWithoutPizzaNestedInput
    orders?: OrderUncheckedUpdateManyWithoutPizzasNestedInput
  }

  export type PizzaUncheckedUpdateManyWithoutIngredientsInput = {
    pizzaid?: IntFieldUpdateOperationsInput | number
    pizzauuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUpdateWithoutRefreshmentsInput = {
    orderuuid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    orderinstructions?: StringFieldUpdateOperationsInput | string
    pizzas?: PizzaUpdateManyWithoutOrdersNestedInput
    deserts?: DesertUpdateManyWithoutOrdersNestedInput
    status?: OrderStatusUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutRefreshmentsInput = {
    orderid?: IntFieldUpdateOperationsInput | number
    orderuuid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    statusId?: IntFieldUpdateOperationsInput | number
    orderinstructions?: StringFieldUpdateOperationsInput | string
    pizzas?: PizzaUncheckedUpdateManyWithoutOrdersNestedInput
    deserts?: DesertUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutRefreshmentsInput = {
    orderid?: IntFieldUpdateOperationsInput | number
    orderuuid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    statusId?: IntFieldUpdateOperationsInput | number
    orderinstructions?: StringFieldUpdateOperationsInput | string
  }

  export type PizzaUpdateWithoutOrdersInput = {
    pizzauuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ingredients?: PizzaIngredientUpdateManyWithoutPizzasNestedInput
    ratings?: PizzaRatingUpdateManyWithoutPizzaNestedInput
    store?: PizzaStoreUpdateOneRequiredWithoutPizzasNestedInput
  }

  export type PizzaUncheckedUpdateWithoutOrdersInput = {
    pizzaid?: IntFieldUpdateOperationsInput | number
    pizzauuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    ingredients?: PizzaIngredientUncheckedUpdateManyWithoutPizzasNestedInput
    ratings?: PizzaRatingUncheckedUpdateManyWithoutPizzaNestedInput
  }

  export type PizzaUncheckedUpdateManyWithoutOrdersInput = {
    pizzaid?: IntFieldUpdateOperationsInput | number
    pizzauuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
  }

  export type DesertUpdateWithoutOrdersInput = {
    desertuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ingredients?: DesertIngredientsUpdateManyWithoutDesertsNestedInput
  }

  export type DesertUncheckedUpdateWithoutOrdersInput = {
    desertid?: IntFieldUpdateOperationsInput | number
    desertuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ingredients?: DesertIngredientsUncheckedUpdateManyWithoutDesertsNestedInput
  }

  export type DesertUncheckedUpdateManyWithoutOrdersInput = {
    desertid?: IntFieldUpdateOperationsInput | number
    desertuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type RefreshmentUpdateWithoutOrdersInput = {
    refreshmentuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
  }

  export type RefreshmentUncheckedUpdateWithoutOrdersInput = {
    refreshmentid?: IntFieldUpdateOperationsInput | number
    refreshmentuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
  }

  export type RefreshmentUncheckedUpdateManyWithoutOrdersInput = {
    refreshmentid?: IntFieldUpdateOperationsInput | number
    refreshmentuuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
  }

  export type OrderCreateManyStatusInput = {
    orderid?: number
    orderuuid?: string
    date?: Date | string
    orderinstructions: string
  }

  export type OrderUpdateWithoutStatusInput = {
    orderuuid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    orderinstructions?: StringFieldUpdateOperationsInput | string
    pizzas?: PizzaUpdateManyWithoutOrdersNestedInput
    deserts?: DesertUpdateManyWithoutOrdersNestedInput
    refreshments?: RefreshmentUpdateManyWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutStatusInput = {
    orderid?: IntFieldUpdateOperationsInput | number
    orderuuid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    orderinstructions?: StringFieldUpdateOperationsInput | string
    pizzas?: PizzaUncheckedUpdateManyWithoutOrdersNestedInput
    deserts?: DesertUncheckedUpdateManyWithoutOrdersNestedInput
    refreshments?: RefreshmentUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutStatusInput = {
    orderid?: IntFieldUpdateOperationsInput | number
    orderuuid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    orderinstructions?: StringFieldUpdateOperationsInput | string
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