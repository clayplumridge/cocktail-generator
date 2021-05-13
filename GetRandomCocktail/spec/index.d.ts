export interface Attributes {
    acidity?: number;
    sweetness?: number;
}

export interface Cocktail {
    attributes: Attributes;
    ingredients: Ingredient[];
}

export interface Measure {
    amount: number;
    ingredient: Ingredient;
}

export const enum IngredientType {
    BaseSpirit = "BaseSpirit",
    Sour = "Sour",
    Sweet = "Sweet",
    Modifier = "Modifier",
    Bitter = "Bitter",
    Garnish = "Garnish"
}

export interface Ingredient {
    modifiers: Attributes;
    name: string;
    type: IngredientType;
    unit: string;
}
