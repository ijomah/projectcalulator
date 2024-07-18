import { SQLiteProvider, useSQLiteContext, type SQLiteDatabase } from 'expo-sqlite';
import React, { Suspense, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import Fallback from './fallback';

export default function SqliteDbProvider({children}: any) {

    async function migrateDbIfNeeded(db: SQLiteDatabase) {
        const DATABASE_VERSION = 1;
        console.log('db init fxn 1')
        //   let { user_version: currentDbVersion } = await db.getFirstAsync<{ user_version: number }>(
        //     'PRAGMA user_version'
        //   );
        let { user_version: currentDbVersion } = await db.getFirstAsync<any>(
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
          console.log('db init fxn2')
          await db.execAsync(`CREATE TABLE IF NOT EXISTS users (
              id INTEGER NOT NULL PRIMARY KEY,
              fname TEXT,
              lname TEXT,
              phone_no NUMERIC
          )`);
      
          await db.execAsync(`CREATE TABLE IF NOT EXISTS fees (
              id INTEGER NOT NULL PRIMARY KEY,
              appQRegQFee INTEGER,
              layoutQFee INTEGER,
              user_id,
              FOREIGN KEY(user_id) REFERENCES users(id)
          )`);
      
          await db.execAsync(`CREATE TABLE IF NOT EXISTS codes (
              id INTEGER NOT NULL PRIMARY KEY,
              processingfeeRevenueCode INTEGER,
              processingfeeAgencyCode INTEGER,
              stagecertificationAgencyCode INTEGER,
              stagecertificationRevenueCode INTEGER,
              bettermentAgencyCode INTEGER,
              bettermentRevenueCode INTEGER,
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
        if (currentDbVersion === 1) {
          // Add more migrations
          console.log('db init fxn3 v1')
        }
        console.log('db init fxn3 v1', currentDbVersion)
        await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
      }

    
  return (
    // <View style={styles.container}>
    // <Suspense fallback={<Fallback />}>
        <SQLiteProvider databaseName="assescal.db" onInit={migrateDbIfNeeded}>
            {children}
        </SQLiteProvider>
    // </Suspense>
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




