class User {
    userName!: string;
    password!: string;
    pfpUrl!: string;
}

type Water = "saltwater" | "freshwater";

class Fish {
    id!: number;
    name!: string;
    water!: Water;
    colors!: string[];
    length!: number;
    imageUrl!: string;
    price!: number;
}

export { User, Fish };
export type { Water };
