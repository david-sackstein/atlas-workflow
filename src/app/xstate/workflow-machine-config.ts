import { Machine } from 'xstate/lib/Machine';
import { WorkflowContext } from './workflow-machine-context';
import { WorkflowEvent } from './workflow-machine-events';
import { WorkflowSchema } from './workflow-machine-schema';

export const workflowMachine = Machine<WorkflowContext, WorkflowSchema, WorkflowEvent>({
  id: 'workflow',
  initial: 'init',
  context: {
    client_info: {},
  },
  states: {
    init: {
      on: {
        SAYEM_KLITA: 'data_arrived'
      }
    },
    data_arrived: {
      on: {
        AMLAT_HAFKADA: 'showing_peroot_shtarot',
        LAST_SUBMIT: [
          {
            target: 'additional_data_arrived',
            cond: 'is_general_info'
          },
          {
            target: 'ready_for_bizua',
            cond: 'is_not_general_info'
          }
        ]
      }
    },
    showing_peroot_shtarot: {
      on: {
        PERUT_SHTAROT_COMPLETED: 'data_arrived'
      }
    },
    additional_data_arrived: {
      on: {
        SHOW_COMPLETE: 'ready_for_bizua'
      }
    },
    ready_for_bizua: {
      on: {
        CANCEL: 'init',
        CORRECTION: 'data_arrived',
        COMMIT: 'submit_sign'
      }
    },
    submit_sign: {
      on: {
        DO_COMPLETE: [
          {
            cond: 'is_ready_for_print',
            target: 'ready_for_print'
          },
          {
            cond: 'no_print',
            target: 'end'
          }
        ]
      }
    },
    ready_for_print: {
      on: {
        PRINT_COMPLETE: 'end'
      }
    },
    end: {
      type: 'final'
    },
  }
});
