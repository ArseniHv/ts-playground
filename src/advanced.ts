// src/advanced.ts
// Examples for unions, intersections, unknown/any, narrowing

// Union & Intersection
type Success = { success: true; data: string[] };
type Failure = { success: false; error: string };
export type ApiResponse = Success | Failure; // union

type WithId = { id: number };
type WithName = { name: string };
export type Person = WithId & WithName; // intersection

// unknown vs any
export function safeParse(json: string): unknown {
  try {
    return JSON.parse(json);
  } catch {
    return undefined;
  }
}

export function unsafeParse(json: string): any {
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}

// Type narrowing examples
export function formatPadding(input: string | number): string {
  if (typeof input === "number") {
    return input.toString().padStart(5, " ");
  } else {
    return input;
  }
}

export function processEntity(e: string | Date) {
  if (e instanceof Date) {
    // narrowed to Date
    return `Date:${e.toISOString()}`;
  } else {
    // narrowed to string
    return `String:${e.toUpperCase()}`;
  }
}

// runtime-safe accessor for unknown
export function readValue(obj: unknown, key: string): unknown {
  if (typeof obj === "object" && obj !== null && key in obj) {
    // TS still sees obj as object, but not typed; we can assert
    return (obj as any)[key];
  }
  return undefined;
}
