"""Generate PNG and ICO favicon fallbacks from the brand palette."""

from pathlib import Path

from PIL import Image, ImageDraw

PUBLIC = Path(__file__).resolve().parent.parent / "public"

BG = (30, 27, 75, 255)
NODES = [
    ((12, 14), 1.8, (255, 255, 255, 255)),
    ((20, 14), 1.8, (255, 255, 255, 255)),
    ((16, 19), 1.8, (255, 255, 255, 255)),
    ((13, 22), 1.3, (233, 213, 255, 255)),
    ((19, 22), 1.3, (233, 213, 255, 255)),
]
LINES = [((12, 14), (16, 19)), ((20, 14), (16, 19)), ((16, 19), (13, 22)), ((16, 19), (19, 22))]
LINE_COLOR = (221, 214, 254, 255)


def draw_icon(size: int) -> Image.Image:
    scale = size / 32
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    draw.rounded_rectangle([0, 0, size - 1, size - 1], radius=max(1, int(7 * scale)), fill=BG)

    for (x, y), radius, color in NODES:
        cx, cy = x * scale, y * scale
        r = radius * scale
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=color)

    width = max(1, int(scale))
    for (x1, y1), (x2, y2) in LINES:
        draw.line([x1 * scale, y1 * scale, x2 * scale, y2 * scale], fill=LINE_COLOR, width=width)

    return img


def main() -> None:
    img16 = draw_icon(16)
    img32 = draw_icon(32)
    img180 = draw_icon(180)

    img16.save(PUBLIC / "favicon-16x16.png")
    img32.save(PUBLIC / "favicon-32x32.png")
    img180.save(PUBLIC / "apple-touch-icon.png")
    img32.save(PUBLIC / "favicon.ico", format="ICO", sizes=[(32, 32), (16, 16)], append_images=[img16])


if __name__ == "__main__":
    main()
