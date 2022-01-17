import { firebase, FieldValue } from "../lib/firebase";

export async function doesUsernameExists(useername) {
    const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', useername)
    .get();

    return result.docs.map((usere) => usere.data().length > 0);
}