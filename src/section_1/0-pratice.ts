export const emails: Set<string> = new Set();
// Option 2:
//const emails: Set<string> = new Set();

// Option 3:
//const emails = new Set("");

emails.add("test@gtest.com");
emails.add("blabla@BlaBlaBla.org");

emails.add(true);
emails.add({ id: "jfsdlfjlksdjfdl" });
