// Intentionally flaky: races two timers with slight jitter

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

test('race between two async tasks sometimes finishes in unexpected order', async () => {
  // Add small random jitter to make race outcome non-deterministic
  const jitterA = 10 + Math.floor(Math.random() * 20); // 10-29ms
  const jitterB = 15 + Math.floor(Math.random() * 10); // 15-24ms

  let winner = null;

  await Promise.race([
    (async () => {
      await sleep(jitterA);
      if (!winner) winner = 'A';
    })(),
    (async () => {
      await sleep(jitterB);
      if (!winner) winner = 'B';
    })()
  ]);

  // Expect A to win; sometimes B wins depending on jitter
  expect(winner).toBe('A');
});


