import { collection, getDocs } from "firebase/firestore";

import { db } from "./firebase";

export async function getHistoryGroups(userId) {
  const groups = [];

  const groupsRef = collection(db, "users", userId, "groups");

  const groupsQuerySnapshot = await getDocs(groupsRef);
  groupsQuerySnapshot.forEach((groupDoc) => {
    groups.push({
      id: groupDoc.id,
      name: groupDoc.data().name,
      histories: [],
    });
  });

  for (let i = 0; i < groups.length; i += 1) {
    const groupId = groups[i].id;
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
      groups[i].histories.push({
        id: historyDoc.id,
        faviconSrc: historyDoc.data().faviconSrc,
        siteTitle: historyDoc.data().siteTitle,
        url: historyDoc.data().url,
        createdTime: historyDoc.data().createdTime,
        keywords: historyDoc.data().keywords,
      });
    });
  }

  return groups;
}
