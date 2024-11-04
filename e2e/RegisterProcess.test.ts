describe('Register process::', () => {
  beforeAll(async () => {
    await device.launchApp();

    await waitFor(element(by.id('OnboardingScreen')))
      .toBeVisible()
      .withTimeout(5000);

    await element(by.text('Next')).tap();
    await element(by.text('Next')).tap();
    await element(by.text('Sign up')).tap();

    await element(by.id('first_name')).typeText('saurabh');
    await element(by.id('last_name')).typeText('soni');
    await element(by.id('email')).typeText('demo@yopmail.com');
    await element(by.id('password')).typeText('demo@123');
    await device.pressBack();
  });

  it('Should fill email and password and navigate to home screen', async () => {
    await expect(element(by.id('Register'))).toBeVisible();
    await element(by.id('Register')).tap();

    await expect(element(by.text('Testing Complete'))).toBeVisible();
  });
});
