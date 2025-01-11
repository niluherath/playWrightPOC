import { test, expect } from '@playwright/test';
import { APIUtils } from '../utils/APIUtils';
const loginPayLoad = {username:"admin",password:"password123"};




  


test('should be able to partial update the booking details', async ({ request }) => {

   const apiUtil = new APIUtils(request, loginPayLoad)
   const token = await apiUtil.getToken(request, loginPayLoad)
   console.log("token is : "+ token)
   const partialUpdateRequest = await request.patch('/booking/1', {
    headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Cookie': `token=${token}`
    },
    data: {
    "firstname": "Sim",
    "lastname": "Son",
    "totalprice": 333,
    "depositpaid": false
    }
    });
    console.log(await partialUpdateRequest.json());
    
    expect(partialUpdateRequest.ok()).toBeTruthy();
    expect(partialUpdateRequest.status()).toBe(200);
    const partialUpdatedResponseBody = await partialUpdateRequest.json()
    expect(partialUpdatedResponseBody).toHaveProperty("firstname", "Sim");
    expect(partialUpdatedResponseBody).toHaveProperty("lastname", "Son");
    expect(partialUpdatedResponseBody).toHaveProperty("totalprice", 333);
    expect(partialUpdatedResponseBody).toHaveProperty("depositpaid", false);
    });


    test('should be able to get subset of booking details using query parameters', async ({ request }) => {
        const response = await request.get('/booking', {
        params: {
        firstname: "Susan",
        lastname: "Jackson"
        },
        });
        console.log(await response.json());
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        });