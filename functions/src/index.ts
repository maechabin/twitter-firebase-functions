import * as functions from 'firebase-functions';
import * as Cors from 'cors';

const cors = Cors();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  cors(request, response, (): void => {
    response.send('Hello from Firebase!!');
  });
});
