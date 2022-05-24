interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    execute({ description, name }: IRequest): void {
        return null;
    }
}

export { CreateSpecificationService };
