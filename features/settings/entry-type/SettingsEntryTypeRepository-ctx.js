import { generateRandomTextId } from "shared/generateRandomTextId";
import crudRepositoryContextFactory from "ezwn-react-native-generic-crud-feature/crudRepositoryContextFactory";

const createNew = () => ({ id: generateRandomTextId(16), name: "" });

const crudRepository = crudRepositoryContextFactory(
  "/user/entry-type/mine",
  createNew,
  true
);

const { CrudRepositoryProvider, useCrudRepository } = crudRepository;

export const SettingsEntryTypeRepositoryProvider = CrudRepositoryProvider;
export const useSettingsEntryTypeRepository = useCrudRepository;
