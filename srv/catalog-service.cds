using {me.xzhan.bookstore as my} from '../db/schema';
using {me.xzhan.bookstore as views} from '../db/view';

service CatalogService @(path: '/browse') {

    @readonly
    entity Books         as
        select from my.Books {
            *,
            author.name as author
        }
        excluding {
            createdBy,
            modifiedBy
        };

    @readonly
    entity BookOverviews as projection on views.BookOverviews;

    @requires: 'authenticated-user'
    action submitOrder(book : Books:ID, quantity : Integer);
}
