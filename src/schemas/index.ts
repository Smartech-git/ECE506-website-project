import parsePhoneNumber from "libphonenumber-js";
const numeral = require("numeral");

import * as z from "zod";

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

export const updateStoreSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Name must be at least 3 characters.",
    })
    .max(100, { message: "Name should not exceed 100 characters." })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Name should only contain alphabetic characters.",
    }),
  description: z
    .string()
    .min(10, {
      message: "Your business description must be at least 10 characters.",
    })
    .max(300, { message: "Name should not exceed 300 characters." }),
  openingDays: z.string().min(1, {
    message: "Add opening days",
  }),
  zone: z.string().min(1, {
    message: "Add zone",
  }),
  openingHour: z.string().min(1, {
    message: "Add opening hour",
  }),
  closingHour: z.string().min(1, {
    message: "Add closing hour",
  }),
});

const MAX_FILE_SIZE = 3 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png", , "image/svg+xml", "image/gif"];

export const createStoreFormSchema = z.object({
  photo: z
    .instanceof(File, { message: "Add a photo" })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "File size should be 2 MB or less",
    })
    .refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), {
      message: "Only JPEG, and PNG files are allowed",
    }),
  name: z
    .string()
    .min(3, {
      message: "Name must be at least 3 characters.",
    })
    .max(100, { message: "Name should not exceed 100 characters." })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Name should only contain alphabetic characters.",
    }),

  email: z
    .string()
    .email({
      message: "Please enter a valid email address.",
    })
    .max(255, { message: "Name should not exceed 100 characters." }),
  description: z
    .string()
    .min(10, {
      message: "Your business description must be at least 10 characters.",
    })
    .max(300, { message: "Name should not exceed 300 characters." }),
  openingDays: z.string().min(1, {
    message: "Add opening days",
  }),
  zone: z.string().min(1, {
    message: "Add zone",
  }),
  openingHour: z.string().min(1, {
    message: "Add opening hour",
  }),
  closingHour: z.string().min(1, {
    message: "Add closing hour",
  }),
});

export const createProductFormSchema = z.object({
  photo: z
    .instanceof(File, { message: "Add a photo" })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "File size should be 2 MB or less",
    })
    .refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), {
      message: "Only JPEG, SVGs, GIFs and PNG files are allowed",
    }),
  name: z
    .string()
    .min(3, {
      message: "Name must be at least 3 characters.",
    })
    .max(100, { message: "Name should not exceed 100 characters." })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Name should only contain alphabetic characters.",
    }),

  description: z.string().min(10, {
    message: "Your business description must be at least 10 characters.",
  }),
  category: z.string().min(1, {
    message: "Select category",
  }),
  cookingTime: z.string().min(1, {
    message: "Add cooking time",
  }),
  price: z.preprocess((value) => {
    const parsedValue = numeral(value).value();
    return !isNaN(parsedValue) && value !== "" ? parsedValue : undefined;
  }, z.number().positive({ message: "Add a price" })),
  consuptionTime: z.string().min(1, {
    message: "Select category",
  }),
});

export const createNewPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter.",
      })
      .regex(/\d/, { message: "Password must contain at least one number." })
      .regex(/[^A-Za-z0-9]/, {
        message: "Password must contain at least one special character.",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const loginFormSchema = z.object({
  email: z
    .string()
    .email({
      message: "Please enter a valid email address.",
    })
    .max(35, { message: "Your name cannot be longer than 35 characters." }),
  password: z.string().min(6, "Password must be at least 6 characters long").nonempty("Password is required"),
});

export const resetPasswordSchema = z.object({
  email: z
    .string()
    .email({
      message: "Please enter a valid email address.",
    })
    .max(35, { message: "Your name cannot be longer than 35 characters." }),
});

export const registrationFormSchema = z.object({
  firstname: z
    .string()
    .min(3, { message: "Your name must be at least 3 characters." })
    .max(35, { message: "Your name cannot be longer than 35 characters." })
    .regex(/^[A-Za-z\s]+$/, {
      message: "Your name must contain only letters.",
    }),
  lastname: z
    .string()
    .min(3, { message: "Your name must be at least 3 characters." })
    .max(35, { message: "Your name cannot be longer than 35 characters." })
    .regex(/^[A-Za-z\s]+$/, {
      message: "Your name must contain only letters.",
    }),
  email: z
    .string()
    .email({
      message: "Please enter a valid email address.",
    })
    .max(35, { message: "Your name cannot be longer than 35 characters." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter.",
    })
    .regex(/\d/, { message: "Password must contain at least one number." })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password must contain at least one special character.",
    }),
});

export const productExtrasFormSchema = z.object({
  options: z.array(
    z.object({
      image: z
        .union([
          z
            .instanceof(File)
            .refine((file) => file.size <= MAX_FILE_SIZE, {
              message: "File size should be 2 MB or less",
            })
            .refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), {
              message: "Only JPEG, SVGs, GIFs, and PNG files are allowed",
            }),
          z.literal("safe"),
        ])
        .nullable() // Allow null or undefined
        .refine((value) => value !== null && value !== undefined, {
          message: "Add a photo",
        }),
      name: z.string().min(3, {
        message: "Name must be at least 3 characters.",
      }),
      price: z.preprocess((value) => {
        const parsedValue = numeral(value).value();
        return !isNaN(parsedValue) && value !== "" ? parsedValue : undefined;
      }, z.number().positive({ message: "Add a price" })),
    })
  ),
});

export const WithdrawalFormSchema = z.object({
  amount: z.preprocess((value) => {
    const parsedValue = numeral(value).value();
    return !isNaN(parsedValue) && value !== "" ? parsedValue : undefined;
  }, z.number().min(50, { message: "Minimum amount is ₦50" }).positive({ message: "Add a price" })),
  bank: z.string().min(1, {
    message: "Select bank",
  }),
});
