import request from "supertest";
import { api, db } from "../index";

beforeAll(async () => {
  await db
    .table("product")
    .insert({
      id: "test01",
      name: "product idea",
    })
    .onConflict("id")
    .merge();
});

afterAll(async () => {
  await db.table("product").where({ id: "test01" }).delete();
  await db.destroy();
});

//test(`fetch products`, async () => {
//const res = await request(api)
//.post("/api")
//.send({
//query: `#graphql
//query {
//products(first: 10) {
//edges {
//product: node {
//name
//}
//}
//}
//}
//`,
//})
//.expect(200)
//.expect("Content-Type", "application/json");

//expect(res.body).toMatchInlineSnapshot(`
//Object {
//"data": Object {
//"user": null,
//},
//}
//`);
//});

//test(`fetch user(username: "test01")`, async () => {
//const res = await request(api)
//.post("/api")
//.send({
//query: `#graphql
//query {
//user(username: "test01") { id email username }
//}
//`,
//})
//.expect(200)
//.expect("Content-Type", "application/json");

//expect(res.body).toMatchInlineSnapshot(`
//Object {
//"data": Object {
//"user": Object {
//"email": null,
//"id": "VXNlcjp0ZXN0MDE=",
//"username": "test01",
//},
//},
//}
//`);
//});

//test(`fetch user: node(id: "VXNlcjp0ZXN0MDE=")`, async () => {
//const res = await request(api)
//.post("/api")
//.send({
//query: `#graphql
//query {
//user: node(id: "VXNlcjp0ZXN0MDE=") {
//... on User {
//id
//email
//username
//}
//}
//}
//`,
//})
//.expect(200)
//.expect("Content-Type", "application/json");

//expect(res.body).toMatchInlineSnapshot(`
//Object {
//"data": Object {
//"user": Object {
//"email": null,
//"id": "VXNlcjp0ZXN0MDE=",
//"username": "test01",
//},
//},
//}
//`);
//});
