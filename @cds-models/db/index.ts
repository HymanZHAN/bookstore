// This is an automatically generated file. Please do not change its contents manually!
import * as _me_xzhan_bookstore from './../me/xzhan/bookstore';
import * as __ from './../_';

export function _BookOverviewAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class BookOverview extends Base {
    declare ID?: __.Key<number>
    declare title?: string | null
    declare author?: __.Association.to<_me_xzhan_bookstore.Author> | null
    declare author_ID?: __.Key<number> | null
    declare descr?: string | null
    declare price?: number | null
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
Object.defineProperty(BookOverview, 'name', { value: 'db.BookOverviews' })
Object.defineProperty(BookOverview, 'is_singular', { value: true })
/**
* Aspect to capture changes by user and name
* 
* See https://cap.cloud.sap/docs/cds/common#aspect-managed
*/
export class BookOverviews extends Array<BookOverview> {$count?: number}
Object.defineProperty(BookOverviews, 'name', { value: 'db.BookOverviews' })
