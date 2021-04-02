import { generateRandomTextId } from "shared/generateRandomTextId";
import crudRepositoryContextFactory from "ezwn-react-native-generic-crud-feature/crudRepositoryContextFactory";

const createNew = () => ({ id: generateRandomTextId(16), name: "" });

const crudRepository = crudRepositoryContextFactory(
  "/admin/entry-type",
  createNew
);

const { CrudRepositoryProvider, useCrudRepository } = crudRepository;

export const AdminEntryTypeRepositoryProvider = CrudRepositoryProvider;
export const useAdminEntryTypeRepository = useCrudRepository;
