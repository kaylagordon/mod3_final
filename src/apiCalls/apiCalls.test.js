import { getAnswer } from './apiCalls';

describe('retrieveMovies', () => {
  let mockResponse = {
    'operation':'derive',
    'expression':'x^2',
    'result':'2 x'
  }

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should be passed the correct url', () => {
      getAnswer('derive', 'x^2')

      expect(window.fetch).toHaveBeenCalledWith('https://newton.now.sh/derive/x^2');
  })

  it('should return an object', () => {
      expect(getAnswer()).resolves.toEqual(mockResponse);
  })

  it('should return an error for response that is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
          return Promise.resolve({
            ok: false,
          });
        });
      expect(getAnswer()).rejects.toEqual(Error('Error fetching ideas'))
  })

});
