import contractsData from '../../data/contracts.json';

export class Contract {
    constructor(
        public readonly id: string
    ) {}

    public static loadContracts(): Record<string, Contract> {
        const contracts: Record<string, Contract> = {};
        for (const [key, value] of Object.entries(contractsData)) {
            contracts[key] = new Contract(
                value.id
            );
        }
        return contracts;
    }
}

export type Contracts = {
    [K in keyof typeof contractsData]: Contract;
};

export const Contracts = Contract.loadContracts() as Contracts;