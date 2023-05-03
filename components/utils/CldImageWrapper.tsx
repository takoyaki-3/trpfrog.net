'use client';

import React from "react";
import {CldImage, CldImageProps} from "next-cloudinary";
import Image, {ImageProps} from "next/image";
import cloudinaryLoader from "../../lib/blog/cloudinaryLoader";

export default function CldImageWrapper(
  props: ImageProps
) {
  return (
    <Image
      {...props}
      loader={cloudinaryLoader}
    />
  )
}