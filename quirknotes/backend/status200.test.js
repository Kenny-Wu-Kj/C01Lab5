import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import cors from "cors";

const app = express();
const PORT = 4000;
const mongoURL = "mongodb://127.0.0.1:27017";
const dbName = "quirknotes";

// Connect to MongoDB
let db;

async function connectToMongo() {
  const client = new MongoClient(mongoURL);

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    db = client.db(dbName);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToMongo();

// Open Port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

app.use(cors());

// Collections to manage
const COLLECTIONS = {
    notes: "notes",
  };

test("1+2=3, empty array is empty", () => {
    expect(1 + 2).toBe(3);
    expect([].length).toBe(0);
  });

  const SERVER_URL = "http://localhost:4000";


// Should be tested before postNote
test("/getAllNotes - Return list of zero notes for getAllNotes", async () => {
    // Code here
    const getAllNotesRes = await fetch(`${SERVER_URL}/getAllNotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    
    const getAllNotesBody = await getAllNotesRes.json();
    
    expect(getAllNotesRes.status).toBe(200);
    expect(getAllNotesBody.response).toStrictEqual([]);
  });


test("/postNote - Post a note", async () => {
  const title = "NoteTitleTest";
  const content = "NoteTitleContent";

  const postNoteRes = await fetch(`${SERVER_URL}/postNote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      content: content,
    }),
  });

  const postNoteBody = await postNoteRes.json();

  expect(postNoteRes.status).toBe(200);
  expect(postNoteBody.response).toBe("Note added succesfully.");
});

  
  test("/getAllNotes - Return list of two notes for getAllNotes", async () => {
    //Delete All existing notes
    const collection = db.collection(COLLECTIONS.notes);
    const data = await collection.deleteMany({});

    // Code here
    const title = "NoteTitleTest1";
    const content = "NoteTitleContent1";
    const createdAt = new Date();

    // Send 2 notes to database
    const result = await collection.insertOne({
      title,
      content,
      createdAt
    });

    result = await collection.insertOne({
        title,
        content,
        createdAt
    });

    const getAllNotesRes = await fetch(`${SERVER_URL}/getAllNotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    
    const getAllNotesBody = await getAllNotesRes.json();

    expect(getAllNotesRes.status).toBe(200);
    expect(getAllNotesBody.response.length).toBe(2);
  });
  
  test("/deleteNote - Delete a note", async () => {
    //Delete All existing notes
    const collection = db.collection(COLLECTIONS.notes);
    const data = await collection.deleteMany({});

    // Code here
    const title = "NoteTitleTest2";
    const content = "NoteTitleContent2";
    const createdAt = new Date();

    // Send a note to database
    const result = await collection.insertOne({
      title,
      content,
      createdAt
    });

    // Code here
    const deleteNoteRes = await fetch(`${SERVER_URL}/deleteNote/${result.insertedId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    
    const deleteNoteBody = await deleteNoteRes.json();

    expect(deleteNoteRes.status).toBe(200);
    expect(deleteNoteBody.response).toBe(`Document with ID ${result.insertedId} deleted.`);
  });
  
  test("/patchNote - Patch with content and title", async () => {
    // Code here
    expect(false).toBe(true);
  });
  
  test("/patchNote - Patch with just title", async () => {
    // Code here
    expect(false).toBe(true);
  });
  
  test("/patchNote - Patch with just content", async () => {
    // Code here
    expect(false).toBe(true);
  });
  
  test("/deleteAllNotes - Delete one note", async () => {
    // Code here
    expect(false).toBe(true);
  });
  
  test("/deleteAllNotes - Delete three notes", async () => {
    // Code here
    expect(false).toBe(true);
  });
  
  test("/updateNoteColor - Update color of a note to red (#FF0000)", async () => {
    // Code here
    expect(false).toBe(true);
  });