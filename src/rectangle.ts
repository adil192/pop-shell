import Mtk from 'gi://Mtk';

export function fmtRect(rect: Mtk.Rectangle): string {
    return `Mtk.Rectangle(${[rect.x, rect.y, rect.width, rect.height]})`;
}

export function clampRect(rect: Mtk.Rectangle, other: Mtk.Rectangle) {
    let [intersects, intersection] = rect.intersect(other);
    if (!intersects) return;
    rect.x = intersection.x;
    rect.y = intersection.y;
    rect.width = intersection.width;
    rect.height = intersection.height;
}

/** Adds each field together */
export function applyRect(rect: Mtk.Rectangle, other: Mtk.Rectangle) {
    rect.x += other.x;
    rect.y += other.y;
    rect.width += other.width;
    rect.height += other.height;
}

export function diffRect(rect: Mtk.Rectangle, other: Mtk.Rectangle): Mtk.Rectangle {
    return new Mtk.Rectangle({
        x: other.x - rect.x,
        y: other.y - rect.y,
        width: other.width - rect.width,
        height: other.height - rect.height,
    });
}
