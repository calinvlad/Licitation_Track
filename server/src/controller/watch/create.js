const rp = require('request-promise')
const cheerio = require('cheerio')

module.exports = {
    async index(req, res) {
        const url = req.body.url
        const selector_title = req.body.selector_title
        const selector_price = req.body.selector_price
        let title, price, time_left

        const ebay_selector = {
            title: "h1#itemTitle",
            price: "span#prcIsum_bidPrice",
            time_left: "span#bb_tlft span#vi-time-wrapperSection span#vi-cdown_timeLeft"
        }

        const html = await rp(url)
        cheerio(ebay_selector.title, html).filter(async (i, e) => {
            title = e.children[1].data
        })
        cheerio(ebay_selector.price, html).filter(async (i, e) => {
            price = e.children[0].data

        })
        cheerio(ebay_selector.time_left, html).filter(async (i, e) => {
            time_left = e.children[0]

        })
        console.log('title', title)
        console.log('price', price)
        console.log('price', time_left)
        return res.status(200).send({data: {title: title, price: price, time_left: time_left}})
    }
}