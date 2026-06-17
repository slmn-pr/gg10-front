import z from "zod";
import { newTicketSchema } from "./schema";

export type NewTicketFormValues = z.infer<typeof newTicketSchema>;
