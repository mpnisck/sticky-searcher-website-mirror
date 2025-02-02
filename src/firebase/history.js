import { deleteDoc, doc } from "firebase/firestore";

import { db } from "./firebase";

export async function deleteHistory(userId, groupId, historyId) {
  const historyDocRef = doc(
    db,
    "users",
    userId,
    "groups",
    groupId,
    "histories",
    historyId
  );

  await deleteDoc(historyDocRef);
}
