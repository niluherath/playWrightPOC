import { expect, APIRequestContext  } from "@playwright/test"

export class APIUtils{

    readonly apiContext: APIRequestContext
    readonly loginPayload: any
    token: string

    constructor(apiContext: any, loginPayload: any){
            this. apiContext = apiContext
            this.loginPayload = loginPayload

    }


    async getToken(request:APIRequestContext, loginPayload:any): Promise<string> {
  
        
        console.log("url: "+ 'https://restful-booker.herokuapp.com/auth' )
        console.log("loginPayload: "+ loginPayload )
        const response = await request.post('/auth', {
            data: loginPayload
            });
            console.log(await response.json());
            expect(response.ok()).toBeTruthy();
            expect(response.status()).toBe(200);
            const responseBody = await response.json();
            this.token = responseBody.token;
            console.log("New Token is: " + this.token);
            return this.token

        
    }

   // async getToken2()
   // {
   //     const loginResponse = await this.apiContext.post("/auth",
   //     {
  //          data:this.loginPayload
  ////      })
        
   //     console.log(await loginResponse.json());
   //     expect(loginResponse.ok()).toBeTruthy();
   //     expect(loginResponse.status()).toBe(200);
   //     const loginResponseJSON = await loginResponse.json();      

   //     const token = loginResponseJSON.getToken
        
  //     return token
   // }



}