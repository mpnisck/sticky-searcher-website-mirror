import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";

import { db } from "./firebase";

async function getHistoryIdMapByDB(userId) {
  const historyIdMap = new Map();

  const groupIds = [];

  const groupsRef = collection(db, "users", userId, "groups");
  const groupsQuerySnapshot = await getDocs(groupsRef);
  groupsQuerySnapshot.forEach((groupDoc) => {
    groupIds.push(groupDoc.id);
  });

  for (const groupId of groupIds) {
    const historiesRef = collection(
      db,
      "users",
      userId,
      "groups",
      groupId,
      "histories"
    );

    const historiesQuerySnapshot = await getDocs(historiesRef);
    historiesQuerySnapshot.forEach((historyDoc) => {
      historyIdMap.set(historyDoc.id, groupId);
    });
  }

  return historyIdMap;
}

export async function updateGroupsAndHistoriesAfterDragAndDrop(
  userId,
  updatedHistoryGroups
) {
  const originHistoryIdMap = await getHistoryIdMapByDB(userId);

  for (let i = 0; i < updatedHistoryGroups.length; i += 1) {
    const updatedGroup = updatedHistoryGroups[i];
    const updatedGroupId = updatedGroup.id;
    const historiesByUpdatedGroup = updatedGroup.histories;

    const historiesRef = collection(
      db,
      "users",
      userId,
      "groups",
      updatedGroupId,
      "histories"
    );

    for (const history of historiesByUpdatedGroup) {
      const historyId = history.id;

      const historyDocRef = doc(
        db,
        "users",
        userId,
        "groups",
        updatedGroupId,
        "histories",
        historyId
      );
      const historyDocSnap = await getDoc(historyDocRef);

      if (!historyDocSnap.exists()) {
        const originGroupId = originHistoryIdMap.get(historyId);
        const originHistoryDocRef = doc(
          db,
          "users",
          userId,
          "groups",
          originGroupId,
          "histories",
          historyId
        );

        const originHistoryDocSnap = await getDoc(originHistoryDocRef);
        const originHistoryData = originHistoryDocSnap.data();

        await deleteDoc(originHistoryDocRef);

        await setDoc(doc(historiesRef, historyId), originHistoryData);
      }
    }
  }
}
