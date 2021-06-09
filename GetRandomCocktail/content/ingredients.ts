import { Ingredient, IngredientType, IngredientUnit } from "../spec";

export const enum IngredientId {
    Gin = "gin",
    Rum = "rum",
    Vodka = "vodka"
}

export const ingredients: Ingredient[] = [
    {
        id: IngredientId.Rum,
        modifiers: {},
        name: "Rum",
        type: IngredientType.BaseSpirit,
        unit: IngredientUnit.Ounce
    }
];
