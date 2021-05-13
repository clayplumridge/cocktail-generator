import { Attributes } from ".";

export function combineAttributes(...attr: Attributes[]): Attributes {
    return attr.reduce((prev, curr) => mergeAttributes(prev, curr), {});
}

function mergeAttributes(first: Attributes, second: Attributes): Attributes {
    const keys = new Set([
        ...Object.keys(first),
        ...Object.keys(second)
    ]) as Set<keyof Attributes>;
    const result: Attributes = {};

    for (const key of keys) {
        result[key] = (first[key] || 0) + (second[key] || 0);
    }

    return result;
}
