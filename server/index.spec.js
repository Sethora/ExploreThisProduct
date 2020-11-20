const app = require('./index.js');
const request = require('supertest');

test('should return 200 status code', async (done)=> {
    const res = await request(app).get('/images');
    expect(res.status).toBe(200);
    done();
})


test('should return a response object that items used array', async (done)=> {
  const res = await request(app).get('/images');
  const itemsProp = res.body.Items_used
  expect(Array.isArray(itemsProp)).toEqual(true);
  done();
})


test('should return a response that propertiess match schema', async (done) => {
  const res = await request(app).get('/member');
  const schema = ["_id", "Name", "Skin_type", "PrimaryId", "__v"]
  expect(Object.keys(res.body)).toEqual(schema)
  done();
})