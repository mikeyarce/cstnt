import { expect, test } from '@playwright/test';

test('index page has expected city title', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toContain('cstnt');
});

test('dark mode toggle button exists', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('button')).toMatch(/dark mode|light mode/);
});

test('city buttons exist', async ({ page }) => {
	await page.goto('/');
	const buttons = await page.$$('.cities button');
	expect(buttons.length).toBe(4);
});
