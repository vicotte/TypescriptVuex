import { ActionTypes as ModuleA } from './ModuleA/action-types';
import { ActionTypes as ModuleB } from './ModuleB/action-types';

export const ActionTypes = {
  ModuleA,
  ModuleB,
};

export type ActionTypes = typeof ActionTypes;
