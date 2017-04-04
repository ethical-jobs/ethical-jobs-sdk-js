import sinon from 'sinon';
import 'sinon-as-promised';
import Client from '../../lib/ethical-jobs.js';

const willResolveWith = {
  foo: 'bar',
  bar: 'foo', 
  bam: 'wham',
};

// ---
// GET verb
// -----------------

describe('GET requests', () => {

  const api = new Client();

  beforeEach(() => {
    sinon.stub(api, 'dispatchRequest').returns(willResolveWith);
  });

  afterEach(() => {
    api.dispatchRequest.restore();
  });

  test('should call dispatch only once', () => {
    api.get('/my/cool/route');
    expect(api.dispatchRequest.calledOnce).toBe(true);
  });  

  test('should use the correct HTTP verb', () => {
    api.get('/my/cool/route');
    expect(api.dispatchRequest.args[0][1].method).toBe('get');
  });

  test('should call dispatch with correct route', () => {
    api.get('/my/cool/route');
    expect(api.dispatchRequest.args[0][0]).toBe('//api.ethicaljobs.com.au/my/cool/route');
  });  

  test('should send correct params', () => {
    api.get('/my/cool/route', { foo: 'bar', funy: 'music'});
    expect(api.dispatchRequest.args[0][0]).toBe('//api.ethicaljobs.com.au/my/cool/route?foo=bar&funy=music');
    expect(api.dispatchRequest.args[0][1].body).toBe(null);
  });  

  test('should return the correct response', () => {
    return expect(api.get('/my/cool/route')).toEqual(willResolveWith);
  }); 

});

// ---
// POST verb
// -----------------

describe('POST requests', () => {

  const api = new Client();

  beforeEach(() => {
    sinon.stub(api, 'dispatchRequest').returns(willResolveWith);
  });

  afterEach(() => {
    api.dispatchRequest.restore();
  });

  test('should call dispatch only once', () => {
    api.post('/my/cool/route');
    expect(api.dispatchRequest.calledOnce).toBe(true);
  });  

  test('should use the correct HTTP verb', () => {
    api.post('/my/cool/route');
    expect(api.dispatchRequest.args[0][1].method).toBe('post');
  });

  test('should call dispatch with correct route', () => {
    api.post('/my/cool/route');
    expect(api.dispatchRequest.args[0][0]).toBe('//api.ethicaljobs.com.au/my/cool/route');
  });  

  test('should send correct params', () => {
    api.post('/my/cool/route', { foo: 'bar', funy: 'music'});
    expect(api.dispatchRequest.args[0][0]).toBe('//api.ethicaljobs.com.au/my/cool/route');
    expect(api.dispatchRequest.args[0][1].body).toBe(JSON.stringify({ foo: 'bar', funy: 'music'}));
  });  

  test('should return the correct response', () => {
    return expect(api.post('/my/cool/route')).toEqual(willResolveWith);
  }); 

});

// ---
// PATCH verb
// -----------------

describe('PATCH requests', () => {

  const api = new Client();

  beforeEach(() => {
    sinon.stub(api, 'dispatchRequest').returns(willResolveWith);
  });

  afterEach(() => {
    api.dispatchRequest.restore();
  });

  test('should call dispatch only once', () => {
    api.patch('/my/cool/route');
    expect(api.dispatchRequest.calledOnce).toBe(true);
  });  

  test('should use the correct HTTP verb', () => {
    api.patch('/my/cool/route');
    expect(api.dispatchRequest.args[0][1].method).toBe('patch');
  });

  test('should call dispatch with correct route', () => {
    api.patch('/my/cool/route');
    expect(api.dispatchRequest.args[0][0]).toBe('//api.ethicaljobs.com.au/my/cool/route');
  });  

  test('should send correct params', () => {
    api.patch('/my/cool/route', { foo: 'bar', funy: 'music'});
    expect(api.dispatchRequest.args[0][0]).toBe('//api.ethicaljobs.com.au/my/cool/route');
    expect(api.dispatchRequest.args[0][1].body).toBe(JSON.stringify({ foo: 'bar', funy: 'music'}));
  });  

  test('should return the correct response', () => {
    return expect(api.patch('/my/cool/route')).toEqual(willResolveWith);
  }); 

});

// ---
// PUT verb
// -----------------

describe('PUT requests', () => {

  const api = new Client();

  beforeEach(() => {
    sinon.stub(api, 'dispatchRequest').returns(willResolveWith);
  });

  afterEach(() => {
    api.dispatchRequest.restore();
  });

  test('should call dispatch only once', () => {
    api.put('/my/cool/route');
    expect(api.dispatchRequest.calledOnce).toBe(true);
  });  

  test('should use the correct HTTP verb', () => {
    api.put('/my/cool/route');
    expect(api.dispatchRequest.args[0][1].method).toBe('put');
  });

  test('should call dispatch with correct route', () => {
    api.put('/my/cool/route');
    expect(api.dispatchRequest.args[0][0]).toBe('//api.ethicaljobs.com.au/my/cool/route');
  });  

  test('should send correct params', () => {
    api.put('/my/cool/route', { foo: 'bar', funy: 'music'});
    expect(api.dispatchRequest.args[0][0]).toBe('//api.ethicaljobs.com.au/my/cool/route');
    expect(api.dispatchRequest.args[0][1].body).toBe(JSON.stringify({ foo: 'bar', funy: 'music'}));
  });  

  test('should return the correct response', () => {
    return expect(api.put('/my/cool/route')).toEqual(willResolveWith);
  }); 

});

// ---
// DELETE verb
// -----------------

describe('DELETE requests', () => {

  const api = new Client();

  beforeEach(() => {
    sinon.stub(api, 'dispatchRequest').returns(willResolveWith);
  });

  afterEach(() => {
    api.dispatchRequest.restore();
  });

  test('should call dispatch only once', () => {
    api.delete('/my/cool/route');
    expect(api.dispatchRequest.calledOnce).toBe(true);
  });  

  test('should use the correct HTTP verb', () => {
    api.delete('/my/cool/route');
    expect(api.dispatchRequest.args[0][1].method).toBe('delete');
  });

  test('should call dispatch with correct route', () => {
    api.delete('/my/cool/route');
    expect(api.dispatchRequest.args[0][0]).toBe('//api.ethicaljobs.com.au/my/cool/route');
  });  

  test('should send correct params', () => {
    api.delete('/my/cool/route', { foo: 'bar', funy: 'music'});
    expect(api.dispatchRequest.args[0][0]).toBe('//api.ethicaljobs.com.au/my/cool/route');
    expect(api.dispatchRequest.args[0][1].body).toBe(JSON.stringify({ foo: 'bar', funy: 'music'}));
  });  

  test('should return the correct response', () => {
    return expect(api.delete('/my/cool/route')).toEqual(willResolveWith);
  }); 

});