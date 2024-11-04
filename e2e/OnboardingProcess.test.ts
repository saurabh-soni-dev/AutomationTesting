describe('Onboarding Process::', () => {
  beforeAll(async () => {
    await device.launchApp();
    await waitFor(element(by.id('OnboardingScreen')))
      .toBeVisible()
      .withTimeout(4000);
  });

  test('should display the first slide and navigate to next slide', async () => {
    await expect(
      element(by.text('Grab all events now only in your hands')),
    ).toBeVisible();

    await element(by.text('Next')).tap();
    await expect(
      element(by.text('Easy payment & fast event ticket')),
    ).toBeVisible();
    await element(by.text('Next')).tap();
    await expect(
      element(by.text("Let's go to your favourite event now")),
    ).toBeVisible();
    await element(by.text('Login')).tap();
    await expect(element(by.id('LoginScreen'))).toBeVisible();
  });
});
