import { createClient } from '@/utils/supabase/client'

const supabase = createClient()

export async function GetUser() {
    const user = supabase.auth.getUser()
    return user
}