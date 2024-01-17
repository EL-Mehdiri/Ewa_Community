
import { z } from "zod";

export const IdeaSchema = z.object({
    title: z
        .string({
            required_error: " Title is required",
            invalid_type_error:
                "your title must be  made mostly of  alphabetical characters",
        })
        .min(8, { message: "your title must contain at least 8 characters" })
        .max(100, { message: "yout title exceded 100 charachters" }),

    content: z
        .string({
            required_error: " Content is required",
            invalid_type_error:
                "your content must be  made mostly of  alphabetical characters",
        })
        .min(20, { message: "your title must contain at least 50 characters" }),
});
export const NewsSchema = z.object({
    title: z
        .string({
            required_error: " Title is required",
            invalid_type_error:
                "your title must be  made mostly of  alphabetical characters",
        })
        .min(8, { message: "your title must contain at least 8 characters" })
        .max(100, { message: "yout title exceded 100 charachters" }),
    userId: z.string(),
    content: z
        .string({
            required_error: " Content is required",
            invalid_type_error:
                "your content must be  made mostly of  alphabetical characters",
        })
        .min(50, { message: "your description must contain at least 50 characters" }),
});
export const UserSchema = z.object({
    username: z
        .string()
        .min(4)
        .max(10)
        .regex(
            new RegExp(/^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/),
            "Name should contain only alphabets"
        ),
    email: z
        .string({
            required_error: "Email is required",
            invalid_type_error: "email is mean to be 'exemple@exemple.com",
        })
        .email({ message: "your email is not valid" })
        .min(10, { message: "the email should be at least 10 characters" })
        .regex(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*")),

    password: z
        .string({
            message:
                "your password should at least have an uppercase and a lowercase character and a number",
        })
        .min(8, {
            message:
                "the password must be at least 8 characters with an uppercase character and a number",
        })
        .max(20, {
            message: "the password should not be greater than 20 charachters",
        })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),
});
export const userInput = z.object({
    title: z
        .string({
            required_error: " Title is required",
            invalid_type_error:
                "your title must be  made mostly of  alphabetical characters",
        })
        .min(8, { message: "your title must contain at least 8 characters" })
        .max(100, { message: "yout title exceded 100 charachters" }),

    content: z
        .string({
            required_error: " Content is required",
            invalid_type_error:
                "your content must be  made mostly of  alphabetical characters",
        })
        .min(50, { message: "your title must contain at least 50 characters" }),
    link: z.string().url({ message: "your link is not valid" }),
});
