import { PrismaClient } from '@prisma/client';
import { PrismaClient as PrismaClient2 } from '../../prisma/generated/client2';

let db : PrismaClient;
let db2: PrismaClient2;

//! Check if we are running in production mode
if( process.env.NODE_ENV == 'production' ) {
    db = new PrismaClient();
    db2 = new PrismaClient2();
} else {
    //! Check if is alredy connected to the database
    if( !global.db ) {
        global.db = new PrismaClient();
        global.db2 = new PrismaClient2();
    }

    db = global.db;
    db2 = global.db2;
}

export { db, db2 };