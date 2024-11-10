// This is an automatically generated file. Please do not change its contents manually!
import cds from '@sap/cds'
import * as __ from './../_';
import * as _ from './..';
import * as _me_xzhan_bookstore from './../me/xzhan/bookstore';
import * as _sap_common from './../sap/common';

export class CatalogService extends cds.Service {
  declare submitOrder: typeof submitOrder
}
export default CatalogService

export function _BookAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Book extends Base {
    declare createdAt?: __.CdsTimestamp | null
    declare modifiedAt?: __.CdsTimestamp | null
    declare ID?: __.Key<number>
    declare title?: string | null
    declare descr?: string | null
    declare author?: string | null
    declare genre?: __.Association.to<Genre> | null
    declare genre_ID?: __.Key<number> | null
    declare stock?: number | null
    declare price?: number | null
    /**
    * Type for an association to Currencies
    * 
    * See https://cap.cloud.sap/docs/cds/common#type-currency
    */
    declare currency?: _.Currency | null
    declare currency_code?: __.Key<string> | null
    static readonly kind: "entity" | "type" | "aspect" = 'entity';
    declare static readonly keys: __.KeysOf<Book>;
    declare static readonly elements: __.ElementsOf<Book>;
    static readonly actions: Record<never, never>;
  };
}
/**
* Aspect to capture changes by user and name
* 
* See https://cap.cloud.sap/docs/cds/common#aspect-managed
*/
export class Book extends _BookAspect(__.Entity) {}
Object.defineProperty(Book, 'name', { value: 'CatalogService.Books' })
Object.defineProperty(Book, 'is_singular', { value: true })
/**
* Aspect to capture changes by user and name
* 
* See https://cap.cloud.sap/docs/cds/common#aspect-managed
*/
export class Books extends Array<Book> {$count?: number}
Object.defineProperty(Books, 'name', { value: 'CatalogService.Books' })

export function _BookOverviewAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class BookOverview extends Base {
    declare ID?: __.Key<number>
    declare title?: string | null
    declare author?: __.Association.to<_me_xzhan_bookstore.Author> | null
    declare author_ID?: __.Key<number> | null
    declare descr?: string | null
    static readonly kind: "entity" | "type" | "aspect" = 'entity';
    declare static readonly keys: __.KeysOf<BookOverview>;
    declare static readonly elements: __.ElementsOf<BookOverview>;
    static readonly actions: Record<never, never>;
  };
}
/**
* Aspect to capture changes by user and name
* 
* See https://cap.cloud.sap/docs/cds/common#aspect-managed
*/
export class BookOverview extends _BookOverviewAspect(__.Entity) {}
Object.defineProperty(BookOverview, 'name', { value: 'CatalogService.BookOverviews' })
Object.defineProperty(BookOverview, 'is_singular', { value: true })
export class BookOverviews extends Array<BookOverview> {$count?: number}
Object.defineProperty(BookOverviews, 'name', { value: 'CatalogService.BookOverviews' })

export function _GenreAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Genre extends _sap_common._CodeListAspect(Base) {
    declare ID?: __.Key<number>
    declare parent?: __.Association.to<_me_xzhan_bookstore.Genre> | null
    declare parent_ID?: __.Key<number> | null
    declare children?: __.Composition.of.many<_me_xzhan_bookstore.Genres>
    static override readonly kind: "entity" | "type" | "aspect" = 'entity';
    declare static readonly keys: __.KeysOf<Genre>;
    declare static readonly elements: __.ElementsOf<Genre>;
    static readonly actions: typeof _sap_common.CodeList.actions & Record<never, never>;
  };
}
/** Hierarchically organized Code List for Genres */
export class Genre extends _GenreAspect(__.Entity) {}
Object.defineProperty(Genre, 'name', { value: 'me.xzhan.bookstore.Genres' })
Object.defineProperty(Genre, 'is_singular', { value: true })
/** Hierarchically organized Code List for Genres */
export class Genres extends Array<Genre> {$count?: number}
Object.defineProperty(Genres, 'name', { value: 'me.xzhan.bookstore.Genres' })

export function _CurrencyAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Currency extends _sap_common._CodeListAspect(Base) {
    declare code?: __.Key<string>
    declare symbol?: string | null
    declare minorUnit?: number | null
    static override readonly kind: "entity" | "type" | "aspect" = 'entity';
    declare static readonly keys: __.KeysOf<Currency>;
    declare static readonly elements: __.ElementsOf<Currency>;
    static readonly actions: typeof _sap_common.CodeList.actions & Record<never, never>;
  };
}
/**
* Code list for currencies
* 
* See https://cap.cloud.sap/docs/cds/common#entity-currencies
*/
export class Currency extends _CurrencyAspect(__.Entity) {}
Object.defineProperty(Currency, 'name', { value: 'sap.common.Currencies' })
Object.defineProperty(Currency, 'is_singular', { value: true })
/**
* Code list for currencies
* 
* See https://cap.cloud.sap/docs/cds/common#entity-currencies
*/
export class Currencies extends Array<Currency> {$count?: number}
Object.defineProperty(Currencies, 'name', { value: 'sap.common.Currencies' })


export declare const submitOrder:  {
  // positional
  (book: __.Key<__.DeepRequired<Book>['ID']>, quantity: number | null): void | null
  // named
  ({book, quantity}: {book?: __.Key<__.DeepRequired<Book>['ID']>, quantity?: number | null}): void | null
  // metadata (do not use)
  __parameters: {book?: __.Key<__.DeepRequired<Book>['ID']>, quantity?: number | null}, __returns: void | null
  kind: 'action'
}