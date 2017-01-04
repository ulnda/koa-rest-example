import Router from 'koa-router';
import convert from 'koa-convert';
import KoaBody from 'koa-body';

import Product from '../models/product';

const router = new Router(),
      koaBody = convert(KoaBody());

router
  .get('/products', async (ctx, next) => {
    ctx.body = await Product.findAll();
  })
  .get('/products/:id', async (ctx, next) => {
    let product = await Product.find({where: {id: ctx.params.id}});

    if (product) {
      ctx.body = product;
    } else {
      ctx.status = 404;
    }
  })
  .put('/products/:id', koaBody, async (ctx, next) => {
    let product = await Product.find({where: {id: ctx.params.id}});

    if (!product) {
      ctx.status = 404;
      return;
    }

    ctx.body = await product.update(ctx.request.body)
  })
  .delete('/products/:id', koaBody, async (ctx, next) => {
    let product = await Product.find({where: {id: ctx.params.id}});

    if (!product) {
      ctx.status = 404;
      return;
    }

    ctx.body = await product.destroy();
  })
  .post('/products', koaBody, async (ctx, next) => {
    ctx.body = await Product.build(ctx.request.body).save();
  });

export function routes() { return router.routes(); }
export function allowedMethods() { return router.allowedMethods(); }
