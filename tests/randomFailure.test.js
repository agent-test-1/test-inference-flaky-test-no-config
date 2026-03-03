// Intentionally flaky: passes ~70% of the time, fails ~30% of the time
// Uses randomness to simulate non-deterministic outcomes

test('randomly passes based on probability threshold', () => {
  const roll = Math.random();
  // Expectation intentionally set to fail sometimes
  expect(roll).toBeGreaterThan(0.3);
});


