function solution(record) {
  const idNicknameMap = {};
  const resultRecord = [];

  for (let r of record) {
    const [action, id, nickname] = r.split(' ');
    if (action === "Enter" || action === "Change") idNicknameMap[id] = nickname;
    if (action !== "Change") resultRecord.push([action, id]);
  }

  return resultRecord.map(([action ,id]) => {
    const nickname = idNicknameMap[id];
    switch(action) {
      case "Enter":
        return `${nickname}님이 들어왔습니다.`  
      case "Leave":
        return `${nickname}님이 나갔습니다.`
    }
  });
}