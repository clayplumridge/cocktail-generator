export interface Attributes {
    acidity?: number;
    sweetness?: number;
}

export interface Cocktail {
    attributes: Attributes;
    ingredients: Measure[];
}

export interface Measure {
    amount: number;
    ingredient: Ingredient;
}

export const enum IngredientType {
    BaseSpirit = "BaseSpirit",
    Bitter = "Bitter",
    Garnish = "Garnish",
    Modifier = "Modifier",
    Sour = "Sour",
    Sweet = "Sweet"
}

export const enum IngredientUnit {
    Ounce = "oz",
    Quantity = "quantity"
}

export interface Ingredient {
    modifiers: Attributes;
    name: string;
    id: string;
    type: IngredientType;
    unit: string;
}
