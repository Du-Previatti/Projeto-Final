import * as z from "zod";
export const loginFormSchema = z.object({
    email: z.string().email('Digite um email válido'),
    password: z.string().min(4, 'A senha deve ter no mínimo 4 caracteres'),
});
export const AdminLoginFormSchema = z.object({
    email: z.string().email('Digite um email válido'),
    password: z.string().min(4, 'A Senha deve ter no mínimo 4 caracteres'),
    isAdmin: z.boolean().optional(),
});
