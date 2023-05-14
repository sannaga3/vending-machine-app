export type UserType = {
  id: number;
  name: string;
};

export class User implements UserType {
  constructor(public id: number, public name: string) {}
}
