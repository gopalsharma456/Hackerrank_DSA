function hurdleRace(k, height) {
  let highestJump = Math.max(...height);

  return k >= highestJump ? 0 : highestJump - k;
}
