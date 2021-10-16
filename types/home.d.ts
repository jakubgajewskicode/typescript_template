export interface IProps {
  slots?: {
    slots: ISlotsArray[];
  };
  workers: {
    workers: IWorkersArray;
  };

  availableWorkers?: any;
}

export interface ISlotsArray {
  slots: ISubSlotsArray[];
}

export interface ISubSlotsArray {
  slots: {
    id: Number;
    localisedTime: String;
    price: String;
  };
}

export interface IWorkersArray {
  find: any;
}
