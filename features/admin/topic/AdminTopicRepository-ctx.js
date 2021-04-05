import { generateRandomTextId } from "shared/generateRandomTextId";
import crudRepositoryContextFactory from "ezwn-react-native-persist-common/crudRepositoryContextFactory";

const createNew = () => ({ id: generateRandomTextId(16), name: "" });

const crudRepository = crudRepositoryContextFactory("/admin/topic", createNew);

const { CrudRepositoryProvider, useCrudRepository } = crudRepository;

export const AdminTopicRepositoryProvider = CrudRepositoryProvider;
export const useAdminTopicRepository = useCrudRepository;
