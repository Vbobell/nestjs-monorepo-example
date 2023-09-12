interface UserConstructor {
  id?: number;
  name: string;
}

export class User {
  id?: number;
  name: string;

  constructor(params: UserConstructor) {
    this.name = params.name;

    if (params.id) {
      this.id = params.id;
    }
  }
}
