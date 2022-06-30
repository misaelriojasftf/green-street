export class AbstractCache {

    private key: string;

    constructor(cacheKey: string) {
        this.key = cacheKey;
    }

    public get$(): string {
        return localStorage.getItem(this.key);
    }

    public set set$(value: string) {
        localStorage.setItem(this.key, value);
    }

    public remove() {
        localStorage.removeItem(this.key);
    }
}