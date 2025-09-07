// src/index.ts

export interface Item {
  id: number;
  name: string;
}

export function findById<T extends { id: number }>(arr: T[], id: number): T | undefined {
  return arr.find(x => x.id === id);
}

function main() {
  const items: Item[] = [
    { id: 1, name: "Alpha" },
    { id: 2, name: "Beta" }
  ];
  const found = findById(items, 2);
  console.log("Found item:", found);
}

if (require.main === module) {
  main();
}
