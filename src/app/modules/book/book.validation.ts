import { z } from "zod";

const addBookZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }),
    author: z.string({
      required_error: "Author name is required",
    }),
    email: z.string({
      required_error: "Authorized email is required",
    }),
    genre: z.string({
      required_error: "Genre is required",
    }),
    publicationDate: z.string({
      required_error: "Publication Date is required",
    }),
    reviews: z
      .object({
        name: z.string(),
        email: z.string(),
        message: z.string(),
      })
      .array(),
  }),
});

export const BookValidation = {
  addBookZodSchema,
};
