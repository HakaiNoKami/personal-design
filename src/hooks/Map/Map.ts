import type { Dispatch, SetStateAction } from "react";
import { useCallback, useMemo, useState } from "react";

type MapType<A, B> = [key: A, value: B];

export interface MapActionProps<A, B> {
  set: Dispatch<SetStateAction<Map<A, B> | undefined>>;
  add: (key: A, value: B) => Promise<Map<A, B> | undefined>;
  edit: (key: A, value: B) => Promise<Map<A, B> | undefined>;
  remove: (key: A) => Promise<Map<A, B> | undefined>;
  clear: () => void;
}

export const useMap = <A extends any, B extends any>(
  initialValue?: MapType<A, B>[]
) => {
  const [map, setMap] = useState(
    initialValue ? new Map<A, B>(initialValue) : undefined
  );

  const add = useCallback(async (key: A, value: B) => {
    let result: Map<A, B> | undefined;
    await setMap((currentMap) => {
      let current = new Map(currentMap);
      current?.set(key, value);
      return (result = current);
    });
    return result;
  }, []);

  const remove = useCallback(async (key: A) => {
    let result: Map<A, B> | undefined;
    await setMap((currentMap) => {
      let current = new Map(currentMap);
      current?.delete(key);
      return (result = current);
    });
    return result;
  }, []);

  const clear = useCallback(() => setMap(new Map()), []);

  const actions = useMemo(
    () => ({ set: setMap, add, edit: add.bind({}), remove, clear }),
    [add, remove, clear]
  );

  return [map, actions] as const;
};
