import { TestBed } from '@angular/core/testing';
import { XstateAngular } from 'xstate-angular';
import {
  AmlatHafkada,
  LastSubmit,
  PirutShtarotCompleted,
  SayemKlita,
  ShowComplete
} from '../xstate/workflow-machine-events';
import { WorkflowMachineService } from './workflow-machine.service';

describe('WorkflowMachineService', () => {

  let workflowMachineService: WorkflowMachineService;

  beforeEach(async () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;

    TestBed.configureTestingModule({ providers: [ XstateAngular ] });
    workflowMachineService = TestBed.inject(WorkflowMachineService);
  });

  it('transitions', async () => {

    const service = workflowMachineService.service;
    const currentState$ = service.state$;

    currentState$
      .subscribe((curr) => {
        console.log(`Moving to ${ curr.value }`);
      });

    service.send(new SayemKlita());
    service.send(new AmlatHafkada());
    service.send(new PirutShtarotCompleted());
    service.send(new LastSubmit());

    //   await currentState$.pipe(
    //     filter(s => s.matches(expectedState)),
    //     first(),
    //     timeout(2000))
    //     .toPromise();
  });
});
