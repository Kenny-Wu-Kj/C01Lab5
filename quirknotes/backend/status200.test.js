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
    // Code here
    const title = "NoteTitleTest1";
    const content = "NoteTitleContent1";

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
    // Code here
    const title = "NoteTitleTest2";
    const content = "NoteTitleContent2";

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

    const deleteNoteRes = await fetch(`${SERVER_URL}/deleteNote/${postNoteBody.insertedId}`, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        },
    });

    const deleteNoteBody = await deleteNoteRes.json();
    expect(deleteNoteRes.status).toBe(200);
    expect(deleteNoteBody.response).toBe(`Document with ID ${postNoteBody.insertedId} deleted.`);
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