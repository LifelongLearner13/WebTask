const makeSpy = () => {
  const spy = () => {
    spy.called = true;
  };
  spy.called = false;
  return spy;
};

module.exports = makeSpy;
