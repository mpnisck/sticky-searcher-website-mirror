import { addDoc, collection, doc, updateDoc } from "firebase/firestore";

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
