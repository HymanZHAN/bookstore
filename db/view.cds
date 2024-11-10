using {me.xzhan.bookstore.Books} from './schema';

namespace me.xzhan.bookstore;

view BookOverviews as
    select from Books {
        key ID,
            title,
            author,
            descr,
    // price
    };
