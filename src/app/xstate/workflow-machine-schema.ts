import { StateMachine } from 'xstate';
import { WorkflowContext } from './workflow-machine-context';
import { WorkflowEvent } from './workflow-machine-events';

export interface WorkflowSchema {
  states: {
    init: {};
    data_arrived: {};
    ready_for_bizua: {};
    showing_peroot_shtarot: {};
    submit_sign: {};
    additional_data_arrived: {};
    ready_for_print: {};
    end: {};
  };
}

export type WorkflowStateMachine = StateMachine<
  WorkflowContext,
  WorkflowSchema,
  WorkflowEvent>;
