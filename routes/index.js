import Router from 'koa-router'

const index = new Router()

index
    .get('/', async ctx => {
        var arr = [{
                id: 101,
                name: "Fight Club",
                year: 1999,
                rating: 8.1
            },
            {
                id: 102,
                name: "Inception",
                year: 2010,
                rating: 8.7
            },
            {
                id: 103,
                name: "The Dark Knight",
                year: 2008,
                rating: 9
            },
            {
                id: 104,
                name: "12 Angry Men",
                year: 1957,
                rating: 8.9
            }
        ];
        ctx.body = arr;
    })
    .get('/index', async ctx => {
        console.log(ctx.params);
        ctx.body = '111';

    })

export default index