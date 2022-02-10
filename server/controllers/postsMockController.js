export const getAllPosts = (req, res, next) => {
  const postList = [];

  postList.push({
    id: 1,
    Title: 'Lol',
    Body: 'once upon a time ....',
  });

  postList.push({
    id: 2,
    Title: 'Halla',
    Body: 'once upon a lor ....',
  });

  postList.push({
    id: 3,
    Title: 'Lol',
    Body: 'once upon a time ....',
  });

  postList.push({
    id: 4,
    Title: 'Hello world',
    Body: 'some text ....',
  });

  postList.push({
    id: 5,
    Title: 'Today I made an app',
    Body: 'it was great',
  });

  res.send(postList);
};

