import { generateRandomTextId } from "shared/generateRandomTextId";
import crudRepositoryContextFactory from "ezwn-react-native-persist-common/crudRepositoryContextFactory";

const createNew = (currentUser) => ({
  id: generateRandomTextId(16),
  name: "",
  calendarUser: currentUser.userName
});

const crudRepository = crudRepositoryContextFactory(
  "/user/topic/mine",
  createNew,
  true
);

const { CrudRepositoryProvider, useCrudRepository } = crudRepository;

export const SettingsTopicRepositoryProvider = CrudRepositoryProvider;
export const useSettingsTopicRepository = useCrudRepository;
