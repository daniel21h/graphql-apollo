const testResolver = {
  Test: {
    via: (test: any) => {
      // Operation that returns an object of type media
      return {
        name: 'Correio',
        eta: 365 * 24
      }
    }
  },
  Query: {
    talk: () => ({
      message: 'Hello World'
    })
  }
}

export default testResolver;
