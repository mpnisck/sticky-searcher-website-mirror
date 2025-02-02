import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

import { db } from "./firebase";

export async function addEmptyGroup(userId, groupName) {
  const groupsRef = collection(db, "users", userId, "groups");

  const groupDocRef = await addDoc(groupsRef, {
    name: groupName,
  });

  return groupDocRef.id;
}

export async function updateGroupName(userId, groupId, newName) {
  if (groupId === "default") {
    throw Error("default group은 이름을 변경할 수 없습니다.");
  }

  const groupDocRef = doc(db, "users", userId, "groups", groupId);

  await updateDoc(groupDocRef, {
    name: newName,
  });
}

export async function deleteGroup(userId, groupId) {
  if (groupId === "default") {
    throw Error("default group은 삭제할 수 없습니다.");
  }

  const historyIds = [];

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
    historyIds.push(historyDoc.id);
  });

  for (const historyId of historyIds) {
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

  const GroupDocRef = doc(db, "users", userId, "groups", groupId);

  await deleteDoc(GroupDocRef);
}
