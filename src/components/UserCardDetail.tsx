"use client";

import { IconMailForward, IconMapPins } from "@tabler/icons-react";

export default function UserCardDetail({ email, address }) {
  return (
    <div className="text-center">
      <p>
        <IconMailForward /> {email}
      </p>
      <p>
        <IconMapPins /> {address}
      </p>
    </div>
  );
}
