import { SQLiteProvider, useSQLiteContext, type SQLiteDatabase } from 'expo-sqlite';
import React, { Suspense, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Fallback from './fallback';

export default function SqliteDbProvider({children}: any) {
  return (
    // <View style={styles.container}>
    <Suspense fallback={<Fallback />}>
        <SQLiteProvider databaseName="assescal.db" onInit={migrateDbIfNeeded} useSuspense>
            {/* <Header />
            <Content /> */}
            {children}
        </SQLiteProvider>
    </Suspense>
    // </View>
  );
}

// export function Header() {
//   const db = useSQLiteContext();
//   const [version, setVersion] = useState('');
//   useEffect(() => {
//     async function setup() {
//       const result = await db.getFirstAsync<{ 'sqlite_version()': string }>(
//         'SELECT sqlite_version()'
//       );
//       setVersion(result['sqlite_version()']);
//     }
//     setup();
//   }, []);
//   return (
//     <View style={styles.headerContainer}>
//       <Text style={styles.headerText}>SQLite version: {version}</Text>
//     </View>
//   );
// }

// interface Todo {
//   value: string;
//   intValue: number;
// }

// export function Content() {
//   const db = useSQLiteContext();
//   const [todos, setTodos] = useState<Todo[]>([]);

//   useEffect(() => {
//     async function setup() {
//       const result = await db.getAllAsync<Todo>('SELECT * FROM todos');
//       setTodos(result);
//     }
//     setup();
//   }, []);

//   return (
//     <View style={styles.contentContainer}>
//       {todos.map((todo, index) => (
//         <View style={styles.todoItemContainer} key={index}>
//           <Text>{`${todo.intValue} - ${todo.value}`}</Text>
//         </View>
//       ))}
//     </View>
//   );
// }

async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 1;
  let { user_version: currentDbVersion } = await db.getFirstAsync<{ user_version: number }>(
    'PRAGMA user_version'
  );
  if (currentDbVersion >= DATABASE_VERSION) {
    return;
  }
  if (currentDbVersion === 0) {
    await db.execAsync(`
        PRAGMA journal_mode = 'wal';
    `);
    // CREATE TABLE todos (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);

    await db.execAsync(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER NOT NULL PRIMARY KEY,
        fname TEXT,
        lname TEXT,
        phone_no NUMERIC
    )`);

    await db.execAsync(`CREATE TABLE IF NOT EXISTS fees (
        id INTEGER NOT NULL PRIMARY KEY,
        appreg INTEGER,
        layout INTEGER,
        user_id,
        FOREIGN KEY(user_id) REFERENCES users(id)
    )`);

    await db.execAsync(`CREATE TABLE IF NOT EXISTS codes (
        id INTEGER NOT NULL PRIMARY KEY,
        process INTEGER,
        stage INTEGER,
        penal INTEGER,
        betterment INTEGER,
        user_id,
        FOREIGN KEY(user_id) REFERENCES users(id)
    )`);

    await db.execAsync(`CREATE TABLE IF NOT EXISTS districts (
        id INTEGER NOT NULL PRIMARY KEY,
        district TEXT,
        user_id,
        FOREIGN KEY(user_id) REFERENCES users(id)
    )`);

    await db.execAsync(`CREATE TABLE IF NOT EXISTS rates (
        id INTEGER NOT NULL PRIMARY KEY,
        residential INTEGER,
        commercial INTEGER,
        institutional INTEGER,
        mixeduse INTEGER,
        agricultural INTEGER,
        recreational INTEGER,
        industrial INTEGER,
        date DATE,
        user_id,
        FOREIGN KEY(user_id) REFERENCES users(id)           
    )`);


    // await db.runAsync('INSERT INTO todos (value, intValue) VALUES (?, ?)', 'hello', 1);
    // await db.runAsync('INSERT INTO todos (value, intValue) VALUES (?, ?)', 'world', 2);


        currentDbVersion = 1;
  }
  // if (currentDbVersion === 1) {
  //   Add more migrations
  // }
  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}


async function storeInfo(docData: any) {
    await db.runAsync(`
                INSERT INTO users (
                    fname,
                    lname,
                    phone_no
                ) VALUES (?, ?, ?)`,
                [
                    docData.fName,
                    docData.lName,
                    docData.phoneNo
                ],
                (_: any, res: any) => {
                    userId = res.insertId;
                    console.log('resObj',res.insertId)
                    resolve(res)
                }
                // (_, err) => {
                //     console.log(err: any)
                //     reject(err: any)
                // }
            );

                db.runAsync(`
                    INSERT INTO rates (
                        residential,
                        commercial,
                        institutional,
                        mixeduse,
                        agricultural,
                        recreational,
                        industrial,
                        date,
                        user_id,
                        ) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                    [
                        docData.residential,
                        docData.commercial,
                        docData.institutional,
                        docData.mixeduse,
                        docData.agricultural,
                        docData.recreational,
                        docData.industrial,
                        docData.date,
                        docData.user_id,
                        userId
                    ],
                    (_: any, res: any) => {
                        console.log('apidbusers good', res);
                        resolve(res);
                    },
                    // (_, err) => {
                    //     console.log('apidbusers', err)
                    //     reject(err: any)
                    // }
                );

                db.runAsync(`
                    INSERT INTO fees (
                        appreg,
                        layout,
                        user_id
                    ) VALUES (?, ?, ?)`,
                    [
                        docData.appRegFee,
                        docData.layout,
                        userId
                    ],
                    (_: any, res: any) => {
                        console.log('resObj',res)
                        resolve(res)
                    }
                    // (_, err) => {
                    //     console.log(err: any)
                    //     reject(err: any)
                    // }
                );
// //Remember to drop column applic_name here. 
// //it is now in name table
// //Relationship is many to many
                db.runAsync(`
                    INSERT INTO codes (
                            process,
                            penal
                            stage,
                            betterment
                    ) VALUES (?, ?, ?, ?)`,
                    [
                        docData.process,
                        docData.penal,
                        docData.stage,
                        docData.betterment,
                        userId
                    ],
                    (_: any, res: any) => {
                        console.log(res)
                        resolve(res)
                    },
                    // (_, err) => {
                    //     console.log(err: any)
                    //     reject(err: any)
                    // }
                )

}