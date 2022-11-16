export class ReducerRegistry {
    private emitChange: any;
    private reducers: any;
    constructor() {
      this.emitChange = null;
      this.reducers = {};
    }
  
    getReducers() {
      return { ...this.reducers };
    }
  
    register() {
      if (this.emitChange) {
        this.emitChange(this.getReducers());
      }
    }
  
    save(name: string, reducer: any ) {
      this.reducers = { ...this.reducers, [name]: reducer };
    }
  
    setChangeListener(listener: any) {
      this.emitChange = listener;
    }
  }
  
  export default new ReducerRegistry();