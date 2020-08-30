import { MutationTypes as ModuleA } from './ModuleA/mutation-types';
import { MutationTypes as ModuleB } from './ModuleB/mutation-types';

export const ActionTypes = {
  ModuleA,
  ModuleB,
};

export type MutationTypes = typeof ActionTypes;
