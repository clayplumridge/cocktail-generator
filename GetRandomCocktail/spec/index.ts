export interface Attributes {}

export interface Cocktail {
    attributes: Attributes;
}

export interface Ingredient {
    modifiers: Attributes;
    name: string;
}
