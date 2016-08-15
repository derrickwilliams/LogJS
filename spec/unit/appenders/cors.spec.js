fdescribe('appenders.cors', () => {
  function newSpy(name) { return jasmine.createSpy(name) }

  beforeEach(() => {
    jasmine.clock().install()
  })

  afterEach(() => {
    jasmine.clock().uninstall()
  })

  it('has appender interface', () => {
    const CorsAppender = require('../../../logjs/appenders/cors').CorsAppender
    const appender = CorsAppender({ remoteUrl: 'http://corsappendertest.com/' })

    expect(appender.name).toEqual('CorsAppender')
    expect(typeof appender.log).toEqual('function')
  })

  it('send logs via transmitter at set interval', () => {
    const CorsAppender = require('../../../logjs/appenders/cors').CorsAppender

    const transmitLogs = newSpy('transmitLogs').and.callFake((entries, cb) => {
      cb(null, entries)
    })

    const appender = CorsAppender({
      remoteUrl: 'http://corsappendertest.com/',
      transmitLogs
    })

    appender.log('ERROR', 1234434, 'Crazy!', 'http://google.com', 20)
    expect(transmitLogs.calls.count()).toEqual(0)

    jasmine.clock().tick(1000)
    expect(transmitLogs.calls.count()).toEqual(0)

    jasmine.clock().tick(501)
    expect(transmitLogs.calls.count()).toEqual(1)

    jasmine.clock().tick(1505)
    expect(transmitLogs.calls.count()).toEqual(2)
  })

  it('only transmits logs buffered since last flush', () => {
    const DEFAULT_INTERVAL = 1500 + 1
    const CorsAppender = require('../../../logjs/appenders/cors').CorsAppender

    const transmitLogs = newSpy('transmitLogs').and.callFake((entries, cb) => {
      cb(null, entries)
    })

    const appender = CorsAppender({
      remoteUrl: 'http://corsappendertest.com/',
      transmitLogs
    })

    appender.log('ERROR', 1234434, 'Crazy!', 'http://google.com', 20)
    jasmine.clock().tick(DEFAULT_INTERVAL)
    expect(transmitLogs).toHaveBeenCalledWith(
      [{ t: 'ERROR', ts: 1234434, m: 'Crazy!', u: 'http://google.com', l: 20 }],
      jasmine.any(Function)
    )

    appender.log('INFO', 09877, 'second go around', 'http://google.com', 25)
    appender.log('INFO', 111111, 'third types the chart', 'http://google.com', 105)
    jasmine.clock().tick(DEFAULT_INTERVAL)
    expect(transmitLogs).toHaveBeenCalledWith(
      [
        { t: 'INFO', ts: 09877, m: 'second go around', u: 'http://google.com', l: 25 },
        { t: 'INFO', ts: 111111, m: 'third types the chart', u: 'http://google.com', l: 105 }
      ],
      jasmine.any(Function)
    )

    jasmine.clock().tick(DEFAULT_INTERVAL)
    expect(transmitLogs).toHaveBeenCalledWith(
      [],
      jasmine.any(Function)
    )
  })
})