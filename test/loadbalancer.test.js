import fetch from 'node-fetch';
import assert from 'assert'

it('Should get Hello', async ()=> {
    const response = await fetch('http://34.148.41.13');
    const text = await response.text();
    assert.equal(text,"Hello");


})

