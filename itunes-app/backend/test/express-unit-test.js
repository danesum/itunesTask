let encodedTerm = encodeURI("taylor swift");
let searchCategory = "music";

let URL = `https://itunes.apple.com/search?term=taylor$20swift&media=music&limit=12`;

const response = await fetch(URL);
const contentType = await response.headers.get("content-type");

test("iTunes API works", () => {
  expect(contentType).toBe("application/json");
});
