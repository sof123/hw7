/*
 * Test suite for articles.js
 */
const expect = require('chai').expect
const fetch = require('isomorphic-fetch')
var post = {method: 'POST',
						headers: {
'Content-Type' : 'application/json'
},
body : JSON.stringify({"username": "San", "date": "01/12/1993", "text": "Some random"})
						}


const url = path => `http://localhost:3000${path}`

describe('Validate Article functionality', () => {

	it('should give me three or more articles', (done) => {
		fetch(url("/articles"))
		.then(res => {
				expect(res.status).to.eql(200)
				return res.text()
		})
		.then(body =>{
			expect(JSON.parse(body)).to.have.length.of.at.least(3)
		})
		.then(done)
		.catch(done)
	}, 500)

	it('should add two articles with successive article ids, and return the article each time', (done) => {
		// add a new article
		// verify you get the article back with an id
		// verify the content of the article
		// add a second article
		// verify the article id increases by one
		// verify the second artice has the correct content
    var firstArticleId = null
		fetch(url("/article"), post)
    	.then(res => {
    			expect(res.status).to.eql(200)
    			return res.text()
    	})
    	.then(body =>{
        firstArticleId = JSON.parse(body).id
    	})
    	.catch(done)


	fetch(url("/article"), post)
  	.then(res => {
  			expect(res.status).to.eql(200)
  			return res.text()
  	})
  	.then(body =>{
  			expect(JSON.parse(body).id).to.eql(firstArticleId + 1)
  	})
  	.then(done)
  	.catch(done)
}, 500)

	it('should return an article with a specified id', (done) => {
		// call GET /article first to find an id, perhaps one at random
		// then call GET /articles/id with the chosen id
		// validate that only one article is returned
		fetch(url("/article/3"))
		.then(res => {
				expect(res.status).to.eql(200)
				return res.text()
		})
		.then(body =>{
				expect(JSON.parse(body).id).to.eql(3)
		})
		.then(done)
		.catch(done)
	}, 500)

	it('should return nothing for an invalid id', (done) => {
		// call GET /articles/id where id is not a valid article id, perhaps 0
		// confirm that you get no results
		fetch(url("/article/85948"))
		.then(res => {
				expect(res.status).to.eql(404)
				return res.text()
		})
		.then(body =>{
				expect(JSON.parse(body).author).to.eql(undefined)
		})
		.then(done)
		.catch(done)
	}, 500)

});
