import { supabase } from "@/lib/supabase"
import type { Member } from "@/types"

export class DatabaseService {
  async getMembers(): Promise<Member[]> {
    const { data, error } = await supabase.from("members").select("*")
    if (error) throw error
    return data
  }

  async createMember(member: Omit<Member, "id" | "created_at">): Promise<Member> {
    const { data, error } = await supabase.from("members").insert(member).single()
    if (error) throw error
    return data
  }

  async updateMember(id: string, updates: Partial<Member>): Promise<Member> {
    const { data, error } = await supabase.from("members").update(updates).eq("id", id).single()
    if (error) throw error
    return data
  }

  async deleteMember(id: string): Promise<void> {
    const { error } = await supabase.from("members").delete().eq("id", id)
    if (error) throw error
  }
}

