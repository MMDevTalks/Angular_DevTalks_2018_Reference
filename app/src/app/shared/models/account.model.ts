export class Account {
    id: number;
    constructor(accountInput: IAccountInput) {
        if (accountInput) {
            this.id = accountInput.id;
        }
    }
}

export interface IAccountInput {
    id: number;
}
