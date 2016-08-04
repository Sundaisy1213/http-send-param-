/**
 *
 * Created by zhangsha on 16-8-4.
 */
const supertest = require('supertest');
const app = require('../src/server');
const request = supertest(app);

describe("get/query", function () {
    it('should get param by query', function (done) {
        request
            .get('/query/?name=manny')
            .expect({name: "manny"})
            .end((err, res) => {
                if (err) {
                    done.fail(err);
                } else {
                    done();
                }
            })
    });
});

describe('get/params', function () {
    it('should get param by params', function (done) {
        request
            .get('/params/jony')
            .expect({us: 'jony'})
            .end((err, res) => {
                if (err) {
                    done.fail(err);
                } else {
                    done();
                }
            })
    });
});


