import dedupe from './promise-dedupe.js';

describe('dedupe', () => {
  it('should work when resolves', async () => {
    let variable;
    let id = Math.random();
    dedupe(id, new Promise(r => setTimeout(() => r(1), 300))).then(
      value => (variable = value),
    );
    dedupe(id, new Promise(r => setTimeout(() => r(2), 10))).then(
      value => (variable = value),
    );

    await new Promise(r => setTimeout(r, 500));
    expect(variable).toBe(2);
  });

  it('should work when rejects', async () => {
    let variable;
    let id = Math.random();
    dedupe(id, new Promise((_, r) => setTimeout(() => r(1), 300))).catch(
      value => (variable = value),
    );
    dedupe(id, new Promise((_, r) => setTimeout(() => r(2), 10))).catch(
      value => (variable = value),
    );
    await new Promise(r => setTimeout(r, 500));
    expect(variable).toBe(2);
  });
});
