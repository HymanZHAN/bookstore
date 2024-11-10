// This is an automatically generated file. Please do not change its contents manually!
import * as _ from './../../..';
import * as __ from './../../../_';
import * as _sap_common from './../../../sap/common';

export function _BookAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Book extends _._managedAspect(Base) {
    declare ID?: __.Key<number>
    declare title?: string | null
    declare descr?: string | null
    declare author?: __.Association.to<Author> | null
    declare author_ID?: __.Key<number> | null
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
    static override readonly kind: "entity" | "type" | "aspect" = 'entity';
    declare static readonly keys: __.KeysOf<Book>;
    declare static readonly elements: __.ElementsOf<Book>;
    static readonly actions: typeof _.managed.actions & Record<never, never>;
  };
}
export class Book extends _BookAspect(__.Entity) {}
Object.defineProperty(Book, 'name', { value: 'me.xzhan.bookstore.Books' })
Object.defineProperty(Book, 'is_singular', { value: true })
export class Books extends Array<Book> {$count?: number}
Object.defineProperty(Books, 'name', { value: 'me.xzhan.bookstore.Books' })

export function _AuthorAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Author extends _._managedAspect(Base) {
    declare ID?: __.Key<number>
    declare name?: string | null
    declare dateOfBirth?: __.CdsDate | null
    declare dateOfDeath?: __.CdsDate | null
    declare placeOfBirth?: string | null
    declare placeOfDeath?: string | null
    declare books?: __.Association.to.many<Books>
    static override readonly kind: "entity" | "type" | "aspect" = 'entity';
    declare static readonly keys: __.KeysOf<Author>;
    declare static readonly elements: __.ElementsOf<Author>;
    static readonly actions: typeof _.managed.actions & Record<never, never>;
  };
}
export class Author extends _AuthorAspect(__.Entity) {}
Object.defineProperty(Author, 'name', { value: 'me.xzhan.bookstore.Authors' })
Object.defineProperty(Author, 'is_singular', { value: true })
export class Authors extends Array<Author> {$count?: number}
Object.defineProperty(Authors, 'name', { value: 'me.xzhan.bookstore.Authors' })

export function _GenreAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Genre extends _sap_common._CodeListAspect(Base) {
    declare ID?: __.Key<number>
    declare parent?: __.Association.to<Genre> | null
    declare parent_ID?: __.Key<number> | null
    declare children?: __.Composition.of.many<Genres>
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

export function _BookOverviewAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class BookOverview extends Base {
    declare ID?: __.Key<number>
    declare title?: string | null
    declare author?: __.Association.to<Author> | null
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
Object.defineProperty(BookOverview, 'name', { value: 'me.xzhan.bookstore.BookOverviews' })
Object.defineProperty(BookOverview, 'is_singular', { value: true })
/**
* Aspect to capture changes by user and name
* 
* See https://cap.cloud.sap/docs/cds/common#aspect-managed
*/
export class BookOverviews extends Array<BookOverview> {$count?: number}
Object.defineProperty(BookOverviews, 'name', { value: 'me.xzhan.bookstore.BookOverviews' })
