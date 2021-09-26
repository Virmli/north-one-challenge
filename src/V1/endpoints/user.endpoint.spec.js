const endpoints = require('./user.endpoint');
const services = require('../services/user.service');

const mockReq = {
  body: {
    username: 'test',
  },
};

const mockRes = {
  type: jest.fn(() => mockRes),
  status: jest.fn(() => mockRes),
  send: jest.fn(() => mockRes),
  json: jest.fn(() => mockRes),
};

jest.mock('../services/user.service');

describe('User Endpoint tests', () => {
  it('should find user in test db', async () => {
    services.getUser.mockImplementationOnce(() => Promise.resolve({
      _id: '614e784c317dd84c8e792122',
      username: 'maks',
      createdOn: '2021-09-25T01:15:56.632Z',
      __v: 0,
    }));
    await endpoints.getUser(services, mockReq, mockRes);
    expect(mockRes.status).toHaveBeenLastCalledWith(200);
    expect(mockRes.json).toHaveBeenLastCalledWith({
      _id: '614e784c317dd84c8e792122',
      username: 'maks',
      createdOn: '2021-09-25T01:15:56.632Z',
      __v: 0,
    });
  });

  it('should make get users call error', async () => {
    services.getUser.mockImplementationOnce(() => Promise.reject(new Error('Ups error.')));

    await endpoints.getUser(services, mockReq, mockRes);

    expect(mockRes.status).toHaveBeenLastCalledWith(500);
    expect(mockRes.json).toHaveBeenLastCalledWith({ error: 'Ups error.' });
  });

  it('should make create User call 500 response', async () => {
    services.createNewUser.mockImplementationOnce(() => Promise.reject(new Error()));

    await endpoints.createUser(services, mockReq, mockRes);

    expect(mockRes);
    expect(mockRes.status).toHaveBeenLastCalledWith(500);
    expect(mockRes.json).toHaveBeenLastCalledWith({ error: 'Unknown Error' });
  });
});
