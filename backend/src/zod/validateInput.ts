import z from "zod"

export const Signup = z.object({
  email : z.string().email(),
  password : z.string().min(3),
  name:z.string()
})
export type SignupType = z.infer<typeof Signup>
export const Signin = z.object({
  email : z.string().email(),
  password : z.string().min(3)
})
export type SigninType = z.infer<typeof Signin>

export const Post = z.object({
  title:z.string(),
  context:z.string()
})
export const Put = z.object({
  id:z.string(),
  title:z.string(),
  context:z.string()
})
export type PostType = z.infer<typeof Post>
export type PutType = z.infer<typeof Put>