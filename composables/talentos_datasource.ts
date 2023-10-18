import { Talento } from "~/models/talento_model";
import { Database } from "~/models/database.types";
export const useTalentoSBDatasource = () => {
    const client = useSupabaseClient<Database>();

    const getDataTalentos = async (
        start: number,
        end: number,
        search: string
      ) => {
        try {
          const { data } = await client
            .from("talentodb")
            .select("*")
            .range(start, end)
            .ilike("razon_social", `%${search}%`);
          return data as Talento[];
        } catch (error) {
          console.log(error);
        }
      };
    
      const countDataTalentos = async (search: string) => {
        try {
          const { count } = await client
            .from("talentodb")
            .select("id", { count: "exact", head: true })
            .ilike("razon_social", `%${search}%`);
          return count as number;
        } catch (error) {
          console.log(error);
        }
      };
    
      const getDataTalentoByEmail = async (email: string) => {
        try {
          const { data } = await client
            .from("talentodb")
            .select("*")
            .eq("email", email)
            .single();
          return data as Talento;
        } catch (error) {
          console.log(error);
        }
      };
    
      const saveDataTalento = async (talento: Talento) => {
        try {
          const { data } = await client
            .from("talentodb")
            .upsert(talento, { ignoreDuplicates: false });
          return data;
        } catch (error) {
          console.log(error);
        }
      };
    
      return {
        client,
        getDataTalentos,
        countDataTalentos,
        getDataTalentoByEmail,
        saveDataTalento
      };
}