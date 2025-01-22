import { test, expect} from '@playwright/test';

const { DateTime } = require("luxon");

test.describe('tagged tests', {
    tag: '@smoke',
  }, () => {
  

    test('should be able to create a booking', async ({ request }) => {
        const response = await request.post("/booking", {
            data: bookingDetails
        });
        console.log(await response.json());
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        const responseBody = await response.json()
        expect(responseBody.booking).toHaveProperty("firstname", "");
        expect(responseBody.booking).toHaveProperty("lastname", "");
    });



  });const bookingDetails = require('../tests/test-data/booking-details.json');

