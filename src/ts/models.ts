class User {
    userName!: string;
    password!: string;
    pfpUrl!: string;
}

type Water = "saltwater" | "freshwater";

class Fish {
    Id!: number;
    Name!: string;
    Water!: Water;
    Colors!: string[];
    Length!: number;
    ImageUrl!: string;
    Price!: number;
}

export { User, Fish };
export type { Water };
