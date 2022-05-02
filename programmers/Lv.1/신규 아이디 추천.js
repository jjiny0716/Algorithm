function solution(new_id) {
  let id = (
    new_id
      .toLowerCase()
      .replace(/[^a-z0-9-_.]/g, "")
      .replace(/[.]{2,}/g, ".")
      .replace(/^\./, "")
      .replace(/\.$/, "") || "a"
  )
    .slice(0, 15)
    .replace(/\.$/, "");

  if (id.length < 3) id += id[id.length - 1].repeat(3 - id.length);

  return id;
}

const id = 	"z-+.^.";
console.log(solution(id));
