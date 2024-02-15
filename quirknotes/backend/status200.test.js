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

//Mock the service function to return 2 notes
jest.mock(`${SERVER_URL}/getAllNotes`, () => ({
    getAllNotes: jest.fn().mockResolvedValue([
      { id: 1, title: 'Note 1', content: 'Content 1' },
      { id: 2, title: 'Note 2', content: 'Content 2' },
    ]),
  }));
  
test("/getAllNotes - Return list of two notes for getAllNotes", async () => {
    
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