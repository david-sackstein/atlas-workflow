
export class SayemKlita {
  readonly type = 'SAYEM_KLITA';
  constructor() {
  }
}

export class AmlatHafkada {
  readonly type = 'AMLAT_HAFKADA';
}

export class LastSubmit {
  readonly type = 'LAST_SUBMIT';
}

export class PirutShtarotCompleted {
  readonly type = 'PERUT_SHTAROT_COMPLETED';
}

export class Cancel {
  readonly type = 'CANCEL';
}

export class Correction {
  readonly type = 'CORRECTION';
}

export class Commit {
  readonly type = 'COMMIT';
}

export class ShowComplete {
  readonly type = 'SHOW_COMPLETE';
}

export class DoComplete {
  readonly type = 'DO_COMPLETE';
}

export class PrintComplete {
  readonly type = 'PRINT_COMPLETE';
}

export type WorkflowEvent =
  SayemKlita |
  AmlatHafkada |
  LastSubmit |
  PirutShtarotCompleted |
  Cancel |
  Correction |
  Commit |
  ShowComplete |
  DoComplete |
  PrintComplete;
