import { Comercio } from "~/models/comercio_model";
import { Database } from "~/models/database.types";
export const useSupabaseDatasource = () => {
  const client = useSupabaseClient<Database>();

  const getAllData = async (
    start: number,
    end: number,
    search: string
  ) => {
    try {
      const { data } = await client
        .from("comerciosdb")
        .select("*")
        .range(start, end)
        .ilike("razon_social", `%${search}%`);
      return data as Comercio[];
    } catch (error) {
      console.log(error);
    }
  };

  const countAllData = async (search: string) => {
    try {
      const { count } = await client
        .from("comerciosdb")
        .select("id", { count: "exact", head: true })
        .ilike("razon_social", `%${search}%`);
      return count as number;
    } catch (error) {
      console.log(error);
    }
  };

  const getDataComercios = async (
    start: number,
    end: number,
    search: string,
    order?: string
  ) => {
    try {
      const newClient = client
        .from("comerciosdb")
        .select("*")
        .range(start, end)
        .ilike("razon_social", `%${search}%`)

      const { data } =  order
          ? await newClient.is("visible", true).order(order, { ascending: true })
          : await newClient.is("visible", true)
      return data as Comercio[];
    } catch (error) {
      console.log(error);
    }
  };

  const countDataComercios = async (search: string) => {
    try {
      const { count } = await client
        .from("comerciosdb")
        .select("id", { count: "exact", head: true })
        .is("visible", true)
        .ilike("razon_social", `%${search}%`);
      return count as number;
    } catch (error) {
      console.log(error);
    }
  };

  const getDataComercioByEmail = async (email: string) => {
    try {
      const { data } = await client
        .from("comerciosdb")
        .select("*")
        .eq("email", email)
        .single();
      return data as Comercio;
    } catch (error) {
      console.log(error);
    }
  };

  const saveDataComercio = async (comercio: Comercio) => {
    try {
      const { data } = await client
        .from("comerciosdb")
        .upsert(comercio, { ignoreDuplicates: false });
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteDataComercio = async (id: number) => {
    try {
      const { error } = await client.from("comerciosdb").delete().eq("id", id);
      return error;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    client,
    getDataComercios,
    countDataComercios,
    getDataComercioByEmail,
    saveDataComercio,
    deleteDataComercio,
    getAllData,
    countAllData

  };
};
