
class utils {
    static range = (start: number, end: number) => {
        let length = end - start + 1;
        return Array.from({ length }, (_, idx) => idx + start);
    }
}

export default utils; 