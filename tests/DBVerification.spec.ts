
import { test, expect } from '@playwright/test';
import { DBUtils } from '../utils/DBUtils';
import { faker } from '@faker-js/faker';

let client: any

const randomFullName = faker.person.fullName()


test.beforeAll(async ({}) => {
    console.log('=========== Tests started ===========');
    const dBUtil = new DBUtils()
    client = await dBUtil.getDBConnection()
    
});

test.afterAll(async ({}) => {
    await client.end();
    console.log('=========== Tests stoped ===========');
});



test('Test Case 01: Validate select query from DB', async () => {


    const joinQuery = `SELECT * from employees;`

    try {
        const queryResult = await client.query(joinQuery);

        expect(queryResult.rowCount).toBeGreaterThan(0);

       // for (const row of queryResult.rows) {
       //     expect(row.release_year).toBe(2024);
      //  }

        console.log(queryResult.rows);
    } catch (err) {
        console.error(err.message);
        throw err;
    }
});


const testData = {
   
    name: randomFullName,
    role: "Junior TestAutomation",
    salary: "80000"
};

test('Test Case 02: Insert INTO employees and select ', async () => {

    const insertQuery = `INSERT INTO employees(name, role, salary)
                         VALUES ('${testData.name}', '${testData.role}', '${testData.salary}');`

                         console.log(" name inserted: "+ testData.name)

    try {

        const queryResult = await client.query(insertQuery);
        expect(queryResult.rowCount).toBeGreaterThan(0)
        expect(queryResult.command).toBe('INSERT');


    } catch (err) {
        console.error(err.message);
        throw err;
    }

    const selectQuery = `SELECT * FROM employees WHERE name = '${testData.name}'`;
 console.log("name in query: "+ selectQuery)

    try {
        const selectResult = await client.query(selectQuery);

        const firstRow = selectResult.rows[0];
        expect(firstRow.name).toBe(testData.name);
        expect(firstRow.role).toBe(testData.role);
        expect(firstRow.salary).toBe('80000.00');
        console.log(selectResult.rows[0])
    } catch (err) {
        console.error(err.message);
        throw err;;
    }



});


