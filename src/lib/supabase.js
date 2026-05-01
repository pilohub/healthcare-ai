import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://lxhcsoloiqnbiqjzpwcb.supabase.co"
const supabaseKey = "sb_publishable_XfKBJ6YtPAH9HB1SHw704g_w6mfU-1a"

export const supabase = createClient(supabaseUrl, supabaseKey)