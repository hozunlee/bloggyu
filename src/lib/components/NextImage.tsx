"use client";
import Image from "next/image";

export default function NextImage({ image }) {
    const {
        alternativeText,
        width,
        height,
        formats: { thumbnail },
    } = image.data[0].attributes;

    return (
        <Image
            className="imgimg"
            layout="fill"
            // width={width}
            // height={height}
            objectFit="cover"
            src={thumbnail.url}
            alt={alternativeText || ""}
            // placeholder="blur"
        />

        // <img
        //     src={thumbnail.url}
        //     alt={alternativeText || ""}
        //     className="imgimg"
        // />
    );
}
