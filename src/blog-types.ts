import { z } from "zod";

const postResourceSchemaErrors ={
  invalid_type_error: 'postResourceSchema',
  required_error: 'postResourceSchema'
}

export const postResourceSchema = z.object({
  id: z.string(postResourceSchemaErrors),
  title: z.string(postResourceSchemaErrors),
  content: z.string(postResourceSchemaErrors).optional(),
}, postResourceSchemaErrors);

export type PostResource = z.infer<typeof postResourceSchema>

const postSchemaErrors ={
  invalid_type_error: 'postSchema',
  required_error: 'postSchema'
}

export const postSchema = z.object({
  id: z.string(postSchemaErrors),
  title: z.string(postSchemaErrors),
  content: z.string(postSchemaErrors),
}, postSchemaErrors);

export type Post = z.infer<typeof postSchema>