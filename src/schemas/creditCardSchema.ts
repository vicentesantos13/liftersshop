import { z } from "zod";

const years = Array.from({ length: 11 }, (_, i) => (2024 + i).toString());

export const creditCardSchema = z.object({
    cardNumber: z.string().min(15, "Card number must be 15 or 16 digits").max(16, "Card number must be 15 or 16 digits"),
    cardName: z.string().refine(
        (value) => value.trim().split(" ").length >= 2 && value.trim().split(" ")[0].length >= 3,
        { message: "Card name must include first and last name, each at least 3 characters long" }
    ),
    expiryMonth: z.enum([
        "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"
    ], { message: "Invalid month" }),
    expiryYear: z.enum(years as [string, ...string[]], { message: "Invalid year" }),
    cvv: z.string().min(3, "Cvv must be 3 or 4 digits").max(4, "Cvv must be 3 or 4 digits"),

});
