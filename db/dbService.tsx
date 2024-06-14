import * as SQLite from 'expo-sqlite';
// async function openDatabase(pathToDatabaseFile) {
//     if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
//       await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
//     }
//     await FileSystem.downloadAsync(
//       Asset.fromModule(require(pathToDatabaseFile)).uri,
//       FileSystem.documentDirectory + 'SQLite/myDatabaseName.db'
//     );
//     return SQLite.openDatabase('myDatabaseName.db');
// }

// const db = await SQLite.openDatabaseAsync('assescal.db');


// let tableRes = db.exec([{ sql: 'DROP DATABASE archived;', args: [] }], 
//     false, 
//     (resultSet) => {
//   console.log('res Pragma:', resultSet)
//   return resultSet}
// );
// { sql: 'PRAGMA table_list(files);', args: [] }
// console.log(tableRes)

// export async function dbInit() {
//     // const db = await SQLite.openDatabaseAsync('assescal.db');
//     // console.log('db', db);

//     const promiseObj = new Promise(async (resolve, reject) => {
//         await db.withExclusiveTransactionAsync(async (txn) => {
//             await txn.runAsync(`CREATE TABLE IF NOT EXISTS users (
//                 id INTEGER NOT NULL PRIMARY KEY,
//                 fname TEXT,
//                 lname TEXT,
//                 phone_no NUMERIC
//             )`);

//             await txn.runAsync(`CREATE TABLE IF NOT EXISTS fees (
//                 id INTEGER NOT NULL PRIMARY KEY,
//                 appreg INTEGER,
//                 layout INTEGER,
//                 user_id,
//                 FOREIGN KEY(user_id) REFERENCES users(id)
//             )`);

//             await txn.runAsync(`CREATE TABLE IF NOT EXISTS codes (
//                 id INTEGER NOT NULL PRIMARY KEY,
//                 process INTEGER,
//                 stage INTEGER,
//                 penal INTEGER,
//                 betterment INTEGER,
//                 user_id,
//                 FOREIGN KEY(user_id) REFERENCES users(id)
//             )`);

//             await txn.runAsync(`CREATE TABLE IF NOT EXISTS districts (
//                 id INTEGER NOT NULL PRIMARY KEY,
//                 district TEXT,
//                 user_id,
//                 FOREIGN KEY(user_id) REFERENCES users(id)
//             )`);

//             await txn.runAsync(`CREATE TABLE IF NOT EXISTS rates (
//                 id INTEGER NOT NULL PRIMARY KEY,
//                 residential INTEGER,
//                 commercial INTEGER,
//                 institutional INTEGER,
//                 mixeduse INTEGER,
//                 agricultural INTEGER,
//                 recreational INTEGER,
//                 industrial INTEGER,
//                 date DATE,
//                 user_id,
//                 FOREIGN KEY(user_id) REFERENCES users(id)           
//             )`);
//         })
//             // (txn: any) => {
//             //     // txn.runAsync(`PRAGMA table_info(jagonbox)`)
//             //     //New table to be creaated

//             //     // txn.runAsync(`CREATE TABLE IF NOT EXISTS files (
//             //     //     id INTEGER NOT NULL PRIMARY KEY,
//             //     //     file_name TEXT NOT NULL,
//             //     //     file_no INTEGER NOT NULL,
//             //     //     file_type TEXT,
//             //     //     date_created NUMERIC,
//             //     //     user_id,
//             //     //     applic_id,
//             //     //     FOREIGN KEY(applic_id) REFERENCES applications(id),
//             //     //     FOREIGN KEY(user_id) REFERENCES users(id)
//             //     // )`
               
//             //     // );

//             // txn.runAsync(`CREATE TABLE IF NOT EXISTS users (
//             //     id INTEGER NOT NULL PRIMARY KEY,
//             //     fname TEXT,
//             //     lname TEXT,
//             //     phone_no NUMERIC
//             // )`);

//             // txn.runAsync(`CREATE TABLE IF NOT EXISTS fees (
//             //     id INTEGER NOT NULL PRIMARY KEY,
//             //     appreg INTEGER,
//             //     layout INTEGER,
//             //     user_id,
//             //     FOREIGN KEY(user_id) REFERENCES users(id)
//             // )`)

//             // txn.runAsync(`CREATE TABLE IF NOT EXISTS codes (
//             //     id INTEGER NOT NULL PRIMARY KEY,
//             //     process INTEGER,
//             //     stage INTEGER,
//             //     penal INTEGER,
//             //     betterment INTEGER,
//             //     user_id,
//             //     FOREIGN KEY(user_id) REFERENCES users(id)
//             // )`)

//             // txn.runAsync(`CREATE TABLE IF NOT EXISTS districts (
//             //     id INTEGER NOT NULL PRIMARY KEY,
//             //     district TEXT,
//             //     user_id,
//             //     FOREIGN KEY(user_id) REFERENCES users(id)
//             // )`)

//             // txn.runAsync(`CREATE TABLE IF NOT EXISTS rates (
//             //     id INTEGER NOT NULL PRIMARY KEY,
//             //     residential INTEGER,
//             //     commercial INTEGER,
//             //     institutional INTEGER,
//             //     mixeduse INTEGER,
//             //     agricultural INTEGER,
//             //     recreational INTEGER,
//             //     industrial INTEGER,
//             //     date DATE,
//             //     user_id,
//             //     FOREIGN KEY(user_id) REFERENCES users(id)           
//             // )`
       
//             // );
//             //     // FOREIGN KEY(address_id) REFERENCES addresses(id)
//             // }
//             // (err: any) => {
//             //     console.log('err from withTransactionAsync', err);
//             // },
//             // () => {
//             //     console.log('Table creation, complete!');
//             // } 
//         // )
//     })    
//     return promiseObj
// }


// const storeData = (docData: any) => {
//     const storeDataPromise = new Promise((resolve, reject) => {
//         let userId: any;
//         db.withExclusiveTransactionAsync(async (txn: any) => {
//             // for (const oneItm in docData) {

//                 await txn.runAsync(`
//                 INSERT INTO users (
//                     fname,
//                     lname,
//                     phone_no
//                 ) VALUES (?, ?, ?)`,
//                 [
//                     docData.fName,
//                     docData.lName,
//                     docData.phoneNo
//                 ],
//                 (_: any, res: any) => {
//                     userId = res.insertId;
//                     console.log('resObj',res.insertId)
//                     resolve(res)
//                 }
//                 // (_, err) => {
//                 //     console.log(err: any)
//                 //     reject(err: any)
//                 // }
//             );

//                 txn.runAsync(`
//                     INSERT INTO rates (
//                         residential,
//                         commercial,
//                         institutional,
//                         mixeduse,
//                         agricultural,
//                         recreational,
//                         industrial,
//                         date,
//                         user_id,
//                         ) 
//                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
//                     [
//                         docData.residential,
//                         docData.commercial,
//                         docData.institutional,
//                         docData.mixeduse,
//                         docData.agricultural,
//                         docData.recreational,
//                         docData.industrial,
//                         docData.date,
//                         docData.user_id,
//                         userId
//                     ],
//                     (_: any, res: any) => {
//                         console.log('apidbusers good', res);
//                         resolve(res);
//                     },
//                     // (_, err) => {
//                     //     console.log('apidbusers', err)
//                     //     reject(err: any)
//                     // }
//                 );

//                 txn.runAsync(`
//                     INSERT INTO fees (
//                         appreg,
//                         layout,
//                         user_id
//                     ) VALUES (?, ?, ?)`,
//                     [
//                         docData.appRegFee,
//                         docData.layout,
//                         userId
//                     ],
//                     (_: any, res: any) => {
//                         console.log('resObj',res)
//                         resolve(res)
//                     }
//                     // (_, err) => {
//                     //     console.log(err: any)
//                     //     reject(err: any)
//                     // }
//                 );
// // //Remember to drop column applic_name here. 
// // //it is now in name table
// // //Relationship is many to many
//                 txn.runAsync(`
//                     INSERT INTO codes (
//                             process,
//                             penal
//                             stage,
//                             betterment
//                     ) VALUES (?, ?, ?, ?)`,
//                     [
//                         docData.process,
//                         docData.penal,
//                         docData.stage,
//                         docData.betterment,
//                         userId
//                     ],
//                     (_: any, res: any) => {
//                         console.log(res)
//                         resolve(res)
//                     },
//                     // (_, err) => {
//                     //     console.log(err: any)
//                     //     reject(err: any)
//                     // }
//                 )

// //                 txn.runAsync(`
// //                 INSERT INTO names (f_name, l_name, m_name)
// //                 VALUES (?, ?, ?)`,
// //                 [
// //                     docData.fName,
// //                     docData.lName,
// //                     docData.areaName
// //                 ],
// //                 (_: any, res: any) => {
// //                     console.log(res)
// //                     resolve(res)
// //                 },
// //                 (_, err) => {
// //                     console.log(err: any)
// //                     reject(err: any)
// //                 }
// //                 )
//                 // txn.runAsync(`INSERT INTO jargonbox (
//                 //         img_url,
//                 //         address,
//                 //         img_name,
//                 //         applic_no,
//                 //         applic_name,
//                 //         file_name,
//                 //         file_no,
//                 //         file_type
//                 // ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
//                 // [
//                 //     docData[oneItm].uri,
//                 //     docData.address, 
//                 //     docData[oneItm].imgName, 
//                 //     docData.value, 
//                 //     docData.docTitle,
//                 //     docData.docTitle,
//                 //     docData[oneItm].imgId,
//                 //     docData[oneItm].imgName
//                 // ],
//             //}
//         },
//         // (err: any) => {
//         //     console.log('err from withTransactionAsync', err);
//         // },
//         // () => {
//         //     console.log('Data insertion, complete!');
//         // }
//         );

//     })
//     return storeDataPromise
// }


// This was for jargonBox, but will be used for experimentation
// export const readData = () => {
//     const readDataPromise = new Promise((resolve, reject) => {
//         db.withExclusiveTransactionAsync(async (txn: any) => {
//             await txn.getFirstAsync(`SELECT 
//                                 residential,
//                                 commercial,
//                                 institutional,
//                                 mixeduse,
//                                 agricultural,
//                                 recreational,
//                                 industrial,
//                                 process,
//                                 stage,
//                                 betterment,
//                                 district,
//                                 appreg,
//                                 layout,
//                                 date FROM 
//                                     users u
//                             JOIN fees f ON 
//                                     u.id = f.id
//                             JOIN rates r ON 
//                                     u.id = r.id
//                             JOIN codes c ON
//                                     u.id = c.id`,
                            
//             [],
//             (_: any, res: any) => {
//                 console.log(res)
//                 resolve(res);
//             },
//             // (_, err) => {
//             //     console.log(err: any)
//             //     reject(err: any);
//             // }
//             )
//         })
//     });
//     return readDataPromise;
// }


// export const minusData = (datumId) => {
//     const minusDataPromise = new Promise((resolve, reject) => {
//         db.withTransactionAsync((txn) => {
//             txn.runAsync(`DELLTE from jarggonbox WHERE id = ${datumId}`,
//             [],
//             (_: any, res: any) => {
//                 resolve(res)
//             },
//             (_, err) => {
//                 reject(err: any)
//             }
//             )
//         })
//     })
//     return minusDataPromise;
// }

// export const updateData = (datumId, dataToFill) => {
//     const updateDataPromise = new Promise((resolve, reject) => {
//         db.withTransactionAsync((txn) => {
//             txn.runAsync(`UPDATE jargonbox 
//                 SET id = ${dataToFill}
//                 WHERE id = ${datumId}`,
//             [],
//             (_: any, res: any) => {
//                 resolve(res);
//             },
//             (_, err) => {
//                 reject(err: any);
//             })
//         })
//     })
//     return updateDataPromise;
// }


