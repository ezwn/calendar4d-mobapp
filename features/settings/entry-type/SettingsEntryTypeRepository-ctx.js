import { generateRandomTextId } from "shared/generateRandomTextId";
import crudRepositoryContextFactory from "ezwn-react-native-persist-common/crudRepositoryContextFactory";

const createNew = (currentUser) => ({
  id: generateRandomTextId(16),
  name: "",
  calendarUser: currentUser.userName
});

const crudRepository = crudRepositoryContextFactory(
  "/user/entry-type/mine",
  createNew,
  true
);

const { CrudRepositoryProvider, useCrudRepository } = crudRepository;

export const SettingsEntryTypeRepositoryProvider = CrudRepositoryProvider;
export const useSettingsEntryTypeRepository = useCrudRepository;
