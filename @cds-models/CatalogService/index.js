// This is an automatically generated file. Please do not change its contents manually!
const cds = require('@sap/cds')
const csn = cds.entities('CatalogService')
// service
const CatalogService = { name: 'CatalogService' }
module.exports = CatalogService
module.exports.CatalogService = CatalogService
// Books
module.exports.Book = { is_singular: true, __proto__: csn.Books }
module.exports.Books = csn.Books
// BookOverviews
module.exports.BookOverview = { is_singular: true, __proto__: csn.BookOverviews }
module.exports.BookOverviews = csn.BookOverviews
// Genres
module.exports.Genre = { is_singular: true, __proto__: csn.Genres }
module.exports.Genres = csn.Genres
// Currencies
module.exports.Currency = { is_singular: true, __proto__: csn.Currencies }
module.exports.Currencies = csn.Currencies
// events
// actions
module.exports.submitOrder = 'submitOrder'
// enums
