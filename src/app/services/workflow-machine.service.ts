import { Injectable } from '@angular/core';
import { InterpretedService, XstateAngular } from 'xstate-angular';
import { workflowMachine } from '../xstate/workflow-machine-config';
import { WorkflowContext } from '../xstate/workflow-machine-context';
import { WorkflowEvent } from '../xstate/workflow-machine-events';
import { WorkflowSchema, WorkflowStateMachine } from '../xstate/workflow-machine-schema';

@Injectable({
  providedIn: 'root'
})
export class WorkflowMachineService {

  machine: WorkflowStateMachine;
  service: InterpretedService<WorkflowContext, WorkflowSchema, WorkflowEvent>;

  constructor(
    private readonly xstateAngular: XstateAngular<WorkflowContext, WorkflowSchema, WorkflowEvent>) {

    this.machine = workflowMachine;
    this.service = this.xstateAngular.useMachine(this.machine, {
      guards: {
        is_general_info: (context, event) => true,
        is_not_general_info: (context, event) => false,
      },
      services: {
        // invokeUpdateAnswer: async (context: QuizContext, event: SubmitAnswerEvent): Promise<QuizContext> => {
        //   const isCorrect = await correctAnswer.isAnswerCorrect(
        //     event.question,
        //     event.answerIndex).toPromise();
        //   return updateAnswerCorrect(
        //     context,
        //     event.answerIndex,
        //     isCorrect);
        // },
      }
    });
  }
}
