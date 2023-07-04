"use client";
// import Image from "next/image";
import Image from "next/image";

export default function NextImage({ image }) {
    const { alternativeText, width, height, url } = image.data[0].attributes;

    return (
        <Image
            // className="imgimg"
            fill
            // width={width}
            // height={height}
            style={{ objectFit: "cover" }}
            src={url}
            alt={alternativeText || ""}
            placeholder="blur"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
        />

        // <img
        //     src={thumbnail.url}
        //     alt={alternativeText || ""}
        //     className="imgimg"
        // />
    );
}
