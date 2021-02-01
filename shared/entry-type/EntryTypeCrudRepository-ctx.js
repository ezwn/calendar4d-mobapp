import { generateRandomTextId } from "shared/generateRandomTextId";
import crudRepositoryContextFactory from "ezwn-react-native-generic-crud-feature/crudRepositoryContextFactory";

const createNew = () => ({ "id": generateRandomTextId(16), "name": "" });

const crudRepository = crudRepositoryContextFactory("/entry-type", createNew);

const {
  CrudRepositoryProvider,
  useCrudRepository
} = crudRepository;

export const EntryTypeCrudRepositoryProvider = CrudRepositoryProvider
export const useEntryTypeCrudRepository = useCrudRepository
