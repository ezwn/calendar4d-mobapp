import { generateRandomTextId } from "shared/generateRandomTextId";
import crudRepositoryContextFactory from "ezwn-react-native-generic-crud-feature/crudRepositoryContextFactory";

const createNew = () => ({ id: generateRandomTextId(16), name: "" });

const crudRepository = crudRepositoryContextFactory("/admin/topic", createNew);

const { CrudRepositoryProvider, useCrudRepository } = crudRepository;

export const TopicCrudRepositoryProvider = CrudRepositoryProvider;
export const useTopicCrudRepository = useCrudRepository;
