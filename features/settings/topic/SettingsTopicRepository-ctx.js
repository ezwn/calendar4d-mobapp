import { generateRandomTextId } from "shared/generateRandomTextId";
import crudRepositoryContextFactory from "ezwn-react-native-persist-common/crudRepositoryContextFactory";

const createNew = () => ({ id: generateRandomTextId(16), name: "" });

const crudRepository = crudRepositoryContextFactory(
  "/user/topic/mine",
  createNew,
  true
);

const { CrudRepositoryProvider, useCrudRepository } = crudRepository;

export const SettingsTopicRepositoryProvider = CrudRepositoryProvider;
export const useSettingsTopicRepository = useCrudRepository;
