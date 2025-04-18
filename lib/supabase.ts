import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.PROJECT_URL || ""
const supabaseKey = process.env.API_KEY || ""

export const supabase = createClient(supabaseUrl, supabaseKey)

export type Volunteer = {
  id: string
  created_at: string
  name: string
  email: string
  phone: string
  address: string
  experience: string
  availability: string
  motivation: string
  status: "pending" | "approved" | "rejected"
}

export type Donation = {
  id: string
  created_at: string
  name: string
  email: string
  amount: number
  message?: string
  anonymous: boolean
}

export type Achievement = {
  id: string
  created_at: string
  title: string
  description: string
  date: string
  image_url?: string
}
