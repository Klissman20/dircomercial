import { Comercio } from "~/models/models";
export const useSupabaseDatasource = () => {
  const client = useSupabaseClient();

  const getDataComercios = async (
    start: number,
    end: number,
    search: string
  ) => {
    try {
      const { data } = await client
        .from("comercios")
        .select("*")
        .range(start, end)
        .like("razon_social", `%${search}%`);
      return data as Comercio[];
    } catch (error) {
      console.log(error);
    }
  };

  const countDataComercios = async (search: string) => {
    try {
      const { count } = await client
        .from("comercios")
        .select("id", { count: "exact", head: true })
        .like("razon_social", `%${search}%`);
      return count as number;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    client,
    getDataComercios,
    countDataComercios,
  };
};
